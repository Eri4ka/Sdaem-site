import { memo } from 'react';

import { ITEMS_ON_PAGE } from '@utils/constants';
import { usePagination } from '@utils/hooks/usePagination';
import { useAppSelector } from '@utils/redux/reduxHooks';
import { getApartmentsView, getSorted } from '@utils/redux/selectors/apartmentsSelector';
import Pagination from '@views/Pagination';

import styles from './CatalogItems.module.scss';
import CatalogItemsList from './components/CatalogItemsList';
import CatalogItemsSocial from './components/CatalogItemsSocial';
import CatalogItemsTotal from './components/CatalogItemsTotal';

const CatalogItems: React.FC = () => {
  const items = useAppSelector(getSorted);
  const view = useAppSelector(getApartmentsView);
  const { page, setPage, totalPages, firstContentIndex, lastContentIndex } = usePagination({
    onPage: ITEMS_ON_PAGE,
    total: items.length,
  });

  return (
    <article className={styles.items}>
      <CatalogItemsTotal total={items.length} />
      <CatalogItemsList
        view={view}
        items={items}
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}
      />
      <div className={styles.items__bottom}>
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        <CatalogItemsSocial />
      </div>
    </article>
  );
};

export default memo(CatalogItems);
