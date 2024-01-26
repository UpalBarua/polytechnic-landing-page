import { Teacher } from '@/components/teacher';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { AdminLayout } from '@/layouts/admin-layout';
import { deleteTeacherById, getAllTeachers } from '@/lib/services';
import { TTeacher } from '@/types';
import { GoTrash } from 'react-icons/go';
import { toast } from 'sonner';
import { NewTeacherDialog } from '../new-teacher-dialog';

export const getServerSideProps = async () => {
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
        notices: {},
      },
    };
  }
};

type AdminTeachersProps = {
  teachers: TTeacher[];
};

export default function AdminTeachers({ teachers }: AdminTeachersProps) {
  return (
    <main className="max-w-4xl">
      <div className="flex py-8 items-center justify-between">
        <Heading className="!pb-0">Teachers</Heading>
        <NewTeacherDialog />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((teacher) => (
          <AdminTeacher key={teacher.id} {...teacher} />
        ))}
      </div>
    </main>
  );
}

const handleDeleteTeacher = async (id: string) => {
  try {
    await deleteTeacherById(id);
    toast('Teacher deleted successfully');
  } catch (error) {
    console.log(error);
    toast('Failed to delete teacher');
  }
};

function AdminTeacher({ id, ...props }: TTeacher) {
  return (
    <div className="relative">
      <Teacher id={id} {...props} />
      <Button
        size="sm"
        variant="destructive"
        className="gap-x-2 absolute top-0 right-0 m-2"
        onClick={() => handleDeleteTeacher(id)}>
        <GoTrash className="text-base" />
        <span>Delete</span>
      </Button>
    </div>
  );
}

AdminTeachers.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
