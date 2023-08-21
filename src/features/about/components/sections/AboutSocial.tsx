import React from 'react';

import { Go } from '@/icons';
import { abouSocialSectionText } from '@/text';
import { Body1, Caption, Heading2 } from '@/components/Typography';
import { OutlineButton } from '@/components/Buttons';
import styles from '@/styles/features/about/sections/About.module.scss';

export default function AboutSocial() {
  return (
    <section className={styles.section}>
      <div className={styles['section__typography--broad']}>
        <div className={styles.typography__title}>
          <Caption className='text-gray-300'>Why Stayy</Caption>
          <Heading2 className="w-full">{abouSocialSectionText.text1}</Heading2>
        </div>
        <img
          src="/assets/image/mobile/aboutPage/socially-share-with-people-you-trust.webp"
          alt="socially share with people you trust"
          className="block w-full md:hidden"
        />
        <div className={styles.typography__desc}>
          <Body1>{abouSocialSectionText.text2}</Body1>
          <OutlineButton
            text="Stayy features blog"
            className="mt-6 [&>p]:!text-dark [&>p]:!mb-0"
            icon={<Go className="w-6 h-6 fill-gray-300" />}
          />
        </div>
      </div>
      <div className="2xl:w-[700px] 2xl:h-[580px]">
        <img
          src="/assets/image/desktop/aboutPage/socially-share-your-ski-cabin-with-people-you-trust.webp"
          alt="socially share your ski cabin with people you trust"
          className="hidden w-full h-full  md:block"
        />
      </div>
    </section>
  );
}
