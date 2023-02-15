import OpenMap from '@components/OpenMap';

import styles from './CatalogMap.module.scss';

const openMapInfo = {
  heading: 'Показать найденные квартиры на карте',
  description: 'Ищите новостройки рядом с работой,\n парком или родственниками',
  href: '/map',
};

const CatalogMap: React.FC = () => {
  const { heading, description, href } = openMapInfo;

  return (
    <article className={styles.map}>
      <div className={styles.map__content}>
        <OpenMap heading={heading} description={description} href={href} />
      </div>
    </article>
  );
};

export default CatalogMap;
