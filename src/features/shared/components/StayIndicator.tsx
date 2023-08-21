import React, { PropsWithChildren } from 'react';

import { Body1 } from '@/components/Typography';
import styles from '@/styles/features/shared/StayIndicator.module.scss';

function StayIndicator({ children }: PropsWithChildren) {
  return (
    <div className={styles.indecator}>
      <div className={styles['indecator__typography---border']}>
        <Body1 className={styles.indecator__typography___desc}>
          {children}
        </Body1>
      </div>
    </div>
  );
}

export default StayIndicator;
