import React from 'react';

import { Clean, Guests, Home, Moon } from '@/icons';
import { Body1 } from '@/components/Typography';
import styles from '@/styles/features/dashboard/property/CalendarPropertyInfo.module.scss';

export default function CalendarPropertyInfo() {
  return (
    <div className={styles.section}>
      <div>
        <Home />
        <Body1>2 - 10 Night stays</Body1>
      </div>
      <div>
        <Guests />
        <Body1>2 Guest limit</Body1>
      </div>
      <div>
        <Moon />
        <Body1>2 Guest limit</Body1>
      </div>
      <div>
        <Clean />
        <Body1>$40 Cleaning / stay</Body1>
      </div>
    </div>
  );
}
