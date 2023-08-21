import React, { ButtonHTMLAttributes } from 'react';

import styles from '@/styles/components/Buttons/Button.module.scss';
import { ButtonPrimary } from '../Typography';

interface Props {
  text: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  icon?: JSX.Element;
  onClick?: VoidFunction;
}

export default function GradientButton({
  text,
  type,
  icon,
  disabled,
  className,
  onClick,
}: Props) {
  return (
    <button
      disabled={disabled}
      type={type ?? 'button'}
      onClick={onClick}
      className={`${styles['button-gradient']} ${className}`}
    >
      <ButtonPrimary className="text-white">{text}</ButtonPrimary>
      {icon}
    </button>
  );
}

GradientButton.defaultProps = {
  type: 'button',
  disabled: false,
  className: '',
  icon: undefined,
  onClick: undefined,
};
