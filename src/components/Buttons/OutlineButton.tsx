import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

import styles from '@/styles/components/Buttons/Button.module.scss';
import { ButtonSecondary } from '../Typography';

interface BaseProps {
  text: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  icon?: JSX.Element;
}
interface LinkVariantProps extends BaseProps {
  variant: 'link';
  href: string;
}

interface ButtonVariantProps extends BaseProps {
  variant: 'button';
  onClick?: VoidFunction;
}

type Props = LinkVariantProps | ButtonVariantProps;
export default function OutlineButton({
  text,
  type,
  icon,
  className,
  ...args
}: Props) {
  return args.variant === 'link' ? (
    <Link href={args.href}>
      <button
        type={type ?? 'button'}
        className={`${styles['button-outline']} ${className}`}
      >
        <ButtonSecondary>{text}</ButtonSecondary>
        {icon}
      </button>
    </Link>
  ) : (
    <button
      type={type ?? 'button'}
      onClick={args.onClick}
      className={`${styles['button-outline']} ${className}`}
    >
      <ButtonSecondary>{text}</ButtonSecondary>
      {icon}
    </button>
  );
}

OutlineButton.defaultProps = {
  type: 'button',
  className: '',
  icon: undefined,
  onClick: undefined,
  variant: 'button',
};
