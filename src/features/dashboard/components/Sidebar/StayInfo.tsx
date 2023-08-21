import React, { FC } from 'react';

import type { StayInfoData, StayInfoStatus } from '@/types';

import styles from '@/styles/features/dashboard/components/Sidebar/StayInfo.module.scss';
import { Go, GradientDot, GrayDot } from '@/icons';
import { Body2, ButtonSmall } from '@/components/Typography';

const TEXT_MAP: Record<
  StayInfoStatus,
  FC<{ arriveDate: string; departDate: string }>
> = {
  active: ({ arriveDate, departDate }) => (
    <Body2>
      {arriveDate} {'->'} {departDate}
    </Body2>
  ),
  inactive: ({ arriveDate, departDate }) => (
    <Body2>
      {arriveDate} {'->'} {departDate}
    </Body2>
  ),
  incoming: ({ arriveDate, departDate }) => (
    <Body2>
      {arriveDate} {'->'} {departDate}
    </Body2>
  ),
  cancelled: () => <Body2>CANCELLED</Body2>,
  requested: () => (
    <ButtonSmall className="!text-yellow">STAY REQUESTED</ButtonSmall>
  ),
  rejected: () => <Body2>REJECTED</Body2>,
  'cancel-requested': () => (
    <ButtonSmall className="!text-yellow">CANCELLATION REQUESTED</ButtonSmall>
  ),
};

export default function StayInfo({
  propertyName,
  arriveDate,
  departDate,
  status,
  comment,
}: StayInfoData) {
  const StatusText = TEXT_MAP[status];
  return (
    <div className={`group ${styles['stay-info']}`}>
      <div className={styles['stay-info__indicator']}>
        {status === 'active' ? <GradientDot /> : <GrayDot />}
        <span />
      </div>
      <div className={styles['stay-info__body']}>
        <Body2>{propertyName}</Body2>
        <StatusText arriveDate={arriveDate} departDate={departDate} />
        {comment ? <Body2>{comment}</Body2> : null}
      </div>
      <Go className={styles['stay-info__icon']} />
    </div>
  );
}
