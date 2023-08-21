import React from 'react';

import type { StayInfoData } from '@/types';

import { Users, Zzz } from '@/icons';
import SidebarTitleCard from '@/features/shared/components/SidebarTitleCard';
import StayInfoCard from './StayInfoCard';

const GUESTS: StayInfoData[] = [
  {
    id: 1,
    propertyName: 'Property 1',
    arriveDate: '03/05/23',
    departDate: '04/05/23',
    comment: 'Comment here.',
    status: 'requested',
  },
  {
    id: 2,
    propertyName: 'Property 2',
    arriveDate: '03/05/23',
    departDate: '04/05/23',
    comment: 'Comment here.',
    status: 'active',
  },
  {
    id: 3,
    propertyName: 'Property 3',
    arriveDate: '03/05/23',
    departDate: '04/05/23',
    comment: 'Comment here.',
    status: 'inactive',
  },
];

const STAYS: StayInfoData[] = [
  {
    id: 1,
    propertyName: 'Property 1',
    arriveDate: '03/05/23',
    departDate: '04/05/23',
    comment: 'Comment here.',
    status: 'requested',
  },
  {
    id: 2,
    propertyName: 'Property 2',
    arriveDate: '03/05/23',
    departDate: '04/05/23',
    comment:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus odio in architecto corrupti, perferendis itaque quidem laboriosamg eius consectetur voluptatem accusamus animi culpa dolorem, consequuntur autem deserunt optio exercitationem! Tempora aspernatur, ad distinctio eligendi tempore molestiae excepturi neque expedita possimus vitae quaerat eos dignissimos alias illum necessitatibus nobis fuga est.',
    status: 'active',
  },
  {
    id: 3,
    propertyName: 'Property 3',
    arriveDate: '03/05/23',
    departDate: '04/05/23',
    comment:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus odio in architecto corrupti, perferendis itaque quidem laboriosamg eius consectetur voluptatem accusamus animi culpa dolorem, consequuntur autem deserunt optio exercitationem! Tempora aspernatur, ad distinctio eligendi tempore molestiae excepturi neque expedita possimus vitae quaerat eos dignissimos alias illum necessitatibus nobis fuga est.',
    status: 'cancelled',
  },
];

const SAMPLE_STAYS: StayInfoData[] = [
  {
    id: 1,
    propertyName: 'Property 1',
    arriveDate: '03/05/23',
    departDate: '04/05/23',
    comment: 'Comment here.',
    status: 'requested',
  },
  {
    id: 2,
    propertyName: 'Property 2',
    arriveDate: '03/05/23',
    departDate: '04/05/23',
    comment:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus odio in architecto corrupti, perferendis itaque quidem laboriosamg eius consectetur voluptatem accusamus animi culpa dolorem, consequuntur autem deserunt optio exercitationem! Tempora aspernatur, ad distinctio eligendi tempore molestiae excepturi neque expedita possimus vitae quaerat eos dignissimos alias illum necessitatibus nobis fuga est.',
    status: 'rejected',
  },
];

export default function DashboardSidebar() {
  return (
    <>
      <SidebarTitleCard title="Hi Shamim" info="Welcome back!" />
      <StayInfoCard
        icon={<Zzz />}
        stays={STAYS}
        title="Upcoming Stays"
        moreLink="/dashboard"
      />
      <StayInfoCard
        icon={<Zzz />}
        stays={[]}
        title="Upcoming Stays"
        moreLink="/dashboard"
      />
      <StayInfoCard
        icon={<Zzz />}
        stays={SAMPLE_STAYS}
        title="Upcoming Stays"
        moreLink="/dashboard"
      />
      <StayInfoCard
        icon={<Users className="fill-gray-300" />}
        stays={GUESTS}
        title="Guest Arrivals"
        moreLink="/dashboard"
      />
    </>
  );
}
