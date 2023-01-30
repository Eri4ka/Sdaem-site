import FbIc from '@icons/catalog/product/facebook.svg';
import TgIc from '@icons/catalog/product/tg.svg';
import ViberIc from '@icons/catalog/product/viber.svg';
import WhatsIc from '@icons/catalog/product/whats.svg';
import VkIc from '@icons/vk.svg';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import styles from './CatalogProductsSocial.module.scss';

const CatalogProductsSocial: React.FC = () => {
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

export default CatalogProductsSocial;
