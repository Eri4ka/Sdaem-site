import { createAsyncThunk } from '@reduxjs/toolkit';

import { SiginUpValues, UserType } from '@mytypes/authTypes';
import { addUser } from '@redux/slices/authSlice';
import {
  auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from '@utils/firebase';

import { captchaApi } from '../api/captchaApi';
import { USER_PHOTO } from '../constants';

export const fetchCreateUser = createAsyncThunk(
  'auth/fetchCreateUser',
  async (data: SiginUpValues, { dispatch, rejectWithValue }) => {
    const { email, login, password } = data;

    await captchaApi(data).then(() =>
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          updateProfile(user, {
            displayName: login,
            photoURL: USER_PHOTO,
          }).then(() =>
            sendEmailVerification(user).then(() => {
              const newUser: UserType = {
                id: user.uid,
                email: user.email,
                login,
                photoURL: user.photoURL,
              };
              dispatch(addUser(newUser));
            }),
          );
        })
        .catch((e) => {
          throw rejectWithValue(e.code);
        }),
    );
  },
);
