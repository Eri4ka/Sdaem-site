import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { fetchLoginUser } from '@modules/SignInForm';
import { fetchCreateUser } from '@modules/SignUpForm';
import { AuthStatusType, UserType } from '@mytypes/authTypes';
import { auth, onAuthStateChanged, signOut } from '@utils/firebase';

import { AppThunk } from '../store';

type AuthState = {
  user: UserType | null;
  registerStatus: AuthStatusType;
  loginStatus: AuthStatusType;
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateUser.pending, (state) => {
        state.registerStatus = { ...state.registerStatus, status: 'loading' };
      })
      .addCase(fetchCreateUser.fulfilled, (state) => {
        state.registerStatus = { ...state.registerStatus, status: 'success' };
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        if (action.payload) {
          state.registerStatus = { message: action.payload as string, status: 'error' };
        } else {
          state.registerStatus = { status: 'error', message: action.error.message as string };
        }
      })
      .addCase(fetchLoginUser.pending, (state) => {
        state.loginStatus = { ...state.loginStatus, status: 'loading' };
      })
      .addCase(fetchLoginUser.fulfilled, (state, action: PayloadAction<UserType>) => {
        state.user = action.payload;
        state.loginStatus = { ...state.loginStatus, status: 'idle' };
      })
      .addCase(fetchLoginUser.rejected, (state, action) => {
        console.log(action);
        if (action.payload) {
          state.loginStatus = { message: action.payload as string, status: 'error' };
        } else {
          state.loginStatus = { status: 'error', message: action.error.message as string };
        }
      });
  },
  // extraReducers: {
  //   [fetchCreateUser.pending.toString()]: (state) => {
  //     return {
  //       ...state,
  //       registerStatus: { ...state.registerStatus, status: 'loading' },
  //     };
  //   },
  //   [fetchCreateUser.fulfilled.toString()]: (state) => {
  //     return {
  //       ...state,
  //       registerStatus: { ...state.registerStatus, status: 'success' },
  //     };
  //   },
  //   [fetchCreateUser.rejected.toString()]: (state, action) => {
  //     if (action.payload) {
  //       return {
  //         ...state,
  //         registerStatus: { status: 'error', message: action.payload },
  //       };
  //     } else {
  //       return {
  //         ...state,
  //         registerStatus: { status: 'error', message: action.error.message },
  //       };
  //     }
  //   },
  //   [fetchLoginUser.pending.toString()]: (state) => {
  //     return {
  //       ...state,
  //       loginStatus: { ...state.loginStatus, status: 'loading' },
  //     };
  //   },
  //   [fetchLoginUser.fulfilled.toString()]: (state, action: PayloadAction<UserType>) => {
  //     return {
  //       ...state,
  //       user: action.payload,
  //       loginStatus: { ...state.loginStatus, status: 'idle' },
  //     };
  //   },
  //   [fetchLoginUser.rejected.toString()]: (state, action) => {
  //     if (action.payload) {
  //       return {
  //         ...state,
  //         loginStatus: { status: 'error', message: action.payload },
  //       };
  //     } else {
  //       return {
  //         ...state,
  //         loginStatus: { status: 'error', message: action.error.message },
  //       };
  //     }
  //   },
  // },
});

const { actions, reducer } = authSlice;

export const { addUser, logOut } = actions;

export default reducer;
