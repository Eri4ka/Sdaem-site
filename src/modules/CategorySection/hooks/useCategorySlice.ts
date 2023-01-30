import { useState, useMemo, useCallback } from 'react';

import { SingleSectionType } from '@mytypes/sectionTypes';

type useCategorySliceProps = {
  value: boolean;
  sliceValue: number;
  elements: SingleSectionType[];
};

export const useCategorySlice = ({ value = true, sliceValue, elements }: useCategorySliceProps) => {
  const [slice, setSlice] = useState<boolean>(value);

  const handleSlice = useCallback(() => setSlice((slice) => !slice), []);

  const sliced = useMemo(
    () => (slice ? elements.slice(0, sliceValue) : elements),
    [elements, slice, sliceValue],
  );

  return { slice, handleSlice, sliced };
};
