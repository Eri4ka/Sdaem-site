import { createSelector } from '@reduxjs/toolkit';

import { ApartmentOptions, ApartmentBadgesType } from '@utils/types';

import type { AppState } from '../store';

export const getApartmentsSelector = (state: AppState) => state.apartments.apartments;

export const getFiltersSelector = (state: AppState) => state.apartments.filters;

export const getApartmentsView = (state: AppState) => state.apartments.view;

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

export const getFilteredApartmemnts = createSelector(
  (state: AppState) => state.apartments.apartments,
  (state: AppState) => state.apartments.filters,
  (apartments, filters) => {
    let apartmentsCopy = [...apartments];

    if (filters.rooms) {
      apartmentsCopy = apartmentsCopy.filter((item) => item.rooms.count === filters.rooms);
    }
    if (filters.roomsType) {
      apartmentsCopy = apartmentsCopy.filter((item) => item.rooms.type === filters.roomsType);
    }
    if (filters.district) {
      apartmentsCopy = apartmentsCopy.filter((item) => item.district === filters.district);
    }
    if (filters.metro) {
      apartmentsCopy = apartmentsCopy.filter((item) => item.metro === filters.metro);
    }
    if (filters.priceFrom) {
      apartmentsCopy = apartmentsCopy.filter((item) => +item.price >= +filters.priceFrom);
    }
    if (filters.priceTo) {
      apartmentsCopy = apartmentsCopy.filter((item) => +item.price <= +filters.priceTo);
    }
    if (filters.gas) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'gas'),
      );
    }
    if (filters.oven) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'oven'),
      );
    }
    if (filters.coffee) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'coffee'),
      );
    }
    if (filters.microwave) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'microwave'),
      );
    }
    if (filters.dishes) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'dishes'),
      );
    }
    if (filters.dishwasher) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'dishwasher'),
      );
    }
    if (filters.tv) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'tv'),
      );
    }
    if (filters.wifi) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'wifi'),
      );
    }
    if (filters.teapot) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'teapot'),
      );
    }
    if (filters.balcony) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'balcony'),
      );
    }
    if (filters.concierge) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'concierge'),
      );
    }
    if (filters.security) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'security'),
      );
    }
    if (filters.bath) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'bath'),
      );
    }
    if (filters.electric_stove) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'electric_stove'),
      );
    }
    if (filters.shower) {
      apartmentsCopy = apartmentsCopy.filter((item) =>
        item.options.find((option) => option.option_name === 'shower'),
      );
    }
    return apartmentsCopy;
  },
);

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

export const getBadgesValueSelector = createSelector(
  getRoomsSelector,
  getDistrictSelector,
  (rooms, districts) => {
    const badges: ApartmentBadgesType[] = [];

    const badge = {
      id: '10-Недорогие',
      title: 'Недорогие',
      heading: `Аренда недорогих квартир на сутки в`,
      priceTo: '50',
    };
    badges.push(badge);

    rooms.forEach(({ id, title }) => {
      const badge = {
        id: `${id}-${title}`,
        title: `${title.slice(0, 1)}-комнатные`,
        heading: `Аренда ${title.slice(0, 1)}-комнатных квартир на сутки в`,
        rooms: title,
      };
      badges.push(badge);
    });

    districts.forEach(({ id, title }) => {
      const badge = {
        id: `${id}-${title}`,
        title: `${title} р.`,
        heading: `Аренда квартир в районе ${title} на сутки в`,
        district: title,
      };
      badges.push(badge);
    });

    return badges;
  },
);
