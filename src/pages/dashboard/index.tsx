import React from 'react';

import type { NextPageWithLayout } from '@/types';

import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import CTASection from '@/features/shared/components/CTASection';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import DashboardSidebar from '@/features/dashboard/components/Sidebar';
import DashboardMainContent from '@/features/dashboard/components/MainContent';

const Dashboard: NextPageWithLayout = function () {
  return (
    <ContentWrapper className="bg-gray-100">
      <CTASection
        banner={{
          visible: true,
          text: 'Space reserved for news and information banner.',
        }}
        button={{
          visible: true,
          text: 'CTA BUTTON',
          link: '/about',
        }}
      />
      <DashboardWrapper>
        <DashboardWrapper.Content className="!mt-0">
          <DashboardWrapper.SideBar>
            <DashboardSidebar />
          </DashboardWrapper.SideBar>
          <DashboardWrapper.MainContent>
            <DashboardMainContent />
          </DashboardWrapper.MainContent>
        </DashboardWrapper.Content>
      </DashboardWrapper>
    </ContentWrapper>
  );
};

Dashboard.layout = 'dashboard';
export default Dashboard;
