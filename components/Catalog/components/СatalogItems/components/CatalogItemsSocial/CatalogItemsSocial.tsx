import FbIc from '@public/icons/social/facebook.svg';
import TgIc from '@public/icons/social/tg.svg';
import ViberIc from '@public/icons/social/viber.svg';
import WhatsIc from '@public/icons/social/whats.svg';
import VkIc from '@public/icons/vk.svg';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import styles from './CatalogItemsSocial.module.scss';

const CatalogItemsSocial: React.FC = () => {
  return (
    <div className={styles.social}>
      <p className={styles.social__text}>Поделиться</p>
      <div className={styles.social__icons}>
        <SocialIcon className={SocialIconClass.default} href='https://vk.com'>
          <VkIc alt='vk-icon' />
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

export default CatalogItemsSocial;
