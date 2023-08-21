import React, { BaseHTMLAttributes } from 'react';

import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from '@/styles/components/Radio.module.scss';
import { Body1 } from './Typography';

interface Props extends BaseHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  value: string;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
}

export default function Radio({
  id,
  name,
  label,
  value,
  disabled,
  register,
  ...props
}: Props) {
  return (
    <label
      htmlFor={id}
      className={`${styles.radio} ${
        disabled ? styles['radio--disabled'] : ''
      } ${props.className}`}
    >
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        disabled={disabled}
        {...register}
        {...props}
        className={`${styles.radio__input} ${props.className}`}
      />
      <div className={styles.radio__circle}>
        <div />
      </div>
      <Body1>{label}</Body1>
    </label>
  );
}

Radio.defaultProps = {
  disabled: false,
  register: undefined,
};
