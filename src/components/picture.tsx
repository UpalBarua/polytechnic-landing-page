import { TPicture } from '@/types';
import Image from 'next/image';
import { PhotoView } from 'react-photo-view';

export function Picture({ imageUrl }: TPicture) {
  return (
    <PhotoView src={imageUrl}>
      <Image
        src={imageUrl}
        alt=""
        className="object-cover object-center rounded aspect-square"
        height={1200}
        width={1200}
      />
    </PhotoView>
  );
}
