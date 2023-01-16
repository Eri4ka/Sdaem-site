import { memo } from 'react';

import HeartIc from '@public/icons/card/favorite/heart.svg';

import styles from './Favorite.module.scss';

type FavoriteProps = {
  wide?: boolean;
};

const Favorite: React.FC<FavoriteProps> = ({ wide = false }) => {
  return (
    <div className={`${styles.favorite} ${wide ? styles.favorite_wide : ''}`}>
      {wide && <span className={styles.favorite__text}>В закладки</span>}
      <HeartIc className={styles.favorite__icon} alt='favorite-heart' />
    </div>
  );
};

export default memo(Favorite);
