import { memo } from 'react';

import MapButton, { MapButtonClass } from '@views/Buttons/MapButton';

import MainMapList from './components/MainMapList';
import styles from './MainMap.module.scss';

const MainMap = () => {
  return (
    <article className={styles['main-map']}>
      <div className={styles['main-map__top']}>
        <div className={styles['main-map__content']}>
          <div className={styles['main-map__heading']}>
            <h2 className={styles['main-map__heading-text']}>Поиск квартир на карте</h2>
            <p className={styles['main-map__heading-description']}>
              Ищите квартиры на сутки в центре города, возле парка или в живописном районе
            </p>
            <div className={styles['main-map__heading-button']}>
              <MapButton className={MapButtonClass.yellow}>Открыть карту</MapButton>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['main-map__bottom']}>
        <MainMapList />
      </div>
    </article>
  );
};

export default memo(MainMap);
