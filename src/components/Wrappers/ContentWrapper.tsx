import React, { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  containerClassName?: string;
}

export default function ContentWrapper({
  children,
  className,
  containerClassName,
}: Props) {
  return (
    <div className={`px-0 md:px-10 2xl:px-16 ${className}`}>
      <div
        className={`max-w-full mx-auto md:max-w-none 2xl:max-w-content-wrapper ${containerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

ContentWrapper.defaultProps = {
  className: '',
  containerClassName: '',
};
