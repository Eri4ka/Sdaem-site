import { GetServerSideProps } from 'next';

import Layout from '@components/Layout';
import SingleNews from '@components/SingleNews';
import { API_URL } from '@utils/constants';
import { NewsType } from '@utils/types';

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
      <SingleNews data={singleData} similars={singleSimilars} />
    </Layout>
  );
};

export default SingleNewsPage;
