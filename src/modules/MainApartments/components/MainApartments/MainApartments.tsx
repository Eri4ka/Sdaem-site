import { memo } from 'react';

import MetroIc from '@icons/main/items/metro.svg';
import { useAppSelector } from '@utils/redux/reduxHooks';
import {
  getApartmentsSelector,
  getDistrictSelector,
  getMetroSelector,
} from '@utils/redux/selectors/apartmentsSelector';

import { useApartmentsFilter } from '../../hooks/useApartmentsFilter';
import ApartmentsSelect from '../ApartmentsSelect';
import ApartmentsSlider from '../ApartmentsSlider';
import ApartmentsTotal from '../ApartmentsTotal';
import styles from './MainApartments.module.scss';

const MainApartments: React.FC = () => {
  const apartmentsDistrict = useAppSelector(getDistrictSelector);
  const apartmentsMetro = useAppSelector(getMetroSelector);
  const apartments = useAppSelector(getApartmentsSelector);

  const { filteredApartments, handleSetValue } = useApartmentsFilter({ apartments });

  return (
    <article className={styles.apartments}>
      <div className={styles.apartments__top}>
        <div className={styles.apartments__heading}>
          <p className={styles['apartments__heading-section']}>КВАРТИРЫ НА СУТКИ</p>
          <h2 className={styles['apartments__heading-text']}>Аренда квартир в Минске</h2>
        </div>
        <div className={styles.apartments__filters}>
          <ApartmentsSelect
            handleSetValue={handleSetValue}
            items={apartmentsMetro}
            name='metro'
            label='Метро'
            icon={<MetroIc alt={'metro-icon'} className={styles.apartments__icon} />}
          />
          <ApartmentsSelect
            handleSetValue={handleSetValue}
            items={apartmentsDistrict}
            name='district'
            label='Район'
          />
        </div>
      </div>
      <ApartmentsSlider items={filteredApartments} />
      <ApartmentsTotal total={apartments.length} />
    </article>
  );
};

export default memo(MainApartments);
