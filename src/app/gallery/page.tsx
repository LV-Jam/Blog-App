import { GalleryView } from '@/components/GalleryView';

export default function Home() {
  return (
    <main className="page-shell gallery-page">
      <div className="page-title"><p className="eyebrow">The archive</p><h1>All photographs</h1><p>Six studies in atmosphere, movement, and place.</p></div>
      <GalleryView />
    </main>
  );
}