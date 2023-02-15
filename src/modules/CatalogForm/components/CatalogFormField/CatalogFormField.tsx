import styles from './CatalogFormField.module.scss';

export type CatalogFormFieldProps = {
  label?: string;
  active?: boolean;
  children: React.ReactNode;
};

const CatalogFormField: React.FC<CatalogFormFieldProps> = ({ label, active = false, children }) => {
  return (
    <div className={`${styles['form-field']} ${active ? styles['form-field_active'] : ''}`}>
      {label && <p className={styles['form-field__label']}>{label}</p>}
      {children}
    </div>
  );
};

export default CatalogFormField;
