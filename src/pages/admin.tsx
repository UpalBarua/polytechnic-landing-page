import { AdminLayout } from '@/layouts/admin-layout';
import * as React from 'react';

export default function Admin() {
  return <main>Admin</main>;
}

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
