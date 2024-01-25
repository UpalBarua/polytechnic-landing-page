import { Notice } from '@/components/notice';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { AdminLayout } from '@/layouts/admin-layout';
import { deleteNoticeById, getAllNotices } from '@/lib/services';
import { TNotice } from '@/types';
import * as React from 'react';
import { GoTrash } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';

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
      <div className="flex py-8 items-center justify-between">
        <Heading className="!pb-0">Noticeboard</Heading>
        <Button>
          <IoMdAdd className="text-lg" />
          <span>New Notice</span>
        </Button>
      </div>
      <div className="pb-2 bg-background/80 border rounded-md px-6 py-4 divide-y">
        {notices.map((notice) => (
          <AdminNotice key={notice.id} {...notice} />
        ))}
      </div>
    </main>
  );
}

AdminNoticeboard.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

function AdminNotice({ id, ...props }: TNotice) {
  return (
    <div className="flex items-center justify-between">
      <Notice id={id} {...props} />
      <Button
        size="sm"
        variant="destructive"
        className="gap-x-2"
        onClick={() => deleteNoticeById(id)}>
        <GoTrash className="text-base" />
        <span>Delete</span>
      </Button>
    </div>
  );
}
