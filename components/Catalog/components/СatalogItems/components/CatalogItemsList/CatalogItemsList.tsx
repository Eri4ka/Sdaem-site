import { memo } from 'react';

import { ApartmentsType, ViewType } from '@utils/types';
import Card from '@views/Card';

import styles from './CatalogItemsList.module.scss';

type CatalogItemsListProps = {
  view: ViewType;
  items: ApartmentsType[];
  firstContentIndex: number;
  lastContentIndex: number;
};

const CatalogItemsList: React.FC<CatalogItemsListProps> = ({
  view,
  items,
  firstContentIndex,
  lastContentIndex,
}) => {
  return (
    <ul className={`list ${styles.list} ${view === 'list' ? styles.list_wide : styles.list_short}`}>
      {items.slice(firstContentIndex, lastContentIndex).map((item) => (
        <Card key={item.id} item={item} catalog short={view === 'tiles'} />
      ))}
    </ul>
  );
};

export default memo(CatalogItemsList);
