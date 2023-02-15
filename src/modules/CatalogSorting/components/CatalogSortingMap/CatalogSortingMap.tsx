import Link from 'next/link';

import MapButton, { MapButtonClass } from '@views/MapButton';

import styles from './CatalogSortingMap.module.scss';

const CatalogSortingMap: React.FC = () => {
  return (
    <div className={styles.sorting__map}>
      <MapButton className={MapButtonClass.blue}>
        <Link href='/map'>Показать на карте</Link>
      </MapButton>
    </div>
  );
};

export default CatalogSortingMap;
