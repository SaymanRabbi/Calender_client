import React from 'react';

import type { Image } from '@/types';

import { OverflowIcon, Pause, Users } from '@/icons';
import { IconButton, OutlineButton } from '@/components/Buttons';
import CalenderTest from '@/components/calendar/CalenderTest';
import useDashboardModals from '@/hooks/useDashboardModals';
import DashboardNav from '@/features/shared/components/DashboardNav';
import PropertyInfo from './PropertyInfo';
import PropertyImageCarousel from './PropertyImageCarousel';
import CalendarPropertyInfo from './CalendarPropertyInfo';
import NavbarMenu from './NavbarMenu';

type Props = {
  name: string;
  images: Image[];
  address: string;
};
export default function PropertyHeader({ name, images, address }: Props) {
  const { setModal } = useDashboardModals();
  return (
    <>
      <DashboardNav backButtonText="DASHBOARD" backHref="/dashboard">
        <div className="hidden gap-6 md:flex">
          <IconButton
            className="bg-white group "
            icon={<Pause className="fill-yellow group-hover:fill-black" />}
            onClick={() => setModal('status')}
          />
          <OutlineButton
            variant="link"
            href="/dashboard/property/2/guests"
            text="Guest List"
            icon={<Users className="fill-gray-400" />}
            className='bg-white'
          />
          <OutlineButton
            variant="link"
            href="/dashboard/property/2/settings"
            text="Property Settings"
            className='bg-white'
          />
        </div>
        <div className="flex gap-6 md:hidden">
          <NavbarMenu
            trigger={
              <div className="flex items-center justify-center w-12 h-12 bg-white border rounded-full group">
                <OverflowIcon className="fill-yellow hover:fill-black" />
              </div>
            }
          />
        </div>
      </DashboardNav>
      <PropertyImageCarousel images={images} />
      <PropertyInfo name={name} address={address} />
      <CalenderTest />
      <CalendarPropertyInfo />
    </>
  );
}
