import { Inter } from '@next/font/google';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import '@styles/globals.scss';

import { fetchUser } from '@utils/redux/slices/authSlice';
import { wrapper } from '@utils/redux/store';

import type { AppProps } from 'next/app';

const inter = Inter();

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    store.dispatch(fetchUser());
  }, [store]);

  return (
    <Provider store={store}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
