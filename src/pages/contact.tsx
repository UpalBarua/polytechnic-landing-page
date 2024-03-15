import { Heading } from "@/components/ui/heading";
import { campusInfo } from "@/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ContactForm } from "@/components/contact-form";

export default function Contact() {
  const { address, contactNumbers, socialLinks, emails } = campusInfo;

  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - Contact Us</title>
      </Head>
      <main className="container mt-24 max-w-5xl pb-20 sm:mt-32 lg:mt-56">
        <Heading className="!text-center">আমাদের সাথে যোগাযোগ</Heading>
        <div className="grid grid-cols-1 items-start gap-10 min-[500px]:grid-cols-2 min-[500px]:gap-4">
          <ContactForm />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative col-span-full hidden h-[12.25rem] sm:block">
              <Image
                src="/images/address-map.png"
                alt="contact page picture"
                className="rounded-md border object-cover object-center shadow-md"
                sizes="100%"
                fill
                priority
              />
            </div>
            <div className="space-y-2 rounded-md border bg-background/60 p-5 shadow-md">
              <h3 className="text-xl font-medium">প্রধান ক্যাম্পাস</h3>
              <p className="leading-relaxed text-foreground/60">{address}</p>
            </div>
            <div className="space-y-2 rounded-md border bg-background/60 p-5 shadow-md">
              <h3 className="text-xl font-medium">ফোন নাম্বার</h3>
              <div className="space-y-1">
                {contactNumbers.map((number, i) => (
                  <p
                    key={number + i}
                    className="leading-relaxed text-foreground/60"
                  >
                    {number}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-2 rounded-md border bg-background/60 p-5 shadow-md">
              <h3 className="text-xl font-medium">অনলাইন মাধ্যম</h3>
              <div className="flex items-center gap-x-4 pt-1">
                {socialLinks.map(({ link, icon }) => (
                  <Link href={link} key={link} className="hover:opacity-80">
                    <Image src={icon} alt={link} height={30} width={30} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2 rounded-md border bg-background/60 p-5 shadow-md">
              <h3 className="text-xl font-medium">ই-মেইল</h3>
              <div className="space-y-1">
                {emails.map((email, i) => (
                  <p
                    key={email + i}
                    className="leading-relaxed text-foreground/60"
                  >
                    {email}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
