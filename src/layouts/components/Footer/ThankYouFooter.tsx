import React from 'react';

import { Caption } from '@/components/Typography';
import { StayyLogo } from '@/assets/logo';

export default function ThankYouFooter() {
  return (
    <div className="flex bg-transparent flex-col gap-3 bg-inherit items-center py-[140px]">
      <StayyLogo className="fill-gray-300" />
      <Caption className="text-gray-300">Thank you for staying.</Caption>
    </div>
  );
}
