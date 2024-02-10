import { Picture } from "@/components/picture";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { AdminLayout } from "@/layouts/admin-layout";
import {
  addNewPicture,
  deletePictureById,
  getAllPictures,
} from "@/lib/services";
import { uploadFiles } from "@/lib/upload-file";
import { TPicture } from "@/types";
import * as React from "react";
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { toast } from "sonner";

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
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsUploading(true);
      if (!imageFiles) return;

      const imgURLs = await uploadFiles(imageFiles);
      console.log(imgURLs);

      await Promise.all(
        imgURLs.map(
          async (imgURL) => await addNewPicture({ imageUrl: imgURL }),
        ),
      );

      toast("New picture added");
    } catch (error) {
      console.log(error);
      toast("Failed to add picture");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <main className="max-w-4xl">
      <div className="flex items-center justify-between py-8">
        <Heading className="!pb-0">Pictures</Heading>
        <form
          className="flex items-center gap-x-2 rounded-md border bg-background/60 p-1 shadow-sm"
          onSubmit={handleSubmit}
        >
          <Input
            accept="image/*"
            type="file"
            multiple
            onChange={(e) => setImageFiles(e.target.files || null)}
          />
          <Button size="sm" disabled={!imageFiles || isUploading}>
            {isUploading ? "Uploading..." : "Add Picture"}
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
    toast("Picture deleted successfully");
  } catch (error) {
    console.log(error);
    toast("Failed to delete picture");
  }
};

function AdminPicture({ id, imageUrl }: TPicture) {
  return (
    <div className="relative">
      <Picture id={id} imageUrl={imageUrl} />
      <Button
        size="sm"
        variant="destructive"
        className="absolute right-0 top-0 m-2 gap-x-2"
        onClick={() => handleDeletePicture(id)}
      >
        <GoTrash className="text-base" />
        <span>Delete</span>
      </Button>
    </div>
  );
}

AdminPictures.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
