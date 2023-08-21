import React from 'react';

import { inviteSectionText } from '@/text';
import { Body1, Caption, Heading2 } from '@/components/Typography';
import styles from '@/styles/features/landing/sections/Section.module.scss';

export default function InviteSection() {
  return (
    <section className={styles.section}>
      <div>
        <img
          src="/assets/image/desktop/invite-friands-to-stay-while-you-travel.webp"
          alt="invite friands to stay while you travel"
          className="w-full hidden md:block"
        />
      </div>
      <div className={styles['section__typography--narrow']}>
        <div className={styles.typography__title}>
          <Caption>Why Stayy</Caption>
          <Heading2>Invite your friends to Stayy</Heading2>
        </div>
        <img
          src="/assets/image/mobile/invite-friands-to-stay-while-you-travel-mobile.webp"
          alt="Stayy awhile home sharing mobile"
          className="w-full md:hidden"
        />
        <div className={styles.typography__desc}>
          <Body1>{inviteSectionText}</Body1>
        </div>
      </div>
    </section>
  );
}
