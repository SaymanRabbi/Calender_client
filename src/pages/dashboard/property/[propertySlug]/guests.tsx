import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
// import { useRouter } from 'next/router';

import { DownGo } from '@/icons';
import DisclosureItem from '@/components/Disclosure';
import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import { OutlineButton } from '@/components/Buttons';
import { Body1, Body2 } from '@/components/Typography';
import InputField from '@/components/InputField';
// import PageTitle from '@/features/shared/components/PageTitle';
// import Nav from '@/features/dashboard/components/Nav';
import SidebarTitleCard from '@/features/shared/components/SidebarTitleCard';
import SidebarInfoCard from '@/features/property/components/SidebarInfoCard';
import DashboardNav from '@/features/shared/components/DashboardNav';
import useDashboardModals from '@/hooks/useDashboardModals';
import Dropdown from '@/components/Dropdown';

const guestData = [
  {
    name: 'Donald Trump',
    id: 3,
    email: 'pastwhitehouse51@gmail.com',
    date: '04/30/2023',
    status: 'Invited',
    role: 'Family',
    inviteAccept: true,
    invitedBy: 'Joe Biden',
  },
  {
    name: 'Barack Obama',
    id: 1,
    email: 'shamimhossen3912@gmail.com',
    date: '01/30/2023',
    status: 'Invited',
    role: 'Guest',
    inviteAccept: false,
  },
  {
    name: 'Shamim Hossen',
    id: 2,
    email: 'taskiatonnur420@gmail.com',
    date: '02/30/2023',
    status: 'Invited',
    role: 'Manager',
    inviteAccept: false,
  },
  {
    name: 'Joe Biden',
    id: 4,
    email: 'whitehouse51@gmail.com',
    date: '03/30/2023',
    status: 'Invited',
    role: 'Family',
    inviteAccept: true,
  },
];

// const role = [
//   { type: 'Guest' },
//   { type: 'Family' },
//   { type: 'Member' },
// ]
const role = [
  { name: 'Guest' },
  { name: 'Family' },
  { name: 'Member' },
]

function GuestList() {
  const { handleSubmit } = useForm<FieldValues>();

  const [recentlyAddedActive, setRecentlyAddedActive] = useState(false);
  const [guestList, setGuestList] = useState(guestData);

  const { setModal } = useDashboardModals();

  // const router = useRouter();

  const shortAsc = (a: any, b: any) => a.id - b.id;
  const shortDsc = (a: any, b: any) => b.id - a.id;

  const handleRecentlyAddedActivity = () => {
    setRecentlyAddedActive(!recentlyAddedActive);
    setGuestList((prevGuestList) => {
      const sortedList = [...prevGuestList];
      if (recentlyAddedActive) {
        sortedList.sort(shortAsc); // Sort in ascending order
      } else {
        sortedList.sort(shortDsc); // Sort in descending order
      }
      return sortedList;
    });
    // setInitaialState(false);
  };

  const onSubmit = () => {
    // console.log('guest list page');
  };


  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/dashboard" >
        <OutlineButton onClick={() => setModal('guestList')} text='Guest List Settings' className='bg-white' />
      </DashboardNav>
      <DashboardWrapper.Content>
        <DashboardWrapper.SideBar>
          <SidebarTitleCard title="Property Settings" info="[Property Name]" />
          <div className="flex flex-col !overflow-y-visible gap-6 max-xl:w-full">
            <SidebarInfoCard
              title="New Invite"
              className="hidden md:block"
              action={
                <OutlineButton
                  className="[&>p]:!text-sm !py-1 !px-3"
                  text="Send Link"
                />
              }
            >
              <div className="px-6 pb-6 flex flex-col gap-2.5">
                <Body1 className="text-gray-400">
                  Send a direct invite tou your guest’s email address.
                </Body1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-6 ">
                    <div className="w-full flex flex-col gap-2.5">
                      <InputField
                        id="email"
                        // register={register}
                        type="email"
                        placeholder="Email Address"
                      />
                      <Dropdown dropdownItems={role} />
                    </div>
                  </div>
                </form>
              </div>
            </SidebarInfoCard>
            {/* mobile */}
            <SidebarInfoCard
              title="Upcoming Stays"
              gradient
              className="w-full md:hidden"
            >
              <div className="flex flex-col gap-6 px-6 pb-6">
                <OutlineButton
                  className="flex justify-center bg-white "
                  text="New Invite"
                  onClick={() => setModal('newInvite')}
                />
                <OutlineButton
                  className="flex justify-center bg-white"
                  text="Invite link"
                  onClick={() => setModal('inviteLink')}
                />
              </div>
            </SidebarInfoCard>

            <SidebarInfoCard
              title="Invite link"
              gradient
              className="hidden md:block "
              action={
                <OutlineButton
                  className="[&>p]:!text-sm !py-1 !px-3"
                  text="Create Link"
                />
              }
            >
              <div className="px-6 pb-6 flex flex-col gap-2.5">
                <Body1 className="text-gray-400">
                  Create a unique link to easily share your property with
                  friends and family. Anyone that clicks through will be given
                  the option to request access to your property.
                </Body1>
              </div>
            </SidebarInfoCard>
          </div>
        </DashboardWrapper.SideBar>
        <DashboardWrapper.MainContent>
          <div
            className="flex flex-col items-start self-stretch bg-white rounded-lg shadow-card"
          >
            {/* t-head */}
            <div className="px-6 h-11 border-b border-gray-200 flex items-center justify-between w-full py-[6px]">
              <Body2 className="text-gray-300">Name</Body2>

              <button
                className="flex items-center h-8 "
                onClick={handleRecentlyAddedActivity}
              >
                <Body2 className="text-gray-300">Recently added</Body2>
                <div
                  className={`flex items-center justify-center w-8 h-8 ${recentlyAddedActive && 'rotate-180'
                    }`}
                >
                  <DownGo />
                </div>
              </button>
            </div>

            {/* user */}
            <div className="w-full lg:w-[736px]">
              <DisclosureItem guestData={guestList} />
            </div>
          </div>
        </DashboardWrapper.MainContent>
      </DashboardWrapper.Content>
    </DashboardWrapper>
  );
}

GuestList.layout = 'dashboard';

export default GuestList;
