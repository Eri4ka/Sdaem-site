import dynamic from 'next/dynamic';

import Header from '@components/Header';

const Footer = dynamic(() => import('@components/Footer'));

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
