import Link from 'next/link';
import { memo } from 'react';

import styles from './CardInfo.module.scss';

type CardInfoProps = {
  href: string;
};

const CardInfo: React.FC<CardInfoProps> = ({ href }) => {
  return (
    <div className={styles['card-info']}>
      <Link href={href}>
        <span className={styles['card-info__text']}>Подробнее</span>
      </Link>
    </div>
  );
};

export default memo(CardInfo);
