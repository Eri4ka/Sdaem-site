import { memo } from 'react';

import styles from './CardTag.module.scss';

type CardTagProps = {
  text: string;
};

const CardTag: React.FC<CardTagProps> = ({ text }) => {
  return (
    <div className={styles['card-tag']}>
      <span className={styles['card-tag__text']}>{text}</span>
    </div>
  );
};

export default memo(CardTag);
