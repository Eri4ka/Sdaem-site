import Image from 'next/image';
import { memo } from 'react';

import roomImg from '@images/card/room1.jpg';
import NewsBlock from '@modules/NewsBlock';
import { NewsType } from '@mytypes/newsTypes';

import styles from './MainAbout.module.scss';

type MainAboutProps = {
  news: NewsType[];
};

const MainAbout: React.FC<MainAboutProps> = ({ news }) => {
  return (
    <article className={styles['main-about']}>
      <div className={styles['main-about__info']}>
        <p className={styles['main-about__title']}>ЧТО ТАКОЕ SDAEM.BY</p>
        <h2 className={styles['main-about__heading']}>Квартира на сутки в Минске</h2>
        <div className={styles['main-about__content']}>
          <div className={styles['main-about__image']}>
            <Image
              src={roomImg}
              fill
              alt='room'
              placeholder='blur'
              style={{ objectFit: 'cover', borderRadius: '20px' }}
              sizes='(min-width: 335px) 405px, 230px'
            />
          </div>
          <p className={styles['main-about__description']}>
            <strong>Нужна квартира на сутки в Минске?</strong>
            <br />
            На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает{' '}
            <strong>более 500 квартир.</strong> Благодаря удобной навигации вы быстро найдете
            подходящий вариант.
            <br />
            <br />В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры
            с большим количеством комнат в разных районах города, с различной степенью удобства от
            дешевых до VIP с джакузи.
          </p>
        </div>
        <p className={styles['main-about__description']}>
          Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться
          с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте
          представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от
          необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также
          пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать
          квартиру на сутки.
        </p>
      </div>
      <NewsBlock news={news} />
    </article>
  );
};

export default memo(MainAbout);
