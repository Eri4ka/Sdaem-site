import Head from 'next/head';

import Layout from '@screens/Layout';
import NotFound from '@screens/NotFound';

const ErrorPage = () => {
  return (
    <Layout>
      <Head>
        <title>Страница не найдена</title>
      </Head>
      <NotFound />
    </Layout>
  );
};

export default ErrorPage;
