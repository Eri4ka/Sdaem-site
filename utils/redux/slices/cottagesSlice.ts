import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { CottagesType } from '@utils/types';

type cottagesState = {
  cottages: CottagesType[];
};

const initialState: cottagesState = {
  cottages: [],
};

const cottagesSlice = createSlice({
  name: 'cottages',
  initialState,
  reducers: {
    addCottages(state, action) {
      state.cottages = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cottages,
      };
    },
  },
});

const { actions, reducer } = cottagesSlice;

export const { addCottages } = actions;

export default reducer;
