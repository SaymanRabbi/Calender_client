import React from 'react';

import type { Image } from '@/types';

import { Body1, Caption } from '@/components/Typography';
import styles from '@/styles/features/blogs/BlogDetail.module.scss';

type Props = {
  content: string;
  image: Image;
};
export default function BlogDetail({ content, image }: Props) {
  return (
    <div className={styles['blog-detail']}>
      <Body1>{content}</Body1>
      <div className={styles['blog-detail__typography']}>
        <img src={image.img_src} alt={image.img_alt} />
        <Caption>{image.img_alt}</Caption>
      </div>
    </div>
  );
}
