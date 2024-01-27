import { Notice } from '@/components/notice';
import { NewNoticeDialog } from '@/components/new-notice-dialog';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { AdminLayout } from '@/layouts/admin-layout';
import { deleteNoticeById, getAllNotices } from '@/lib/services';
import { TNotice } from '@/types';
import * as React from 'react';
import { GoTrash } from 'react-icons/go';
import { toast } from 'sonner';

export const getStaticProps = async () => {
  try {
    const notices = await getAllNotices();

    return {
      props: {
        notices: notices,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        notices: {},
      },
    };
  }
};

type AdminNoticeboardProps = {
  notices: TNotice[];
};

export default function AdminNoticeboard({ notices }: AdminNoticeboardProps) {
  return (
    <main className="max-w-4xl">
      <div className="flex justify-between items-center py-8">
        <Heading className="!pb-0">Noticeboard</Heading>
        <NewNoticeDialog />
      </div>
      <div className="pb-2 bg-background/80 border rounded-md px-6 py-4 divide-y">
        {notices.map((notice) => (
          <AdminNotice key={notice.id} {...notice} />
        ))}
      </div>
    </main>
  );
}

const handleDeleteNotice = async (id: string) => {
  try {
    await deleteNoticeById(id);
    toast('Notice deleted successfully');
  } catch (error) {
    console.log(error);
    toast('Failed to add new notice');
  }
};

function AdminNotice({ id, ...props }: TNotice) {
  return (
    <div className="flex justify-between items-center">
      <Notice id={id} {...props} />
      <Button
        size="sm"
        variant="destructive"
        className="gap-x-2"
        onClick={() => handleDeleteNotice(id)}>
        <GoTrash className="text-base" />
        <span>Delete</span>
      </Button>
    </div>
  );
}

AdminNoticeboard.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
