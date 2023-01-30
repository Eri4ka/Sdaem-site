import Pagination from '@components/Pagination';
import { usePagination } from 'utils/hooks/usePagination';
import { useAppSelector } from 'utils/redux/reduxHooks';

import { PRODUCTS_ON_PAGE } from '../../constants';
import { getSorted } from '../../redux/selectors';
import CatalogProductsList from '../CatalogProductsList';
import CatalogProductsSocial from '../CatalogProductsSocial';
import CatalogProductsTotal from '../CatalogProductsTotal';
import styles from './CatalogProducts.module.scss';

const CatalogProducts: React.FC = () => {
  const items = useAppSelector(getSorted);
  const { page, setPage, totalPages, firstContentIndex, lastContentIndex } = usePagination({
    onPage: PRODUCTS_ON_PAGE,
    total: items.length,
  });

  return (
    <article className={styles.products}>
      <CatalogProductsTotal total={items.length} />
      <CatalogProductsList
        items={items}
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}
      />
      <div className={styles.products__bottom}>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        <CatalogProductsSocial />
      </div>
    </article>
  );
};

export default CatalogProducts;
