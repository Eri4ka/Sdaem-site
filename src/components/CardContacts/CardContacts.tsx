import { memo } from 'react';

import PhoneIc from '@icons/card/cardContacts/phone.svg';
import { ContactsType } from '@mytypes/productTypes';
import { useToggle } from '@utils/hooks/useToggle';
import CardModal from '@views/CardModal';

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
      <CardModal ref={innerRef} toggle={toggle} {...props} />
    </>
  );
};

export default memo(CardContacts);
