import { memo, useState } from 'react';

import { useAppSelector } from '@utils/redux/reduxHooks';
import {
  getDistrictSelector,
  getRoomsSelector,
  getRoomsTypeSelector,
  getMetroSelector,
  getOptionsSelector,
} from '@utils/redux/selectors/apartmentsSelector';
import { SectionType } from '@utils/types';

import MainTabList from './components/MainTabList';
import MainTabPanel from './components/MainTabPanel';
import styles from './MainTab.module.scss';

type MainTabProps = {
  sections: SectionType;
};

const MainTab: React.FC<MainTabProps> = ({ sections }) => {
  const [activeTab, setActiveTab] = useState<string>('apartment');
  const apartmentsRooms = useAppSelector(getRoomsSelector);
  const apartmentsTypeRooms = useAppSelector(getRoomsTypeSelector);
  const apartmentsDistricts = useAppSelector(getDistrictSelector);
  const apartmentsMetro = useAppSelector(getMetroSelector);
  const apartmentsOptions = useAppSelector(getOptionsSelector);

  const { apartments, cottages, baths, automobile } = sections;

  return (
    <div className={styles['main-tab']}>
      <ul className={`list ${styles['main-tab__tabs']}`}>
        <MainTabList
          title='Квартиры на сутки'
          id='apartment'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <MainTabList
          title='Коттеджы и усадьбы'
          id='cottage'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <MainTabList
          title='Бани и сауны'
          id='bath'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <MainTabPanel
        city={apartments}
        rooms={apartmentsRooms}
        roomsType={apartmentsTypeRooms}
        districts={apartmentsDistricts}
        metro={apartmentsMetro}
        options={apartmentsOptions}
        id='apartment'
        activeTab={activeTab}
      />
      {/* <MainTabPanel city={cottages} id='cottage' activeTab={activeTab} />
      <MainTabPanel city={baths} id='bath' activeTab={activeTab} /> */}
    </div>
  );
};

export default memo(MainTab);
