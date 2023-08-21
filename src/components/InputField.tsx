import React, {
  BaseHTMLAttributes,
  HTMLInputTypeAttribute,
  useState,
} from 'react';

import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { Visible, Hide } from '@/icons';
import styles from '@/styles/components/InputField.module.scss';
import { Body1, Caption } from './Typography';

interface Props extends BaseHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  error?: FieldError;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
}

export default function InputField({
  type,
  label,
  error,
  disabled,
  register,
  placeholder,
  className,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(true);

  const computeType = () => {
    if (type === 'password') return showPassword ? 'password' : 'text';
    return type;
  };

  return (
    <label htmlFor={register?.name} className={className}>
      {label ? <Body1>{label}</Body1> : null}
      <div
        className={`${styles['input-container']} ${
          error ? styles['input-container-error'] : ''
        } ${disabled ? styles['input-container-disabled'] : ''}`}
      >
        <input
          disabled={disabled}
          type={computeType()}
          placeholder={placeholder}
          {...register}
          {...props}
        />
        {type === 'password' ? (
          <button
            disabled={disabled}
            type="button"
            onClick={() => setShowPassword((curr) => !curr)}
          >
            {showPassword ? <Hide /> : <Visible />}
          </button>
        ) : null}
      </div>
      <Caption className="mx-1 normal-case text-pink h-5 mt-0.5">
        {error?.message}
      </Caption>
    </label>
  );
}

InputField.defaultProps = {
  register: undefined,
  type: 'text',
  label: undefined,
  placeholder: '',
  className: '',
  disabled: false,
  error: undefined,
};
