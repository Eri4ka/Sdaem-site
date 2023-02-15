import styles from './MainFilterField.module.scss';

type MainFilterFieldProps = {
  label?: string;
  children: React.ReactNode;
  border?: boolean;
};

const MainFilterField: React.FC<MainFilterFieldProps> = ({ label, children, border = true }) => {
  return (
    <div className={`${styles.filter__field} ${border ? styles.filter__field_border : ''}`}>
      {label && <div className={styles.filter__label}>{label}</div>}
      {children}
    </div>
  );
};

export default MainFilterField;
