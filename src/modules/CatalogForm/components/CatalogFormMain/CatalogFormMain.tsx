import { memo } from 'react';

import { ParamType, SelectType } from '@mytypes/assistantTypes';
import Button, { ButtonClass } from '@views/Button';
import FilterOptions from '@views/FilterOptions';

import CatalogFormField from '../CatalogFormField';
import CatalogFormPrice from '../CatalogFormPrice';
import CatalogFormSelect from '../CatalogFormSelect';
import styles from './CatalogFormMain.module.scss';

type CatalogFormMainProps = {
  rooms: SelectType[];
  handleSetValue: (field: string, value: string) => void;
  toggle: boolean;
  handleToggle: () => void;
  isReset: boolean;
  handleResetFilters: () => void;
  params: ParamType;
};

const CatalogFormMain: React.FC<CatalogFormMainProps> = ({
  rooms,
  handleSetValue,
  toggle,
  handleToggle,
  isReset,
  handleResetFilters,
  params,
}) => {
  const { rooms: roomParam, priceTo, priceFrom } = params;

  return (
    <div className={styles['form-main']}>
      <div className={styles['form-main__fields']}>
        <CatalogFormField label='Комнаты'>
          <CatalogFormSelect
            initialValue={roomParam}
            name='rooms'
            items={rooms}
            handleSetValue={handleSetValue}
            isReset={isReset}
          />
        </CatalogFormField>
        <CatalogFormField label='Цена за сутки (BYN)'>
          <CatalogFormPrice
            initialFromValue={priceFrom}
            initialToValue={priceTo}
            handleSetValue={handleSetValue}
            isReset={isReset}
          />
        </CatalogFormField>
        <CatalogFormField active={toggle}>
          <FilterOptions onClick={handleToggle} />
        </CatalogFormField>
      </div>
      <div className={styles['form-main__display']}>
        <div className={styles['form-main__reset']}>
          <Button type='button' className={ButtonClass.reset} onClick={handleResetFilters}>
            Очистить
          </Button>
        </div>
        <div className={styles['form-main__submit']}>
          <Button type='submit' className={ButtonClass.show_blue}>
            Показать объекты
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(CatalogFormMain);
