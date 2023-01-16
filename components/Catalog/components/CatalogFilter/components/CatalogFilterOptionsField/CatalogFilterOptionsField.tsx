import { CatalogFilterFieldProps } from '../CatalogFilterField';
import styles from './CatalogFilterOptionsField.module.scss';

const CatalogFilterOptionsField: React.FC<CatalogFilterFieldProps> = ({ label, children }) => {
  return (
    <div className={styles.field}>
      <p className={styles.field__label}>{label}</p>
      <div className={styles.field__select}>{children}</div>
    </div>
  );
};

export default CatalogFilterOptionsField;
