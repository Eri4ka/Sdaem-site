import { memo } from 'react';

import PhoneIc from '@public/icons/card/cardContacts/phone.svg';
import { useToggle } from '@utils/hooks/useToggle';
import { ContactsType } from '@utils/types';

import ContactsModal from '../ContactsModal';
import styles from './CardContacts.module.scss';

type CardContactsProps = {
  catalog?: boolean;
  contacts: ContactsType;
};

const CardContacts: React.FC<CardContactsProps> = ({ ...props }) => {
  const { toggle, handleToggle, triggerRef, innerRef } = useToggle({});

  return (
    <>
      <div ref={triggerRef} className={styles['card-contacts']} onClick={handleToggle}>
        <PhoneIc alt='contacts-phone' />
        <span className={styles['card-contacts__text']}>Контакты</span>
      </div>
      <ContactsModal ref={innerRef} toggle={toggle} {...props} />
    </>
  );
};

export default memo(CardContacts);
