import Image from 'next/image';
import { useRouter } from 'next/router';

import HomeIcon from '@icons/home.svg';
import ErrorImage from '@images/404.svg';
import dots from '@images/dots.png';
import whiteDots from '@images/whitedots.png';
import Button, { ButtonClass } from '@views/Button';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleBackToMainPage = () => router.push('/');

  return (
    <section className={styles.notfound}>
      <div className={styles.notfound__wrapper}>
        <div className={styles.notfound__content}>
          <h1 className={styles.notfound__head}>Ошибка 404</h1>
          <p className={styles.notfound__text}>
            Возможно, у вас опечатка в адресе страницы, или её просто не существует
          </p>
          <div className={styles.notfound__button}>
            <Button className={ButtonClass.back} onClick={handleBackToMainPage}>
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
        <Image className={styles.notfound__dots} src={dots} alt='dots' priority />
        <Image className={styles.notfound__whitedots} src={whiteDots} alt='dots' priority />
      </div>
    </section>
  );
};

export default NotFound;
