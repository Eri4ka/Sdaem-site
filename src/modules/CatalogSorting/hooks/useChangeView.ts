import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@redux/reduxHooks';
import { getTabletMinimum } from '@redux/selectors/systemInfromationSelectors';
import { changeView } from '@redux/slices/apartmentsSlice';

export const useChangeView = () => {
  const isTabletMinimum = useAppSelector(getTabletMinimum);
  const dispatch = useAppDispatch();

  const onChangeView = (type: string) => dispatch(changeView(type));

  useEffect(() => {
    if (isTabletMinimum) {
      dispatch(changeView('tiles'));
    }
  }, [dispatch, isTabletMinimum]);

  return { onChangeView };
};
