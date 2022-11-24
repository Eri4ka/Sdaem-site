import Link from 'next/link';

import styles from './SocialIcon.module.scss';

export enum SocialIconClass {
  default = 'icon_default',
  contactsMini = 'icon_contactsMini',
  large = 'icon_large',
}

type SocialIconProps = {
  className: string;
  href?: string;
  children: React.ReactNode;
  link?: boolean;
};

const SocialIcon: React.FC<SocialIconProps> = ({ className, href, children, link = true }) => {
  let wrapperClass = '';

  switch (className) {
    case 'icon_contactsMini':
      wrapperClass = 'icon__wrapper_contactsMini';
      break;
    case 'icon_large':
      wrapperClass = 'icon__wrapper_large';
      break;
    default:
      wrapperClass = 'icon__wrapper';
      break;
  }

  if (!link) {
    return (
      <div className={`${styles.icon} ${className ? styles[className] : ''}`}>
        <div className={styles[wrapperClass]}>{children}</div>
      </div>
    );
  }

  return (
    <Link href={href ? href : ''} target='_blank' rel='noreferrer'>
      <div className={`${styles.icon} ${className ? styles[className] : ''}`}>
        <div className={styles[wrapperClass]}>{children}</div>
      </div>
    </Link>
  );
};

export default SocialIcon;
