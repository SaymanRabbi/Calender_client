import React from 'react';

import { Go } from '@/icons';
import { earnSectionText } from '@/text';
import { OutlineButton } from '@/components/Buttons';
import { Body1, Caption, Heading2 } from '@/components/Typography';
import styles from '@/styles/features/landing/sections/Section.module.scss';

export default function EarnMoney() {
  return (
    <section className={styles.section}>
      <div className={styles['section__typography--broad']}>
        <div className={styles.typography__title}>
          <Caption>Why Stayy</Caption>
          <Heading2>Earn more from your vacation rental business</Heading2>
        </div>
        <img
          src="/assets/image/mobile/earn-more-from-your-vacation-rental-mobile.webp"
          alt="earn more fromv your vacation rental"
          className="w-full block md:hidden"
        />
        <div className={`${styles.typography__desc} mt-6 md:mt-0`}>
          <Body1>{earnSectionText.text1}</Body1>
          <Body1 className="mt-6">
            <span className="underline-text">{earnSectionText.text2}</span>
            {earnSectionText.text3}
          </Body1>
          <OutlineButton
            text="More about Stayy"
            className="mt-10 [&>p]:!text-dark [&>p]:!mb-0"
            icon={<Go className="w-6 h-6 fill-gray-300" />}
          />
        </div>
      </div>
      <div>
        <img
          src="/assets/image/desktop/earn-more-from-your-vacation-rental-biz.webp"
          alt="earn more from your vacation rental biz"
          className="w-full hidden md:block"
        />
      </div>
    </section>
  );
}
