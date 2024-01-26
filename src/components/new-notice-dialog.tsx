import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { addNewNotice } from '@/lib/services';
import { uploadFile } from '@/lib/upload-file';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSpinnerTwo } from 'react-icons/cg';
import { IoMdAdd } from 'react-icons/io';
import { toast } from 'sonner';
import * as z from 'zod';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  title: z.string().min(1).max(50),
  description: z.string().max(800),
  pdfFile: z.instanceof(File),
});

export function NewNoticeDialog() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      pdfFile: new File([], ''),
    },
  });

  const onSubmit = async ({
    title,
    description,
    pdfFile,
  }: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      const pdfLink = await uploadFile(pdfFile);

      await addNewNotice({
        title,
        description,
        pdfLink,
        publishedOn: Date.now(),
      });

      form.reset();
      toast('Notice added successfully');
    } catch (error) {
      console.log(error);
      toast('Notice adding failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <IoMdAdd className="text-lg" />
          <span>New Notice</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Notice</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="description"
                      className="resize-none h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pdfFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PDF File *</FormLabel>
                  <FormControl>
                    <Input
                      accept=".pdf"
                      type="file"
                      onChange={(e) =>
                        field.onChange(
                          e.target.files ? e.target.files[0] : null
                        )
                      }
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
                    <CgSpinnerTwo className="text-2xl animate-spin" />
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
