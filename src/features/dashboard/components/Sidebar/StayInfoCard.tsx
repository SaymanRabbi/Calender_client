import React from 'react';

import type { StayInfoData } from '@/types';

import { ButtonSecondary, Heading4 } from '@/components/Typography';
import styles from '@/styles/features/dashboard/components/Sidebar/StayInfoCard.module.scss';
import SmallIconButton from '@/components/Buttons/SmallIconButton';
import { LinkButton } from '@/components/Buttons';
import StayInfo from './StayInfo';

type Props = {
  title: string;
  icon: JSX.Element;
  stays: StayInfoData[];
  moreLink: string;
  className?: string;
};

export default function StayInfoCard({
  stays,
  title,
  icon,
  className,
  // moreLink,
}: Props) {
  const showMore = stays.length > 2;

  return (
    <div className={`${styles['stay-list']} ${className}`}>
      <div className={styles['stay-list__header']}>
        <Heading4>{title}</Heading4>
        <SmallIconButton icon={icon} />
      </div>

      {stays.length ? (
        <div className={styles['stay-list__body']}>
          {stays.map((stay) => (
            <StayInfo key={stay.id} {...stay} />
          ))}
        </div>
      ) : (
        <div className={styles['stay-list__body--no-item']}>
          <ButtonSecondary>No scheduled stays.</ButtonSecondary>
        </div>
      )}
      {showMore ? (
        <div className={styles['stay-list__footer']}>
          <LinkButton className='text-sm font-normal text-gray-400' text='Show more' href='' />
        </div>
      ) : (
        <div className={styles['stay-list__footer--placeholder']} />
      )}
    </div>
  );
}

StayInfoCard.defaultProps = {
  className: '',
};
