import type { AppState } from '../store';

export const getAuthState = (state: AppState) => state.auth;
