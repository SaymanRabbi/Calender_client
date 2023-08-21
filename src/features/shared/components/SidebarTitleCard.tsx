import React from 'react';

import { Body1, Heading3 } from '@/components/Typography';
import Card from '@/components/Card';

type Props = {
  title: string;
  info?: string;
  className?: string;
};

export default function SidebarTitleCard({ title, info, className }: Props) {
  return (
    <Card className={`flex flex-col gap-1.5 ${className}`} shadow={false}>
      <Heading3>{title}</Heading3>
      {info ? <Body1 className="text-gray-400">{info}</Body1> : null}
    </Card>
  );
}

SidebarTitleCard.defaultProps = {
  info: undefined,
  className: '',
};
