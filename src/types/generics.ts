/* eslint-disable no-unused-vars */
import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';
// import type { BareFetcher } from 'swr/_internal/dist/index';
// import type { SWRInfiniteConfiguration } from 'swr/infinite';

export type Layout = 'dashboard' | 'login' | 'none';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout: Layout;
  // filterRedir: boolean;
};

type Component = {
  Component: NextPageWithLayout;
};

export type AppPropsWithLayout = AppProps & Component;

export type Nullable<T> = T | null;

export type Undefinable<T> = T | undefined;

export type JSONData<T extends string = string> = {
  [key in T]: string | number | boolean | object | object[];
};

// export type SWRInfiniteOpts<T> = SWRInfiniteConfiguration<
//   T,
//   any,
//   BareFetcher<T>
// > & { batchSize?: number };
