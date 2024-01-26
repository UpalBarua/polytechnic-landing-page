import { Teacher } from '@/components/teacher';
import { Heading } from '@/components/ui/heading';
import { teachers } from '@/config/index';

export default function Teachers() {
  return (
    <section className="container mt-20 max-w-5xl sm:mt-24 lg:mt-32">
      <Heading className="md:text-center">আমাদের শিক্ষক মণ্ডলী</Heading>
      <ul className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <Teacher key={teacher?.id} {...teacher} />
        ))}
      </ul>
    </section>
  );
}
