import { NoticeForm } from '@/components/notice-form';

export default function NewNoticePage() {
  return (
    <main className="max-w-md container mt-32 bg-background/60 p-6 rounded shadow">
      <h2 className="text-2xl font-bold tracking-tight pb-5">
        Add a New Notice
      </h2>
      <NoticeForm />
    </main>
  );
}
