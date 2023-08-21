import React from 'react';

import { IconRuleProps } from '@/types';

export default function IconRule({ children }: IconRuleProps) {
  return (
    <div className="flex items-center gap-2 [&>span]:!p-1">{children}</div>
  );
}
