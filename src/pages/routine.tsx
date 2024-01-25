import React from "react";
import { MdLibraryBooks } from "react-icons/md";

const Routine = () => {
  const allRoutine = [
    {
      id: 1,
      semester: "one",
      image:
        "https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      semester: "two",
      image:
        "https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      semester: "three",
      image:
        "https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      semester: "four",
      image:
        "https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      semester: "five",
      image:
        "https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      semester: "six",
      image:
        "https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      semester: "seven",
      image:
        "https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      semester: "eight",
      image:
        "https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="mx-auto mt-44 max-w-5xl">
      <h1 className="pb-8 text-4xl font-bold text-center">OUR ALL ROUTINE</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {allRoutine?.map((routine) => (
          <div
            className="p-6 text-3xl shadow-md  shadow-orange-200"
            key={routine?.id}
            routine={routine}
          >
            <MdLibraryBooks></MdLibraryBooks>

            <h1>{routine?.semester} Semester</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Routine;
