import { useRouter } from 'next/router';
import { useMemo } from 'react';

type useCrumbsProps = {
  title?: string;
};

export const useCrumbs = ({ title = '' }: useCrumbsProps) => {
  const { asPath } = useRouter();
  // console.log('render');
  const getCrumbs = useMemo(() => {
    const routes = asPath.split('/').filter((item) => item.length > 0);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { asPath, getCrumbs };
};
