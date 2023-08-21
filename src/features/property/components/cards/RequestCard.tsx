import React from 'react';

import Avater from '@/components/Avatar';
import { RequestCardProps } from '@/types';

import { Trash } from '@/icons';

import { Body1, Body2, Heading4 } from '@/components/Typography';
import { GradientButton, IconButton } from '@/components/Buttons';

export default function RequestCard({ title, user, email }: RequestCardProps) {
  return (
    <div
      style={{
        boxShadow:
          '0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.2)',
        background: 'linear-gradient(135deg, #F0FDFF 0%, #E9E9FF 100%)',
      }}
      className="flex flex-col items-start w-full gap-6 p-6 bg-white rounded-2xl card-shadow"
    >
      <Heading4>{title}</Heading4>
      <div className="flex flex-col self-stretch gap-6 lg:flex-row lg:items-center">
        <div className="flex items-center flex-1 w-full gap-3 text-gray-400">
          <Avater />
          <div className="flex flex-col items-start">
            <Body1 className="text-Black">{user}</Body1>
            <Body2 className="text-gray-400">{email}</Body2>
          </div>
        </div>
        <div className="flex gap-3 max-lg:justify-end">
          <IconButton icon={<Trash />} />
          <GradientButton text="Account Settings" />
        </div>
      </div>
    </div>
  );
}
