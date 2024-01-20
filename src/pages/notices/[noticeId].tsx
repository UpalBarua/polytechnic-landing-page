import { Noticeboard } from '@/components/noticeboard';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

export default function NoticeDetails() {
  return (
    <main className="pt-32 container md:gap-4 max-w-7xl grid grid-cols-12">
      <section className="col-span-8 space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">
          অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত হালহদিশ
        </h2>
        <span className="text-foreground/60">Published on 20 January 2024</span>
        <Separator />
        <p className="leading-relaxed text-foreground/80">
          অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত হালহদিশ
          অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত হালহদিশ
          অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত হালহদিশ
          অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত
          হালহদিশঅংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত
          হালহদিশঅংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত
          হালহদিশ অংশ অংশভাক আঁইশ ইঁচড়েপাকা ঈক্ষণ ঈদৃক অংশভাগী জওয়ান অংশাঙ্কিত
          হালহদিশ
        </p>
        <div className="flex items-center justify-center">
          <Document file="/notice.pdf" className="max-w-max">
            <Page pageNumber={1} renderTextLayer={false} />
          </Document>
        </div>
        <a href="/notice.pdf" className={buttonVariants()} download>
          download
        </a>
      </section>
      <section className="col-span-4">
        <Noticeboard />
      </section>
    </main>
  );
}
