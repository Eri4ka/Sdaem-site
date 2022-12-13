import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import MailIc from '@public/icons/form/mail.svg';
import { auth, sendPasswordResetEmail } from '@utils/firebase';
import { useErrorStatus } from '@utils/hooks/useErrorStatus';
import { useToggle } from '@utils/hooks/useToggle';
import { StatusType } from '@utils/types';
import Button, { ButtonClass } from '@views/Button';
import TextField, { InputType } from '@views/FormFields/TextField';
import Caution from '@views/Сaution';

import Submit from '../Submit';
import styles from './Recovery.module.scss';

const Recovery: React.FC = () => {
  const [recoveryStatus, setRecoveryStatus] = useState<StatusType>({ status: 'idle', message: '' });
  const { toggle, handleToggle } = useToggle({ modal: false });
  const { errorStatus } = useErrorStatus(recoveryStatus);

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

  const head = 'Сбросьте пароль';
  const bodyText =
    'Письмо для сброса пароля отправлено почту. Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.';
  const btnText = 'Войти';

  if (toggle) {
    return <Submit head={head} bodyText={bodyText} btnText={btnText} path={'/signin'} />;
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

export default Recovery;
