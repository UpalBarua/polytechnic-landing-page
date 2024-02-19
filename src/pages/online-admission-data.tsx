/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";

const OnlineAdmissionData = () => {
  return (
    <section className="mx-auto ml-14 mr-6 mt-44">
      <h1 className="pb-8 text-center text-4xl font-bold">
        OUR STUDENT INFORMATION DATA{" "}
      </h1>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div className="rounded-md bg-primary/15 p-6">
          <img
            alt=""
            className="mb-6 h-24 w-24 rounded-full border object-cover object-center dark:border-gray-700 dark:bg-gray-500"
            src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="grid grid-cols-2 gap-3 text-[16px] font-semibold ">
            <p>First Name:niaz</p>
            <p>Last Name:niaz</p>
            <p>Father's Name</p>
            <p>Father's Occupation:niaz</p>
            <p>Mother's Name:niaz</p>
            <p>Mother's Occupation:niaz</p>
            <p>Guardian Name:</p>
            <p>Guardian Phone:</p>
            <p>Present Address:</p>
            <p>Permanent Address:</p>
            <p>Date Of Birth:</p>
            <p>Gender:</p>
            <p>Religion:</p>
            <p>Mobile (Student):</p>
            <p>Roll No:</p>
            <p>Registration No:</p>
            <p>Board:</p>
            <p>Passing Year:</p>
            <p>Grade:</p>
          </div>
          <Button className="mt-4">Delete Information</Button>
        </div>
        <div className="rounded-md bg-primary/15 p-6">
          <img
            alt=""
            className="mb-6 h-24 w-24 rounded-full border object-cover object-center dark:border-gray-700 dark:bg-gray-500"
            src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="grid grid-cols-2 gap-3 text-[16px] font-semibold ">
            <p>First Name:niaz</p>
            <p>Last Name:niaz</p>
            <p>Father's Name</p>
            <p>Father's Occupation:niaz</p>
            <p>Mother's Name:niaz</p>
            <p>Mother's Occupation:niaz</p>
            <p>Guardian Name:</p>
            <p>Guardian Phone:</p>
            <p>Present Address:</p>
            <p>Permanent Address:</p>
            <p>Date Of Birth:</p>
            <p>Gender:</p>
            <p>Religion:</p>
            <p>Mobile (Student):</p>
            <p>Roll No:</p>
            <p>Registration No:</p>
            <p>Board:</p>
            <p>Passing Year:</p>
            <p>Grade:</p>
          </div>
          <Button className="mt-4">Delete Information</Button>
        </div>
      </div>
    </section>
  );
};

export default OnlineAdmissionData;
