import { TPicture } from "@/types";
import Image from "next/image";
import { PhotoView } from "react-photo-view";

export function Picture({ imageUrl }: TPicture) {
  return (
    <Image
      src={imageUrl}
      alt=""
      className="aspect-square rounded object-cover object-center"
      height={600}
      width={600}
    />
  );
}
