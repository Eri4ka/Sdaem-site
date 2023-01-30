import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SectionType } from '@mytypes/sectionTypes';

import { fetchSections } from './thunks';

const initialState: SectionType = {
  apartments: [],
  cottages: [],
  baths: [],
  automobile: [],
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSections.fulfilled, (state, action: PayloadAction<SectionType>) => {
      state.apartments = action.payload.apartments;
      state.cottages = action.payload.cottages;
    });
  },
});

const { reducer } = sectionsSlice;

export default reducer;
