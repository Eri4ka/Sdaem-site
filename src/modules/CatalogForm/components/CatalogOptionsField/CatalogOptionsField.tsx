import styles from './CatalogOptionsField.module.scss';

type CatalogOptionsFieldProps = {
  label: string;
  children: React.ReactNode;
};

const CatalogOptionsField: React.FC<CatalogOptionsFieldProps> = ({ label, children }) => {
  return (
    <div className={styles['options-field']}>
      <p className={styles['options-field__label']}>{label}</p>
      <div className={styles['options-field__select']}>{children}</div>
    </div>
  );
};

export default CatalogOptionsField;
