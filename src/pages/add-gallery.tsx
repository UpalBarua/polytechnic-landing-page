import { Input } from "@/components/ui/input";
import { db } from "@/firebase/firebase.config";
import { uploadFile } from "@/lib/upload-file";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "sonner";

const addGallery = () => {
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!file) {
        throw new Error("no file added");
      }
      const imageUrl = await uploadFile(file);
      console.log("imageUrl", imageUrl);
      await addDoc(collection(db, "gallery"), {
        imageUrl,
      });

      toast("image added successfully");
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setFile(e.target?.files[0]);
  };
  return (
    <section className=" mt-56 ">
      <h1 className="text-center text-2xl font-bold pb-3">
        Add Memory In Gallery
      </h1>

      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="border-2 p-6 border-orange-400 rounded-md">
          <Input
            onChange={handleChange}
            type="file"
            className=" bg-orange-200"
          ></Input>
          <button
            className="w-full bg-orange-400 px-6 py-2 mt-4 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default addGallery;
