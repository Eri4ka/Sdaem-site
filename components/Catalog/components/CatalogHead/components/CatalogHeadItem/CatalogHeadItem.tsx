import { memo } from 'react';

import MarkIc from '@public/icons/catalog/head/mark.svg';
import { ApartmentBadgesType } from '@utils/types';

import styles from './CatalogHeadItem.module.scss';

type CatalogHeadItemProps = {
  badges: ApartmentBadgesType;
  activeBadge: string;
  handleSetFilterValue: (value: string, query: ApartmentBadgesType, heading: string) => void;
};

const CatalogHeadItem: React.FC<CatalogHeadItemProps> = ({
  activeBadge,
  handleSetFilterValue,
  badges,
}) => {
  const { title, heading, ...query } = badges;
  const value = Object.values(query)[0];

  if (activeBadge === value) {
    return (
      <li
        className={`${styles.item} ${styles.item_active}`}
        onClick={() => handleSetFilterValue('', {}, '')}>
        <p className={styles.item__text}>{title}</p>
        <MarkIc />
      </li>
    );
  }

  if (!activeBadge) {
    return (
      <li className={styles.item} onClick={() => handleSetFilterValue(value, query, heading)}>
        <p className={styles.item__text}>{title}</p>
      </li>
    );
  }
  return null;
};

export default memo(CatalogHeadItem);
