import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import MailIc from '@public/icons/form/mail.svg';
import UserIc from '@public/icons/form/user.svg';
import { API_URL } from '@utils/constants';
import { useToggle } from '@utils/hooks/useToggle';
import { ContactFormValues, ResponseData } from '@utils/types';
import Button, { ButtonClass } from '@views/Button';
import TextField, { InputType } from '@views/FormFields/TextField';
import Modal from '@views/Modal';

import styles from './ContactsForm.module.scss';

const ContactsForm: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState<ResponseData>({ status: '', message: '' });
  const [requestLoading, setRequestLoading] = useState<boolean>(false);
  const { toggle, handleToggle } = useToggle({ modal: true });

  const modalHead = 'Ваше письмо отправлено!';
  const modalBtn = 'Закрыть окно';

  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    message: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string().email('not valid email').required('required'),
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setRequestLoading(true);

    const response = await fetch(`${API_URL}/api/sender`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    setResponseMessage(data);
    setRequestLoading(false);
  };

  return (
    <section className={styles['contacts-form']}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) =>
          handleSubmit(values).then(() => {
            handleToggle();
            resetForm();
          })
        }>
        <Form>
          <div className={styles['contacts-form__top']}>
            <div className={styles['contacts-form__wrapper']}>
              <TextField
                Icon={UserIc}
                label='Ваше имя'
                inputType={InputType.with_icon}
                name='name'
                placeholder='Введите ваше имя'
              />
            </div>
            <div className={styles['contacts-form__wrapper']}>
              <TextField
                Icon={MailIc}
                label='Ваша электронная почта'
                inputType={InputType.with_icon}
                name='email'
                placeholder='Введите'
              />
            </div>
          </div>
          <div className={styles['contacts-form__bottom']}>
            <TextField
              label='Ваше сообщение'
              as='textarea'
              inputType={InputType.textArea}
              name='message'
              placeholder='Сообщение'
            />
            <div className={styles['contacts-form__button']}>
              <Button type='submit' className={ButtonClass.blue} disabled={requestLoading}>
                Отправить
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
      <Modal
        visible={toggle}
        handleToggle={handleToggle}
        head={modalHead}
        bodyText={responseMessage.message}
        btnText={modalBtn}
      />
    </section>
  );
};

export default ContactsForm;
