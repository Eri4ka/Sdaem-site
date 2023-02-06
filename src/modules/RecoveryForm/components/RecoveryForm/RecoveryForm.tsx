import { Formik, Form } from 'formik';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import * as Yup from 'yup';

import { useFirebaseError } from '@hooks/useFirebaseError';
import { useToggle } from '@hooks/useToggle';
import MailIc from '@icons/form/mail.svg';
import { AuthStatusType } from '@mytypes/authTypes';
import { auth, sendPasswordResetEmail } from '@utils/firebase';
import Button, { ButtonClass } from '@views/Button';
import TextField, { InputType } from '@views/TextField';
import Caution from '@views/Сaution';

import styles from './RecoveryForm.module.scss';

const SubmitAuth = dynamic(() => import('@components/SubmitAuth'));

const submitAuthInfo = {
  head: 'Сбросьте пароль',
  bodyText:
    'Письмо для сброса пароля отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.',
  btnText: 'Войти',
};

const RecoveryForm: React.FC = () => {
  const [recoveryStatus, setRecoveryStatus] = useState<AuthStatusType>({
    status: 'idle',
    message: '',
  });
  const { toggle, handleToggle } = useToggle({ modal: false });
  const { errorStatus } = useFirebaseError(recoveryStatus);

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('not valid email').required('required'),
  });

  const handleResetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        handleToggle();
      })
      .catch((e) => {
        setRecoveryStatus({ status: 'error', message: e.code });
      });
  };

  const { head, bodyText, btnText } = submitAuthInfo;

  if (toggle) {
    return <SubmitAuth head={head} bodyText={bodyText} btnText={btnText} path={'/signin'} />;
  }

  return (
    <div className={styles.recovery}>
      <div className={styles.recovery__wrapper}>
        <h1 className={styles.recovery__head}>Восстановление пароля</h1>
        <p className={styles.recovery__text}>
          Введите e-mail, указанный при регистрации. А мы отправим вам инструкцию, как восстановить
          пароль.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={({ email }) => handleResetPassword(email)}>
          {({ isValid }) => (
            <Form>
              <div className={styles.recovery__field}>
                <TextField
                  Icon={MailIc}
                  name='email'
                  inputType={InputType.auth}
                  placeholder='Электронная почта'
                />
              </div>
              {recoveryStatus.status === 'error' || !isValid ? (
                <div className={styles.recovery__caution}>
                  <Caution text={errorStatus} valid={!isValid} />
                </div>
              ) : null}
              <div className={styles.recovery__button}>
                <Button type='submit' className={ButtonClass.back}>
                  Восстановить
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RecoveryForm;
