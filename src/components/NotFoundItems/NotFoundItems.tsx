import NotFoundIc from '@icons/main/items/notfound.svg';

import styles from './NotFoundItems.module.scss';

const NotFoundItems: React.FC = () => {
  return (
    <div className={styles.notfound}>
      <NotFoundIc alt='not-found' />
      <p className={styles.notfound__text}>Ничего не найдено</p>
    </div>
  );
};

export default NotFoundItems;
