import Head from 'next/head';

import SignUpForm from '@modules/SignUpForm';
import AuthLayout from '@pages/Layout/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Sdaem.by - доска для объявлений | Регистрация</title>
        <meta
          property='og:title'
          content='Sdaem.by - доска для объявлений | Регистрация'
          key='title'
        />
        <meta
          name='description'
          content='Sdaem.by - база объявлений посуточной недвижимости. Здесь вы можете зарегистрироваться на Sdaem.by'
        />
      </Head>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
