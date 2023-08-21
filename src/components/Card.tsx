import React, {
  ElementType,
  PropsWithChildren,
  BaseHTMLAttributes,
} from 'react';

import styles from '@/styles/components/Card.module.scss';

interface Props extends PropsWithChildren, BaseHTMLAttributes<HTMLFormElement> {
  shadow?: boolean;
  gradient?: boolean;
  className?: string;
  as?: ElementType;
}

export default function Card({
  as,
  shadow,
  gradient,
  children,
  className,
  ...props
}: Props) {
  const Element = as ?? 'div';

  return (
    <Element
      {...props}
      className={`${styles.card} ${gradient ? styles['card--gradient'] : ''} ${shadow ? 'shadow-card' : ''
        } ${className}`}
    >
      {children}
    </Element>
  );
}

Card.defaultProps = {
  as: 'div',
  className: '',
  shadow: true,
  gradient: false,
};
