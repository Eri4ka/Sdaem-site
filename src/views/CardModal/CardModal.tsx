import Image from 'next/image';
import { memo, forwardRef } from 'react';

import MailPic from '@icons/card/cardContacts/mail.svg';
import ViberPic from '@icons/card/cardContacts/viber.svg';
import WhatsPic from '@icons/card/cardContacts/whatsapp.svg';
import userPic from '@images/profile/user.jpg';
import { ContactsType } from '@utils/types';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import styles from './CardModal.module.scss';

type CardModalProps = {
  toggle: boolean;
  contacts: ContactsType;
};

const CardModal = forwardRef<HTMLDivElement, CardModalProps>(({ toggle, contacts }, ref) => {
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
});

CardModal.displayName = 'ContactsModal';

export default memo(CardModal);
