import { createSelector } from '@reduxjs/toolkit';

import { ApartmentOptions } from '@utils/types';

import type { AppState } from '../store';

export const getOptionsSelector = createSelector(
  (state: AppState) => state.apartments.apartments,
  (apartments) => {
    const allOptions: ApartmentOptions[] = [];
    apartments.map((item) => item.options.map((item) => allOptions.push(item)));

    const uniqueKeys: number[] = [];
    const unique = allOptions.filter(({ id }) => {
      const isDuplicate = uniqueKeys.includes(id);
      uniqueKeys.push(id);

      return !isDuplicate;
    });
    return unique;
  },
);

export const getRoomsSelector = createSelector(
  (state: AppState) => state.apartments.apartments,
  (apartments) => {
    const allRooms = apartments.map(({ rooms }, i) => {
      return { id: i + 1, title: rooms.count };
    });

    const uniqueVals: string[] = [];
    const unique = allRooms.filter(({ title }) => {
      const isDuplicate = uniqueVals.includes(title);
      uniqueVals.push(title);

      return !isDuplicate;
    });
    return unique;
  },
);

export const getRoomsTypeSelector = createSelector(
  (state: AppState) => state.apartments.apartments,
  (apartments) => {
    const allRoomsType = apartments.map(({ rooms }, i) => {
      return { id: i + 1, title: rooms.type };
    });

    const uniqueVals: string[] = [];
    const unique = allRoomsType.filter(({ title }) => {
      const isDuplicate = uniqueVals.includes(title);
      uniqueVals.push(title);

      return !isDuplicate;
    });
    return unique;
  },
);

export const getDistrictSelector = createSelector(
  (state: AppState) => state.apartments.apartments,
  (apartments) => {
    const allDistricts = apartments.map(({ district }, i) => {
      return { id: i + 1, title: district };
    });

    const uniqueVals: string[] = [];
    const unique = allDistricts.filter(({ title }) => {
      const isDuplicate = uniqueVals.includes(title);
      uniqueVals.push(title);

      return !isDuplicate;
    });
    return unique;
  },
);

export const getMetroSelector = createSelector(
  (state: AppState) => state.apartments.apartments,
  (apartments) => {
    const allMetro = apartments.map(({ metro }, i) => {
      return { id: i + 1, title: metro };
    });

    const uniqueVals: string[] = [];
    const unique = allMetro.filter(({ title }) => {
      const isDuplicate = uniqueVals.includes(title);
      uniqueVals.push(title);

      return !isDuplicate;
    });
    return unique;
  },
);
