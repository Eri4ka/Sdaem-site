import { Formik, Form } from 'formik';

import MailIc from '@public/icons/form/mail.svg';
import UserIc from '@public/icons/form/user.svg';
import Button, { ButtonClass } from '@views/Button';
import TextField, { InputType, TextFieldClass } from '@views/FormFields/TextField';

import styles from './ContactsForm.module.scss';

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactsForm: React.FC = () => {
  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    message: '',
  };
  return (
    <section className={styles['contacts-form']}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}>
        <Form>
          <div className={styles['contacts-form__top']}>
            <TextField
              Icon={UserIc}
              label='Ваше имя'
              inputType={InputType.with_icon}
              name='name'
              placeholder='Введите ваше имя'
              className={TextFieldClass.contacts}
            />
            <TextField
              Icon={MailIc}
              label='Ваша электронная почта'
              inputType={InputType.with_icon}
              name='email'
              placeholder='Введите'
              className={TextFieldClass.contacts}
            />
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
              <Button className={ButtonClass.blue}>Отправить</Button>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactsForm;
