import Link from 'next/link';
import { memo } from 'react';

import MapIc from '@icons/main/filter/map.svg';
import Button, { ButtonClass } from '@views/Button';
import FilterOptions from '@views/FilterOptions';

import { CityFilterType, OptionFilterType } from '../../types';
import MainFilterField from '../MainFilterField';
import MainFilterPrice from '../MainFilterPrice';
import MainFilterSelect from '../MainFilterSelect';
import styles from './MainFilterWrapper.module.scss';

type MainFilterWrapperProps = {
  city: CityFilterType;
  secondFilter: OptionFilterType;
  handleToggle: () => void;
  handleSetValue: (field: string, value: string | number | boolean) => void;
  isDisabled: boolean;
};

const MainFilterWrapper: React.FC<MainFilterWrapperProps> = ({
  city,
  secondFilter,
  handleToggle,
  handleSetValue,
  isDisabled,
}) => {
  return (
    <div className={styles.filter__wrapper}>
      <div className={styles.filter__main}>
        <MainFilterField label={city.label}>
          <MainFilterSelect name={city.name} items={city.items} handleSetValue={handleSetValue} />
        </MainFilterField>
        <MainFilterField label={secondFilter.label}>
          <MainFilterSelect
            name={secondFilter.name}
            items={secondFilter.items}
            handleSetValue={handleSetValue}
          />
        </MainFilterField>
        <MainFilterField label='Цена за сутки (BYN)'>
          <MainFilterPrice handleSetValue={handleSetValue} />
        </MainFilterField>
        <MainFilterField>
          <FilterOptions onClick={handleToggle} />
        </MainFilterField>
      </div>
      <div className={styles.filter__display}>
        <Link href={'/map'} className={styles.filter__map}>
          <span className={styles['filter__map-text']}>На карте</span>
          <div className={styles['filter__map-icon']}>
            <MapIc />
          </div>
        </Link>
        <div className={styles.filter__button}>
          <Button type='submit' className={ButtonClass.show} disabled={isDisabled}>
            Показать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(MainFilterWrapper);
