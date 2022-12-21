import Image from 'next/image';
import { useRouter } from 'next/router';

import HomeIcon from '@public/icons/home.svg';
import ErrorImage from '@public/images/404.svg';
import dots from '@public/images/dots.png';
import whiteDots from '@public/images/whitedots.png';
import Button, { ButtonClass } from '@views/Buttons/Button';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <section className={styles.notfound}>
      <div className={styles.notfound__wrapper}>
        <div className={styles.notfound__content}>
          <h1 className={styles.notfound__head}>Ошибка 404</h1>
          <p className={styles.notfound__text}>
            Возможно, у вас опечатка в адресе страницы, или её просто не существует
          </p>
          <div className={styles.notfound__button}>
            <Button className={ButtonClass.back} onClick={() => router.push('/')}>
              <div className={styles.notfound__icon}>
                <HomeIcon />
              </div>
              Вернуться на главную
            </Button>
          </div>
        </div>
        <div className={styles.notfound__image}>
          <ErrorImage />
        </div>
      </div>
      <div className={styles.notfound__elems}>
        <Image className={styles.notfound__dots} src={dots} alt='dots' />
        <Image className={styles.notfound__whitedots} src={whiteDots} alt='dots' />
      </div>
    </section>
  );
};

export default NotFound;
