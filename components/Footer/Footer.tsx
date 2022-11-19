import Image from 'next/image';
import Link from 'next/link';

import Fb from '@public/icons/fb.svg';
import Inst from '@public/icons/inst.svg';
import belkart from '@public/icons/payments/belkart.png';
import mastercard from '@public/icons/payments/mastercard.png';
import securecode from '@public/icons/payments/securecode.png';
import verifiedvisa from '@public/icons/payments/verifiedvisa.png';
import visa from '@public/icons/payments/visa.png';
import webpay from '@public/icons/payments/webpay.png';
import Vk from '@public/icons/vk.svg';
import logo from '@public/images/logo.png';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__info}>
          <div className={styles.footer__company}>
            <div className={styles.footer__logo}>
              <Image src={logo} alt='logo' />
            </div>
            <span className={styles.footer__name}>сдаём бай</span>
          </div>
          <p className={styles.footer__requisites}>ИП Шушкевич Андрей Викторович</p>
          <p className={styles.footer__requisites}>УНП 192602485 Минским горисполкомом</p>
          <p className={styles.footer__requisites}>10.02.2016</p>
          <p className={styles.footer__requisites}>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>
          <p className={styles.footer__requisites}>+375 29 621 48 33, sdaem@sdaem.by</p>
          <p className={styles.footer__requisites}>Режим работы: 08:00-22:00</p>
        </div>
        <div className={styles.footer__content}>
          <div className={styles.footer__menu}>
            <div className={styles.footer__ads}>
              <Link href={'/'} className={styles.footer__head}>
                Коттеджи и усадьбы
              </Link>
              <Link href={'/'} className={styles.footer__head}>
                Бани и сауны
              </Link>
              <Link href={'/'} className={styles.footer__head}>
                Авто на прокат
              </Link>
            </div>
            <div className={styles.footer__apartments}>
              <Link href={'/'} className={styles.footer__head}>
                Квартиры
              </Link>
              <ul className={`list ${styles.footer__list}`}>
                <li className={styles.footer__text}>Квартиры в Минске</li>
                <li className={styles.footer__text}>Квартиры в Гомеле</li>
                <li className={styles.footer__text}>Квартиры в Бресте</li>
                <li className={styles.footer__text}>Квартиры в Витебске</li>
                <li className={styles.footer__text}>Квартиры в Гродно</li>
                <li className={styles.footer__text}>Квартиры в Могилеве</li>
              </ul>
            </div>
            <div className={styles.footer__sections}>
              <Link href={'/news'} className={styles.footer__text}>
                Новости
              </Link>
              <Link href={'/'} className={styles.footer__text}>
                Рамзещение и тарифы
              </Link>
              <Link href={'/'} className={styles.footer__text}>
                Объявления на карте
              </Link>
              <Link href={'/'} className={styles.footer__text}>
                Контакты
              </Link>
            </div>
          </div>
          <div className={styles.footer__badges}>
            <div className={styles.footer__social}>
              <span className={styles.footer__soc}>Мы в соцсетях</span>
              <div className={styles.footer__icons}>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.footer__svg}>
                  <Inst className={styles.footer__inst} />
                </a>
                <a
                  href='https://vk.com'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.footer__svg}>
                  <Vk className={styles.footer__vk} />
                </a>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.footer__svg}>
                  <Fb className={styles.footer__fb} />
                </a>
              </div>
            </div>
            <div className={styles.footer__payments}>
              <Image
                className={styles.footer__image}
                src={visa}
                alt='visa'
                width={42}
                height={13}
              />
              <Image
                className={styles.footer__image}
                src={webpay}
                alt='webpay'
                width={86}
                height={16}
              />
              <Image
                className={styles.footer__image}
                src={verifiedvisa}
                alt='verifiedvisa'
                width={38}
                height={16}
              />
              <Image
                className={styles.footer__image}
                src={mastercard}
                alt='mastercard'
                width={26}
                height={20}
              />
              <Image
                className={styles.footer__image}
                src={securecode}
                alt='securecode'
                width={46}
                height={16}
              />
              <Image
                className={styles.footer__image}
                src={belkart}
                alt='belkart'
                width={22}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
