import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';

import { useFilter } from '@utils/hooks/useFilter';
import { useToggle } from '@utils/hooks/useToggle';
import { useAppDispatch } from '@utils/redux/reduxHooks';
import { addFilters } from '@utils/redux/slices/apartmentsSlice';
import { ApartmentOptions, SelectType } from '@utils/types';
import Button, { ButtonClass } from '@views/Buttons/Button';
import FilterOptions from '@views/Filter/FilterOptions';
import Select, { SelectClass } from '@views/Select';

import styles from './CatalogFilter.module.scss';
import CatalogFilterField from './components/CatalogFilterField';
import CatalogFilterNumbers from './components/CatalogFilterNumbers';
import CatalogFilterOptions from './components/CatalogFilterOptions';
import CatalogFilterOptionsField from './components/CatalogFilterOptionsField';

type CatalogFilterProps = {
  rooms?: SelectType[];
  roomsType?: SelectType[];
  district?: SelectType[];
  metro?: SelectType[];
  options: ApartmentOptions[];
};

const CatalogFilter: React.FC<CatalogFilterProps> = ({
  rooms,
  roomsType,
  district,
  metro,
  options,
}) => {
  const {
    push,
    query: { alias, ...params },
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any = useRouter();
  const { toggle, handleToggle } = useToggle({});
  const { notEmptyFieldValues, isReset, handleResetFilters, handleSetValue, handleSubmit } =
    useFilter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addFilters(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alias]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    dispatch(addFilters(notEmptyFieldValues));
    push({ query: { alias, ...notEmptyFieldValues } }, undefined, { shallow: true });
  };

  return (
    <article className={styles.filter}>
      <form className={styles.filter__form} onSubmit={onSubmit}>
        <div className={styles.filter__wrapper}>
          <div className={styles.filter__fields}>
            <CatalogFilterField label='Комнаты'>
              <div className={styles.filter__select}>
                <Select
                  initialValue={params.rooms}
                  className={SelectClass.filter}
                  items={rooms}
                  name='rooms'
                  handleSetValue={handleSetValue}
                  isReset={isReset}
                />
              </div>
            </CatalogFilterField>
            <CatalogFilterField label='Цена за сутки (BYN)'>
              <CatalogFilterNumbers
                initialFromValue={params.priceFrom}
                initialToValue={params.priceTo}
                handleSetValue={handleSetValue}
                isReset={isReset}
              />
            </CatalogFilterField>
            <CatalogFilterField active={toggle}>
              <FilterOptions onClick={handleToggle} />
            </CatalogFilterField>
          </div>
          <div className={styles.filter__display}>
            <div className={styles.filter__reset}>
              <Button type='button' className={ButtonClass.reset} onClick={handleResetFilters}>
                Очистить
              </Button>
            </div>
            <div className={styles.filter__submit}>
              <Button type='submit' className={ButtonClass.show_blue}>
                Показать объекты
              </Button>
            </div>
          </div>
        </div>
        <CatalogFilterOptions
          initialValues={params}
          isVisible={toggle}
          options={options}
          handleSetValue={handleSetValue}
          isReset={isReset}>
          <CatalogFilterOptionsField label='Спальные места'>
            <Select
              initialValue={params.roomsType}
              className={SelectClass.filter}
              items={roomsType}
              name='roomsType'
              handleSetValue={handleSetValue}
              isReset={isReset}
            />
          </CatalogFilterOptionsField>
          <CatalogFilterOptionsField label='Район'>
            <Select
              initialValue={params.district}
              className={SelectClass.filter}
              items={district}
              name='district'
              handleSetValue={handleSetValue}
              isReset={isReset}
            />
          </CatalogFilterOptionsField>
          <CatalogFilterOptionsField label='Метро'>
            <Select
              initialValue={params.metro}
              className={SelectClass.filter}
              items={metro}
              name='metro'
              handleSetValue={handleSetValue}
              isReset={isReset}
            />
          </CatalogFilterOptionsField>
        </CatalogFilterOptions>
      </form>
    </article>
  );
};

export default memo(CatalogFilter);
