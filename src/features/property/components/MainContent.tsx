import React from 'react';

import { Body1 } from '@/components/Typography';
import parseHTML from '@/libs/htmlParser';
import GuestInfo from './SidebarContent/GuestInfo';

interface Property {
  guestInfo: string | null;
}

export default function PropertyMainContent({ guestInfo }: Property) {
  return (
    <GuestInfo>
      {guestInfo ? (
        <div className="list-disc text-[18px]">{parseHTML(guestInfo)}</div>
      ) : (
        <Body1>I have not added a property description yet.</Body1>
      )}
    </GuestInfo>
  );
}
