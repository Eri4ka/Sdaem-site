import Fb from '@icons/fb.svg';
import Inst from '@icons/inst.svg';
import Vk from '@icons/vk.svg';
import ContactsForm from '@modules/ContactsForm';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import ContactsAddress from '../ContactsAdress';
import ContactsCaution from '../ContactsCaution';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__wrapper}>
        <article className={styles.contacts__content}>
          <h1 className={styles.contacts__head}>Контакты</h1>
          <p className={styles.contacts__text}>
            Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы
            всегда рады услышать Ваше мнение.
          </p>
          <ContactsAddress />
          <div className={styles.contacts__name}>
            <p className={styles.contacts__name_text}>ИП Шушкевич Андрей Викторович</p>
            <p className={styles.contacts__name_text}>
              УНП 192602485 Минским горисполкомом 10.02.2016
            </p>
          </div>
          <ContactsCaution />
        </article>
        <ContactsForm />
        <aside className={styles.contacts__social}>
          <SocialIcon className={SocialIconClass.large} href='https://instagram.com'>
            <Inst className='svg' alt='instagram' />
          </SocialIcon>
          <SocialIcon className={SocialIconClass.large} href='https://vk.com'>
            <Vk className='svg' alt='vk' />
          </SocialIcon>
          <SocialIcon className={SocialIconClass.large} href='https://facebook.com'>
            <Fb className='svg' alt='facebook' />
          </SocialIcon>
        </aside>
      </div>
    </section>
  );
};

export default Contacts;
