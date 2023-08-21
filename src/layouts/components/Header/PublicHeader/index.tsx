import React from 'react';
import Link from 'next/link';

import {
  GradientButton,
  OutlineButton,
  LinkButton,
} from '@/components/Buttons';
import useAuth from '@/hooks/useAuth';
import Avatar from '@/components/Avatar';
import useAuthModals from '@/hooks/useAuthModals';
import useHeader from '@/layouts/hooks/useHeader';
import styles from '@/styles/layouts/Header.module.scss';
import HeaderModals from './Modals';

export default function PublicHeader() {
  const { user } = useAuth();
  const { translate } = useHeader();
  const { bindings, modalType, setModal } = useAuthModals();

  return (
    <header
      style={{ translate: `0 ${translate}px` }}
      className={styles['header-container']}
    >
      <div className={styles['header-container__items--right']}>
        <Link href="/">
          <img src="/assets/STAYY-Logo.svg" alt="stayy logo" />
        </Link>
        <div className={styles['header-container__item-separator']} />
        <LinkButton href="/about" text="About" className="hidden md:block" />
        <LinkButton href="/blogs" text="Blog" className="hidden md:block" />
      </div>

      <div className={styles['header-container__items--left']}>
        {user ? (
          <Link href="/dashboard">
            <Avatar imgSrc={user.picture} imgAlt={user.name.first} />
          </Link>
        ) : (
          <>
            <GradientButton
              text="JOIN STAYY"
              className="hidden md:block"
              onClick={() => setModal('join')}
            />
            <OutlineButton text="Log in" onClick={() => setModal('login')} />
          </>
        )}
      </div>
      <HeaderModals
        bindings={bindings}
        modalType={modalType}
        setModal={setModal}
      />
    </header>
  );
}
