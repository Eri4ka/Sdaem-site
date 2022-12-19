import { memo } from 'react';

import styles from './MainTabField.module.scss';

type MainTabFieldProps = {
  label?: string;
  children: React.ReactNode;
  border?: boolean;
};

const MainTabField: React.FC<MainTabFieldProps> = ({ label, children, border = true }) => {
  return (
    <div
      className={`${styles['main-tab__field']} ${border ? styles['main-tab__field_border'] : ''}`}>
      {label && <div className={styles['main-tab__label']}>{label}</div>}
      {children}
    </div>
  );
};

export default memo(MainTabField);
