import FbIc from '@icons/news/social/facebook.svg';
import TgIc from '@icons/news/social/tg.svg';
import ViberIc from '@icons/news/social/viber.svg';
import VkIc from '@icons/news/social/vk.svg';
import WhatsIc from '@icons/news/social/whats.svg';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import styles from './SingleNewsIcons.module.scss';

const SingleNewsIcons = () => {
  return (
    <div className={styles['singlenews-icons']}>
      <span className={styles['singlenews-icons__text']}>Поделиться</span>
      <div className={styles['singlenews-icons__icons']}>
        <SocialIcon className={SocialIconClass.default} href='https://vk.com'>
          <VkIc alt='vkontakte-icon' />
        </SocialIcon>
        <SocialIcon className={SocialIconClass.default} href='https://facebook.com'>
          <FbIc alt='facebook-icon' />
        </SocialIcon>
        <SocialIcon className={SocialIconClass.default} href='https://viber.com'>
          <ViberIc alt='viber-icon' />
        </SocialIcon>
        <SocialIcon className={SocialIconClass.default} href='https://telegram.com'>
          <TgIc alt='telegram-icon' />
        </SocialIcon>
        <SocialIcon className={SocialIconClass.default} href='https://whatsapp.com'>
          <WhatsIc alt='whatsapp-icon' />
        </SocialIcon>
      </div>
    </div>
  );
};

export default SingleNewsIcons;
