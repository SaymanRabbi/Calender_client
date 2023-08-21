import React from 'react';

import type { NextPageWithLayout } from '@/types/generics';

import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import LandingHero from '@/features/landing/components/sections/LandingHero';
import ManageCabin from '@/features/landing/components/sections/ManageCabin';
import NiceThings from '@/features/landing/components/sections/NiceThings';
import NomadicSection from '@/features/landing/components/sections/NomadicSection';
import InviteSection from '@/features/landing/components/sections/InviteSection';
import EarnMoney from '@/features/landing/components/sections/EarnMoney';
import PrivateAcc from '@/features/shared/components/PrivateAcc';

const Home: NextPageWithLayout = function () {
  return (
    <ContentWrapper containerClassName="flex flex-col gap-0 md:gap-15">
      <LandingHero />
      <ManageCabin />
      <NiceThings />
      <NomadicSection />
      <InviteSection />
      <EarnMoney />
      <PrivateAcc />
    </ContentWrapper>
  );
};

Home.layout = 'none';
export default Home;
