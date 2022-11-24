import Mail from '@public/icons/contacts/mail.svg';
import Mobile from '@public/icons/contacts/mobile.svg';
import Time from '@public/icons/contacts/time.svg';
import Map from '@public/icons/map.svg';
import Tg from '@public/icons/social/tg.svg';
import Viber from '@public/icons/social/viber.svg';
import Whats from '@public/icons/social/whats.svg';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import styles from './ContactsAddress.module.scss';

type InfoElementProps = {
  children: React.ReactNode;
};

const InfoElement: React.FC<InfoElementProps> = ({ children }) => {
  return <div className={styles['contacts-address__element']}>{children}</div>;
};

const ContactsAddress: React.FC = () => {
  return (
    <address className={styles['contacts-address']}>
      <InfoElement>
        <SocialIcon className={SocialIconClass.contactsMini} link={false}>
          <Map className='svg' />
        </SocialIcon>
        <p className={styles['contacts-address__text']}>
          220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
        </p>
      </InfoElement>
      <InfoElement>
        <SocialIcon className={SocialIconClass.contactsMini} link={false}>
          <Mobile className='svg' />
        </SocialIcon>
        <p className={styles['contacts-address__text']}>+375 29 621-48-33</p>
        <div className={styles['contacts-address__social']}>
          <SocialIcon className={SocialIconClass.contactsMini} href='https://viber.com'>
            <Viber className='svg' />
          </SocialIcon>
          <SocialIcon className={SocialIconClass.contactsMini} href='https://telegram.com'>
            <Tg className='svg' />
          </SocialIcon>
          <SocialIcon className={SocialIconClass.contactsMini} href='https://whatsapp.com'>
            <Whats className='svg' />
          </SocialIcon>
        </div>
      </InfoElement>
      <InfoElement>
        <SocialIcon className={SocialIconClass.contactsMini} link={false}>
          <Mail className='svg' />
        </SocialIcon>
        <a
          href='mailto:sdaem@sdaem.by'
          className={`${styles['contacts-address__text']} ${styles['contacts-address__text_link']}`}>
          sdaem@sdaem.by
        </a>
      </InfoElement>
      <InfoElement>
        <SocialIcon className={SocialIconClass.contactsMini} link={false}>
          <Time className='svg' />
        </SocialIcon>
        <p className={styles['contacts-address__text']}>
          <span className={styles['contacts-address__span']}>Режим работы:</span> 08:00-22:00
        </p>
      </InfoElement>
    </address>
  );
};

export default ContactsAddress;
