import Image from 'next/image';
import { memo, forwardRef } from 'react';

import MailPic from '@public/icons/card/cardContacts/mail.svg';
import ViberPic from '@public/icons/card/cardContacts/viber.svg';
import WhatsPic from '@public/icons/card/cardContacts/whatsapp.svg';
import userPic from '@public/images/profile/user.jpg';
import { ContactsType } from '@utils/types';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import styles from './ContactsModal.module.scss';

type ContactsModalProps = {
  toggle: boolean;
  contacts: ContactsType;
};

const ContactsModal = forwardRef<HTMLDivElement, ContactsModalProps>(
  ({ toggle, contacts }, ref) => {
    const { image, name, phone, email, viber, whatsapp } = contacts;

    return (
      <div
        datatype='contacts-modal'
        ref={ref}
        className={`${styles['contacts-modal']} ${!toggle ? styles['contacts-modal_hide'] : ''}`}>
        <div className={styles['contacts-modal__photo']}>
          <Image
            src={image ? image : userPic}
            alt='author-pic'
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 59px),
              (max-width: 59px)'
          />
        </div>
        <label htmlFor='user' className={styles['contacts-modal__text']}>
          Владелец
        </label>
        <p id='user' className={styles['contacts-modal__name']}>
          {name}
        </p>
        <p className={styles['contacts-modal__phone']}>{phone}</p>
        <a href={`mailto:${email}`} className={styles['contacts-modal__email']}>
          {email}
        </a>
        <div className={styles['contacts-modal__contacts']}>
          <SocialIcon className={SocialIconClass.violet} href={viber}>
            <ViberPic />
          </SocialIcon>
          <SocialIcon className={SocialIconClass.green} href={whatsapp}>
            <WhatsPic />
          </SocialIcon>
          <SocialIcon className={SocialIconClass.blue} href={`mailto:${email}`}>
            <MailPic />
          </SocialIcon>
        </div>
      </div>
    );
  },
);

ContactsModal.displayName = 'ContactsModal';

export default memo(ContactsModal);
