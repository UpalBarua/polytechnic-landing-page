import { Teacher } from "@/components/teacher";
import { Heading } from "@/components/ui/heading";
import { getAllTeachers } from "@/lib/services";
import { TTeacher } from "@/types";
import Head from "next/head";
import * as React from "react";

export const getStaticProps = async () => {
  try {
    const teachers = await getAllTeachers();

    return {
      props: {
        teachers,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        teachers: [],
      },
    };
  }
};

export default function Teachers({ teachers }: { teachers: TTeacher[] }) {
  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - Teachers</title>
      </Head>
      <section className="container mt-24 max-w-5xl pb-20 sm:mt-32 lg:mt-40">
        <Heading className="md:text-center">আমাদের শিক্ষক মণ্ডলী</Heading>
        <ul className="mb-8 grid grid-cols-1 gap-4 py-2 min-[500px]:grid-cols-2 sm:grid-cols-3">
          {teachers.map((teacher) => (
            <Teacher key={teacher?.id} {...teacher} />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}
