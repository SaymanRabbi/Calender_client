import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/styles/components/Buttons/Button.module.scss';
import { ButtonSmall } from '../Typography';

type Props = {
  href: string;
  text: string | ReactNode;
  disabled?: boolean;
  className?: string;
};

export default function LinkButton({ href, text, disabled, className }: Props) {
  const isActive = usePathname() === href;

  return disabled ? (
    <ButtonSmall className={`${styles['link-button']} ${className}`}>
      {text}
    </ButtonSmall>
  ) : (
    <Link href={href} className="h-max">
      <ButtonSmall
        className={`${
          isActive ? styles['link-button--active'] : styles['link-button']
        } ${className}`}
      >
        {text}
      </ButtonSmall>
    </Link>
  );
}

LinkButton.defaultProps = {
  disabled: false,
  className: '',
};
