import React from 'react';

import type { GuestInfoCardProps } from '@/types';

import InfoCard from '../cards/InfoCard';

export default function GuestInfo({ children }: GuestInfoCardProps) {
  return (
    <InfoCard title="Guest information">
      <div className="flex items-start self-stretch gap-3 pt-0 pb-6">
        <div>{children}</div>
      </div>
    </InfoCard>
  );
}
