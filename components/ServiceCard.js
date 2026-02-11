import Link from 'next/link';

export default function ServiceCard({ title, description, link, price, features = [] }) {
  return (
    <div className="card">
      <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{title}</h3>
      <p style={{ flexGrow: 1, marginBottom: '1.5rem', fontSize: '1.1rem' }}>{description}</p>

      {features.length > 0 && (
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', flexGrow: 1 }}>
          {features.map((feature, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>{feature}</li>
          ))}
        </ul>
      )}

      {price && (
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{price}</span>
        </div>
      )}

      <div className="text-center">
        <Link href={link} className="btn" style={{ width: '100%', display: 'block' }}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
