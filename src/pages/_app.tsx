import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '@/layouts/root-layout';
import { Toaster } from '@/components/ui/sonner';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
      <Toaster />
    </RootLayout>
  );
}
