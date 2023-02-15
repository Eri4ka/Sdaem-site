import { useCallback, useEffect, useState } from 'react';

import { ApartmentsType } from '@mytypes/productTypes';

type useApartmentsFilterType = {
  apartments: ApartmentsType[];
};

type FilterType = {
  metro: string;
  district: string;
};

export const useApartmentsFilter = ({ apartments }: useApartmentsFilterType) => {
  const [values, setValues] = useState<FilterType>({ metro: '', district: '' });
  const [filteredApartments, setFilteredApartments] = useState(apartments);

  useEffect(() => {
    let apartmentsCopy = [...apartments];

    if (values.district) {
      apartmentsCopy = apartmentsCopy.filter((item) => item.district === values.district);
    }
    if (values.metro) {
      apartmentsCopy = apartmentsCopy.filter((item) => item.metro === values.metro);
    }

    setFilteredApartments(apartmentsCopy);
  }, [values.district, values.metro, apartments]);

  const handleSetValue = useCallback((field: string, value: string) => {
    setValues((values) => ({
      ...values,
      [field]: value,
    }));
  }, []);

  return { filteredApartments, handleSetValue };
};
