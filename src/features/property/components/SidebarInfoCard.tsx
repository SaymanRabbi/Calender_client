import React from 'react';

import { SidebarInfoCardProps } from '@/types';

import { IconButton } from '@/components/Buttons';
import { ButtonSmall, Heading4 } from '@/components/Typography';

import styles from '@/styles/components/cards/SidebarCardInfo.module.scss';

export default function SidebarInfoCard({
  className,
  title,
  icon,
  children,
  action,
  pageName,
  gradient,
}: SidebarInfoCardProps) {
  return (
    <div
      className={`${className} !overflow-visible ${gradient ? styles['card-gradient'] : ''} ${
        styles.section
      }`}
    >
      <div className={styles.section__typography}>
        <Heading4 className={`${pageName === 'property-page' && 'ml-3'}`}>
          {title}
        </Heading4>
        {icon && <IconButton icon={<span>{icon}</span>} />}
      </div>

      <div>{children}</div>

      {action && (
        <div className={styles.action}>
          <ButtonSmall>{action}</ButtonSmall>
        </div>
      )}
    </div>
  );
}

SidebarInfoCard.defaultProps = {
  className: '',
};
