import { useAppSelector } from '@utils/redux/reduxHooks';
import {
  getDistrictSelector,
  getMetroSelector,
  getOptionsSelector,
  getRoomsSelector,
  getRoomsTypeSelector,
} from '@utils/redux/selectors/apartmentsSelector';
import { SingleSectionType } from '@utils/types';

import CatalogFilter from './components/CatalogFilter';
import CatalogHead from './components/CatalogHead';
import CatalogMap from './components/CatalogMap';
import CatalogSorting from './components/CatalogSorting';
import CatalogItems from './components/СatalogItems/CatalogItems';

type CatalogProps = {
  section: SingleSectionType;
};

const Catalog: React.FC<CatalogProps> = ({ section }) => {
  const rooms = useAppSelector(getRoomsSelector);
  const roomsType = useAppSelector(getRoomsTypeSelector);
  const district = useAppSelector(getDistrictSelector);
  const metro = useAppSelector(getMetroSelector);
  const options = useAppSelector(getOptionsSelector);

  return (
    <section>
      <CatalogHead section={section} />
      <CatalogFilter
        rooms={rooms}
        roomsType={roomsType}
        district={district}
        metro={metro}
        options={options}
      />
      <CatalogSorting />
      <CatalogItems />
      <CatalogMap />
    </section>
  );
};

export default Catalog;
