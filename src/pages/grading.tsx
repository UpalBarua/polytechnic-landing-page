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
    grade: "A",
    mark: "80-100",
    point: "4.00",
  },
  {
    grade: "B+",
    mark: "75.00-79.00",
    point: "3.50",
  },
  {
    grade: "B",
    mark: "70.00-74.00",
    point: "3.00",
  },
  {
    grade: "C+",
    mark: "65.00-69.00",
    point: "2.50",
  },
  {
    grade: "C",
    mark: "60.00.-64.00",
    point: "2.00",
  },
  {
    grade: "D+",
    mark: "55.00-59.00",
    point: "1.50",
  },
  {
    grade: "D",
    mark: "50.00-54.00",
    point: "1.00",
  },
  {
    grade: "F",
    mark: "0-40.00",
    point: "0.00",
  },
];

const gradeDes = [
  {
    grade: "A",
    description: "Excellent",
  },
  {
    grade: "B+",
    description: "Very Good",
  },
  {
    grade: "B",
    description: "Good",
  },
  {
    grade: "C+",
    description: "Average",
  },
  {
    grade: "C",
    description: "Fair",
  },
  {
    grade: "D+",
    description: "Satisfactory",
  },
  {
    grade: "D",
    description: "well pass",
  },
  {
    grade: "F",
    description: "Fail",
  },
];

const Grading = () => {
  return (
    <section className="mt-8">
      <h1 className="text-center pb-8 text-3xl text-blue-500 font-bold">
        Our Grading system
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-[470px] mx-auto border-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-black font-bold">
                  Grade
                </TableHead>
                <TableHead className="text-black font-bold">Mark</TableHead>
                <TableHead className="text-black font-bold">Point</TableHead>
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
                  Us Grade
                </TableHead>

                <TableHead className="text-black font-bold">
                  Grade Description
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
