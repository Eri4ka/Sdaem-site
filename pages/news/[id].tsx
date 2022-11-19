import { GetServerSideProps } from 'next';

import Layout from '@components/Layout';
import SingleNews from '@components/SingleNews';
import { API_URL } from '@utils/constants';
import { NewsType } from '@utils/types';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const response = await fetch(`${API_URL}/api/news/${id}`);
  const data: NewsType = await response.json();

  return { props: { data } };
};

const SingleNewsPage = ({ data }: { data: NewsType }) => {
  return (
    <Layout>
      <SingleNews data={data} />
    </Layout>
  );
};

export default SingleNewsPage;
