import Link from 'next/link';

import Button, { ButtonClass } from '@views/Buttons/Button';

import styles from './Submit.module.scss';

type SubmitProps = {
  head: string;
  bodyText: string;
  btnText: string;
  path: string;
};

const Submit: React.FC<SubmitProps> = ({ head, bodyText, btnText, path }) => {
  return (
    <div className={styles.submit}>
      <div className={styles.submit__wrapper}>
        <h1 className={styles.submit__head}>{head}</h1>
        <p className={styles.submit__text}>{bodyText}</p>
        <div className={styles.submit__button}>
          <Link href={path}>
            <Button className={ButtonClass.back}>{btnText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Submit;
