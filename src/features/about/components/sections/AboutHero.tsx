import React from 'react';

import { abouHomeText } from '@/text';
import { Body1, Heading1 } from '@/components/Typography';
import styles from '@/styles/features/about/sections/AboutHero.module.scss';

function AboutHero() {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-section__typography']}>
        <Heading1 className={styles['hero-section__typography--gradient']}>
          Private accommod&shy;ations from trusted friends & family.
        </Heading1>
        <Body1>{abouHomeText}</Body1>
      </div>

      <div className={styles['hero-section__image']}>
        <img
          src="/assets/image/desktop/aboutPage/STAYY-trusted-private-accommodations.webp"
          alt="STAYY trusted private accommodations"
        />
      </div>
    </section>
  );
}

export default AboutHero;
