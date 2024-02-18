import { principleMessage } from "@/config";
import Image from "next/image";
import * as React from "react";
import Head from "next/head";

function Principal() {
  return (
    <React.Fragment>
      <Head>
        <title>SNHPI - Principal</title>
      </Head>
      <main className="container mt-44 max-w-3xl space-y-6 pb-28">
        <Image
          className="aspect-square rounded-full border object-cover object-center shadow"
          src={"/"}
          alt="chairman"
          height={200}
          width={200}
          quality={90}
        />
        <div>
          <h3 className="text-2xl font-medium">{principleMessage.name}</h3>
          <span className="text-lg">{principleMessage.position}</span>
        </div>
        <p className="leading-relaxed text-foreground/60">
          {principleMessage.message}
        </p>
      </main>
    </React.Fragment>
  );
}

export default Principal;
