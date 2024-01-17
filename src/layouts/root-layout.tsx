import { Navbar } from '@/components/navbar';

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default RootLayout;
