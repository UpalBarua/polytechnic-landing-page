import { Teacher } from "@/components/teacher";
import { Heading } from "@/components/ui/heading";
import { getAllTeachers } from "@/lib/services";
import { TTeacher } from "@/types";

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
    <section className="container mt-20 max-w-5xl sm:mt-24 lg:mt-32">
      <Heading className="md:text-center">আমাদের শিক্ষক মণ্ডলী</Heading>
      <ul className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <Teacher key={teacher?.id} {...teacher} />
        ))}
      </ul>
    </section>
  );
}
