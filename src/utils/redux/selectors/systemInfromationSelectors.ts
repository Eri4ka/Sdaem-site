import type { AppState } from '../store';

export const getTabletLarge = (state: AppState) =>
  state.systemInformation.breakpoints.isTabletLarge;

export const getTabletMedium = (state: AppState) =>
  state.systemInformation.breakpoints.isTabletMedium;

export const getTabletMinimum = (state: AppState) =>
  state.systemInformation.breakpoints.isTabletMinimum;

export const getMobileLarge = (state: AppState) =>
  state.systemInformation.breakpoints.isMobileLarge;

export const getMobileMedium = (state: AppState) =>
  state.systemInformation.breakpoints.isMobileMedium;

export const getDesktopView = (state: AppState) =>
  state.systemInformation.breakpoints.isDesktopView;

export const getDesktopMinimum = (state: AppState) =>
  state.systemInformation.breakpoints.isDesktopMinimum;
