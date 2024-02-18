import * as React from "react";
import Head from "next/head";
import { chairmansMessage } from "@/config";
import Image from "next/image";

function Chairman() {
  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - Chairman</title>
      </Head>
      <main className="container mt-24 max-w-3xl space-y-6 pb-28 md:mt-32 lg:mt-40">
        <Image
          className="aspect-square rounded-full border object-cover object-center shadow"
          src={chairmansMessage.picture}
          alt="chairman"
          height={200}
          width={200}
          quality={90}
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-medium">{chairmansMessage.name}</h3>
          <span className="text-lg">{chairmansMessage.position}</span>
          <span className="text-lg">{chairmansMessage.institute}</span>
        </div>
        <p className="leading-relaxed text-foreground/60">
          {chairmansMessage.message}
        </p>
        <p className="pt-2 text-foreground/60">
          {chairmansMessage?.last_message}
        </p>
      </main>
    </React.Fragment>
  );
}

export default Chairman;
