'use client';

import { GalleryLayout } from '@/components/GalleryLayout';
import { usePhotoStore } from '@/lib/photoStore';

export function GalleryView({ highlightsOnly = false }: { highlightsOnly?: boolean }) {
  const photos = usePhotoStore((state) => state.photos);
  return <GalleryLayout photos={highlightsOnly ? photos.slice(0, 4) : photos} />;
}