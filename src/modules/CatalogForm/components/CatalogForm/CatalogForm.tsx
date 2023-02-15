import { useToggle } from '@hooks/useToggle';
import { useAppSelector } from '@redux/reduxHooks';
import {
  getDistrictSelector,
  getMetroSelector,
  getOptionsSelector,
  getRoomsSelector,
  getRoomsTypeSelector,
} from '@redux/selectors/apartmentsSelector';

import { useCatalogForm } from '../../hooks/useCatalogForm';
import CatalogFormMain from '../CatalogFormMain';
import CatalogFormOptions from '../CatalogFormOptions';
import styles from './CatalogForm.module.scss';

const CatalogForm = () => {
  const rooms = useAppSelector(getRoomsSelector);
  const metro = useAppSelector(getMetroSelector);
  const district = useAppSelector(getDistrictSelector);
  const roomsType = useAppSelector(getRoomsTypeSelector);
  const options = useAppSelector(getOptionsSelector);

  const { toggle, handleToggle } = useToggle({});
  const { isReset, handleResetFilters, handleSetValue, onSubmit, params } = useCatalogForm();

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <CatalogFormMain
        rooms={rooms}
        handleSetValue={handleSetValue}
        toggle={toggle}
        handleToggle={handleToggle}
        isReset={isReset}
        handleResetFilters={handleResetFilters}
        params={params}
      />
      <CatalogFormOptions
        roomsType={roomsType}
        district={district}
        metro={metro}
        isVisible={toggle}
        params={params}
        options={options}
        handleSetValue={handleSetValue}
        isReset={isReset}
      />
    </form>
  );
};

export default CatalogForm;
