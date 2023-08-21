/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Link from 'next/link';

import { Heading1, ButtonSmall, Body2 } from '@/components/Typography';
import styles from '@/styles/features/shared/BlogHeader.module.scss';

type BlogsPageProps = {
    type: 'blogs-header';
};

type BlogCategory = {
    slug: string;
    name: string;
};

type BlogPageProps = {
    type: 'blog-header';
    heading: string;
    category: BlogCategory;
};

function BlogLink({ href, text }: { href: string; text: string }) {
    return (
        <Link href={href}>
            <ButtonSmall className={styles['blog-header__link']}>{text}</ButtonSmall>
        </Link>
    );
}

export default function BlogHeader(props: BlogsPageProps | BlogPageProps) {
    return (
        <div className={styles['blog-header']}>
            {props.type === 'blog-header' ? (
                <BlogLink href="/blogs" text="Stayy Blog" />
            ) : null}
            <Heading1>
                {props.type === 'blog-header' ? props.heading : 'Stayy Blog'}
            </Heading1>
            <div className={styles['blog-header__divider']} />
            {props.type === 'blog-header' ? (
                <div className={styles['blog-header__links']}>
                    <Body2>Category:</Body2>
                    <BlogLink
                        href={`/blogs/${props.category.slug}`}
                        text={props.category.name}
                    />
                </div>
            ) : (
                <div className={styles['blogs-header__links']}>
                    <BlogLink href="/blogs/features" text="Stayy Features" />
                    <BlogLink href="/blogs/lifestyle" text="Lifestyle" />
                    <BlogLink href="/blogs/news" text="News" />
                </div>
            )}
        </div>
    );
}
