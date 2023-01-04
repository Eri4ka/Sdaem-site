import { useState, useCallback, useEffect, memo } from 'react';

import MetroIc from '@public/icons/main/items/metro.svg';
import { useAppSelector } from '@utils/redux/reduxHooks';
import {
  getApartmentsSelector,
  getDistrictSelector,
  getMetroSelector,
} from '@utils/redux/selectors/apartmentsSelector';
import Select, { SelectClass } from '@views/Select';

import MainSlider from './components/MainSlider';
import MainTotal from './components/MainTotal';
import styles from './MainItems.module.scss';

type FilterType = {
  metro: string;
  district: string;
};

const MainItems: React.FC = () => {
  const apartmentsDistricts = useAppSelector(getDistrictSelector);
  const apartmentsMetro = useAppSelector(getMetroSelector);
  const apartments = useAppSelector(getApartmentsSelector);

  const [values, setValues] = useState<FilterType>({ metro: '', district: '' });
  const [filteredApartments, setFilteredApartments] = useState(apartments);

  useEffect(() => {
    let apartmentsCopy = [...apartments];

    if (values.district) {
      apartmentsCopy = apartmentsCopy.filter((item) => item.district === values.district);
    }
    if (values.metro) {
      apartmentsCopy = apartmentsCopy.filter((item) => item.metro === values.metro);
    }
    setFilteredApartments(apartmentsCopy);
  }, [values.district, values.metro, apartments]);

  const handleSetValue = useCallback((field: string, value: string | number) => {
    setValues((values) => ({
      ...values,
      [field]: value,
    }));
  }, []);

  return (
    <article className={styles.items}>
      <div className={styles.items__top}>
        <div className={styles.items__heading}>
          <p className={styles['items__heading-section']}>КВАРТИРЫ НА СУТКИ</p>
          <h2 className={styles['items__heading-text']}>Аренда квартир в Минске</h2>
        </div>
        <div className={styles.items__filters}>
          <div className={styles.items__select}>
            <Select
              className={SelectClass.slider}
              items={apartmentsMetro}
              name='metro'
              label='Метро'
              handleSetValue={handleSetValue}
              icon={<MetroIc alt={'metro-icon'} className={styles.items__icon} />}
            />
          </div>
          <div className={styles.items__select}>
            <Select
              className={SelectClass.slider}
              items={apartmentsDistricts}
              name='district'
              label='Район'
              handleSetValue={handleSetValue}
            />
          </div>
        </div>
      </div>
      <MainSlider items={filteredApartments} />
      <MainTotal total={apartments.length} />
    </article>
  );
};

export default memo(MainItems);
