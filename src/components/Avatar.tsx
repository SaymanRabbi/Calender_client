import React, { ElementType } from 'react';

import styles from '@/styles/components/Avatar.module.scss';

type Props = {
  imgSrc?: string;
  imgAlt?: string;
  height?: number;
  className?: string;
  as?: ElementType;
};

export default function Avatar({
  as,
  imgSrc,
  imgAlt,
  height,
  className,
}: Props) {
  const Element = as ?? 'picture';

  return (
    <Element className={`${styles.avatar} ${className}`}>
      <img
        // style={{ height }}
        width={height}
        height={height}
        src={imgSrc}
        alt={imgAlt}
      />
    </Element>
  );
}

Avatar.defaultProps = {
  height: 48,
  imgSrc: '/assets/image/avatar_placeholder.webp',
  imgAlt: 'User',
  className: '',
  as: 'picture',
};
