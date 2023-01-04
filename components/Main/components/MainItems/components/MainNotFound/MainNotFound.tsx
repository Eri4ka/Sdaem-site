import { memo } from 'react';

import NotFoundIc from '@public/icons/main/items/notfound.svg';

import styles from './MainNotFound.module.scss';

const MainNotFound: React.FC = () => {
  return (
    <div className={styles['main-notfound']}>
      <NotFoundIc alt='not-found' />
      <p className={styles['main-notfound__text']}>Ничего не найдено</p>
    </div>
  );
};

export default memo(MainNotFound);
