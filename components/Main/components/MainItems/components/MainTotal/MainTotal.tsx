import { memo } from 'react';

import Button, { ButtonClass } from '@views/Buttons/Button';

import styles from './MainTotal.module.scss';

type MainTotalProps = {
  total: number;
};

const MainTotal: React.FC<MainTotalProps> = ({ total }) => {
  return (
    <aside className={styles['main-total']}>
      <div className={styles['main-total__info']}>
        <p className={styles['main-total__count']}>
          {total}
          <span className={styles['main-total__plus']}>+</span>
        </p>
        <p className={styles['main-total__text']}>Предложений по Минску</p>
      </div>
      <div className={styles['main-total__button']}>
        <Button className={ButtonClass.blue_gradient}>Посмотреть все</Button>
      </div>
    </aside>
  );
};

export default memo(MainTotal);
