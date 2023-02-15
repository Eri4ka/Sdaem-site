import { memo } from 'react';

import CheckBox from '@components/CheckBox';
import { ParamType, SelectType } from '@mytypes/assistantTypes';
import { ProductOptions } from '@mytypes/productTypes';

import CatalogFormSelect from '../CatalogFormSelect';
import CatalogOptionsField from '../CatalogOptionsField';
import styles from './CatalogFormOptions.module.scss';

type CatalogFormOptionsProps = {
  roomsType: SelectType[];
  district: SelectType[];
  metro: SelectType[];
  isVisible: boolean;
  options: ProductOptions[];
  handleSetValue: (field: string, value: boolean | string) => void;
  isReset: boolean;
  params: ParamType;
};

const CatalogFormOptions: React.FC<CatalogFormOptionsProps> = ({
  roomsType,
  district,
  metro,
  params,
  isVisible,
  options,
  handleSetValue,
  isReset,
}) => {
  const { roomsType: roomParam, district: districtParam, metro: metroParam } = params;

  const initialValuesKeys = Object.keys(params);

  return (
    <div className={`${styles['form-options']} ${isVisible ? styles['form-options_show'] : ''}`}>
      <div className={styles['form-options__wrapper']}>
        <CatalogOptionsField label='Спальные места'>
          <CatalogFormSelect
            initialValue={roomParam}
            items={roomsType}
            name='roomsType'
            handleSetValue={handleSetValue}
            isReset={isReset}
          />
        </CatalogOptionsField>
        <CatalogOptionsField label='Район'>
          <CatalogFormSelect
            initialValue={districtParam}
            items={district}
            name='district'
            handleSetValue={handleSetValue}
            isReset={isReset}
          />
        </CatalogOptionsField>
        <CatalogOptionsField label='Метро'>
          <CatalogFormSelect
            initialValue={metroParam}
            items={metro}
            name='metro'
            handleSetValue={handleSetValue}
            isReset={isReset}
          />
        </CatalogOptionsField>
      </div>
      <div className={styles['form-options__grid']}>
        {options?.map(({ id, title, option_name }) => {
          const initialValue = initialValuesKeys.includes(option_name);
          return (
            <CheckBox
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

export default memo(CatalogFormOptions);
