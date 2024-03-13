import { Teacher } from "@/components/teacher";
import { Heading } from "@/components/ui/heading";
import { administrativeCommittee } from "@/config";
import Head from "next/head";
import * as React from "react";

export default function AdministrativeCommittee() {
  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - Administrative</title>
      </Head>
      <section className="container mt-24 max-w-5xl pb-20 sm:mt-32 lg:mt-40">
        <Heading className="md:text-center">প্রশাসনিক কমিটি</Heading>
        <div className="pb-10 md:pb-24">
          <ul className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
            {administrativeCommittee.map((admin) => (
              <Teacher key={admin.id} {...admin} />
            ))}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}
