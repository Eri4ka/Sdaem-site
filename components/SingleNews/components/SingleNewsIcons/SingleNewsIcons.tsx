import Fb from '@public/icons/social/facebook.svg';
import Tg from '@public/icons/social/tg.svg';
import Viber from '@public/icons/social/viber.svg';
import Whats from '@public/icons/social/whats.svg';
import Vk from '@public/icons/vk.svg';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import styles from './SingleNewsIcons.module.scss';

const SingleNewsIcons = () => {
  return (
    <div className={styles['singlenews-icons']}>
      <span className={styles['singlenews-icons__text']}>Поделиться</span>
      <div className={styles['singlenews-icons__icons']}>
        <SocialIcon className={SocialIconClass.default} href='https://vk.com'>
          <Vk />
        </SocialIcon>
        <SocialIcon className={SocialIconClass.default} href='https://facebook.com'>
          <Fb />
        </SocialIcon>
        <SocialIcon className={SocialIconClass.default} href='https://viber.com'>
          <Viber />
        </SocialIcon>
        <SocialIcon className={SocialIconClass.default} href='https://telegram.com'>
          <Tg />
        </SocialIcon>
        <SocialIcon className={SocialIconClass.default} href='https://whatsapp.com'>
          <Whats />
        </SocialIcon>
      </div>
    </div>
  );
};

export default SingleNewsIcons;
