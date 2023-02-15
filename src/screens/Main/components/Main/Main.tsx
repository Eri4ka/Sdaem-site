import dynamic from 'next/dynamic';
import { memo } from 'react';

import { NewsType } from '@mytypes/newsTypes';
import { useAppSelector } from '@redux/reduxHooks';
import { getSectionCount } from '@redux/selectors/sectionSelectors';

import MainCategory from '../MainCategory';
import MainHead from '../MainHead';

const MainApartments = dynamic(() => import('@modules/MainApartments'), {
  ssr: false,
});
const MainMap = dynamic(() => import('../MainMap'), {
  ssr: false,
});
const MainAbout = dynamic(() => import('../MainAbout'), {
  ssr: false,
});

type MainProps = {
  data: NewsType[];
};

const Main: React.FC<MainProps> = ({ data }) => {
  const sections = useAppSelector(getSectionCount);

  return (
    <section>
      <MainHead sections={sections} />
      <MainCategory sections={sections} />
      <MainApartments />
      <MainMap />
      <MainAbout news={data} />
    </section>
  );
};

export default memo(Main);
