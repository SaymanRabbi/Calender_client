import React from 'react';

import { niceThingsText } from '@/text';
import { Body1, Caption, Heading2, Heading4 } from '@/components/Typography';
import styles from '@/styles/features/landing/sections/Section.module.scss';

export default function NiceThings() {
  return (
    <section className={styles.section}>
      <div>
        <img
          src="/assets/image/desktop/Stayy-awhile-home-sharing.webp"
          alt="Stayy awhile home sharing"
          className="hidden md:block object-contain w-full"
        />
      </div>
      <div className={styles['section__typography--broad']}>
        <div className={`${styles.typography__title} !mb-6`}>
          <Caption>Why Stayy</Caption>
          <Heading2>Stayy is why we can have nice things!</Heading2>
        </div>
        <div className={styles.typography__desc}>
          <Body1>{niceThingsText.desc}</Body1>
        </div>
        <div>
          <img
            src="/assets/image/mobile/Stayy-awhile-home-sharing-mobile.webp"
            alt="Stayy awhile home sharing mobile"
            className="w-full block md:hidden"
          />
        </div>
        <div className={styles.typography__desc}>
          <ul>
            <li>
              <Heading4>Private accommodations</Heading4>
              <Body1>{niceThingsText.privateAcc}</Body1>
            </li>
            <li>
              <Heading4>Try the vacation rental business</Heading4>
              <Body1>{niceThingsText.vacation}</Body1>
            </li>
            <li>
              <Heading4>Enjoyment value</Heading4>
              <Body1>{niceThingsText.enjoyment}</Body1>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
