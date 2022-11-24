import Caution from '@public/icons/contacts/caution.svg';

import styles from './ContactsCaution.module.scss';

const ContactsCaution: React.FC = () => {
  return (
    <div className={styles['contacts-caution']}>
      <div className={styles['contacts-caution__icon']}>
        <Caution />
      </div>
      <p className={styles['contacts-caution__text']}>
        Администрация сайта не владеет информацией о наличии свободных квартир
      </p>
    </div>
  );
};

export default ContactsCaution;
