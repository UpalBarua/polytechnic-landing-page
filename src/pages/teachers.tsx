import { Heading } from '@/components/ui/heading';
import { teachers } from '@/config/index';
import Image from 'next/image';
import { FaRegUser } from 'react-icons/fa';
import { MdLocalPhone } from 'react-icons/md';

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

type TeacherProps = (typeof teachers)[number];

function Teacher({ image, number, position, name }: TeacherProps) {
  return (
    <li className="border shadow-md bg-background/80 rounded-md">
      <div className="relative h-52">
        <Image
          className="object-cover object-center rounded-md rounded-b-none aspect-square"
          src={image}
          alt=""
          fill
        />
      </div>
      <div className="flex flex-col gap-y-1 py-5 px-4">
        <h3 className="font-medium">{name}</h3>
        <div className="text-sm text-foreground/60 flex items-center gap-x-2">
          <MdLocalPhone />
          <span>{number}</span>
        </div>
        <div className="text-sm text-foreground/60 flex items-center gap-x-2">
          <FaRegUser />
          <span>{position}</span>
        </div>
      </div>
    </li>
  );
}
