import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { FormFieldsType } from '@mytypes/assistantTypes';
import { ApartmentsType, ViewType, SortType } from '@mytypes/productTypes';

type apartmentsState = {
  apartments: ApartmentsType[];
  filters: FormFieldsType;
  view: ViewType;
  sort: SortType;
};

const initialState: apartmentsState = {
  apartments: [],
  filters: {},
  view: 'tiles',
  sort: 'default',
};

const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    addApartments(state, action) {
      state.apartments = action.payload;
    },
    addFilters(state, action) {
      state.filters = action.payload;
    },
    changeView(state, action) {
      state.view = action.payload;
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        apartments: action.payload.apartments.apartments,
      };
    },
  },
});

const { actions, reducer } = apartmentsSlice;

export const { addApartments, addFilters, changeView, changeSort } = actions;

export default reducer;
