import { memo } from 'react';

import HeartIc from '@public/icons/card/favorite/heart.svg';

import styles from './Favorite.module.scss';

const Favorite: React.FC = () => {
  return (
    <div className={styles.favorite}>
      <HeartIc className={styles.favorite__icon} alt='favorite-heart' />
    </div>
  );
};

export default memo(Favorite);
