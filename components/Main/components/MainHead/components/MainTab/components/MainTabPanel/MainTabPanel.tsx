import { memo, useState, useCallback } from 'react';

import MapIc from '@public/icons/main/filter/map.svg';
import { useToggle } from '@utils/hooks/useToggle';
import { SelectType } from '@utils/types';
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
  city?: SelectType[];
  rooms?: SelectType[];
  roomsType?: SelectType[];
  districts?: SelectType[];
  metro?: SelectType[];
  options: SelectType[];
};

type fielValuesType = {
  city?: string;
  rooms?: string;
  roomsType?: string;
  district?: string;
  metro?: string;
  options: number[];
};

const MainTabPanel: React.FC<MainTabPanelProps> = ({
  id,
  activeTab,
  city,
  rooms,
  roomsType,
  districts,
  metro,
  options,
}) => {
  const [fieldValues, setFieldValues] = useState<fielValuesType>({
    city: '',
    rooms: '',
    roomsType: '',
    district: '',
    metro: '',
    options: [],
  });
  const { toggle, handleToggle } = useToggle({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fieldValues);
  };

  const handleSetValue = useCallback((field: string, value: string | number) => {
    setFieldValues((values) => ({
      ...values,
      [field]: value,
    }));
  }, []);

  const handleSetOptions = useCallback((e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const checked = e.target.checked;

    if (checked) {
      setFieldValues((values) => ({
        ...values,
        options: [...values.options, id],
      }));
    } else {
      setFieldValues((values) => ({
        ...values,
        options: values.options.filter((item) => item !== id),
      }));
    }
  }, []);

  return id === activeTab ? (
    <form className={styles['tab-panel']} onSubmit={onSubmit}>
      <div className={styles['tab-panel__wrapper']}>
        <div className={styles['tab-panel__form']}>
          <MainTabField label='Город'>
            <div className={styles['tab-panel__select']}>
              <Select
                className={SelectClass.filter}
                items={city}
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
            <Button type='submit' className={ButtonClass.show}>
              Показать
            </Button>
          </div>
        </div>
      </div>
      <MainTabOptions isVisible={toggle} options={options} handleSetOptions={handleSetOptions}>
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
              items={districts}
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
