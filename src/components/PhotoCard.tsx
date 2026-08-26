'use client';

import { Photo } from '@/types/Photo';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MouseEventHandler, useState } from 'react';

type PhotoCardProps = { photo: Photo };

export function PhotoCard({ photo }: PhotoCardProps) {
  const [showingMetadata, setShowingMetadata] = useState(false);
  const mouseEnterHandler = () => {
    setShowingMetadata((_curr) => true);
  };
  const mouseLeaveHandler = () => {
    setShowingMetadata((_curr) => false);
  };

  return (
    <Link
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      href={`/gallery/${photo.slug}`}
      className="group relative block overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-sm transition-shadow hover:shadow"
    >
      <Image
        src={photo.url}
        width={photo.metadata.resolution.width}
        height={photo.metadata.resolution.height}
        alt={photo.description}
        className="w-full h-auto block"
      />
      <section
        className={cn(
          'absolute top-0 left-0 right-0 flex flex-wrap items-center gap-2 p-4 bg-linear-to-b from-black/90 via-black/60 to-transparent',
          showingMetadata ? '' : 'hidden',
        )}
      >
        <h3 className="shrink-0 whitespace-nowrap font-medium text-white">{photo.title}</h3>
        <section className="flex flex-wrap items-center gap-2 text-white/80 text-sm">
          <p className="shrink-0 whitespace-nowrap">Camera: {photo.metadata.cameraModel}</p>
          <p className="shrink-0 whitespace-nowrap">Lens: {photo.metadata.lensInfo.lensName}</p>
          <p className="shrink-0 whitespace-nowrap">ISO: {photo.metadata.iso}</p>
          <p className="shrink-0 whitespace-nowrap">Aperture: {photo.metadata.usedAperture}</p>
          <p className="shrink-0 whitespace-nowrap">Shutter Speed: {photo.metadata.shutterSpeed}s</p>
        </section>
      </section>
    </Link>
  );
}
