import { NewNoticeDialog } from '@/components/new-notice-dialog';

export default function NewNoticePage() {
  return (
    <main className="max-w-md container mt-32 bg-background/60 p-6 rounded shadow">
      <h2 className="pb-5 text-2xl font-bold tracking-tight">
        Add a New Notice
      </h2>
      <NewNoticeDialog />
    </main>
  );
}
