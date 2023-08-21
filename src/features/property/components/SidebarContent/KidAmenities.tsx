import React from 'react';

import type { KidAmenitiesProps } from '@/types';

import { Body1 } from '@/components/Typography';
import styles from '@/styles/features/dashboard/property/Amenities.module.scss';
import InfoCard from '../cards/InfoCard';

export default function KidAmenities({ data }: KidAmenitiesProps) {
  // Divide the data array into two parts
  const midIndex = Math.ceil(data.length / 2);
  const firstPart = data.slice(0, midIndex);
  const secondPart = data.slice(midIndex);

  return (
    <InfoCard title="Kid friendly amenities">
      <div className={styles.section}>
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
