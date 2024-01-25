import { Toaster } from '@/components/ui/sonner';
import RootLayout from '@/layouts/root-layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_Bengali } from 'next/font/google';
import { PhotoProvider } from 'react-photo-view';

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSansBengali.style.fontFamily};
        }
      `}</style>
      <PhotoProvider>
        <RootLayout>
          <Component {...pageProps} />
          <Toaster />
        </RootLayout>
      </PhotoProvider>
    </>
  );
}
