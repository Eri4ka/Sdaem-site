import { createAsyncThunk } from '@reduxjs/toolkit';

import { SectionType } from '@mytypes/sectionTypes';
import { API_URL } from '@utils/constants';

export const fetchSections = createAsyncThunk('sections/fetchSections', async () => {
  const request = await fetch(`${API_URL}/api/sections`);
  const data = await request.json();

  return data as SectionType;
});
