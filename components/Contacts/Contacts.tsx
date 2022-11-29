import Fb from '@public/icons/fb.svg';
import Inst from '@public/icons/inst.svg';
import Vk from '@public/icons/vk.svg';
import SocialIcon, { SocialIconClass } from '@views/SocialIcon';

import ContactsAddress from './components/ContactsAddress';
import ContactsCaution from './components/ContactsCaution';
import ContactsForm from './components/ContactsForm';
import styles from './Contacts.module.scss';

const Contacts: React.FC = () => {
  return (
    <article className={styles.contacts}>
      <div className={styles.contacts__wrapper}>
        <section className={styles.contacts__content}>
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
        </section>
        <ContactsForm />
        <aside className={styles.contacts__social}>
          <SocialIcon className={SocialIconClass.large} href='https://instagram.com'>
            <Inst className='svg' />
          </SocialIcon>
          <SocialIcon className={SocialIconClass.large} href='https://vk.com'>
            <Vk className='svg' />
          </SocialIcon>
          <SocialIcon className={SocialIconClass.large} href='https://facebook.com'>
            <Fb className='svg' />
          </SocialIcon>
        </aside>
      </div>
    </article>
  );
};

export default Contacts;
