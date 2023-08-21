import React, { ButtonHTMLAttributes } from 'react';

import styles from '@/styles/components/Buttons/Button.module.scss';
import { ButtonSmall } from '../Typography';

interface Props {
  text: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
  icon?: JSX.Element;
  onClick?: VoidFunction;
}

export default function TodayButton({
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
      className={`${styles['button-today']} ${className}`}
    >
      <ButtonSmall>{text}</ButtonSmall>
      {icon}
    </button>
  );
}

TodayButton.defaultProps = {
  type: 'button',
  className: '',
  icon: undefined,
  onClick: undefined,
};
