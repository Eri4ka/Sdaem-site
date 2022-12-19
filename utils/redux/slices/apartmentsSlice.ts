import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { API_URL } from '@utils/constants';
import { ApartmentsType, SectionType } from '@utils/types';

type apartmentsState = {
  apartments: ApartmentsType[];
};

const initialState: apartmentsState = {
  apartments: [],
};

const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    addApartments(state, action) {
      state.apartments = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.apartments,
      };
    },
  },
});

const { actions, reducer } = apartmentsSlice;

export const { addApartments } = actions;

export default reducer;
