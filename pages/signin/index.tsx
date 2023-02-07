import Head from 'next/head';

import SignInForm from '@modules/SignInForm';
import AuthLayout from '@pages/Layout/AuthLayout';

const SignInPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Sdaem.by - доска для объявлений | Авторизация</title>
        <meta
          property='og:title'
          content='Sdaem.by - доска для объявлений | Авторизация'
          key='title'
        />
        <meta
          name='description'
          content='Sdaem.by - база объявлений посуточной недвижимости. Здесь вы можете авторизоваться на Sdaem.by'
        />
      </Head>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignInPage;
