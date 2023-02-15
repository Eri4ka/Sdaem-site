import { memo } from 'react';

import styles from './InputNumber.module.scss';

const InputNumber = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input type='number' {...props} className={styles.input} />;
};

export default memo(InputNumber);
