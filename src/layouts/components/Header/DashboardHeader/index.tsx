import React from 'react';
import Link from 'next/link';

import { Users, Zzz } from '@/icons';
import Avatar from '@/components/Avatar';
import useHeader from '@/layouts/hooks/useHeader';
import styles from '@/styles/layouts/Header.module.scss';
import { OutlineButton } from '@/components/Buttons';
import DashboardMenu from './DashboardMenu';

export default function DashboardHeader() {
  const { translate } = useHeader();

  return (
    <header
      style={{ translate: `0 ${translate}px` }}
      className={styles['header-container']}
    >
      <div className={styles['header-container__items--right']}>
        <Link href="/">
          <img src="/assets/STAYY-Logo-Text.svg" alt="stayy logo" />
        </Link>
      </div>

      <div className={styles['header-container__items--left']}>
        <OutlineButton
          text="Stays"
          icon={<Zzz />}
          href="/dashboard/stays"
          className="!hidden md:!flex"
        />
        <OutlineButton
          text="Guests"
          icon={<Users className="fill-gray-300" />}
          href="/dashboard/guests"
          className="!hidden md:!flex"
        />
        <DashboardMenu trigger={<Avatar as="div" />} />
      </div>
    </header>
  );
}
