import { useEffect } from 'react';
import { Provider } from 'react-redux';

import '@styles/globals.scss';

import { useResize } from '@hooks/useResize';
import { changeBreakPoint } from '@redux/slices/systemInformationSlice';
import { wrapper } from '@redux/store';
import { fetchUser } from '@redux/thunks/authThunks';

import type { AppProps } from 'next/app';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const {
    isDesktopView,
    isDesktopMinimum,
    isTabletLarge,
    isTabletMedium,
    isTabletMinimum,
    isMobileLarge,
    isMobileMedium,
  } = useResize();

  useEffect(() => {
    store.dispatch(fetchUser());
  }, [store]);

  useEffect(() => {
    store.dispatch(
      changeBreakPoint({
        isDesktopView,
        isDesktopMinimum,
        isTabletLarge,
        isTabletMedium,
        isTabletMinimum,
        isMobileLarge,
        isMobileMedium,
      }),
    );
  }, [
    isDesktopView,
    isDesktopMinimum,
    isTabletLarge,
    isTabletMedium,
    isTabletMinimum,
    isMobileLarge,
    isMobileMedium,
    store,
  ]);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
