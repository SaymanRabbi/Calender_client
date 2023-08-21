import React from 'react';
import Link from 'next/link';

import { ButtonSmall } from './Typography';

type LinkVariantProps = {
  variant: 'link';
  text: string;
  href: string;
  className?: string;
};

type ButtonVariantProps = {
  variant: 'button';
  text: string;
  className?: string;
  pressable?: boolean;
  onClick?: VoidFunction;
};

export default function Chip({
  text,
  className,
  ...args
}: LinkVariantProps | ButtonVariantProps) {
  return args.variant === 'link' ? (
    <Link href={args.href}>
      <button
        type="button"
        className={`px-3 py-1 rounded-3xl pressable ${className}`}
      >
        <ButtonSmall className="uppercase">{text}</ButtonSmall>
      </button>
    </Link>
  ) : (
    <button
      type="button"
      className={`px-3 py-1 rounded-3xl ${
        args.pressable ? 'pressable cursor-pointer' : 'cursor-default'
      } ${className}`}
      onClick={args.onClick}
    >
      <ButtonSmall className="uppercase">{text}</ButtonSmall>
    </button>
  );
}

Chip.defaultProps = {
  className: '',
};
