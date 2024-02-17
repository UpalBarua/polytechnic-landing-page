/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addNewOnlineAdmission } from "@/lib/services";
import { uploadFiles } from "@/lib/upload-file";
import { TOnlineAdmission } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Controller, Form, useForm } from "react-hook-form";
import { toast } from "sonner";

const OnlineAdmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, reset } = useForm();

  const handleSubmitForm = async (data: any) => {
    try {
      setIsSubmitting(true);

      const imageUrl = await uploadFiles(data.image);
      console.log(imageUrl);
      const result = {
        ...data,
        image: imageUrl,
      };
      console.log(result);

      await addNewOnlineAdmission(result);

      toast("admission form added successfully");
      console.log("Form submitted successfully!");
      // reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto mt-52 max-w-6xl">
      <h1 className="pb-8 text-center text-3xl font-bold">
        FOR ONLINE ADMISSION LEAVE US YOUR INFO
      </h1>
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-2">
            <div>
              <Label className="font-bold">First Name</Label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Last Name</Label>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Father's Name</Label>
              <Controller
                name="fathersName"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Father's Occupation</Label>
              <Controller
                name="fathersOccupation"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Mother's Name</Label>
              <Controller
                name="mothersName"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Mother's Occupation</Label>
              <Controller
                name="mothersOccupation"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Guardian Name</Label>
              <Controller
                name="guardianName"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Guardian Phone</Label>
              <Controller
                name="guardianPhone"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Present Address </Label>
              <Controller
                name="presentAddress"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Permanent Address</Label>
              <Controller
                name="permanentAddress"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Date Of Birth</Label>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Gender</Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Religion</Label>
              <Controller
                name="religion"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Mobile (Student)</Label>
              <Controller
                name="mobile"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Roll No</Label>
              <Controller
                name="rollNo"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Registration No </Label>
              <Controller
                name="registrationNo"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Board </Label>
              <Controller
                name="board"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Passing Year</Label>
              <Controller
                name="passingYear"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Grade/Division</Label>
              <Controller
                name="grade"
                control={control}
                render={({ field }) => <Input {...field} className="h-14" />}
              ></Controller>
            </div>
            <div>
              <Label className="font-bold">Student Image</Label>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <Input
                    type="file"
                    accept="image/*"
                    className="h-14"
                    onChange={(e) => field.onChange(e.target.files || null)}
                  />
                )}
              ></Controller>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button className="w-full p-6 font-bold lg:w-4/5" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OnlineAdmission;
