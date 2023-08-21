import React from 'react';

import type { NextPageWithLayout } from '@/types/generics';

import { policy } from '@/assets/text';
import styles from '@/styles/pages/policy.module.scss';
import { Body1, Heading2, Heading4 } from '@/components/Typography';

const Policy: NextPageWithLayout = function () {
  return (
    <section className={styles.section}>
      <div className={styles['section__typography--broad']}>
        <Heading2>Privacy Policy</Heading2>
        <Body1>Last Updated: June 9, 2023</Body1>
        <Body1>{policy.desc}</Body1>
        <div>
          <Heading4>{policy.bulletPoint1.title}</Heading4>
          <div className={styles['section__typography--narrow']}>
            <Body1>{policy.bulletPoint1.points.point1}</Body1>
            <Body1>{policy.bulletPoint1.points.point2}</Body1>
            <Body1>{policy.bulletPoint1.points.point3.subPoint1}</Body1>
            <Body1>{policy.bulletPoint1.points.point3.subPoint2}</Body1>
          </div>
        </div>
        <div>
          <Heading4>{policy.bulletPoint2.title}</Heading4>
          <div className={styles['section__typography--narrow']}>
            <Body1>{policy.bulletPoint2.points.point1}</Body1>
            <Body1>{policy.bulletPoint2.points.point1}</Body1>
          </div>
        </div>
        <div>
          <Heading4>{policy.bulletPoint3.title}</Heading4>
          <div className={styles['section__typography--narrow']}>
            <Body1>{policy.bulletPoint3.points.point1}</Body1>
            <Body1>{policy.bulletPoint3.points.point2}</Body1>
          </div>
        </div>
        <div>
          <Heading4>{policy.bulletPoint4.title}</Heading4>
          <Body1>{policy.bulletPoint4.decs}</Body1>
        </div>
        <div>
          <Heading4>{policy.bulletPoint5.title}</Heading4>
          <Body1>{policy.bulletPoint5.decs}</Body1>
        </div>
        <div>
          <Heading4>{policy.bulletPoint6.title}</Heading4>
          <Body1>{policy.bulletPoint6.decs}</Body1>
        </div>
        <div>
          <Heading4>{policy.bulletPoint7.title}</Heading4>
          <Body1>{policy.bulletPoint7.decs}</Body1>
        </div>
        <div>
          <Heading4>{policy.bulletPoint8.title}</Heading4>
          <Body1>{policy.bulletPoint8.decs}</Body1>
        </div>
      </div>
    </section>
  );
};

Policy.layout = 'none';
export default Policy;
