import React from 'react';

import { CardProps } from '@/types';
import styles from '@/styles/components/cards/ActionCard.module.scss';
import { Heading4 } from '../../../../components/Typography';

export default function ActionCard({ title, children, action }: CardProps) {
  return (
    <div className={styles.wrapper}>
      <Heading4>{title}</Heading4>
      <div className={styles.typography__wrapper__desc}>
        <div className={styles.typography__desc}>{children}</div>
        <div className={styles.action}>{action}</div>
      </div>
    </div>
  );
}
ActionCard.defaultProps = {
  action: null,
};
