import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { clearURLQueries } from '@utils/helpers';

type useCrumbsProps = {
  title?: string;
};

export const useCrumbs = ({ title = '' }: useCrumbsProps) => {
  const { asPath } = useRouter();
  const pathWithoutQueries = useMemo(() => clearURLQueries(asPath), [asPath]);

  const getCrumbs = useMemo(() => {
    const routes = pathWithoutQueries.split('/').filter((item) => item.length > 0);
    let crumbTitle = '';
    let clenPaths = '';

    const cleanRoutes = routes.map((item) => {
      switch (item) {
        case 'news':
          crumbTitle = 'Новости';
          break;
        default:
          crumbTitle = title;
          break;
      }

      clenPaths += `/${item}`;

      return { path: clenPaths, title: crumbTitle };
    });
    return [{ path: '/', title: 'Главная' }, ...cleanRoutes];
  }, [pathWithoutQueries, title]);

  return { asPath, getCrumbs };
};
