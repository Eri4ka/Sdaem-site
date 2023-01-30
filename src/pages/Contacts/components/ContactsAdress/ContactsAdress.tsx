import Mail from '@icons/contacts/mail.svg';
import Mobile from '@icons/contacts/mobile.svg';
import Time from '@icons/contacts/time.svg';
import Map from '@icons/map.svg';
import Tg from '@icons/social/tg.svg';
import Viber from '@icons/social/viber.svg';
import Whats from '@icons/social/whats.svg';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import ContactsAdressElement from '../ContactsAdressElement';
import styles from './ContactsAddress.module.scss';

const ContactsAddress: React.FC = () => {
  return (
    <address className={styles['contacts-address']}>
      <ContactsAdressElement>
        <SocialIcon className={SocialIconClass.contactsMini} link={false}>
          <Map className='svg' />
        </SocialIcon>
        <p className={styles['contacts-address__text']}>
          220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
        </p>
      </ContactsAdressElement>
      <ContactsAdressElement>
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
      </ContactsAdressElement>
      <ContactsAdressElement>
        <SocialIcon className={SocialIconClass.contactsMini} link={false}>
          <Mail className='svg' />
        </SocialIcon>
        <a
          href='mailto:sdaem@sdaem.by'
          className={`${styles['contacts-address__text']} ${styles['contacts-address__text_link']}`}>
          sdaem@sdaem.by
        </a>
      </ContactsAdressElement>
      <ContactsAdressElement>
        <SocialIcon className={SocialIconClass.contactsMini} link={false}>
          <Time className='svg' />
        </SocialIcon>
        <p className={styles['contacts-address__text']}>
          <span className={styles['contacts-address__span']}>Режим работы:</span> 08:00-22:00
        </p>
      </ContactsAdressElement>
    </address>
  );
};

export default ContactsAddress;
