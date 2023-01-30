import CatalogProducts from '@modules/CatalogProducts';
import CatalogSorting from '@modules/CatalogSorting';
import { SingleSectionType } from '@mytypes/sectionTypes';

import CatalogFilter from '../CatalogFilter';
import CatalogHead from '../CatalogHead';
import CatalogMap from '../CatalogMap';

type CatalogProps = {
  section: SingleSectionType;
};

const Catalog: React.FC<CatalogProps> = ({ section }) => {
  return (
    <section>
      <CatalogHead section={section} />
      <CatalogFilter />
      <CatalogSorting />
      <CatalogProducts />
      <CatalogMap />
    </section>
  );
};

export default Catalog;
