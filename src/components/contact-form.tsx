import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name can not be more than 50 characters" }),
  phone: z
    .string()
    .min(11, { message: "Invalid phone number" })
    .max(11, { message: "Invalid phone number" }),
  email: z.string().email(),
  comment: z
    .string()
    .min(1, {
      message: "Message is required",
    })
    .max(500, { message: "Message can not be more than 50 characters" }),
});

type ContactForm = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = async (formData: ContactForm) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )
      .then(
        () => {
          form.reset();
          alert("Message sent to snhpi!");
        },
        () => {
          alert("Something went wrong");
        },
      );
  };

  return (
    <Form {...form}>
      <form
        className="space-y-4 rounded-md border bg-background/60 p-6 shadow-md"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>নাম *</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ইমেইল *</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>মোবাইল নম্বর *</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>মন্তব্য *</FormLabel>
              <FormControl>
                <Textarea className="h-32 resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">
          সাবমিট
        </Button>
      </form>
    </Form>
  );
}
