import React from 'react';

import { Heading4 } from '@/components/Typography';
import Avatar from '@/components/Avatar';

interface StayCardDescI {
  GuestName?: string;
}

export default function GuestCardInfo({ GuestName }: StayCardDescI) {
  return (
    <div className="flex gap-3 items-center self-stretch">
      <Avatar />
      <Heading4>{GuestName}</Heading4>
    </div>
  );
}

GuestCardInfo.defaultProps = {
  GuestName: '',
};
