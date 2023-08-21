import React, { PropsWithChildren } from 'react';

import DashboardHeader from '../components/Header/DashboardHeader';
import ThankYouFooter from '../components/Footer/ThankYouFooter';
import FooterCopyRight from '../components/Footer/FooterCopyRight';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-100">
      <DashboardHeader />
      {children}
      <ThankYouFooter />
      <FooterCopyRight />
    </div>
  );
}
