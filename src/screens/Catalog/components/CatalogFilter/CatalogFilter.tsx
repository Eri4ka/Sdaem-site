import CatalogForm from '@modules/CatalogForm';

import styles from './CatalogFilter.module.scss';

const CatalogFilter = () => {
  return (
    <article className={styles.filter}>
      <CatalogForm />
    </article>
  );
};

export default CatalogFilter;
