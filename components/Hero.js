import Link from 'next/link';

export default function Hero({ title, subtitle, image, ctaText, ctaLink }) {
  return (
    <section className="hero">
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        <div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {ctaText && ctaLink && (
            <Link href={ctaLink} className="btn btn-lg">
              {ctaText}
            </Link>
          )}
        </div>
        <div className="flex-center">
          {image ? (
            <img src={image} alt={title} style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          ) : (
            <div style={{ width: '100%', height: '300px', backgroundColor: '#eaeaea', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#999' }}>Image Placeholder</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
