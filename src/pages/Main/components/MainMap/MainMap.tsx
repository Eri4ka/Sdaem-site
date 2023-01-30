import OpenMap from '@components/OpenMap';

import MainMapList from '../MainMapList';
import styles from './MainMap.module.scss';

const openMapInfo = {
  heading: 'Поиск квартир на карте',
  description: 'Ищите квартиры на сутки в центре города, возле парка или в живописном районе',
  href: '/map',
};

const MainMap = () => {
  const { heading, description, href } = openMapInfo;

  return (
    <article className={styles['main-map']}>
      <div className={styles['main-map__top']}>
        <div className={styles['main-map__content']}>
          <OpenMap heading={heading} description={description} href={href} />
        </div>
      </div>
      <div className={styles['main-map__bottom']}>
        <MainMapList />
      </div>
    </article>
  );
};

export default MainMap;
