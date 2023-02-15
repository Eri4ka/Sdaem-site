import { memo } from 'react';

import CheckBox from '@components/CheckBox';
import { ProductOptions } from '@mytypes/productTypes';

import { OptionFilterType } from '../../types';
import MainFilterField from '../MainFilterField';
import MainFilterSelect from '../MainFilterSelect';
import styles from './MainFilterOptions.module.scss';

type MainFilterOptionsProps = {
  isVisible: boolean;
  optionFilter: OptionFilterType[];
  options: ProductOptions[];
  handleSetValue: (field: string, value: string | number | boolean) => void;
};

const MainFilterOptions: React.FC<MainFilterOptionsProps> = ({
  isVisible,
  optionFilter,
  options,
  handleSetValue,
}) => {
  return (
    <div
      className={`${styles['filter-options']} ${isVisible ? styles['filter-options_show'] : ''}`}>
      <div className={styles['filter-options__wrapper']}>
        {optionFilter.map(({ label, name, items }, i) => (
          <MainFilterField key={`${name}${i}`} label={label}>
            <MainFilterSelect name={name} items={items} handleSetValue={handleSetValue} />
          </MainFilterField>
        ))}
      </div>
      <div className={styles['filter-options__grid']}>
        {options?.map(({ id, title, option_name }) => {
          return (
            <CheckBox key={id} field={option_name} label={title} handleSetValue={handleSetValue} />
          );
        })}
      </div>
    </div>
  );
};

export default memo(MainFilterOptions);
