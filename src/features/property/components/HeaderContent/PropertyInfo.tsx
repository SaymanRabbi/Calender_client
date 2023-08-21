import React from 'react';

import { LocationIcon } from '@/icons';
import Avatar from '@/components/Avatar';
import { Heading3, Body2, Body1 } from '@/components/Typography';
import styles from '@/styles/features/dashboard/property/slug/PropertyInfo.module.scss';

type Props = {
  name: string;
  address: string;
};
export default function PropertyInfo({ name, address }: Props) {
  return (
    <div className={styles['prop-info']}>
      <div>
        <Heading3>{name}</Heading3>
        <div className={styles['prop-info__address']}>
          <Body2>{address}</Body2>
          <LocationIcon />
        </div>
      </div>
      <div className={styles['prop-info__hostinfo']}>
        <Body1>Host info</Body1>
        <Avatar />
      </div>
    </div>
  );
}
