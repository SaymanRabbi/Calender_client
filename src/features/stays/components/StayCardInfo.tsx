import React, { FC } from 'react';

import type { StayInfoStatus } from '@/types';

import { Body1, Heading4 } from '@/components/Typography';
import Chip from '@/components/Chip';

const CHIP_MAP: Record<StayInfoStatus, FC> = {
  active: () => null,
  requested: () => (
    <Chip
      variant="button"
      text="stay requested"
      className="bg-yellow [&>p]:text-white"
    />
  ),
  incoming: () => null,
  'cancel-requested': () => (
    <Chip
      variant="button"
      text="CANCEL REQUESTED"
      className="bg-yellow [&>p]:text-white"
    />
  ),
  cancelled: () => (
    <Chip
      variant="button"
      text="you cancelled"
      className="bg-dark [&>p]:text-white"
    />
  ),
  rejected: () => (
    <Chip
      variant="button"
      text="owner rejected"
      className="bg-dark [&>p]:text-white"
    />
  ),
  inactive: () => (
    <Chip
      variant="button"
      text="past"
      className="bg-gray-400 [&>p]:text-white"
    />
  ),
};

interface Props {
  status?: StayInfoStatus;
  instruction?: string;
}

export default function StayCardInfo({ status, instruction }: Props) {
  const Label = CHIP_MAP[status ?? 'active'];

  return (
    <>
      {status ? <Label /> : null}
      {instruction ? (
        <div className="flex flex-col gap-1.5 items-start self-stretch">
          <Heading4>Stay Instructions:</Heading4>
          <Body1 className="text-gray-400">{instruction}</Body1>
        </div>
      ) : null}
    </>
  );
}

StayCardInfo.defaultProps = {
  status: 'active',
  instruction: undefined,
};
