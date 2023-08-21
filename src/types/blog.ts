export type BlogCategory = {
  name: string;
  href: string;
};

export interface Blog {
  id: number;
  title: string;
  category: BlogCategory;
  content: string;
  blog_slug: string;
}
