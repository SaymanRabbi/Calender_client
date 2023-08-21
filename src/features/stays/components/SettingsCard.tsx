import React, { PropsWithChildren, ReactNode } from 'react';

import styles from '@/styles/features/stays/SettingsCard.module.scss';
import { Body1, Heading4 } from '@/components/Typography';
import Card from '@/components/Card';

type Props = PropsWithChildren<{
  title: string;
  info?: string;
  infoCross?: boolean;
  action?: ReactNode;
  gradient?: boolean;
  onSubmit?: () => Promise<void>;
  className?: string;
}>;

export default function SettingsCard({
  title,
  info,
  infoCross,
  children,
  action,
  gradient,
  onSubmit,
  className,
}: Props) {
  return (
    <Card
      as="form"
      onSubmit={onSubmit}
      gradient={gradient}
      className={`${className} ${styles['settings-card']}`}
    >
      <div className={styles['settings-card__header']}>
        <Heading4>{title}</Heading4>
        <Body1>{infoCross ? <del>{info}</del> : info}</Body1>
      </div>
      {children}
      {action ? (
        <div className={styles['settings-card__actions']}>{action}</div>
      ) : null}
    </Card>
  );
}

SettingsCard.defaultProps = {
  info: undefined,
  infoCross: false,
  action: undefined,
  gradient: false,
  onSubmit: undefined,
  className: '',
};
