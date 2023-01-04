import { GetServerSideProps } from 'next';

import Layout from '@components/Layout';
import Main from '@components/Main';
import { API_URL } from '@utils/constants';
import { addApartments } from '@utils/redux/slices/apartmentsSlice';
import { addCottages } from '@utils/redux/slices/cottagesSlice';
import { wrapper } from '@utils/redux/store';
import { ApartmentsType, CottagesType, NewsType } from '@utils/types';

type HomePageProps = {
  data: NewsType[];
};

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <Layout>
      <Main data={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<{ data: NewsType[] }> =
  wrapper.getServerSideProps((store) => async () => {
    const apartmentsResponse = await fetch(`${API_URL}/api/apartments`);
    const cottagesResponse = await fetch(`${API_URL}/api/cottages`);
    const newsResponse = await fetch(`${API_URL}/api/news`);

    const apartmentsData: ApartmentsType[] = await apartmentsResponse.json();
    const cottagesData: CottagesType[] = await cottagesResponse.json();
    const newsData: NewsType[] = await newsResponse.json();

    const slicedNews = newsData.slice(0, 5);

    store.dispatch(addApartments(apartmentsData));
    store.dispatch(addCottages(cottagesData));

    return { props: { data: slicedNews } };
  });

export default HomePage;
