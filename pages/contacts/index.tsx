import Head from 'next/head';

import Contacts from '@screens/Contacts';
import Layout from '@screens/Layout';

const ContactsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Sdaem.by - доска для объявлений | Контакты</title>
        <meta
          property='og:title'
          content='Sdaem.by - доска для объявлений | Контакты'
          key='title'
        />
        <meta
          name='description'
          content='Sdaem.by - база объявлений посуточной недвижимости. Оставляйте заявки, пожелания, предложения'
        />
      </Head>
      <Contacts />
    </Layout>
  );
};

export default ContactsPage;
