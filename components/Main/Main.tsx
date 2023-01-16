import dynamic from 'next/dynamic';
import { memo } from 'react';

import { useAppSelector } from '@utils/redux/reduxHooks';
import { getSectionCount } from '@utils/redux/selectors';
import { NewsType } from '@utils/types';

import MainAbout from './components/MainAbout';
import MainCategory from './components/MainCategory';
import MainHead from './components/MainHead';
import MainItems from './components/MainItems';
import MainMap from './components/MainMap';

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
      <MainItems />
      <MainMap />
      <MainAbout news={data} />
    </section>
  );
};

export default memo(Main);
