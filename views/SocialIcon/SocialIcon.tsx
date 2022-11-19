import Link from 'next/link';

import styles from './SocialIcon.module.scss';

export enum SocialIconClass {
  default = 'icon_default',
}

type SocialIconProps = {
  className: string;
  href: string;
  children: React.ReactNode;
};

const SocialIcon: React.FC<SocialIconProps> = ({ className, href, children }) => {
  return (
    <Link href={href} target='_blank' rel='noreferrer'>
      <div className={`${styles.icon} ${className ? styles[className] : ''}`}>
        <div className={styles.icon__wrapper}>{children}</div>
      </div>
    </Link>
  );
};

export default SocialIcon;
