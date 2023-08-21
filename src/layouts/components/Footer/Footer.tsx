import React from 'react';
import Link from 'next/link';

import { Facebook, Linkedin } from '@/logos';
import { Body1 } from '@/components/Typography';
import styles from '@/styles/layouts/Footer.module.scss';
import ContentWrapper from '@/components/Wrappers/ContentWrapper';
import { LinkButton } from '@/components/Buttons';

export default function Footer() {
  return (
    <ContentWrapper containerClassName={styles.footer}>
      {/* Footer Left Elements */}
      <div>
        <div className={styles['footer-socials__stayy-logo']}>
          <Link href="/">
            <img src="/assets/STAYY-Logo-Text.svg" alt="stayy logo" />
          </Link>
          <Body1>Your private accommodations network.</Body1>
        </div>
        <div className={styles['footer-socials__social-logos']}>
          <Link href="https://www.linkedin.com/company/stayynet">
            <Linkedin />
          </Link>
          <Link href="https://www.facebook.com/stayy.net">
            <Facebook />
          </Link>
        </div>
      </div>
      {/* Footer Right Elements */}
      <div className={styles.footer__links}>
        <div>
          <LinkButton href="/" text="Stayy" />
          <LinkButton href="/about" text="About" />
          <LinkButton href="/blogs" text="Blog" />
        </div>
        <div>
          <LinkButton href="/terms" text="Terms of use" />
          <LinkButton href="/privacy-policy" text="Privacy policy" />
        </div>
      </div>
    </ContentWrapper>
  );
}
