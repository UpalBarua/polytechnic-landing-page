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
    <section className="mt-44 max-w-5xl mx-auto">
      <h1 className="text-center text-4xl pb-8 font-bold">OUR ALL ROUTINE</h1>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
        {allRoutine?.map((routine) => (
          <div
            className="text-3xl  shadow-md shadow-orange-200 p-6"
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
