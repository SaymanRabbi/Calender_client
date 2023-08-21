import React, { ButtonHTMLAttributes } from 'react';

import styles from '@/styles/components/Buttons/Button.module.scss';
import { ButtonSecondary } from '../Typography';

interface Props {
  text: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  icon?: JSX.Element;
  onClick?: VoidFunction;
}

export default function SmallButton({
  text,
  type,
  className,
  icon,
  onClick,
}: Props) {
  return (
    <button
      type={type ?? 'button'}
      onClick={onClick}
      className={`${styles['button-small']} ${className}`}
    >
      <ButtonSecondary>{text}</ButtonSecondary>
      {icon}
    </button>
  );
}

SmallButton.defaultProps = {
  type: 'button',
  className: '',
  icon: undefined,
  onClick: undefined,
};
