import React from 'react';

import {
  GradientButton,
  OutlineButton,
  StayHistoryButton,
} from '@/components/Buttons';
import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import StayIndicator from '@/features/shared/components/StayIndicator';
import Checkbox from '@/components/Checkbox';
import SettingsCard from '@/features/stays/components/SettingsCard';
import DashboardNav from '@/features/shared/components/DashboardNav';
import StayCardInfo from '@/features/stays/components/StayCardInfo';
import Avatar from '@/components/Avatar';
import { Heading4 } from '@/components/Typography';
import SidebarTitleCard from '@/features/shared/components/SidebarTitleCard';

const data1 = [
  {
    name: 'Space name',
    arrive: '7/10/23',
    depart: '7/15/23',
    status: 'requested',
    guestName: 'Guest Name',
  },
  {
    name: 'Space name',
    arrive: '7/10/23',
    depart: '7/15/23',
    status: 'cancel-requested',
    guestName: 'Guest Name',
  },
];

const data2 = [
  {
    name: 'Space name',
    arrive: '7/10/23',
    depart: '7/15/24',

    guestName: 'Guest Name',
  },
  {
    name: 'Space name',
    arrive: '7/10/23',
    depart: '7/15/23',

    guestName: 'Guest Name',
  },
  {
    name: 'Space name',
    arrive: '7/10/23',
    depart: '7/15/23',
    status: 'cancelled',
    guestName: 'Guest Name',
  },
  {
    name: 'Space name',
    arrive: '7/10/23',
    depart: '7/15/23',
    status: 'rejected',
    guestName: 'Guest Name',
  },
];
const past = [
  {
    name: 'Space name',
    arrive: '7/10/23',
    depart: '7/15/23',
    status: 'Stay Requested',
    guestName: 'Guest Name',
  },
];

function Guests() {
  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/dashboard" />
      <DashboardWrapper.Content>
        <DashboardWrapper.SideBar>
          <SidebarTitleCard
            title="Guests"
            info="Manage upcoming guest stays and requests for your properties."
          />
          <SettingsCard title="Property:">
            <div>
              <Checkbox
                id="helpful_tips"
                name="helpful_tips"
                label="Property name"
              />
              <Checkbox
                id="helpful_tips-2"
                name="helpful_tips-2"
                label="Property name"
              />
            </div>
          </SettingsCard>
        </DashboardWrapper.SideBar>
        <DashboardWrapper.MainContent>
          <div className="flex flex-col items-start w-full gap-6 ">
            {data1.map((stay: any, index: number) => {
              let action;
              if (stay.status === 'requested') {
                action = (
                  <div className="flex gap-3 max-lg:flex-col">
                    <OutlineButton text="Decline Stay" />
                    <GradientButton text="Approve Stay" />
                  </div>
                );
              } else if (stay.status === 'cancelRequested') {
                action = (
                  <div className="flex gap-3 max-lg:flex-col">
                    <OutlineButton text="Decline Cancelation" />
                    <GradientButton text="Approve Cancelation" />
                  </div>
                );
              }
              return (
                <SettingsCard
                  key={`stay-${index + 1}`}
                  title="Property name - Space name"
                  info={`Arrive: ${stay.arrive}  ->  Depart: ${stay.depart}`}
                  action={action}
                >
                  {stay.status ? <StayCardInfo status={stay.status} /> : null}
                  <div className="flex items-center gap-3">
                    <Avatar />
                    <Heading4>Guest Name</Heading4>
                  </div>
                </SettingsCard>
              );
            })}

            <StayIndicator>No guest stays are scheduled.</StayIndicator>

            {data2.map((stay: any, index: number) => {
              let action;
              let gradient = false;
              let infoCross = false;
              if (stay.depart === '7/15/24') {
                gradient = true;
              }
              if (stay.status === 'rejected' || stay.status === 'cancelled') {
                infoCross = true;
              } else {
                action = <OutlineButton text="Cancel Stay" />;
              }
              return (
                <SettingsCard
                  gradient={gradient}
                  infoCross={infoCross}
                  key={`stay-${index + 1}`}
                  title="Property name - Space name"
                  info={`Arrive: ${stay.arrive}  ->  Depart: ${stay.depart}`}
                  action={action}
                >
                  {stay.status ? <StayCardInfo status={stay.status} /> : null}
                  <div className="flex items-center gap-3">
                    <Avatar />
                    <Heading4>Guest Name</Heading4>
                  </div>
                </SettingsCard>
              );
            })}

            <StayHistoryButton text="Show More" />
            <StayIndicator>No past guest stays to show.</StayIndicator>

            {past.map((stay: any, index: number) => (
              <SettingsCard
                key={`stay-${index + 1}`}
                title="Property name - Space name"
                info={`Arrive: ${stay.arrive}  ->  Depart: ${stay.depart}`}
              >
                <StayCardInfo status="inactive" />
                <div className="flex items-center gap-3">
                  <Avatar />
                  <Heading4>Guest Name</Heading4>
                </div>
              </SettingsCard>
            ))}
            <StayHistoryButton text="Show Past Stays" />
          </div>
        </DashboardWrapper.MainContent>
      </DashboardWrapper.Content>
    </DashboardWrapper>
  );
}

Guests.layout = 'dashboard';
export default Guests;
