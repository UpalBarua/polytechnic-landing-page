import Navbar from '@/components/navbar';

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="container max-w-6xl">
      <Navbar />
      {children}
    </div>
  );
}

export default RootLayout;
