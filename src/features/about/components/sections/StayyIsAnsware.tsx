import React from 'react';

import { StayyIsAnswareText } from '@/text';
import { Body1, Caption, Heading2, Heading4 } from '@/components/Typography';
import styles from '@/styles/features/about/sections/About.module.scss';

export default function StayyIsAnsware() {
  return (
    <section className={styles.section}>
      <div className={styles['section__typography--broad']}>
        <div className={`${styles.typography__title} !mb-6`}>
          <Caption className='text-gray-300'>Why Stayy</Caption>
          <Heading2>Stayy is the answer for your place</Heading2>
        </div>
        <div className={styles.typography__desc}>
          <Body1>{StayyIsAnswareText.desc}</Body1>
        </div>
        <div>
          <img
            src="/assets/image/mobile/aboutPage/stayy-is-for-sharing-your-property.webp"
            alt="stayy is for sharing your property"
            className="block w-full md:hidden"
          />
        </div>
        <div className={styles.typography__desc}>
          <ul>
            <li>
              <Heading4>Stayy is ideal for seasonal rentals.</Heading4>
              <Body1>{StayyIsAnswareText.seasonalRentals}</Body1>
            </li>
            <li>
              <Heading4>Stayy is ideal for grandma’s house.</Heading4>
              <Body1>{StayyIsAnswareText.house}</Body1>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          src="/assets/image/desktop/aboutPage/stayy-is-perfect-for-sharing-your-property.webp"
          alt="stayy is perfect for sharing your property"
          className="hidden md:block object-contain w-full 2xl:w-[682px] 2xl:h-[872px]"
        />
      </div>
    </section>
  );
}
