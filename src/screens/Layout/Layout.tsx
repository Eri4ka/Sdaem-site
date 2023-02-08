import dynamic from 'next/dynamic';

import Header from '@modules/Header';

const Footer = dynamic(() => import('@components/Footer'), {
  ssr: false,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
