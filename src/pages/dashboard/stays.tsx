import React from 'react';

import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import { OutlineButton, StayHistoryButton } from '@/components/Buttons';
import SidebarTitleCard from '@/features/shared/components/SidebarTitleCard';
import SettingsCard from '@/features/stays/components/SettingsCard';
import StayCardInfo from '@/features/stays/components/StayCardInfo';
import DashboardNav from '@/features/shared/components/DashboardNav';
import StayIndecator from '@/features/shared/components/StayIndicator';

function Stays() {
  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/dashboard" />
      <DashboardWrapper.Content>
        <DashboardWrapper.SideBar>
          <SidebarTitleCard
            title="Stays"
            info="Your upcoming and past stays."
          />
        </DashboardWrapper.SideBar>
        <DashboardWrapper.MainContent>
          <div className="flex flex-col items-start w-full gap-6">
            <StayIndecator>
              Your upcoming stays will be listed here.
            </StayIndecator>

            <SettingsCard
              gradient
              title="Property name - Space name"
              info="Arrive: 7/10/23  ->  Depart: 7/15/23"
              action={<OutlineButton text="View property page" />}
            >
              <StayCardInfo
                instruction="Instructions here. Whatever the property owner wrote in the
                    text field. Put the full text regardless of length."
              />
            </SettingsCard>

            <SettingsCard
              title="Stay Instructions:"
              info="Arrive: 7/10/23  ->  Depart: 7/15/23"
              action={<OutlineButton text="View property page" />}
            >
              <StayCardInfo
                instruction="Instructions here. Whatever the property owner wrote in the
                    text field. Put the full text regardless of length."
              />
            </SettingsCard>

            <SettingsCard
              title="Property name - Space name"
              info="Arrive: 7/10/23  ->  Depart: 7/15/23"
              action={
                <div className="flex gap-3 max-lg:flex-col">
                  <OutlineButton text="Cancel Stay" />
                  <OutlineButton text="View property page" />
                </div>
              }
            >
              <StayCardInfo
                instruction="Instructions here. Whatever the property owner wrote in the
                    text field. Put the full text regardless of length."
              />
            </SettingsCard>

            <SettingsCard
              title="Property name - Space name"
              info="Arrive: 7/10/23  ->  Depart: 7/15/23"
              action={
                <div className="flex gap-3 max-lg:flex-col">
                  <OutlineButton text="Cancel Request" />
                  <OutlineButton text="View property page" />
                </div>
              }
            >
              <StayCardInfo status="requested" />
            </SettingsCard>
            <SettingsCard
              title="Property name - Space name"
              info="Arrive: 7/10/23  ->  Depart: 7/15/23"
              infoCross
              action={<OutlineButton text="View property page" />}
            >
              <StayCardInfo status="rejected" />
            </SettingsCard>
            <SettingsCard
              title="Property name - Space name"
              info="Arrive: 7/10/23  ->  Depart: 7/15/23"
              infoCross
              action={<OutlineButton text="View property page" />}
            >
              <StayCardInfo status="cancelled" />
            </SettingsCard>

            <StayHistoryButton text="Show Past Stays" />
            <StayIndecator>No past stays to show.</StayIndecator>

            <SettingsCard
              title="Property name - Space name"
              info="Arrive: 7/10/23  ->  Depart: 7/15/23"
              action={<OutlineButton text="View property page" />}
            >
              <StayCardInfo
                status="inactive"
                instruction="Instructions here. Whatever the property owner wrote in the
                    text field. Put the full text regardless of length."
              />
            </SettingsCard>

            <StayHistoryButton text="Show More" />
          </div>
        </DashboardWrapper.MainContent>
      </DashboardWrapper.Content>
    </DashboardWrapper>
  );
}

Stays.layout = 'dashboard';

export default Stays;
