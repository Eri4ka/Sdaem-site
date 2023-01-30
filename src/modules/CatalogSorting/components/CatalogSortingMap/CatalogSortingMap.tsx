import MapButton, { MapButtonClass } from '@views/MapButton';

import styles from './CatalogSortingMap.module.scss';

const CatalogSortingMap: React.FC = () => {
  return (
    <div className={styles.sorting__map}>
      <MapButton className={MapButtonClass.blue}>Показать на карте</MapButton>
    </div>
  );
};

export default CatalogSortingMap;
