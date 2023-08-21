import React from 'react';

import { Heading2 } from '@/components/Typography';
import { GradientButton } from '@/components/Buttons';

type Props = {
  className?: string;
};
export default function PrivateAcc({ className }: Props) {
  return (
    <section className={`flex flex-col gap-0 md:gap-15 mt-3 ${className}`}>
      <div className="flex flex-col items-center gap-6 px-6 md:px-0 md:pt-10 lg:pt-20 md:pb-10">
        <Heading2 className="w-full md:w-153 lg:w-[760px] text-center hyphens-manual md:hyphens-none">
          Private accommoda&shy;tions are the better way to Stayy.
        </Heading2>
        <GradientButton text="JOIN STAYY" className="w-full md:w-[180px]" />
      </div>
      <img
        src="/assets/image/desktop/relax-and-stayy-awhile.webp"
        alt="relax and stayy awhile"
        className="hidden md:block 2xl:w-360"
      />
      <div className="block md:hidden">
        <img
          src="/assets/image/mobile/relax-and-stayy-awhile-mobile.webp"
          alt="relax and stayy awhile"
          className="absolute -z-10 -mt-16 w-full"
        />
        <img
          src="/assets/image/mobile/relax-and-stayy-awhile-mobile.webp"
          alt="relax and stayy awhile"
          className="invisible w-full"
        />
      </div>
    </section>
  );
}

PrivateAcc.defaultProps = {
  className: '',
};
