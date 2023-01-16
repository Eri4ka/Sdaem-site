import Link from 'next/link';

import MapButton, { MapButtonClass } from '@views/Buttons/MapButton';

import styles from './CatalogMap.module.scss';

const CatalogMap: React.FC = () => {
  return (
    <article className={styles.map}>
      <div className={styles.map__content}>
        <h2 className={styles.map__heading}>Показать найденные квартиры на карте</h2>
        <p className={styles.map__description}>
          Ищите новостройки рядом с работой, парком или родственниками
        </p>
        <div className={styles.map__button}>
          <MapButton className={MapButtonClass.yellow}>
            <Link href={'/map'}>Открыть карту</Link>
          </MapButton>
        </div>
      </div>
    </article>
  );
};

export default CatalogMap;
