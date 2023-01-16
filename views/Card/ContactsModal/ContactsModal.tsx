import Image from 'next/image';
import { memo, forwardRef, useEffect, useMemo } from 'react';

import MailPic from '@public/icons/card/cardContacts/mail.svg';
import ViberPic from '@public/icons/card/cardContacts/viber.svg';
import WhatsPic from '@public/icons/card/cardContacts/whatsapp.svg';
import userPic from '@public/images/profile/user.jpg';
import { useAppSelector } from '@utils/redux/reduxHooks';
import {
  getDesktopMinimum,
  getTabletMinimum,
} from '@utils/redux/selectors/systemInfromationSelectors';
import { ContactsType } from '@utils/types';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import styles from './ContactsModal.module.scss';

type ContactsModalProps = {
  catalog?: boolean;
  toggle: boolean;
  contacts: ContactsType;
};

const ContactsModal = forwardRef<HTMLDivElement, ContactsModalProps>(
  ({ catalog, toggle, contacts }, ref) => {
    const isDesktopMinimum = useAppSelector(getDesktopMinimum);
    const isTabletMinimum = useAppSelector(getTabletMinimum);

    const { image, name, phone, email, viber, whatsapp } = contacts;
    const hasWindow = typeof document !== 'undefined';
    const contactsModal = hasWindow
      ? document.querySelectorAll<HTMLElement>('[datatype="contacts-modal"]')
      : null;

    const elementValue = useMemo(() => {
      if (isTabletMinimum) {
        return 1;
      }
      if (isDesktopMinimum) {
        return 3;
      }
      return 4;
    }, [isDesktopMinimum, isTabletMinimum]);

    const changeContactsModalPosition = () => {
      contactsModal?.forEach((item, i) => {
        const element = (i + 1) % elementValue === 0 || i === 0;

        item.style.removeProperty('left');

        if (element) {
          item.style.left = '0px';
        }
      });
    };

    useEffect(() => {
      if (catalog) {
        changeContactsModalPosition();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contactsModal]);

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
