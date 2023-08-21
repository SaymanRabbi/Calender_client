import React from 'react';

import { Quote } from '@/icons';
import { FinalTestimonialText } from '@/text';
import { Body1 } from '@/components/Typography';
import styles from '@/styles/features/about/sections/Quote.module.scss';

function FinalTestimonial() {
  return (
    <section className={styles['section__typography--quote']}>
      <div className={styles['typography__quote--container']}>
        <div>
          <Quote />
          <div className={styles.typography__quote}>
            <p>{FinalTestimonialText.quote}</p>
            <Body1>{FinalTestimonialText.author}</Body1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalTestimonial;
