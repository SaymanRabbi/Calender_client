import React from 'react';

import { PaidStaysText } from '@/text';
import { Body1, Caption, Heading2, Heading4 } from '@/components/Typography';
import styles from '@/styles/features/about/sections/About.module.scss';

export default function PaidStays() {
  return (
    <section className={styles.section}>
      <div className={styles['section__typography--broad']}>
        <div className={styles.typography__title}>
          <Caption className='text-gray-300'>Why Stayy</Caption>
          <Heading2>{PaidStaysText.heading}</Heading2>
        </div>
        <img
          src="/assets/image/mobile/aboutPage/shared-calendar-with-payments.webp"
          alt="shared calendar with payments"
          className="w-full mb-6 md:hidden"
        />
        <div className={styles.typography__desc}>
          <Body1>{PaidStaysText.desc1}</Body1>
          <div className={styles['costs_section--wrapper']}>
            <Heading4>Stayy costs:</Heading4>
            <div>
              <div className="flex flex-col gap-6">
                <Body1>Credit card payments: 4.5% + $1</Body1>
                <Body1>Bank transfers: 1.5% or $99 (whichever is lower).</Body1>
              </div>

              <Body1>
                Scheduling only: <span className="text-dark">FREE</span>
              </Body1>
            </div>
          </div>
          <Body1>{PaidStaysText.desc2}</Body1>
        </div>
      </div>
      <img
        src="/assets/image/desktop/aboutPage/shared-vacation-calendar-with-payments.webp"
        alt="shared vacation calendar with payments"
        className="w-1/2 2xl:w-[570px] 2xl:h-[834px] hidden md:block object-contain"
      />
    </section>
  );
}
