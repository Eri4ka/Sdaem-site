import { memo } from 'react';

import SortIc from '@public/icons/catalog/sorting/sort.svg';
import { useAppDispatch } from '@utils/redux/reduxHooks';
import { changeSort } from '@utils/redux/slices/apartmentsSlice';
import MapButton, { MapButtonClass } from '@views/Buttons/MapButton';
import Select, { SelectClass } from '@views/Select';

import styles from './CatalogSorting.module.scss';
import CatalogSortingView from './components/CatalogSortingView';

const sortingValues = [
  { id: 1, title: 'По умолчанию' },
  { id: 2, title: 'Сначала дешевле' },
  { id: 3, title: 'Сначала дороже' },
];

const CatalogSorting: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSetValue = (text: string, value: string) => {
    switch (value) {
      case 'По умолчанию':
        dispatch(changeSort('default'));
        break;
      case 'Сначала дешевле':
        dispatch(changeSort('decrease'));
        break;
      case 'Сначала дороже':
        dispatch(changeSort('increase'));
        break;
      default:
        dispatch(changeSort('default'));
        break;
    }
  };

  return (
    <article className={styles.sorting}>
      <div className={styles.sorting__select}>
        <Select
          className={SelectClass.sorting}
          items={sortingValues}
          label='По умолчанию'
          handleSetValue={handleSetValue}
          name='sortBy'
          icon={<SortIc className={styles.sorting__icon} />}
        />
      </div>
      <div className={styles.sorting__aside}>
        <div className={styles.sorting__views}>
          <CatalogSortingView type='list' />
          <CatalogSortingView type='tiles' />
        </div>
        <div className={styles.sorting__map}>
          <MapButton className={MapButtonClass.blue}>Показать на карте</MapButton>
        </div>
      </div>
    </article>
  );
};

export default memo(CatalogSorting);
