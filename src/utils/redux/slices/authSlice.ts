import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchLoginUser } from '@modules/SignInForm';
import { fetchCreateUser } from '@modules/SignUpForm';
import { AuthStatusType, UserType } from '@mytypes/authTypes';

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
        if (action.payload) {
          state.loginStatus = { message: action.payload as string, status: 'error' };
        } else {
          state.loginStatus = { status: 'error', message: action.error.message as string };
        }
      });
  },
});

const { actions, reducer } = authSlice;

export const { addUser, logOut } = actions;

export default reducer;
