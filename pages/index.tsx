import { GetServerSideProps } from 'next';

import Layout from '@components/Layout';
import Main from '@components/Main';
import { API_URL } from '@utils/constants';
import { addApartments } from '@utils/redux/slices/apartmentsSlice';
import { wrapper } from '@utils/redux/store';
import { ApartmentsType } from '@utils/types';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const response = await fetch(`${API_URL}/api/apartments`);
    const data: ApartmentsType[] = await response.json();

    store.dispatch(addApartments(data));

    return { props: {} };
  },
);

export default HomePage;
