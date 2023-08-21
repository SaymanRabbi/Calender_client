import React from 'react';

import type { NextPageWithLayout } from '@/types/generics';

import CalendarImageAbout from '@/features/about/components/sections/CalendarImageAbout';
import PrivateAccommodations from '@/features/about/components/sections/AboutHero';
import SingleTestimonial from '@/features/about/components/sections/FinalTestimonial';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import AboutSocial from '@/features/about/components/sections/AboutSocial';
import StayyIsAnsware from '@/features/about/components/sections/StayyIsAnsware';
import Testimonials from '@/features/about/components/sections/Testimonials';
import PaidStays from '@/features/about/components/sections/PaidStays';
import PrivateAcc from '@/features/shared/components/PrivateAcc';

const About: NextPageWithLayout = function () {
  return (
    <ContentWrapper containerClassName="flex flex-col gap-0 md:gap-15">
      <PrivateAccommodations />
      <AboutSocial />
      <CalendarImageAbout />
      <StayyIsAnsware />
      <Testimonials />
      <PaidStays />
      <SingleTestimonial />
      <PrivateAcc className="mt-9" />
    </ContentWrapper>
  );
};

About.layout = 'none';
export default About;
