import { GetServerSideProps, NextPage } from 'next';

import { SingleSectionType } from '@mytypes/sectionTypes';
import Catalog from '@pages/Catalog';
import Layout from '@pages/Layout';
import { addApartments } from '@redux/slices/apartmentsSlice';
import { addCottages } from '@redux/slices/cottagesSlice';
import { wrapper } from '@redux/store';
import { API_URL } from '@utils/constants';

const CatalogPage: NextPage<{
  section: SingleSectionType;
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
