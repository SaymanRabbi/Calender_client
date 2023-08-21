import React from 'react';

import styles from '@/styles/components/Buttons/Button.module.scss';
import { Caption } from '../Typography';

type Props = {
  text: string;
  disabled?: boolean;
  onClick?: VoidFunction;
};
export default function StayHistoryButton({ text, disabled, onClick }: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={styles['button-history']}
      onClick={onClick}
    >
      <Caption>{text}</Caption>
    </button>
  );
}

StayHistoryButton.defaultProps = {
  disabled: false,
  onClick: undefined,
};
