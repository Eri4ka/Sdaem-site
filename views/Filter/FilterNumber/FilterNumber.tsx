import { memo } from 'react';

import styles from './FilterNumber.module.scss';

// type FilterNumberProps = {
//   props: React.InputHTMLAttributes<HTMLInputElement>;
// } & React.InputHTMLAttributes<HTMLInputElement>;

const FilterNumber = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input type='number' {...props} className={`${styles['filter-number__input']}`} />;
};

export default memo(FilterNumber);
