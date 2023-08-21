import React from 'react';

import type { NextPageWithLayout } from '@/types/generics';

import { terms } from '@/assets/text';
import styles from '@/styles/pages/policy.module.scss';
import { Body1, Heading2, Heading4 } from '@/components/Typography';

const Terms: NextPageWithLayout = function () {
  return (
    <section className={styles.section}>
      <div className={styles['section__typography--broad']}>
        <Heading2>Terms of Use</Heading2>
        <Body1>Last Updated: June 9, 2023</Body1>
        <Body1>{terms.desc}</Body1>
        <div>
          <Heading4>{terms.bulletPoint1.title}</Heading4>
          <div className={styles['section__typography--narrow']}>
            <Body1>{terms.bulletPoint1.points.point1}</Body1>
            <Body1>{terms.bulletPoint1.points.point2}</Body1>
            <div>
              <Body1>{terms.bulletPoint1.points.point3.title}</Body1>
              <Body1>{terms.bulletPoint1.points.point3.subPoint1}</Body1>
              <Body1>{terms.bulletPoint1.points.point3.subPoint2}</Body1>
              <Body1>{terms.bulletPoint1.points.point3.subPoint3}</Body1>
              <Body1>{terms.bulletPoint1.points.point3.subPoint4}</Body1>
              <Body1>{terms.bulletPoint1.points.point3.subPoint5}</Body1>
              <Body1>{terms.bulletPoint1.points.point3.subPoint6}</Body1>
            </div>
          </div>
        </div>
        <div>
          <Heading4>{terms.bulletPoint2.title}</Heading4>
          <div className={styles['section__typography--narrow']}>
            <Body1>{terms.bulletPoint2.points.point1}</Body1>
            <Body1>{terms.bulletPoint2.points.point2}</Body1>
            <Body1>{terms.bulletPoint2.points.point3}</Body1>
          </div>
        </div>
        <div>
          <Heading4>{terms.bulletPoint3.title}</Heading4>
          <Body1>{terms.bulletPoint3.decs}</Body1>
        </div>
        <div>
          <Heading4>{terms.bulletPoint4.title}</Heading4>
          <Body1>{terms.bulletPoint4.decs}</Body1>
        </div>
        <div>
          <Heading4>{terms.bulletPoint5.title}</Heading4>
          <Body1>{terms.bulletPoint5.decs}</Body1>
        </div>
        <div>
          <Heading4>{terms.bulletPoint6.title}</Heading4>
          <Body1>{terms.bulletPoint6.decs}</Body1>
        </div>
        <div>
          <Heading4>{terms.bulletPoint7.title}</Heading4>
          <Body1>{terms.bulletPoint7.decs}</Body1>
        </div>
        <div>
          <Heading4>{terms.bulletPoint8.title}</Heading4>
          <Body1>{terms.bulletPoint8.decs}</Body1>
        </div>
        <div>
          <Heading4>{terms.bulletPoint9.title}</Heading4>
          <Body1>{terms.bulletPoint9.decs}</Body1>
        </div>
        <div>
          <Heading4>{terms.bulletPoint10.title}</Heading4>
          <Body1>{terms.bulletPoint10.decs}</Body1>
        </div>
      </div>
    </section>
  );
};

Terms.layout = 'none';
export default Terms;
