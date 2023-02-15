import Image from 'next/image';
import Link from 'next/link';

import { declinationCityName } from '@helpers/declinationCityName';
import Fb from '@icons/fb.svg';
import Inst from '@icons/inst.svg';
import belkart from '@icons/payments/belkart.png';
import mastercard from '@icons/payments/mastercard.png';
import securecode from '@icons/payments/securecode.png';
import verifiedvisa from '@icons/payments/verifiedvisa.png';
import visa from '@icons/payments/visa.png';
import webpay from '@icons/payments/webpay.png';
import Vk from '@icons/vk.svg';
import logo from '@images/logo.png';
import { useAppSelector } from '@redux/reduxHooks';
import { getSectionState } from '@redux/selectors/sectionSelectors';

import styles from './Footer.module.scss';

type FooterSectionItemProps = {
  title: string;
  alias: string;
};

const Footer: React.FC = () => {
  const { apartments } = useAppSelector(getSectionState);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__info}>
          <div className={styles.footer__company}>
            <div className={styles.footer__logo}>
              <Image src={logo} alt='logo' priority placeholder='blur' />
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
              <Link href={'/cottages'} className={styles.footer__head}>
                Коттеджи и усадьбы
              </Link>
              <Link href={'/baths'} className={styles.footer__head}>
                Бани и сауны
              </Link>
              <Link href={'/automobile'} className={styles.footer__head}>
                Авто на прокат
              </Link>
            </div>
            <div className={styles.footer__apartments}>
              <p className={styles.footer__head}>Квартиры</p>
              <ul className={`list ${styles.footer__list}`}>
                {apartments.map(({ id, title, alias }) => (
                  <FooterSectionItem key={id} title={title} alias={alias} />
                ))}
              </ul>
            </div>
            <div className={styles.footer__sections}>
              <Link href={'/news'} className={styles.footer__text}>
                Новости
              </Link>
              <Link href={'/tariff'} className={styles.footer__text}>
                Рамзещение и тарифы
              </Link>
              <Link href={'/map'} className={styles.footer__text}>
                Объявления на карте
              </Link>
              <Link href={'/contacts'} className={styles.footer__text}>
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
                  <Inst className={styles.footer__inst} alt={'instagram-logo'} />
                </a>
                <a
                  href='https://vk.com'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.footer__svg}>
                  <Vk className={styles.footer__vk} alt={'vk-logo'} />
                </a>
                <a
                  href='https://facebook.com'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.footer__svg}>
                  <Fb className={styles.footer__fb} alt={'facebook-logo'} />
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

const FooterSectionItem: React.FC<FooterSectionItemProps> = ({ title, alias }) => {
  const cityName = declinationCityName(title);
  const transformedTitle = `Квартиры в ${cityName}`;

  return (
    <li className={styles.footer__text}>
      <Link href={`/${alias}`}>{transformedTitle}</Link>
    </li>
  );
};

export default Footer;
