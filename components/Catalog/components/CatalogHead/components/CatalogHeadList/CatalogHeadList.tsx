import { useState, memo, useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@utils/redux/reduxHooks';
import {
  getBadgesValueSelector,
  getFiltersSelector,
} from '@utils/redux/selectors/apartmentsSelector';
import { addFilters } from '@utils/redux/slices/apartmentsSlice';
import { ApartmentBadgesType } from '@utils/types';

import CatalogHeadItem from '../CatalogHeadItem';
import styles from './CatalogHeadList.module.scss';

type CatalogHeadListProps = {
  setActiveTitle: (title: string) => void;
};

const CatalogHeadList: React.FC<CatalogHeadListProps> = ({ setActiveTitle }) => {
  const [activeBadge, setActiveBadge] = useState('');
  const badges = useAppSelector(getBadgesValueSelector);
  const filters = useAppSelector(getFiltersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Object.values(filters).includes(activeBadge)) {
      setActiveBadge('');
      setActiveTitle('');
    }
  }, [filters, setActiveTitle, activeBadge]);

  const handleSetFilterValue = useCallback(
    (value: string, query: ApartmentBadgesType, heading: string) => {
      setActiveBadge(value);
      setActiveTitle(heading);
      dispatch(addFilters(query));
    },
    [dispatch, setActiveBadge, setActiveTitle],
  );

  return (
    <div className={styles.recommended}>
      <p className={styles.recommended__title}>Рекомендуем посмотреть</p>
      <ul className={`list ${styles.recommended__list}`}>
        {badges?.map(({ id, ...item }) => (
          <CatalogHeadItem
            key={id}
            badges={item}
            activeBadge={activeBadge}
            handleSetFilterValue={handleSetFilterValue}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(CatalogHeadList);
