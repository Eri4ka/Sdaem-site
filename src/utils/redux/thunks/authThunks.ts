import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserType } from '@mytypes/authTypes';
import { auth, onAuthStateChanged, signOut } from '@utils/firebase';

import { addUser, logOut } from '../slices/authSlice';
import { AppThunk } from '../store';

export const fetchUser = (): AppThunk => async (dispatch) => {
  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      const { uid, email, displayName, photoURL } = userAuth;
      const user: UserType = {
        id: uid,
        email,
        login: displayName,
        photoURL,
      };
      dispatch(addUser(user));
    }
  });
};

export const fetchSignOut = createAsyncThunk('auth/fetchSignOut', async (_args, { dispatch }) => {
  await signOut(auth)
    .then(() => dispatch(logOut()))
    .catch((e) => {
      throw new Error(e);
    });
});
