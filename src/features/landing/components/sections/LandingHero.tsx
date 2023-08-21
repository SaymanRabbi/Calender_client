import React from 'react';
import dynamic from 'next/dynamic';

import { StayyLogo } from '@/logos';
import { landingHeroSectionText } from '@/text';
import useMediaQuery from '@/hooks/useMediaQuery';
import useAuthModals from '@/hooks/useAuthModals';
import { Body1, Heading1 } from '@/components/Typography';
import { GradientButton, OutlineButton } from '@/components/Buttons';
import styles from '@/styles/features/landing/sections/LandingHero.module.scss';
import CTASection from '@/features/shared/components/CTASection';

const ImageCarousel = dynamic(() => import('../Carousel'), {
  loading: () => (
    <div className={styles['landing-section__carousel--desktop']} />
  ),
});

export default function LandingHero() {
  const { breakpointReached, calculated } = useMediaQuery(768);
  const { setModal } = useAuthModals();

  return (
    <section>
      <div className={styles['landing-section']}>
        <div className={styles['landing-section__typography']}>
          <StayyLogo />
          <Heading1>Open your door to friends & family.</Heading1>
          <Body1>
            {landingHeroSectionText.text1}
            <span>{landingHeroSectionText.text2}</span>
            {landingHeroSectionText.text3}
          </Body1>
          <div className={styles['typography__auth-buttons']}>
            <GradientButton
              text="JOIN STAYY"
              onClick={() => setModal('join')}
            />
            <OutlineButton text="Log in" onClick={() => setModal('login')} />
          </div>
        </div>

        <div className={styles['landing-section__carousel--mobile']}>
          <img
            src="/assets/image/mobile/STAYY-privately-mobile-01.webp"
            alt="STAYY privately"
          />
          <img
            src="/assets/image/mobile/STAYY-privately-mobile-01.webp"
            alt="STAYY privately"
          />
        </div>

        {calculated && breakpointReached ? (
          <ImageCarousel />
        ) : (
          <div className={styles['landing-section__carousel--desktop']} />
        )}
      </div>
      <CTASection
        banner={{
          visible: true,
          text: 'Space reserved for news and information banner.',
        }}
        button={{
          visible: true,
          text: 'CTA BUTTON',
          link: '/about',
        }}
      />
    </section>
  );
}
