import { GetServerSideProps } from 'next';

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
      <News data={data} />
    </Layout>
  );
};

export default NewsPage;
