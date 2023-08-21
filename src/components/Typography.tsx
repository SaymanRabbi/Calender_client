import React, { CSSProperties, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

export function Heading1({ children, className, style }: Props) {
  return (
    <h1 className={`heading-1 text-dark ${className}`} style={style}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className, style }: Props) {
  return (
    <h2 className={`heading-2 text-dark ${className}`} style={style}>
      {children}
    </h2>
  );
}

export function Heading3({ children, className, style }: Props) {
  return (
    <h3 className={`heading-3 text-dark ${className}`} style={style}>
      {children}
    </h3>
  );
}

export function Heading4({ children, className, style }: Props) {
  return (
    <h4 className={`heading-4 text-dark ${className}`} style={style}>
      {children}
    </h4>
  );
}

export function ButtonPrimary({ children, className, style }: Props) {
  return (
    <p className={`button-primary text-dark ${className}`} style={style}>
      {children}
    </p>
  );
}

export function ButtonSecondary({ children, className, style }: Props) {
  return (
    <p className={`button-secondary text-dark ${className}`} style={style}>
      {children}
    </p>
  );
}

export function ButtonSmall({ children, className, style }: Props) {
  return (
    <p className={`button-small text-dark ${className}`} style={style}>
      {children}
    </p>
  );
}

export function BodyLarge({ children, className, style }: Props) {
  return (
    <p className={`body-large text-dark ${className}`} style={style}>
      {children}
    </p>
  );
}

export function Body1({ children, className, style }: Props) {
  return (
    <p className={`body-1 text-dark ${className}`} style={style}>
      {children}
    </p>
  );
}

export function Body2({ children, className, style }: Props) {
  return (
    <p className={`body-2 text-dark ${className}`} style={style}>
      {children}
    </p>
  );
}

export function Caption({ children, className, style }: Props) {
  return (
    <p className={`text-caption text-dark ${className}`} style={style}>
      {children}
    </p>
  );
}

const defaultProps = {
  className: '',
  style: {},
};
Heading1.defaultProps = defaultProps;
Heading2.defaultProps = defaultProps;
Heading3.defaultProps = defaultProps;
Heading4.defaultProps = defaultProps;
ButtonPrimary.defaultProps = defaultProps;
ButtonSecondary.defaultProps = defaultProps;
ButtonSmall.defaultProps = defaultProps;
BodyLarge.defaultProps = defaultProps;
Body1.defaultProps = defaultProps;
Body2.defaultProps = defaultProps;
Caption.defaultProps = defaultProps;
