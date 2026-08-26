'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { usePhotoStore } from '@/lib/photoStore';

export default function PhotoPage() {
  const { slug } = useParams<{ slug: string }>();
  const photo = usePhotoStore((state) => state.photos.find((item) => item.slug === slug));

  if (!photo)
    return (
      <main className="page-shell empty-state">
        <h1>Photo not found</h1>
        <Link href="/gallery" className="text-link">
          Return to archive
        </Link>
      </main>
    );

  return (
    <main className="photo-page page-shell">
      <Link href="/gallery" className="back-link">
        ← Back to archive
      </Link>
      <div className="photo-detail">
        <Image
          src={photo.url}
          width={photo.metadata.resolution.width}
          height={photo.metadata.resolution.height}
          alt={photo.description}
          className="detail-image"
          priority
        />
        <article className="photo-copy">
          <p className="eyebrow">{photo.category}</p>
          <h1>{photo.title}</h1>
          <p className="lede">{photo.description}</p>
          <dl className="metadata-grid">
            <div>
              <dt>Camera</dt>
              <dd>{photo.metadata.cameraModel}</dd>
            </div>
            <div>
              <dt>Lens</dt>
              <dd>{photo.metadata.lensInfo.lensName}</dd>
            </div>
            <div>
              <dt>ISO</dt>
              <dd>{photo.metadata.iso}</dd>
            </div>
            <div>
              <dt>Exposure</dt>
              <dd>
                {photo.metadata.shutterSpeed}s / f{photo.metadata.usedAperture}
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </main>
  );
}
