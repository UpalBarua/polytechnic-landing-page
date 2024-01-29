import { Heading } from '@/components/ui/heading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { gradePercentage, gradingSystem } from '@/config';

export default function GradingSystem() {
  return (
    <section className="container mt-20 max-w-4xl sm:mt-24 lg:mt-32">
      <Heading className="md:text-center">গ্রেডিং সিস্টেম</Heading>
      <p className="leading-relaxed text-foreground/60 text-center px-4 sm:px-14 md:px-36 lg: mx-auto pb-6 md:pb-8">
        প্রতি সেমিস্টারে একজন শিক্ষার্থী প্রাপ্ত নম্বরের ভিত্তিতে লেটার গ্রেড
        এবং তার বিপরীতে গ্রেড পয়েন্ট (GP) অর্জন করবে। নিম্ন বর্ণিত নিয়মে প্রাপ্ত
        নম্বরের ভিত্তিতে লেটার গ্রেড এবং তার বিপরীতে গ্রেড পয়েন্ট প্রদান করা
        হবে।
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Table className="bg-background/80 text-foreground/60 rounded-md shadow-md border">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium p-4 text-foreground/90">
                প্রাপ্ত নম্বর
              </TableHead>
              <TableHead className="font-medium p-4 text-foreground/90">
                লেটার গ্রেড
              </TableHead>
              <TableHead className="font-medium p-4 text-foreground/90">
                গ্রেড পয়েন্ট (GP)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gradingSystem.map(({ grade, marks, point }) => (
              <TableRow key={grade}>
                <TableCell className="px-4">{grade}</TableCell>
                <TableCell className="px-4">{marks}</TableCell>
                <TableCell className="px-4">{point}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table className="bg-background/80 text-foreground/60 rounded-md shadow-md border">
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium p-4 text-foreground/90">
                পর্ব ভিত্তিক GPA এর গুরুত্ব
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gradePercentage.map(({ grade, percentage }) => (
              <TableRow key={percentage}>
                <TableCell className="px-4">{grade}</TableCell>
                <TableCell className="px-4">{percentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
