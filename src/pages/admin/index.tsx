import { Heading } from '@/components/ui/heading';
import { AdminLayout } from '@/layouts/admin-layout';

export default function AdminPage() {
  return (
    <main>
      <Heading>Admin Page</Heading>
    </main>
  );
}

AdminPage.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
