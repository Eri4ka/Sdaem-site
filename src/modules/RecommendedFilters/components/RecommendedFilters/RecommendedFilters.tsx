import { memo } from 'react';

import FilterBadge from '@components/FilterBadge';
import { useAppSelector } from '@utils/redux/reduxHooks';
import {
  getBadgesValueSelector,
  getFiltersSelector,
} from '@utils/redux/selectors/apartmentsSelector';

import { useActiveFilter } from '../../hooks/useActiveFilter';
import styles from './RecommendedFilters.module.scss';

type RecommendedFiltersProps = {
  setActiveTitle: (title: string) => void;
};

const RecommendedFilters: React.FC<RecommendedFiltersProps> = ({ setActiveTitle }) => {
  const badges = useAppSelector(getBadgesValueSelector);
  const filters = useAppSelector(getFiltersSelector);
  const { activeBadge, onSetFilterValue } = useActiveFilter({ filters, setActiveTitle });

  return (
    <div className={styles.recommended}>
      <p className={styles.recommended__title}>Рекомендуем посмотреть</p>
      <ul className={`list ${styles.recommended__list}`}>
        {badges?.map(({ id, ...item }) => (
          <FilterBadge
            key={id}
            badges={item}
            activeBadge={activeBadge}
            onSetFilterValue={onSetFilterValue}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(RecommendedFilters);
