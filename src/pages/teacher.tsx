import TeacherCard from "@/components/TeacherCard";
import React from "react";

const Teacher = () => {
  const allTeacher = [
    {
      id: 1,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
    {
      id: 2,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1581455527083-9d62f3f5ae01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
    {
      id: 3,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
    {
      id: 4,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
    {
      id: 5,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1585807515950-bc46d934c28b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
    {
      id: 6,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
    {
      id: 7,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
    {
      id: 8,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1583195763986-0231686dcd43?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
    {
      id: 9,
      name: "Asim Roy",
      image:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      position: "Chief Instructor",
      number: "01819453623",
    },
  ];
  return (
    <section className="mt-8 ">
      <h1 className="font-bold text-3xl text-blue-500 pb-8">
        Our Honorable Teacher:
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {allTeacher?.map((teacher) => (
          <TeacherCard teacher={teacher} key={teacher?.id}></TeacherCard>
        ))}
      </div>
    </section>
  );
};

export default Teacher;
