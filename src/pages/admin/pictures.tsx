import { Picture } from '@/components/picture';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { AdminLayout } from '@/layouts/admin-layout';
import {
  addNewPicture,
  deletePictureById,
  getAllPictures,
} from '@/lib/services';
import { uploadFile } from '@/lib/upload-file';
import { TPicture } from '@/types';
import { useState } from 'react';
import { GoTrash } from 'react-icons/go';
import { toast } from 'sonner';

export const getServerSideProps = async () => {
  try {
    const pictures = await getAllPictures();

    return {
      props: {
        pictures,
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

type AdminPicturesProps = {
  pictures: TPicture[];
};

export default function AdminPictures({ pictures }: AdminPicturesProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    try {
      if (!imageFile) return;

      const imgURL = await uploadFile(imageFile);
      await addNewPicture({ imageUrl: imgURL });

      toast('New picture added');
    } catch (error) {
      console.log(error);
      toast('Failed to add picture');
    }
  };

  return (
    <main className="max-w-4xl">
      <div className="flex py-8 items-center justify-between">
        <Heading className="!pb-0">Pictures</Heading>
        <form
          className="flex gap-x-2 bg-background/80 border items-center rounded-md p-1 shadow-sm"
          onSubmit={handleSubmit}>
          <Input
            accept="image/*"
            type="file"
            onChange={(e) =>
              setImageFile(e.target.files ? e.target.files[0] : null)
            }
          />
          <Button size="sm" disabled={!imageFile}>
            Add Picture
          </Button>
        </form>
      </div>
      <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-4">
        {pictures.map((picture) => (
          <AdminPicture key={picture.id} {...picture} />
        ))}
      </div>
    </main>
  );
}

const handleDeletePicture = async (id: string) => {
  try {
    await deletePictureById(id);
    toast('Picture deleted successfully');
  } catch (error) {
    console.log(error);
    toast('Failed to delete picture');
  }
};

function AdminPicture({ id, imageUrl }: TPicture) {
  return (
    <div className="relative">
      <Picture id={id} imageUrl={imageUrl} />
      <Button
        size="sm"
        variant="destructive"
        className="gap-x-2 absolute top-0 right-0 m-2"
        onClick={() => handleDeletePicture(id)}>
        <GoTrash className="text-base" />
        <span>Delete</span>
      </Button>
    </div>
  );
}

AdminPictures.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
