import React from 'react';

import { Body2 } from '@/components/Typography';
import Chip from '@/components/Chip';
import styles from '@/styles/features/shared/CTASection.module.scss';

type Props = {
  banner: {
    visible: boolean;
    text: string;
  };
  button: {
    visible: boolean;
    text: string;
    link: string;
  };
  className?: string;
};

export default function CTASection({ banner, button, className }: Props) {
  return (
    <div className={`${styles['cta-section']} ${className}`}>
      <div className='flex flex-col items-center md:h-8 h-[74px] justify-center gap-3 md:gap-4 md:flex-row'>
        {banner.visible ? <Body2 className='text-gray-400'>{banner.text}</Body2> : null}
        {button.visible ? (
          <Chip variant="link" text={button.text} href={button.link} />
        ) : null}
      </div>
    </div>
  );
}

CTASection.defaultProps = {
  className: '',
};
