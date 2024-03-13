import { Teacher } from "@/components/teacher";
import { Heading } from "@/components/ui/heading";
import { teachers } from "@/config";
import Head from "next/head";
import * as React from "react";

// export const getStaticProps = async () => {
//   try {
//     const teachers = await getAllTeachers();
//
//     return {
//       props: {
//         teachers,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//
//     return {
//       props: {
//         teachers: [],
//       },
//     };
//   }
// };

export default function Teachers() {
  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - Teachers</title>
      </Head>
      <section className="container mt-24 max-w-5xl pb-20 sm:mt-32 lg:mt-40">
        {Object.keys(teachers).map((key) => (
          <div key={key} className="pb-10 md:pb-24">
            <Heading className="md:text-center">{key}</Heading>
            <ul className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
              {teachers[key as keyof typeof teachers].map((teacher) => (
                <Teacher key={teacher.id} {...teacher} />
              ))}
            </ul>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}
