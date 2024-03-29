import { memo } from 'react';

import styles from './Button.module.scss';

export enum ButtonClass {
  adt = 'button_adt',
  search = 'button_search',
  purp = 'button_purp',
  back = 'button_back',
  blue = 'button_blue',
  show = 'button_show',
  show_blue = 'button_show-blue',
  reset = 'button_reset',
  blue_gradient = 'button_gradient',
  blueDark_gradient = 'button_gradient_blue',
  yellow_gradient = 'button_gradient-yellow',
}

type ButtonProps = React.PropsWithChildren<{
  className?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className ? styles[className] : ''}`} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);
