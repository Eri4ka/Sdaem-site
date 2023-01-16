import { ApartmentOptions } from '@utils/types';
import FilterCheckBox from '@views/Filter/FilterCheckBox';

import styles from './CatalogFilterOptions.module.scss';

type CatalogFilterOptionsProps = {
  isVisible: boolean;
  initialValues: object;
  options: ApartmentOptions[];
  children: React.ReactNode;
  handleSetValue: (field: string, value: boolean) => void;
  isReset: boolean;
};

const CatalogFilterOptions: React.FC<CatalogFilterOptionsProps> = ({
  initialValues,
  isVisible,
  options,
  children,
  handleSetValue,
  isReset,
}) => {
  const initialValuesKeys = Object.keys(initialValues);

  return (
    <div className={`${styles.options} ${isVisible ? styles.options_show : ''}`}>
      <div className={styles.options__wrapper}>{children}</div>
      <div className={styles.options__grid}>
        {options.map(({ id, title, option_name }) => {
          const initialValue = initialValuesKeys.includes(option_name);
          return (
            <FilterCheckBox
              initialValue={initialValue}
              key={id}
              field={option_name}
              label={title}
              handleSetValue={handleSetValue}
              isReset={isReset}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CatalogFilterOptions;
