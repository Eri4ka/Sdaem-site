import OptionsIc from '@public/icons/main/filter/options.svg';

import styles from './FilterOptions.module.scss';

const FilterOptions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  return (
    <div className={styles['filter-options']} {...props}>
      <span className={styles['filter-options__text']}>Больше опций</span>
      <div className={styles['filter-options__icon']}>
        <OptionsIc />
      </div>
    </div>
  );
};

export default FilterOptions;
