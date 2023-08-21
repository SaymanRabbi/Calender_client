import '@/styles/globals.scss';

import React from 'react';

import type { AppPropsWithLayout } from '@/types';

import useFonts from '@/hooks/useFonts';
import { GeneralLayout, DashboardLayout } from '@/layouts/layouts';
import { PrivateGuard, PublicGuard } from '@/guards';
import AuthProvider from '@/contexts/AuthContext';
import AuthModalProvider from '@/contexts/AuthModalContext';
import DashboardModalProvider from '@/contexts/DashboardModalContext';

const ComponentMap = {
  dashboard: ({ Component, pageProps }: AppPropsWithLayout) => (
    <PrivateGuard>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </PrivateGuard>
  ),
  login: ({ Component, pageProps }: AppPropsWithLayout) => (
    <PublicGuard>
      <GeneralLayout>
        <Component {...pageProps} />
      </GeneralLayout>
    </PublicGuard>
  ),
  none: ({ Component, pageProps }: AppPropsWithLayout) => (
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
  ),
};

export default function App({
  Component,
  pageProps,
  ...rest
}: AppPropsWithLayout) {
  const { inter } = useFonts();
  const layout = Component.layout ?? 'none';
  const ModifiedComponent = ComponentMap[layout];

  return (
    <div className={inter}>
      <AuthProvider>
        <AuthModalProvider>
          <DashboardModalProvider>
            <ModifiedComponent
              Component={Component}
              pageProps={pageProps}
              {...rest}
            />
          </DashboardModalProvider>
        </AuthModalProvider>
      </AuthProvider>
    </div>
  );
}
