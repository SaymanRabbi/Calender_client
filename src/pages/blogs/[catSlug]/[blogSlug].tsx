import React from 'react';

import type { NextPageWithLayout } from '@/types';

import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import BlogHeader from '@/features/blogs/components/BlogHeader';
import BlogDetail from '@/features/blogs/components/BlogDetail';

const content =
  'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy text.';

const data = {
  id: 1,
  blog_slug: 'some-slug',
  title: 'Blog Post Title Here 1',
  category: {
    slug: 'features',
    name: 'Stayy Features',
  },
  content: content,
};

const Blog: NextPageWithLayout = function () {
  return (
    <ContentWrapper>
      <BlogHeader
        type="blog-header"
        category={data.category}
        heading={data.title}
      />
      <BlogDetail
        content={data.content}
        image={{
          img_id: 1,
          img_src: '/assets/image/desktop/per-blog.jpg',
          img_alt: 'stay blog',
        }}
      />
    </ContentWrapper>
  );
};

Blog.layout = 'none';
export default Blog;
