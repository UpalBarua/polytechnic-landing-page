import { Input } from "@/components/ui/input";
import { db } from "@/firebase/firebase.config";
import { uploadFile } from "@/lib/upload-file";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "sonner";

const addTeacher = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const resetForm = () => {
    setName("");
    setNumber("");
    setFile(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!file) {
        throw new Error("no file added");
      }
      const imageUrl = await uploadFile(file);
      console.log("imageUrl", imageUrl);
      const result = {
        name,
        number,
        imageUrl,
      };
      console.log(result);

      await addDoc(collection(db, "teacher"), {
        result,
      });
      toast("teacher added successfully");

      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target?.value);
  };
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target?.value);
  };
  const handleImageChange = (e) => {
    setFile(e.target?.files[0]);
  };
  return (
    <section className=" mt-56 ">
      <h1 className="text-center text-2xl font-bold pb-3">Add your Teacher</h1>

      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="border-2 p-8 border-orange-400 rounded-md">
          <div className="pb-4">
            <label className="block text-sm font-medium">Name</label>
            <div className="flex">
              <Input
                onChange={handleNameChange}
                type="text"
                name="name"
                id="name"
                className=" w-full lg:w-60 h-10 flex bg-orange-200 flex-1 border sm:text-sm rounded-r-md   "
              />
            </div>
          </div>
          <div className="pb-2">
            <label className="block text-sm font-medium">Number</label>
            <div className="flex">
              <Input
                onChange={handleNumberChange}
                type="text"
                name="number"
                id="number"
                className=" w-full lg:w-60 h-10 flex bg-orange-200 flex-1 border sm:text-sm rounded-r-md   "
              />
            </div>
          </div>
          <div className="pb-2">
            <label className="block text-sm font-medium">Image</label>
            <div className="flex">
              <Input
                onChange={handleImageChange}
                type="file"
                name="image"
                id="image"
                className=" w-full lg:w-60 h-10 flex bg-orange-200 flex-1 border sm:text-sm rounded-r-md   "
              />
            </div>
          </div>

          <button
            className="w-full font-bold bg-orange-400 px-6 py-2 mt-4 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default addTeacher;
