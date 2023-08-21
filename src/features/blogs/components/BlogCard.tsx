import React from 'react';
import Link from 'next/link';

import type { Blog } from '@/types';

import { Body1, Body2, Heading3 } from '@/components/Typography';
import styles from '@/styles/features/blogs/BlogCard.module.scss';

export default function BlogCard({
  title,
  content,
  category,
  blog_slug: blogSlug,
}: Blog) {
  return (
    <Link
      href={`/blogs/${category.href}/${blogSlug}`}
      className={styles['blog-card']}
    >
      <img
        className="object-cover"
        src="/assets/pexels-binyamin-mellish-106399.jpg"
        alt=""
      />
      <div className={styles['blog-card__typography']}>
        <div>
          <Heading3>{title}</Heading3>
          <Body2>{category.name}</Body2>
        </div>
        <Body1>{content.concat('...').substring(0, 220)}</Body1>
      </div>
    </Link>
  );
}
