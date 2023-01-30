import { Formik, Form } from 'formik';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect, memo } from 'react';
import * as Yup from 'yup';

import { useFirebaseError } from '@hooks/useFirebaseError';
import PassIc from '@icons/form/password.svg';
import UserIc from '@icons/form/user.svg';
import { SiginInValues } from '@mytypes/authTypes';
import { useAppDispatch, useAppSelector } from '@redux/reduxHooks';
import { getAuthState } from '@redux/selectors/authSelectors';
import Button, { ButtonClass } from '@views/Button';
import TextField, { InputType } from '@views/TextField';
import Toggle from '@views/Toggle';
import Caution from '@views/Сaution';

import { fetchLoginUser } from '../../redux/thunks';
import styles from './SignInForm.module.scss';

const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, loginStatus } = useAppSelector(getAuthState);
  const { errorStatus } = useFirebaseError(loginStatus);

  const initialValues: SiginInValues = {
    login: '',
    password: '',
    remember: false,
  };
  const validationSchema = Yup.object({
    login: Yup.string().required('required'),
    password: Yup.string().min(6, 'min 6 symbols').required('required'),
  });

  useEffect(() => {
    if (user) {
      Router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(user)]);

  return (
    <div className={styles.signin}>
      <div className={styles.signin__wrapper}>
        <h1 className={styles.signin__head}>Авторизация</h1>
        <p className={styles.signin__text}>
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            dispatch(fetchLoginUser(values));
          }}>
          {({ isValid }) => (
            <Form>
              <div className={styles.signin__field}>
                <TextField
                  Icon={UserIc}
                  name='login'
                  inputType={InputType.auth}
                  placeholder='Логин'
                />
              </div>
              <div className={styles.signin__field}>
                <TextField
                  Icon={PassIc}
                  name='password'
                  inputType={InputType.auth}
                  type='password'
                  placeholder='Пароль'
                />
              </div>
              <div className={styles.signin__center}>
                <Toggle name='remember' role='switch' text='Запомнить меня' />
                <Link href='/recovery'>
                  <span className={styles.signin__forget}>Забыли пароль?</span>
                </Link>
              </div>
              {loginStatus.status === 'error' || !isValid ? (
                <div className={styles.signin__caution}>
                  <Caution text={errorStatus} valid={!isValid} />
                </div>
              ) : null}
              <div className={styles.signin__button}>
                <Button
                  type='submit'
                  className={ButtonClass.back}
                  disabled={loginStatus.status === 'loading'}>
                  Войти
                </Button>
              </div>
              <div className={styles.signin__account}>
                Еще нет аккаунта?
                <div className={styles.signin__link}>
                  <Link href='/signup'>Cоздайте аккаунт</Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default memo(SignInForm);
