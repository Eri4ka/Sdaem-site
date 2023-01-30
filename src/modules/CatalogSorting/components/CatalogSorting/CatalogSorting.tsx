import CatalogSortingMap from '../CatalogSortingMap';
import CatalogSortingSelect from '../CatalogSortingSelect';
import CatalogSortingViews from '../CatalogSortingViews';
import styles from './CatalogSorting.module.scss';

const CatalogSorting: React.FC = () => {
  return (
    <article className={styles.sorting}>
      <CatalogSortingSelect />
      <div className={styles.sorting__aside}>
        <CatalogSortingViews />
        <CatalogSortingMap />
      </div>
    </article>
  );
};

export default CatalogSorting;
