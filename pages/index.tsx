import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { NewsType } from '@mytypes/newsTypes';
import { ApartmentsType, CottagesType } from '@mytypes/productTypes';
import Layout from '@pages/Layout';
import Main from '@pages/Main';
import { addApartments } from '@redux/slices/apartmentsSlice';
import { addCottages } from '@redux/slices/cottagesSlice';
import { wrapper } from '@redux/store';
import { API_URL } from '@utils/constants';

type HomePageProps = {
  data: NewsType[];
};

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>
          Sdaem.by - доска для объявлений | Посуточная аренда квартир, коттеджей, бань и саун
        </title>
        <meta
          property='og:title'
          content='Sdaem.by - доска для объявлений | Посуточная аренда квартир, коттеджей, бань и саун'
          key='title'
        />
        <meta
          name='description'
          content='Sdaem.by - база объявлений посуточной недвижимости. Здесь вы сможете снять посуточно любые понравишеся квартиры, апартаменты, коттеджи, усадьбы, бани и сауны. А так же, разместить собственные объявления.'
        />
        <meta
          name='keywords'
          content='недвижимость, аренда, продажа, купить, снять, квартиры, дома, бани, сауны, усадьбы, автомобили'></meta>
      </Head>
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
