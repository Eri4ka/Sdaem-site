import { memo } from 'react';

import Button, { ButtonClass } from '@views/Buttons/Button';

import styles from './SimpleCard.module.scss';

export type SimpleCardProps = {
  icon?: React.ReactNode;
  heading: string;
  description: React.ReactElement;
  buttonText: string;
  buttonIcon?: React.ReactNode;
};

const SimpleCard: React.FC<SimpleCardProps> = ({
  icon,
  heading,
  description,
  buttonText,
  buttonIcon,
}) => {
  return (
    <li className={styles['simple-card']}>
      <div className={styles['simple-card__heading']}>
        <div className={styles['simple-card__icon']}>{icon}</div>
        <span className={styles['simple-card__text']}>{heading}</span>
      </div>
      <p className={styles['simple-card__description']}>{description}</p>
      <div className={styles['simple-card__button']}>
        <Button className={ButtonClass.yellow_gradient}>
          {buttonText}
          {buttonIcon && <div className={styles['simple-card__button-icon']}>{buttonIcon}</div>}
        </Button>
      </div>
    </li>
  );
};

export default memo(SimpleCard);
