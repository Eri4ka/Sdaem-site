import { Formik, Form } from 'formik';
import Link from 'next/link';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';

import MailIc from '@public/icons/form/mail.svg';
import PassIc from '@public/icons/form/password.svg';
import UserIc from '@public/icons/form/user.svg';
import { NEXT_APP_SITE_KEY } from '@utils/constants';
import { useErrorStatus } from '@utils/hooks/useErrorStatus';
import { useAppDispatch, useAppSelector } from '@utils/redux/reduxHooks';
import { getAuthState } from '@utils/redux/selectors';
import { fetchCreateUser } from '@utils/redux/slices/authSlice';
import { SiginUpValues } from '@utils/types';
import Button, { ButtonClass } from '@views/Buttons/Button';
import TextField, { InputType } from '@views/FormFields/TextField';
import Caution from '@views/Сaution';

import Submit from '../Submit';
import styles from './SignUp.module.scss';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const { registerStatus } = useAppSelector(getAuthState);
  const { errorStatus } = useErrorStatus(registerStatus);
  const captchaRef = useRef<ReCAPTCHA>(null);

  const initialValues: SiginUpValues = {
    login: '',
    email: '',
    password: '',
    verifyPassword: '',
    recaptcha: '',
  };

  const validationSchema = Yup.object({
    login: Yup.string().required('required'),
    email: Yup.string().email('not valid email').required('required'),
    password: Yup.string().min(6, 'min 6 symbols').required('required'),
    verifyPassword: Yup.string()
      .label('confirm password')
      .required('required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    recaptcha: Yup.string().required('required'),
  });

  const head = 'Подтвердите регистрацию';
  const bodyText =
    'Письмо для подтверждения аккаунта отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.';
  const btnText = 'Понятно';

  if (registerStatus.status === 'success') {
    return <Submit head={head} bodyText={bodyText} btnText={btnText} path={'/'} />;
  }

  return (
    <div className={styles.signup}>
      <div className={styles.signup__wrapper}>
        <div className={styles.signup__content}>
          <div className={styles.signup__form}>
            <h1 className={styles.signup__head}>Регистрация</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values) => {
                dispatch(fetchCreateUser(values));
              }}>
              {({ setFieldValue, isValid }) => (
                <Form>
                  <div className={styles.signup__field}>
                    <TextField
                      Icon={UserIc}
                      name='login'
                      inputType={InputType.auth}
                      placeholder='Логин'
                    />
                  </div>
                  <div className={styles.signup__field}>
                    <TextField
                      Icon={MailIc}
                      name='email'
                      inputType={InputType.auth}
                      placeholder='Электронная почта'
                    />
                  </div>
                  <div className={styles.signup__field}>
                    <TextField
                      Icon={PassIc}
                      name='password'
                      inputType={InputType.auth}
                      type='password'
                      placeholder='Пароль'
                    />
                  </div>
                  <div className={styles.signup__field}>
                    <TextField
                      Icon={PassIc}
                      name='verifyPassword'
                      inputType={InputType.auth}
                      type='password'
                      placeholder='Повторите пароль'
                    />
                  </div>
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey={NEXT_APP_SITE_KEY}
                    size='normal'
                    onChange={(value) => setFieldValue('recaptcha', value, false)}
                  />

                  {!isValid || registerStatus.status === 'error' ? (
                    <div className={styles.signup__button}>
                      <Caution text={errorStatus} valid={!isValid} />
                    </div>
                  ) : null}
                  <div className={styles.signup__button}>
                    <Button
                      type='submit'
                      className={ButtonClass.back}
                      disabled={registerStatus.status === 'loading'}>
                      Зарегистрироваться
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className={styles.signup__info}>
            <ul className={styles.signup__list}>
              Пользователь обязуется:
              <li>
                <span className={styles.signup__item}>
                  предоставлять достоверную и актуальную информацию при регистрации и добавлении
                  объекта;
                </span>
              </li>
              <li>
                <span className={styles.signup__item}>
                  добавлять фотографии объектов соответствующие действительности. Администрация
                  сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную
                  пользователем, если сочтет, что информация не соответствует действительности,
                  носит оскорбительный характер, нарушает права и законные интересы других граждан
                  либо действующее законодательство Республики Беларусь.
                </span>
              </li>
            </ul>
            <div className={styles.signup__account}>
              Уже есть аккаунта?
              <div className={styles.signup__link}>
                <Link href='/signin'>Войдите</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
