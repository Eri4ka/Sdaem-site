import { createSelector } from '@reduxjs/toolkit';

import { getFilteredApartmemnts } from 'utils/redux/selectors/apartmentsSelector';
import { AppState } from 'utils/redux/store';

export const getSorted = createSelector(
  getFilteredApartmemnts,
  (state: AppState) => state.apartments.sort,
  (apartments, sort) => {
    const apartmentsCopy = [...apartments];

    switch (sort) {
      case 'decrease':
        return apartmentsCopy.sort((a, b) => +a.price - +b.price);
      case 'increase':
        return apartmentsCopy.sort((a, b) => +b.price - +a.price);
      default:
        return apartmentsCopy;
    }
  },
);
