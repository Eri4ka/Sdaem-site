import { GetServerSideProps, NextPage } from 'next';

import Catalog from '@components/Catalog';
import Layout from '@components/Layout';
import { API_URL } from '@utils/constants';
import { addApartments } from '@utils/redux/slices/apartmentsSlice';
import { addCottages } from '@utils/redux/slices/cottagesSlice';
import { wrapper } from '@utils/redux/store';
import { ApartmentsType, SingleSectionType } from '@utils/types';

const CatalogPage: NextPage<{
  section: SingleSectionType;
  catalog: ApartmentsType[];
}> = ({ section }) => {
  return (
    <Layout>
      <Catalog section={section} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const { alias } = query;
      const response = await fetch(`${API_URL}/api/${alias}`);

      if (response.status === 404) {
        return {
          notFound: true,
        };
      }

      const { catalog, ...data } = await response.json();

      switch (data.section_name) {
        case 'apartments':
          store.dispatch(addApartments(catalog));
          break;
        case 'cottages':
          store.dispatch(addCottages(catalog));
          break;
      }

      return { props: { section: data } };
    },
);

export default CatalogPage;
