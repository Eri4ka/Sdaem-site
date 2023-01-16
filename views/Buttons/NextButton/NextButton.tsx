import { memo } from 'react';

import BtnArrowIc from '@public/icons/button/btnArrow.svg';
import SliderArrowIc from '@public/icons/button/sliderArrow.svg';

import styles from './NextButton.module.scss';

export enum NextButtonClass {
  white = 'next-button_white',
  blue = 'next-button_blue',
  grey = 'next-button_grey',
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
      {className === 'next-button_grey' ? <SliderArrowIc /> : <BtnArrowIc />}
    </button>
  );
};

export default memo(NextButton);
