import { useField, FastField } from 'formik';
import { memo } from 'react';

import styles from './TextField.module.scss';

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

const TextField: React.FC<TextField> = ({ label, inputType, Icon, ...props }) => {
  const [field, meta] = useField(props);

  const errorWrapper = meta.touched && meta.error ? styles.textfield_error : '';
  const errorField = meta.touched && meta.error ? styles.textfield__input_error : '';
  return (
    <div className={`${styles.textfield} ${errorWrapper}`}>
      {label && (
        <label className={styles.textfield__label} htmlFor={field.name}>
          {label}
        </label>
      )}
      <FastField
        className={`${styles.textfield__input} ${inputType ? styles[inputType] : ''} ${errorField}`}
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

export default memo(TextField);
