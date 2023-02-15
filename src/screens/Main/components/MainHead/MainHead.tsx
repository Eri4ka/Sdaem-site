import { memo } from 'react';

import MainFilter from '@modules/MainFilter';
import Tab from '@modules/Tab';
import { SectionType } from '@mytypes/sectionTypes';
import { useAppSelector } from '@redux/reduxHooks';
import {
  getDistrictSelector,
  getMetroSelector,
  getOptionsSelector,
  getRoomsSelector,
  getRoomsTypeSelector,
} from '@redux/selectors/apartmentsSelector';

import styles from './MainHead.module.scss';

type MainHeadProps = {
  sections: SectionType;
};

const tabs = [
  {
    id: 'apartments',
    title: 'Квартиры на сутки',
  },
  {
    id: 'cottages',
    title: 'Коттеджы и усадьбы',
  },
  {
    id: 'baths',
    title: 'Бани и сауны',
  },
  {
    id: 'automobile',
    title: 'Авто напрокат',
  },
];

const MainHead: React.FC<MainHeadProps> = ({ sections }) => {
  const { apartments } = sections;
  const apartmentsRooms = useAppSelector(getRoomsSelector);
  const apartmentsTypeRooms = useAppSelector(getRoomsTypeSelector);
  const apartmentsDistrict = useAppSelector(getDistrictSelector);
  const apartmentsMetro = useAppSelector(getMetroSelector);
  const apartmentsOptions = useAppSelector(getOptionsSelector);

  const filters = [
    {
      id: 'apartments',
      city: {
        label: 'Город',
        name: 'city',
        items: apartments,
      },
      secondFilter: {
        label: 'Комнаты',
        name: 'rooms',
        items: apartmentsRooms,
      },
      optionFilter: [
        {
          label: 'Спальные места',
          name: 'roomsType',
          items: apartmentsTypeRooms,
        },
        {
          label: 'Район',
          name: 'district',
          items: apartmentsDistrict,
        },
        {
          label: 'Метро',
          name: 'metro',
          items: apartmentsMetro,
        },
      ],
      options: apartmentsOptions,
    },
  ];
  return (
    <article className={styles.head}>
      <div className={styles.head__content}>
        <h1 className={styles.head__title}>
          Sdaem.by - у нас живут <span className={styles.head__text}>ваши объявления</span>
        </h1>
        <Tab tabs={tabs} initialTab='apartments'>
          {filters.map(({ id, city, secondFilter, optionFilter, options }, i) => (
            <MainFilter
              key={`${id}${i}`}
              city={city}
              secondFilter={secondFilter}
              optionFilter={optionFilter}
              options={options}
            />
          ))}
        </Tab>
      </div>
    </article>
  );
};

export default memo(MainHead);
