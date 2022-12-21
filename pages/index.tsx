import { GetServerSideProps } from 'next';

import Layout from '@components/Layout';
import Main from '@components/Main';
import { API_URL } from '@utils/constants';
import { addApartments } from '@utils/redux/slices/apartmentsSlice';
import { addCottages } from '@utils/redux/slices/cottagesSlice';
import { wrapper } from '@utils/redux/store';
import { ApartmentsType, CottagesType } from '@utils/types';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const apartmentsResponse = await fetch(`${API_URL}/api/apartments`);
    const cottagesResponse = await fetch(`${API_URL}/api/cottages`);

    const apartmentsData: ApartmentsType[] = await apartmentsResponse.json();
    const cottagesData: CottagesType[] = await cottagesResponse.json();

    store.dispatch(addApartments(apartmentsData));
    store.dispatch(addCottages(cottagesData));

    return { props: {} };
  },
);

export default HomePage;
