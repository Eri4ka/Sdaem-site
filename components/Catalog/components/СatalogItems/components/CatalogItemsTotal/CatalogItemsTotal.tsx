import { memo } from 'react';

import styles from './CatalogItemsTotal.module.scss';

type CatalogItemsTotalProps = {
  total: number;
};

const CatalogItemsTotal: React.FC<CatalogItemsTotalProps> = ({ total }) => {
  return <p className={styles.total}>Найдено {total} результата</p>;
};

export default memo(CatalogItemsTotal);
