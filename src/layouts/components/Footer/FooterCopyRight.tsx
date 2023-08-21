import React from 'react';

import { Body1 } from '@/components/Typography';

export default function FooterCopyRight() {
  return (
    <Body1 className="bg-transparent pb-9 md:pb-6 text-center text-gray-300 ltr:sm:text-left rtl:sm:text-right">
      &copy; {new Date().getFullYear()}. STAYY LLC. All rights reserved.
    </Body1>
  );
}
