import { memo } from 'react';

import styles from './CatalogProductsTotal.module.scss';

type CatalogProductsTotalProps = {
  total: number;
};

const CatalogProductsTotal: React.FC<CatalogProductsTotalProps> = ({ total }) => {
  return <p className={styles.total}>Найдено {total} результата</p>;
};

export default memo(CatalogProductsTotal);
