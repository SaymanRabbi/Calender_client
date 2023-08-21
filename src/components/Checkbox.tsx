import React, { BaseHTMLAttributes } from 'react';

import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/Checkbox.module.scss';
import { Body1 } from './Typography';

interface Props extends BaseHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}

export default function Checkbox({
  name,
  label,
  disabled,
  register,
  ...props
}: Props) {
  return (
    <label
      htmlFor={name}
      className={`${styles.checkbox} ${
        disabled ? styles['checkbox--disabled'] : ''
      } ${props.className}`}
    >
      <input
        id={name}
        type="checkbox"
        disabled={disabled}
        {...register}
        {...props}
        className={`${styles.checkbox__input} ${props.className}`}
      />
      <div className={styles['checkbox__check-container']}>
        <div />
      </div>
      <Body1>{label}</Body1>
    </label>
  );
}

Checkbox.defaultProps = {
  disabled: false,
  register: undefined,
};
