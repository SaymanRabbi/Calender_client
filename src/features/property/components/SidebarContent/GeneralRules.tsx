import React from 'react';

import { BabyNo, NoParty, NoPets, NoSmoking } from '@/icons';

import { GeneralRulesProps } from '@/types';
import { Body1 } from '@/components/Typography';
import styles from '@/styles/features/dashboard/property/GeneralRules.module.scss';
import InfoCard from '../cards/InfoCard';
import IconRule from '../cards/IconRule';

export default function GeneralRules({ data }: GeneralRulesProps) {
  return (
    <InfoCard title="General rules">
      <div className={styles.section}>
        <Body1>Arrive after: {data.arrive}</Body1>
        <Body1>Depart by: {data.depart}</Body1>
        {(!data.pets || !data.kids || !data.parties || !data.smoking) && (
          <div className="py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="1"
              viewBox="0 0 688 1"
              fill="none"
            >
              <path d="M0 0.5H688" stroke="#DBE4EC" />
            </svg>
          </div>
        )}
        {!data.pets && (
          <IconRule>
            <span>
              <NoPets />
            </span>
            <Body1 className="text-gray-400">Sorry no pets</Body1>
          </IconRule>
        )}
        {!data.kids && (
          <IconRule>
            <span>
              <BabyNo />
            </span>
            <Body1 className="text-gray-400">Not sutiable for kids</Body1>
          </IconRule>
        )}
        {!data.parties && (
          <IconRule>
            <span>
              <NoParty />
            </span>
            <Body1 className="text-gray-400">No parties or events</Body1>
          </IconRule>
        )}
        {!data.smoking && (
          <IconRule>
            <span>
              <NoSmoking />
            </span>
            <Body1 className="text-gray-400">No smoking</Body1>
          </IconRule>
        )}
      </div>
    </InfoCard>
  );
}
