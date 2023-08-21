import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

import styles from '@/styles/components/Buttons/Button.module.scss';

interface Props {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  icon: JSX.Element;
  href?: string;
  onClick?: VoidFunction;
}

export default function OutlineIconButton({
  type,
  icon,
  href,
  className,
  onClick,
}: Props) {
  return href ? (
    <Link href={href}>
      <button
        type={type ?? 'button'}
        onClick={onClick}
        className={`${styles['button-outline-icon']} ${className}`}
      >
        {icon}
      </button>
    </Link>
  ) : (
    <button
      type={type ?? 'button'}
      onClick={onClick}
      className={`${styles['button-outline-icon']} ${className}`}
    >
      {icon}
    </button>
  );
}

OutlineIconButton.defaultProps = {
  type: 'button',
  className: '',
  onClick: undefined,
  href: false,
};
