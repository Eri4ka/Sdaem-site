import { memo } from 'react';

import BtnArrowIc from '@public/icons/button/btnArrow.svg';

import styles from './NextButton.module.scss';

export enum NextButtonClass {
  white = 'next-button_white',
  blue = 'next-button_blue',
}

type NextButtonProps = {
  className: string;
  prev?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const NextButton: React.FC<NextButtonProps> = ({ className, prev = false, ...props }) => {
  const clazz = `${styles['next-button']} ${className ? styles[className] : ''} ${
    prev ? styles['next-button_rotated'] : ''
  }`;

  return (
    <button className={clazz} {...props}>
      <BtnArrowIc />
    </button>
  );
};

export default memo(NextButton);
