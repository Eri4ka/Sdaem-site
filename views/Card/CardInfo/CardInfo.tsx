import { memo } from 'react';

import styles from './CardInfo.module.scss';

const CardInfo: React.FC = () => {
  return (
    <div className={styles['card-info']}>
      <span className={styles['card-info__text']}>Подробнее</span>
    </div>
  );
};

export default memo(CardInfo);
