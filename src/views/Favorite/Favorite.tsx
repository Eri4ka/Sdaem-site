import { memo, useState, useEffect } from 'react';

import HeartIc from '@icons/card/favorite/heart.svg';

import styles from './Favorite.module.scss';

type FavoriteProps = {
  wide?: boolean;
  onClick?: () => void;
  isFavorite?: boolean;
};

const Favorite: React.FC<FavoriteProps> = ({ wide = false, onClick, isFavorite }) => {
  const [safeIsFavorite, setSafeIsFavorite] = useState(false);

  useEffect(() => {
    if (isFavorite !== undefined) {
      setSafeIsFavorite(isFavorite);
    }
  }, [isFavorite]);

  return (
    <div
      className={`${styles.favorite} ${wide ? styles.favorite_wide : ''} ${
        safeIsFavorite ? styles.favorite_added : ''
      }`}
      onClick={onClick}>
      {wide && (
        <span className={styles.favorite__text}>{safeIsFavorite ? 'Добавлено' : 'В закладки'}</span>
      )}
      <HeartIc className={styles.favorite__icon} alt='favorite-heart' />
    </div>
  );
};

export default memo(Favorite);
