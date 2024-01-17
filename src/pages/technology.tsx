import Image from "next/image";
import React from "react";

const Technology = () => {
  return (
    <section className="pt-14">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className=" flex-1">
          <h1 className="text-3xl font-bold pb-2">Our Computer Department</h1>
          <p>
            Computing jobs are among the highest paid today, and computer
            science professionals report high job satisfaction. Most computer
            scientists hold at least a bachelors degree in computer science or a
            related field. Principal areas of study and careers within computer
            science include artificial intelligence, computer systems and
            networks, security, database systems, human-computer interaction,
            vision and graphics, numerical analysis, programming languages,
            software engineering, bioinformatics, and theory of What does the
            future of computer science look like? Theres no end in sight!
            Computing has permeated our lives and its influence just keeps
            growing—from the apps on our phones to any device with a computer
            processor, computing is here to stay. Future opportunities in
            computing are without boundaries. Across virtually every industry,
            computer science professionals are engaged in programming, systems
            analysis, database administration, network architecture, software
            development, research, and more.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height={500}
            width={500}
            alt=""
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Technology;
