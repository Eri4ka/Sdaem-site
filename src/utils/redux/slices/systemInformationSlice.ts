import { createSlice } from '@reduxjs/toolkit';

type SystemInformationState = {
  breakpoints: { [key: string]: boolean };
};

const initialState: SystemInformationState = {
  breakpoints: {
    isDesktopView: false,
    isDesktopMinimum: false,
    isTabletLarge: false,
    isTabletMedium: false,
    isTabletMinimum: false,
    isMobileLarge: false,
    isMobileMedium: false,
  },
};

const systemInformationSlice = createSlice({
  name: 'systemInformation',
  initialState,
  reducers: {
    changeBreakPoint(state, action) {
      state.breakpoints = action.payload;
    },
  },
});

const { actions, reducer } = systemInformationSlice;

export const { changeBreakPoint } = actions;

export default reducer;
