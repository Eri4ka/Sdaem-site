import styles from './CatalogFilterField.module.scss';

export type CatalogFilterFieldProps = {
  label?: string;
  active?: boolean;
  children: React.ReactNode;
};

const CatalogFilterField: React.FC<CatalogFilterFieldProps> = ({
  label,
  active = false,
  children,
}) => {
  return (
    <div className={`${styles.field} ${active ? styles.field_active : ''}`}>
      {label && <p className={styles.field__label}>{label}</p>}
      {children}
    </div>
  );
};

export default CatalogFilterField;
