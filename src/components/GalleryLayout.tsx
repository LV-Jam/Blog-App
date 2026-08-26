import { Photo } from "@/types/Photo";
import { PhotoCard } from "./PhotoCard";

type GalleryLayoutProps = {
  photos: Photo[];
};

export function GalleryLayout({ photos }: GalleryLayoutProps) {
  return (
    <div className="gallery-masonry columns-1 sm:columns-2 lg:columns-3 xl:columns-4 p-2">
      {photos.map((photo) => (
        <div key={photo.slug} className="break-inside-avoid p-2">
          <PhotoCard photo={photo}/>
        </div>
      ))}
    </div>
  );
}