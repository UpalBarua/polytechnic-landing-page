import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { db } from '@/firebase/firebase.config';
import { getCurrentDateTimestamp } from '@/lib/get-current-date-timestamp';
import { uploadFile } from '@/lib/upload-file';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgSpinnerTwo } from 'react-icons/cg';
import { toast } from 'sonner';
import * as z from 'zod';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  pdfFile: z.instanceof(File),
});

export function NoticeForm() {
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
      await addDoc(collection(db, 'notices'), {
        title,
        description,
        pdfLink,
        publishedOn: getCurrentDateTimestamp(),
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
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
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="description"
                  className="resize-none"
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
              <FormLabel>PDF File</FormLabel>
              <FormControl>
                <Input
                  accept=".pdf"
                  type="file"
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <CgSpinnerTwo className="text-2xl animate-spin" />
          ) : (
            'Submit'
          )}
        </Button>
      </form>
    </Form>
  );
}
