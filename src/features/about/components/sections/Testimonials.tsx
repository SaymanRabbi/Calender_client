import React from 'react';

import { Quote } from '@/icons';
import { TestimonialsText } from '@/text';
import { Body1 } from '@/components/Typography';
import styles from '@/styles/features/about/sections/Quote.module.scss';

export default function Testimonials() {
  return (
    <section className={styles['section__typography--quote']}>
      <div>
        <div className={styles['typography__quote--container']}>
          <div>
            <Quote />
            <div className={styles.typography__quote}>
              <p>{TestimonialsText.quote1}</p>
              <Body1>{TestimonialsText.author1}</Body1>
            </div>
          </div>
        </div>
        <div className={styles['typography__quote--container']}>
          <div>
            <Quote />
            <div className={styles.typography__quote}>
              <p>{TestimonialsText.quote2}</p>
              <Body1>{TestimonialsText.author2}</Body1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
