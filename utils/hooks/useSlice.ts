import { useState, useMemo, useCallback } from 'react';

type useSliceProps = {
  value: boolean;
  sliceValue: number;
  elements: any[];
};

export const useSlice = ({ value = true, sliceValue, elements }: useSliceProps) => {
  const [slice, setSlice] = useState<boolean>(value);

  const handleSlice = useCallback(() => setSlice((slice) => !slice), []);

  const sliced = useMemo(
    () => (slice ? elements.slice(0, sliceValue) : elements),
    [elements, slice, sliceValue],
  );

  return { slice, handleSlice, sliced };
};
