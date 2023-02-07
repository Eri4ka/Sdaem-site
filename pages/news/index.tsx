import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { NewsType } from '@mytypes/newsTypes';
import Layout from '@pages/Layout';
import News from '@pages/News';
import { API_URL } from '@utils/constants';

type NewsPageProps = {
  data: NewsType[];
};

export const getServerSideProps: GetServerSideProps<{ data: NewsType[] }> = async () => {
  const response = await fetch(`${API_URL}/api/news`);
  const data: NewsType[] = await response.json();

  return { props: { data } };
};

const NewsPage: React.FC<NewsPageProps> = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>
          Sdaem.by - доска для объявлений | Новости об аренде квартир, коттеджей, усадеб, бань и
          саун
        </title>
        <meta
          property='og:title'
          content='Sdaem.by - доска для объявлений | Новости об аренде квартир, коттеджей, усадеб, бань и саун'
          key='title'
        />
        <meta
          name='description'
          content='Sdaem.by - база объявлений посуточной недвижимости. Здесь представлены новости и статьи из сферы аренды недвижимости'
        />
      </Head>
      <News data={data} />
    </Layout>
  );
};

export default NewsPage;
