import BtnArrowIc from '@public/icons/button/btnArrow.svg';

import styles from './NextButton.module.scss';

export enum NextButtonClass {
  white = 'next-button_white',
  blue = 'next-button_blue',
}

type NextButtonProps = {
  className: string;
  onClick?: () => void;
};

const NextButton: React.FC<NextButtonProps> = ({ className, onClick }) => {
  return (
    <div className={`${styles['next-button']} ${className ? styles[className] : ''}`}>
      <BtnArrowIc />
    </div>
  );
};

export default NextButton;
