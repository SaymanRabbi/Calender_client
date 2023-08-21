import React from 'react';

import { AccessCardProps } from '@/types';
import { Info, Trash } from '@/icons';
import Avater from '@/components/Avatar';
import styles from '@/styles/components/cards/AccessCard.module.scss';
import { Body1, Body2, Heading4 } from '@/components/Typography';
import { GradientButton, IconButton } from '@/components/Buttons';
import SmallIconButton from '@/components/Buttons/SmallIconButton';

function AccessCard({ title, user, type, info }: AccessCardProps) {
  return (
    <div className={styles.card__wrapper}>
      <div className="flex justify-between w-full">
        <Heading4>{title}</Heading4>
        {info && <SmallIconButton icon={<Info />} />}
      </div>
      <div className={styles.card__typography}>
        <div className={styles.card__typography___desc}>
          <Avater />
          {type === 'access' ? (
            <Body1 className="w-[240px] md:w-[300px]">
              {user.name} is sharing their property on Stay.
            </Body1>
          ) : (
            <span>
              <Body1 className="md:w-[300px]">{user.name}</Body1>
              <Body2 className="text-gray-400 md:w-[300px]">{user.email}</Body2>
            </span>
          )}
        </div>
        <div className={styles.action}>
          <IconButton icon={<Trash />} />
          <GradientButton text="Account Settings" />
        </div>
      </div>
    </div>
  );
}

AccessCard.defaultProps = {
  children: null,
  info: '',
};

export default AccessCard;
