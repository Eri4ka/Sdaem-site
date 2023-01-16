import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';

import MapIc from '@public/icons/main/filter/map.svg';
import { useFilter } from '@utils/hooks/useFilter';
import { useToggle } from '@utils/hooks/useToggle';
import { SelectType, ApartmentOptions, SingleSectionType } from '@utils/types';
import Button, { ButtonClass } from '@views/Buttons/Button';
import FilterOptions from '@views/Filter/FilterOptions';
import Select, { SelectClass } from '@views/Select';

import MainTabField from '../MainTabField';
import MainTabNumbers from '../MainTabNumbers';
import MainTabOptions from '../MainTabOptions';
import styles from './MainTabPanel.module.scss';

type MainTabPanelProps = {
  id: string;
  activeTab: string;
  apartments?: SingleSectionType[];
  rooms?: SelectType[];
  roomsType?: SelectType[];
  district?: SelectType[];
  metro?: SelectType[];
  options: ApartmentOptions[];
};

const MainTabPanel: React.FC<MainTabPanelProps> = ({
  id,
  activeTab,
  apartments,
  rooms,
  roomsType,
  district,
  metro,
  options,
}) => {
  const { push } = useRouter();
  const { notEmptyFieldValues, handleSetValue, handleSubmit } = useFilter();
  const { toggle, handleToggle } = useToggle({});

  const { city, ...params } = notEmptyFieldValues;

  const alias = useMemo(
    () => apartments?.find((item) => item.title === city)?.alias,
    [apartments, city],
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);

    push({ pathname: alias, query: { ...params } }, undefined, {
      shallow: true,
    });
  };

  return id === activeTab ? (
    <form className={styles['tab-panel']} onSubmit={onSubmit}>
      <div className={styles['tab-panel__wrapper']}>
        <div className={styles['tab-panel__form']}>
          <MainTabField label='Город'>
            <div className={styles['tab-panel__select']}>
              <Select
                className={SelectClass.filter}
                items={apartments}
                name='city'
                handleSetValue={handleSetValue}
              />
            </div>
          </MainTabField>
          <MainTabField label='Комнаты'>
            <div className={styles['tab-panel__select']}>
              <Select
                className={SelectClass.filter}
                items={rooms}
                name='rooms'
                handleSetValue={handleSetValue}
              />
            </div>
          </MainTabField>
          <MainTabField label='Цена за сутки (BYN)'>
            <MainTabNumbers handleSetValue={handleSetValue} />
          </MainTabField>
          <MainTabField>
            <FilterOptions onClick={handleToggle} />
          </MainTabField>
        </div>
        <div className={styles['tab-panel__display']}>
          <div className={styles['tab-panel__map']}>
            <span className={styles['tab-panel__map-text']}>На карте</span>
            <div className={styles['tab-panel__map-icon']}>
              <MapIc />
            </div>
          </div>
          <div className={styles['tab-panel__button']}>
            <Button type='submit' className={ButtonClass.show} disabled={!city}>
              Показать
            </Button>
          </div>
        </div>
      </div>
      <MainTabOptions isVisible={toggle} options={options} handleSetValue={handleSetValue}>
        <MainTabField label='Спальные места' border={false}>
          <div className={styles['tab-panel__select']}>
            <Select
              className={SelectClass.filter}
              items={roomsType}
              name='roomsType'
              handleSetValue={handleSetValue}
            />
          </div>
        </MainTabField>
        <MainTabField label='Район' border={false}>
          <div className={styles['tab-panel__select']}>
            <Select
              className={SelectClass.filter}
              items={district}
              name='district'
              handleSetValue={handleSetValue}
            />
          </div>
        </MainTabField>
        <MainTabField label='Метро' border={false}>
          <div className={styles['tab-panel__select']}>
            <Select
              className={SelectClass.filter}
              items={metro}
              name='metro'
              handleSetValue={handleSetValue}
            />
          </div>
        </MainTabField>
      </MainTabOptions>
    </form>
  ) : null;
};

export default memo(MainTabPanel);
