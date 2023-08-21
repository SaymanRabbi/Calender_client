import React from 'react';

import { Go } from '@/icons';
import { manageCabinText } from '@/text';
import { OutlineButton } from '@/components/Buttons';
import { Body1, Caption, Heading2 } from '@/components/Typography';
import styles from '@/styles/features/landing/sections/Section.module.scss';

export default function ManageCabin() {
  return (
    <section className={styles.section}>
      <div className={styles['section__typography--narrow']}>
        <div className={styles.typography__title}>
          <Caption>Why Stayy</Caption>
          <Heading2 className="w-full md:w-64 lg:w-96">
            Manage your ski-share cabin
          </Heading2>
        </div>
        <img
          src="/assets/image/mobile/manage-your-ski-share-cabin-mobile.webp"
          alt="manage your ski share cabin"
          className="w-full block md:hidden"
        />
        <div className={styles.typography__desc}>
          <Body1>{manageCabinText}</Body1>
          <OutlineButton
            text="Try it yourself, for free."
            className="mt-10 [&>p]:!text-dark [&>p]:!mb-0"
            icon={<Go className="w-6 h-6 fill-gray-300" />}
          />
        </div>
      </div>
      <div>
        <img
          src="/assets/image/desktop/manage-your-ski-share-cabin.webp"
          alt="manage your ski share cabin"
          className=" w-full hidden md:block"
        />
      </div>
    </section>
  );
}
