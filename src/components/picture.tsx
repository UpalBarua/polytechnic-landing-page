import { TPicture } from "@/types";
import Image from "next/image";
import { PhotoView } from "react-photo-view";

export function Picture({ imageUrl }: TPicture) {
  return (
    <PhotoView src={imageUrl}>
      <Image
        src={imageUrl}
        alt=""
        className="aspect-square cursor-pointer rounded-md object-cover object-center"
        height={600}
        width={600}
      />
    </PhotoView>
  );
}
