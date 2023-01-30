// import dynamic from 'next/dynamic';
import { memo } from 'react';

import MainApartments from '@modules/MainApartments';
import { NewsType } from '@mytypes/newsTypes';
import { useAppSelector } from '@redux/reduxHooks';
import { getSectionCount } from '@redux/selectors/sectionSelectors';

import MainAbout from '../MainAbout';
import MainCategory from '../MainCategory';
import MainHead from '../MainHead';
import MainMap from '../MainMap';

// const MainMap = dynamic(() => import('./components/MainMap'), { ssr: false });
// const MainAbout = dynamic(() => import('./components/MainAbout'), { ssr: false });

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
