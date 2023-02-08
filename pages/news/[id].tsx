import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { NewsType } from '@mytypes/newsTypes';
import Layout from '@screens/Layout';
import SingleNews from '@screens/SingleNews';
import { API_URL } from '@utils/constants';

export const getServerSideProps: GetServerSideProps<{
  singleData: NewsType;
  singleSimilars: NewsType[];
}> = async ({ query }) => {
  const { id } = query;
  const [singleResponse, similarResponse] = await Promise.all([
    fetch(`${API_URL}/api/news/${id}`),
    fetch(`${API_URL}/api/news?similar=${id}`),
  ]);

  if (singleResponse.status === 404) {
    return {
      notFound: true,
    };
  }
  const [singleData, singleSimilars]: [singleData: NewsType, singleSimilars: NewsType[]] =
    await Promise.all([singleResponse.json(), similarResponse.json()]);

  return { props: { singleData, singleSimilars } };
};

const SingleNewsPage = ({
  singleData,
  singleSimilars,
}: {
  singleData: NewsType;
  singleSimilars: NewsType[];
}) => {
  return (
    <Layout>
      <Head>
        <title>{singleData.title}</title>
        <meta property='og:title' content={singleData.title} key='title' />
        <meta name='description' content={singleData.description} />
      </Head>
      <SingleNews data={singleData} similars={singleSimilars} />
    </Layout>
  );
};

export default SingleNewsPage;
