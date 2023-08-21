import React, { ReactNode } from 'react';

import styles from '@/styles/components/cards/InfoCard.module.scss';
import { Heading4 } from '@/components/Typography';

interface InfoCardProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export default function InfoCard({
  title,
  className,
  children,
}: InfoCardProps) {
  return (
    <div className={`${className}  ${styles.section}`}>
      <div className={styles.section__typography}>
        <Heading4>{title}</Heading4>
      </div>

      <div className="px-6 text-gray-400">{children}</div>
    </div>
  );
}

InfoCard.defaultProps = {
  className: '',
};
