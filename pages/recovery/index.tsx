import Head from 'next/head';

import RecoveryForm from '@modules/RecoveryForm';
import AuthLayout from '@screens/Layout/AuthLayout';

const RecoveryPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Sdaem.by - доска для объявлений | Сброс пароля</title>
        <meta
          property='og:title'
          content='Sdaem.by - доска для объявлений | Сброс пароля'
          key='title'
        />
        <meta
          name='description'
          content='Sdaem.by - база объявлений посуточной недвижимости. Здесь вы можете сбросить пароль на Sdaem.by'
        />
      </Head>
      <RecoveryForm />
    </AuthLayout>
  );
};

export default RecoveryPage;
