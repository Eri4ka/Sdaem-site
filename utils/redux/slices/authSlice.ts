import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { USER_PHOTO } from '@utils/constants';
import {
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendEmailVerification,
} from '@utils/firebase';
import { SiginInValues, SiginUpValues, StatusType } from '@utils/types';

import { captchaApi } from '../api';
import { AppThunk } from '../store';

type UserType = {
  id: string;
  login: string | undefined | null;
  email: string | undefined | null;
  password?: string;
  photoURL: string | null;
};

type AuthState = {
  user: UserType | null;
  registerStatus: StatusType;
  loginStatus: StatusType;
};

const initialState: AuthState = {
  user: null,
  registerStatus: { status: 'idle', message: '' },
  loginStatus: { status: 'idle', message: '' },
};

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

export const fetchSignOut = createAsyncThunk('auth/fetchSignOut', async (_args, { dispatch }) => {
  await signOut(auth)
    .then(() => dispatch(logOut()))
    .catch((e) => {
      throw new Error(e);
    });
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
    },
    logOut: () => initialState,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
    [fetchCreateUser.pending.toString()]: (state) => {
      return {
        ...state,
        registerStatus: { ...state.registerStatus, status: 'loading' },
      };
    },
    [fetchCreateUser.fulfilled.toString()]: (state) => {
      return {
        ...state,
        registerStatus: { ...state.registerStatus, status: 'success' },
      };
    },
    [fetchCreateUser.rejected.toString()]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          registerStatus: { status: 'error', message: action.payload },
        };
      } else {
        return {
          ...state,
          registerStatus: { status: 'error', message: action.error.message },
        };
      }
    },
    [fetchLoginUser.pending.toString()]: (state) => {
      return {
        ...state,
        loginStatus: { ...state.loginStatus, status: 'loading' },
      };
    },
    [fetchLoginUser.fulfilled.toString()]: (state, action: PayloadAction<UserType>) => {
      return {
        ...state,
        user: action.payload,
        loginStatus: { ...state.loginStatus, status: 'idle' },
      };
    },
    [fetchLoginUser.rejected.toString()]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          loginStatus: { status: 'error', message: action.payload },
        };
      } else {
        return {
          ...state,
          loginStatus: { status: 'error', message: action.error.message },
        };
      }
    },
  },
});

const { actions, reducer } = authSlice;

export const { addUser, logOut } = actions;

export default reducer;
