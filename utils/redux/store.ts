import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';

import apartments from './slices/apartmentsSlice';
import auth from './slices/authSlice';
import cottages from './slices/cottagesSlice';
import section from './slices/sectionsSlice';
import systemInformation from './slices/systemInformationSlice';

const makeStore = () =>
  configureStore({
    reducer: { apartments, cottages, auth, section, systemInformation },
    devTools: process.env.NODE_ENV !== 'production',
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
