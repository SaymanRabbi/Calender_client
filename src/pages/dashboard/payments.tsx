import React from 'react';

import type { NextPageWithLayout } from '@/types';

import { Body1, Heading4 } from '@/components/Typography';
import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import { GradientButton, OutlineButton } from '@/components/Buttons';
import DashboardNav from '@/features/shared/components/DashboardNav';
import SidebarTitleCard from '@/features/shared/components/SidebarTitleCard';
import Card from '@/components/Card';

const Payments: NextPageWithLayout = function () {
  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/dashboard" />
      <DashboardWrapper.Content>
        <DashboardWrapper.SideBar>
          <SidebarTitleCard
            title="Payments"
            info="Set up an manage your Stripe Connect account to receive money
                from your guests."
          />
        </DashboardWrapper.SideBar>
        <DashboardWrapper.MainContent>
          <Card>
            <div className="flex flex-col items-start self-stretch gap-6">
              <div className="flex flex-col gap-1.5 items-start self-stretch">
                <Heading4>Get paid</Heading4>
                <Body1 className="text-gray-400">
                  Receive money from your guests by setting up your payment
                  information.
                </Body1>
              </div>
              <div className="flex items-center self-stretch justify-end">
                <div className="flex items-center justify-end gap-3">
                  <GradientButton text="Payments setup" />
                  <OutlineButton text="Button" />
                </div>
              </div>
            </div>
          </Card>
        </DashboardWrapper.MainContent>
      </DashboardWrapper.Content>
    </DashboardWrapper>
  );
};

Payments.layout = 'dashboard';
export default Payments;
