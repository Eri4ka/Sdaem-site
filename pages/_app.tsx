import { Inter } from '@next/font/google';

import '@styles/globals.scss';
import type { AppProps } from 'next/app';

const inter = Inter();

const App = ({ Component, pageProps }: AppProps) => {
  console.log(Component);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default App;
