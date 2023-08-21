import React, { PropsWithChildren } from 'react';

import PublicHeader from '../components/Header/PublicHeader';
import Footer from '../components/Footer/Footer';
import ThankYouFooter from '../components/Footer/ThankYouFooter';
import FooterCopyRight from '../components/Footer/FooterCopyRight';

export default function GeneralLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-white">
      <PublicHeader />
      {children}
      <ThankYouFooter />
      <Footer />
      <FooterCopyRight />
    </div>
  );
}
