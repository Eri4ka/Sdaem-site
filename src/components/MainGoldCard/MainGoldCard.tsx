import { memo } from 'react';

import Button, { ButtonClass } from '@views/Button';

import styles from './MainGoldCard.module.scss';

export type MainGoldCardProps = {
  heading: string;
  description: React.ReactElement;
  descriptionSecond?: React.ReactElement;
  buttonText: string;
  buttonIcon?: React.ReactNode;
};

const MainGoldCard: React.FC<MainGoldCardProps> = ({
  heading,
  description,
  descriptionSecond,
  buttonText,
  buttonIcon,
}) => {
  return (
    <li className={styles['gold-card']}>
      <p className={styles['gold-card__text']}>{heading}</p>
      <p className={styles['gold-card__description']}>{description}</p>
      <p
        className={`${styles['gold-card__description']} ${styles['gold-card__description_second']}`}>
        {descriptionSecond}
      </p>
      <div className={styles['gold-card__button']}>
        <Button className={ButtonClass.blueDark_gradient}>
          {buttonText}
          {buttonIcon && <div className={styles['gold-card__button-icon']}>{buttonIcon}</div>}
        </Button>
      </div>
    </li>
  );
};

export default memo(MainGoldCard);
