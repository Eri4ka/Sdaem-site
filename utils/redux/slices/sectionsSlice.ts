import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { API_URL } from '@utils/constants';
import { SectionType } from '@utils/types';

const initialState: SectionType = {
  apartments: [],
  cottages: [],
  baths: [],
  automobile: [],
};

export const fetchSections = createAsyncThunk('sections/fetchSections', async () => {
  const request = await fetch(`${API_URL}/api/sections`);
  const data = await request.json();

  return data as SectionType;
});

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSections.fulfilled, (state, action: PayloadAction<SectionType>) => {
      state.apartments = action.payload.apartments;
    });
  },
});

const { reducer } = sectionsSlice;

export default reducer;
