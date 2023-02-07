import Head from 'next/head';

import Layout from '@pages/Layout';
import NotFound from '@pages/NotFound';

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
