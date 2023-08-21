import React from 'react';
import { useRouter } from 'next/router';

import type { NextPageWithLayout, Blog } from '@/types';

import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import PrivateAcc from '@/features/shared/components/PrivateAcc';
import PaginationBar from '@/features/blogs/components/PaginationBar';
import usePagination from '@/features/blogs/hooks/usePagination';
import BlogsList from '@/features/blogs/components/BlogsList';
import BlogHeader from '@/features/blogs/components/BlogHeader';

const content =
  'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. Lorem ipsum, or lipsum as it is sometimes known, is dummy text.';

const data: Blog[] = [
  {
    id: 1,
    blog_slug: 'some-slug',
    title: 'Blog Post Title Here 1',
    category: {
      href: 'features',
      name: 'Stayy Features',
    },
    content: content,
  },
  {
    id: 2,
    blog_slug: 'some-slug',
    title: 'Blog Post Title Here 2',
    category: {
      href: 'features',
      name: 'Stayy Features',
    },
    content: content,
  },
  {
    id: 3,
    blog_slug: 'some-slug',
    title: 'Blog Post Title Here 3',
    category: {
      href: 'lifestyle',
      name: 'Lifestyle',
    },
    content: content,
  },
  {
    id: 4,
    blog_slug: 'some-slug',
    title: 'Blog Post Title Here 4',
    category: {
      href: 'news',
      name: 'News',
    },
    content: content,
  },
  {
    id: 5,
    blog_slug: 'some-slug',
    title: 'Blog Post Title Here 5',
    category: {
      href: 'news',
      name: 'News',
    },
    content: content,
  },
];

type RouterQuery = {
  catSlug: string;
};
const CategoryBlogs: NextPageWithLayout = function () {
  const { catSlug } = useRouter().query as RouterQuery;
  const { currentPage, totalPages, dataTable, handleChangePage } =
    usePagination<Blog>(data.filter((d) => d.category.href === catSlug));

  return (
    <ContentWrapper containerClassName="flex flex-col gap-10 md:gap-15">
      <BlogHeader type="blogs-header" />
      <BlogsList blogs={dataTable} />
      <PaginationBar
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
      <PrivateAcc />
    </ContentWrapper>
  );
};

CategoryBlogs.layout = 'none';
export default CategoryBlogs;
