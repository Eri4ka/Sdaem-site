import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Modal from '@components/Modal';
import MailIc from '@icons/form/mail.svg';
import UserIc from '@icons/form/user.svg';
import { ContactFormValues } from '@mytypes/mailTypes';
import { useToggle } from '@utils/hooks/useToggle';
import Button, { ButtonClass } from '@views/Button';
import TextField, { InputType } from '@views/TextField';

import { useSendMail } from '../../hooks/useSendMail';
import styles from './ContactsForm.module.scss';

const modalInfo = {
  modalHead: 'Ваше письмо отправлено!',
  modalBtn: 'Закрыть окно',
};

const ContactsForm: React.FC = () => {
  const { responseMessage, requestLoading, onSendMail } = useSendMail();
  const { toggle, handleToggle } = useToggle({ modal: true });

  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    message: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('required'),
    email: Yup.string().email('not valid email').required('required'),
  });

  const { modalHead, modalBtn } = modalInfo;

  return (
    <article className={styles['contacts-form']}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) =>
          onSendMail(values).then(() => {
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
    </article>
  );
};

export default ContactsForm;
