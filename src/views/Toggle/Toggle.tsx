import { useField } from 'formik';

import styles from './Toggle.module.scss';

type ToggleProps = {
  name: string;
  text?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Toggle: React.FC<ToggleProps> = ({ text, ...props }) => {
  const [field] = useField(props);

  return (
    <div className={styles.toggle}>
      <input
        id='toggle'
        role='switch'
        className={styles.toggle__checkbox}
        type='checkbox'
        {...field}
        {...props}
      />
      <label htmlFor='toggle' className={styles.toggle__slider}></label>
      {text && <span className={styles.toggle__label}>{text}</span>}
    </div>
  );
};

export default Toggle;
