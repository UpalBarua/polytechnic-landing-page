import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '@/layouts/root-layout';
import { Toaster } from '@/components/ui/sonner';
import { Noto_Sans_Bengali } from 'next/font/google';

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
      <RootLayout>
        <Component {...pageProps} />
        <Toaster />
      </RootLayout>
    </>
  );
}
