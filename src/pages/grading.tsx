import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const grade = [
  {
    grade: "A+",
    mark: "৮০ থেকে উপরে",
    point: "8.00",
  },
  {
    grade: "A",
    mark: "৭৫ থেকে ৭৯",
    point: "৩.৭৫",
  },
  {
    grade: "A-",
    mark: "৭০ থেকে ৭৪",
    point: "৩.৫০",
  },
  {
    grade: "B+",
    mark: "৬৫ থেকে ৬৯",
    point: "৩.২৫",
  },
  {
    grade: "B",
    mark: "৬০ থেকে ৬৪",
    point: "৩.০০",
  },
  {
    grade: "B-",
    mark: "৫৫ থেকে ৫৯",
    point: "২.৭৫",
  },
  {
    grade: "C+",
    mark: "৫০ থেকে ৫৪",
    point: "২.৫০",
  },
  {
    grade: "C",
    mark: "৪৫ থেকে ৪৯",
    point: "২.২৫",
  },
  {
    grade: "D",
    mark: "৪০ থেকে 8৯",
    point: "২.০০",
  },
  {
    grade: "F",
    mark: "৪০ এর নীচে",
    point: "0.00",
  },
];

const gradeDes = [
  {
    grade: "১ম পর্ব",
    description: "৫%",
  },
  {
    grade: "২য় পর্ব",
    description: "১০%",
  },
  {
    grade: "৩য় পর্ব",
    description: "১৫%",
  },
  {
    grade: "৪র্থ পর্ব",
    description: "২০%",
  },
  {
    grade: "৫ম পর্ব",
    description: "২৫%",
  },
  {
    grade: "৬ষ্ঠ পর্ব",
    description: "২০%",
  },
  {
    grade: "৭ম পর্ব",
    description: "২৫%",
  },
  {
    grade: "৮ম পর্ব",
    description: "১৫%",
  },
];

const Grading = () => {
  return (
    <section className="mt-8">
      <h1 className="pb-4 text-3xl font-bold text-center text-blue-500">
        গ্রেডিং সিস্টেম
      </h1>
      <p className="w-full lg:w-1/2 mx-auto pb-6">
        প্রতি সেমিস্টারে একজন শিক্ষার্থী প্রাপ্ত নম্বরের ভিত্তিতে লেটার গ্রেড
        এবং তার বিপরীতে গ্রেড পয়েন্ট (GP) অর্জন করবে। নিম্ন বর্ণিত নিয়মে প্রাপ্ত
        নম্বরের ভিত্তিতে লেটার গ্রেড এবং তার বিপরীতে গ্রেড পয়েন্ট প্রদান করা
        হবে।
      </p>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-[470px] mx-auto border-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-black font-bold">
                  প্রাপ্ত নম্বর
                </TableHead>
                <TableHead className="font-bold text-black">
                  লেটার গ্রেড
                </TableHead>
                <TableHead className="font-bold text-black">
                  গ্রেড পয়েন্ট (GP)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grade.map((invoice) => (
                <TableRow key={invoice.grade}>
                  <TableCell className="font-medium ">
                    {invoice.grade}
                  </TableCell>
                  <TableCell>{invoice.mark}</TableCell>
                  <TableCell>{invoice.point}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* another table  */}
        <div className="w-[400px] mx-auto border-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-black font-bold">
                  {" "}
                </TableHead>

                <TableHead className="font-bold text-black">
                  পর্ব ভিত্তিক GPA এর গুরুত্বঃ
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gradeDes.map((invoice) => (
                <TableRow key={invoice.grade}>
                  <TableCell className="font-medium">{invoice.grade}</TableCell>
                  {/* <TableCell>{invoice.mark}</TableCell> */}
                  <TableCell>{invoice.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Grading;
