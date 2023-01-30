import { createSelector } from '@reduxjs/toolkit';

import { SectionType, SingleSectionType } from '@mytypes/sectionTypes';

import type { AppState } from '../store';

export const getSectionState = (state: AppState) => state.section;

export const getSectionCount = createSelector(
  (state: AppState) => state.section,
  (state: AppState) => state.apartments.apartments,
  (state: AppState) => state.cottages.cottages,
  (section, apartmentsList, cottagesList) => {
    const { apartments, cottages } = section;

    const apartmentsCount: SingleSectionType[] = apartments.map((item) => {
      const total = apartmentsList.filter((elem) => elem.section_id === item.id).length;
      return { ...item, total };
    });

    const cottagesCount: SingleSectionType[] = cottages.map((item) => {
      const total = cottagesList.filter((elem) => elem.section_id === item.id).length;
      return { ...item, total };
    });

    const sectionsCount: SectionType = {
      ...section,
      apartments: apartmentsCount,
      cottages: cottagesCount,
    };

    return sectionsCount;
  },
);
