import { memo } from 'react';

import CautionIc from '@public/icons/form/caution.svg';

import styles from './Caution.module.scss';

type CautionProps = {
  text: string;
  valid?: boolean;
};

const Caution: React.FC<CautionProps> = ({ text, valid }) => {
  const errorText = valid ? 'Ошибка ввода' : text;

  return (
    <div className={styles.caution}>
      <span className={styles.caution__text}>{errorText}</span>
      <div className={styles.caution__icon}>
        <CautionIc className='svg' />
      </div>
    </div>
  );
};

export default memo(Caution);
