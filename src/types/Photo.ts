import { BackEndPhotoMetadata, PhotoMetadata } from './PhotoMetadata';

export interface Photo {
  slug: string;
  url: string;
  title: string;
  description: string;
  fileSize: number;
  metadata: PhotoMetadata;
  category: string;
}

export interface BackEndPhoto {
  slug: string;
  url: string;
  title: string;
  description: string;
  fileSize: number;
  category: string;
  metadata: BackEndPhotoMetadata;
}
