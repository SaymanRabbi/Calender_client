import React from 'react';

import { Go } from '@/assets/icon';
import { nomadicText } from '@/text';
import { OutlineButton } from '@/components/Buttons';
import { Body1, Caption, Heading2 } from '@/components/Typography';
import styles from '@/styles/features/landing/sections/Section.module.scss';

export default function NomadicSection() {
  return (
    <section className={styles.section}>
      <div className={styles['section__typography--narrow']}>
        <div className={styles.typography__title}>
          <Caption>Why Stayy</Caption>
          <Heading2>Feeling nomadic?</Heading2>
        </div>
        <img
          src="/assets/image/mobile/go-nomadic-and-share-you-apartment-mobile.webp"
          alt="Stayy awhile home sharing mobile"
          className="w-full md:hidden"
        />
        <div className={`${styles.typography__desc} mt-6 md:mt-0`}>
          <Body1>
            {nomadicText.text1}
            <span className="underline-text">{nomadicText.text2}</span>
            {nomadicText.text3}
          </Body1>
          <OutlineButton
            text="Ready to share?"
            className="mt-10 [&>p]:!text-dark [&>p]:!mb-0"
            icon={<Go className="w-6 h-6 fill-gray-300" />}
          />
        </div>
      </div>
      <div>
        <img
          src="/assets/image/desktop/go-nomadic-and-share-you-apartment.webp"
          alt="go nomadic and share you apartment"
          className="w-full hidden md:block"
        />
      </div>
    </section>
  );
}
