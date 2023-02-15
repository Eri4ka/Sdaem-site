import SortIc from '@icons/catalog/sorting/sort.svg';
import Select, { SelectClass } from '@views/Select';

import { useSelectSort } from '../../hooks/useSelectSort';
import styles from './CatalogSortingSelect.module.scss';

const sortingValues = [
  { id: 1, title: 'По умолчанию' },
  { id: 2, title: 'Сначала дешевле' },
  { id: 3, title: 'Сначала дороже' },
];

const CatalogSortingSelect: React.FC = () => {
  const { selectValue, handleSelect } = useSelectSort();

  return (
    <div className={styles.sorting__select}>
      <Select
        className={SelectClass.sorting}
        items={sortingValues}
        label='По умолчанию'
        selectedValue={selectValue}
        handleSelect={handleSelect}
        icon={<SortIc className={styles.sorting__icon} />}
      />
    </div>
  );
};

export default CatalogSortingSelect;
