import React from 'react';

import type { Blog } from '@/types';

import BlogCard from './BlogCard';

type Props = {
  blogs: Blog[];
};

export default function BlogsList({ blogs }: Props) {
  return (
    <div className="px-3 w-full xl:w-[1080px] gap-6 flex flex-col mx-auto">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}
