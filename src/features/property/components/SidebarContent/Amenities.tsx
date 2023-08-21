import React from 'react';

import { AmenitiesProps } from '@/types';
import styles from '@/styles/features/dashboard/property/Amenities.module.scss';
import { Body1 } from '@/components/Typography';
import InfoCard from '../cards/InfoCard';

export default function Amenities({ data }: AmenitiesProps) {
  const midIndex = Math.ceil(data.default.length / 2);
  const firstPart = data.default.slice(0, midIndex);
  const secondPart = data.default.slice(midIndex);

  return (
    <InfoCard title="Amenities available">
      <div
        className={`${
          data?.custom && data.custom.length > 0 ? 'flex' : 'hidden'
        } ${styles.section__list___custom}  `}
      >
        {data.custom &&
          data.custom.length > 0 &&
          data.custom.map((value: string) => (
            <Body1 key={Math.random()}>{value}</Body1>
          ))}
      </div>
      <div className={styles.section__list___wrapper}>
        <div className={styles['section__list---side']}>
          {firstPart?.map((value: string) => (
            <Body1 key={Math.random()}>{value}</Body1>
          ))}
        </div>
        <div className={styles['section__list---side']}>
          {secondPart?.map((value: string) => (
            <Body1 key={Math.random()}>{value}</Body1>
          ))}
        </div>
      </div>
    </InfoCard>
  );
}
