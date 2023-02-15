import { createAsyncThunk } from '@reduxjs/toolkit';

import { SiginInValues, UserType } from '@mytypes/authTypes';
import { auth, signInWithEmailAndPassword } from '@utils/firebase';

export const fetchLoginUser = createAsyncThunk(
  'auth/fetchLoginUser',
  async (data: SiginInValues, { rejectWithValue }) => {
    const { login, password } = data;

    const request = await signInWithEmailAndPassword(auth, login, password)
      .then(({ user }) => {
        const { uid, email, displayName, photoURL } = user;
        const currentUser: UserType = {
          id: uid,
          email,
          login: displayName,
          photoURL,
        };
        return currentUser;
      })
      .catch((e) => {
        throw rejectWithValue(e.code);
      });
    return request;
  },
);
