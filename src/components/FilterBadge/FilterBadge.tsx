import { memo } from 'react';

import MarkIc from '@icons/catalog/head/mark.svg';
import { FilterBadgeType } from '@mytypes/assistantTypes';

import styles from './FilterBadge.module.scss';

type FilterBadgeProps = {
  badges: FilterBadgeType;
  activeBadge: string;
  onSetFilterValue: (value: string, query: FilterBadgeType, heading: string) => void;
};

const FilterBadge: React.FC<FilterBadgeProps> = ({ activeBadge, onSetFilterValue, badges }) => {
  const { title, heading, ...query } = badges;
  const value = Object.values(query)[0];

  const handeRemoveFilterValue = () => onSetFilterValue('', {}, '');

  const handeSetFilterValue = () => onSetFilterValue(value, query, heading);

  if (activeBadge === value) {
    return (
      <li
        className={`${styles['filter-badge']} ${styles['filter-badge_active']}`}
        onClick={handeRemoveFilterValue}>
        <p className={styles['filter-badge__text']}>{title}</p>
        <MarkIc />
      </li>
    );
  }

  if (!activeBadge) {
    return (
      <li className={styles['filter-badge']} onClick={handeSetFilterValue}>
        <p className={styles['filter-badge__text']}>{title}</p>
      </li>
    );
  }
  return null;
};

export default memo(FilterBadge);
