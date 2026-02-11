import Link from 'next/link';

export default function Header() {
  return (
    <header className="header" style={{ borderBottom: '1px solid #eaeaea' }}>
      <div className="container flex" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>Flawless Productions</span>
        </Link>

        <nav className="flex" style={{ gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'var(--text-color)' }}>Home</Link>
          <Link href="/lucy" style={{ color: 'var(--text-color)' }}>Lucy</Link>
          <Link href="/luna" style={{ color: 'var(--text-color)' }}>Luna</Link>
          <Link href="/#contact" className="btn" style={{ padding: '0.5rem 1rem' }}>Book Consultation</Link>
        </nav>
      </div>
    </header>
  );
}
