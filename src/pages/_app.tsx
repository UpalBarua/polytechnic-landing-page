import { Toaster } from '@/components/ui/sonner';
import { AuthContextProvider } from '@/context/auth-context';
import { RootLayout } from '@/layouts/root-layout';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Noto_Sans_Bengali } from 'next/font/google';
import * as React from 'react';
import { PhotoProvider } from 'react-photo-view';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['latin'],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);

  return (
    <React.Fragment>
      <style jsx global>{`
        html {
          font-family: ${notoSansBengali.style.fontFamily};
        }
      `}</style>
      <PhotoProvider>
        <AuthContextProvider>
          {getLayout(<Component {...pageProps} />)}
          <Toaster />
        </AuthContextProvider>
      </PhotoProvider>
    </React.Fragment>
  );
}
