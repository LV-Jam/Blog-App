import Link from 'next/link';
import { GalleryView } from '@/components/GalleryView';

export default function Home() {
  return (
    <main className="page-shell">
      <section className="home-intro">
        <p className="eyebrow">Lightwell Studio / Visual archive</p>
        <h1>Quiet frames.<br /><em>Strong feeling.</em></h1>
        <p className="lede">A living collection of landscapes, people, and passing light. Made slowly, kept honestly.</p>
        <Link href="/gallery" className="text-link">Explore the full archive <span>↗</span></Link>
      </section>
      <section className="highlight-section">
        <div className="section-heading"><p className="eyebrow">Selected work</p><span>01—04</span></div>
        <GalleryView highlightsOnly />
      </section>
    </main>
  );
}
