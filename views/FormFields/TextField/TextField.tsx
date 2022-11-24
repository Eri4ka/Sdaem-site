import { useField, Field } from 'formik';

import styles from './TextField.module.scss';

export enum TextFieldClass {
  contacts = 'textfield_contacts',
}

export enum InputType {
  with_icon = 'textfield__input_icon',
  textArea = 'textfield__input_textArea',
}

type TextField = {
  label?: string;
  name: string;
  inputType?: string;
  as?: string;
  Icon?: React.FC;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField: React.FC<TextField> = ({ label, className, inputType, Icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={`${styles.textfield} ${className ? styles[className] : ''}`}>
      {label && (
        <label className={styles.textfield__label} htmlFor='name'>
          {label}
        </label>
      )}
      <Field
        className={`${styles.textfield__input} ${inputType ? styles[inputType] : ''}`}
        type='text'
        {...field}
        {...props}
      />
      {Icon && (
        <div className={styles.textfield__icon}>
          <Icon />
        </div>
      )}
    </div>
  );
};

export default TextField;
