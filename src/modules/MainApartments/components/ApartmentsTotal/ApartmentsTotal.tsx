import Link from 'next/link';
import { memo } from 'react';

import Button, { ButtonClass } from '@views/Button';

import styles from './ApartmentsTotal.module.scss';

type ApartmentsTotalProps = {
  total: number;
};

const ApartmentsTotal: React.FC<ApartmentsTotalProps> = ({ total }) => {
  return (
    <aside className={styles['apartments-total']}>
      <div className={styles['apartments-total__info']}>
        <p className={styles['apartments-total__count']}>
          {total}
          <span className={styles['apartments-total__plus']}>+</span>
        </p>
        <p className={styles['apartments-total__text']}>Предложений по Минску</p>
      </div>
      <div className={styles['apartments-total__button']}>
        <Button className={ButtonClass.blue_gradient}>
          <Link href='/minsk'>Посмотреть все</Link>
        </Button>
      </div>
    </aside>
  );
};

export default memo(ApartmentsTotal);
