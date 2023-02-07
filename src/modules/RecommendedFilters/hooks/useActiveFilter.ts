import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';

import { FilterBadgeType, FormFieldsType } from '@mytypes/assistantTypes';
import { useAppDispatch } from '@redux/reduxHooks';
import { addFilters } from '@redux/slices/apartmentsSlice';

type useActiveFilterProps = {
  filters: FormFieldsType;
  setActiveTitle: (title: string) => void;
};

export const useActiveFilter = ({ filters, setActiveTitle }: useActiveFilterProps) => {
  const [activeBadge, setActiveBadge] = useState('');
  const dispatch = useAppDispatch();
  const {
    push,
    query: { alias },
  } = useRouter();

  useEffect(() => {
    if (!Object.values(filters).includes(activeBadge)) {
      setActiveBadge('');
      setActiveTitle('');
    }
  }, [filters, setActiveTitle, activeBadge]);

  const onSetFilterValue = useCallback(
    (value: string, query: FilterBadgeType, heading: string) => {
      setActiveBadge(value);
      setActiveTitle(heading);
      dispatch(addFilters(query));
      push({ query: { alias, ...query } }, undefined, { shallow: true });
    },
    [dispatch, setActiveBadge, setActiveTitle, alias, push],
  );

  return { activeBadge, onSetFilterValue };
};
