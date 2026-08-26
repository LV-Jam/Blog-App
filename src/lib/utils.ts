import { BackEndPhoto, Photo } from '@/types/Photo';
import { BackEndPhotoMetadata, PhotoMetadata } from '@/types/PhotoMetadata';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const backEndPhotoToPhoto = (backEndPhoto: BackEndPhoto): Photo => {
  return {
    slug: backEndPhoto.slug,
    url: backEndPhoto.url,
    title: backEndPhoto.title,
    description: backEndPhoto.description,
    fileSize: backEndPhoto.fileSize,
    category: backEndPhoto.category,
    metadata: backEndPhotoMetadataToPhotoMetadata(backEndPhoto.metadata),
  };
};

export const backEndPhotoMetadataToPhotoMetadata = (
  backEndPhotoMetadata: BackEndPhotoMetadata,
): PhotoMetadata => {
  return {
    iso: backEndPhotoMetadata.iso,
    usedAperture: backEndPhotoMetadata.usedAperture,
    shutterSpeed: backEndPhotoMetadata.shutterSpeed,
    time: (backEndPhotoMetadata.time),
    lensInfo: backEndPhotoMetadata.lensInfo,
    cameraModel: backEndPhotoMetadata.cameraModel,
    bitDepth: backEndPhotoMetadata.bitDepth,
    dpi: backEndPhotoMetadata.dpi,
    resolution: backEndPhotoMetadata.resolution,
  };
};
