import Link from 'next/link';

export default function TeamMember({ name, role, bio, image, links }) {
  return (
    <div className="card text-center" style={{ alignItems: 'center' }}>
      <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', background: '#eaeaea', border: '3px solid var(--primary-color)' }}>
        {image ? (
          <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
            <span style={{ fontSize: '2rem', color: '#999' }}>{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3 style={{ marginBottom: '0.5rem' }}>{name}</h3>
      <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>{role}</p>
      <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>{bio}</p>

      {links && (
        <div className="flex-center" style={{ gap: '1rem', marginTop: 'auto' }}>
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--primary-color)' }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
