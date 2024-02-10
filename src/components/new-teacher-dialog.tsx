import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addNewTeacher } from "@/lib/services";
import { uploadFiles } from "@/lib/upload-file";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSpinnerTwo } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { toast } from "sonner";
import * as z from "zod";

export function NewTeacherDialog() {
  const formSchema = z.object({
    name: z.string().min(1).max(50),
    picture: z.any() as z.ZodType<FileList | null>,
    department: z.string().min(1).max(50),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      department: "",
      picture: null,
    },
  });

  const onSubmit = async ({
    name,
    picture,
    department,
  }: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      if (!picture) return;
      const [imgURL] = await uploadFiles(picture);

      await addNewTeacher({
        name,
        imgURL,
        department,
      });

      form.reset();
      toast("Teacher added successfully");
    } catch (error) {
      console.log(error);
      toast("Teacher adding failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <IoMdAdd className="text-lg" />
          <span>New Teacher</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Teacher</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department *</FormLabel>
                  <FormControl>
                    <Input placeholder="position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="picture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Picture *</FormLabel>
                  <FormControl>
                    <Input
                      accept="image/*"
                      type="file"
                      onChange={(e) => field.onChange(e.target.files || null)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end pt-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <React.Fragment>
                    <CgSpinnerTwo className="animate-spin text-2xl" />
                    <span>Please Wait</span>
                  </React.Fragment>
                ) : (
                  <span>Submit</span>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
