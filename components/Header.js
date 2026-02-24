import Link from 'next/link';

export default function Header() {
  return (
    <header className="header" style={{ borderBottom: '1px solid #eaeaea', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1000 }}>
      <div className="container flex" style={{ justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>Flawless Productions</span>
        </Link>

        <nav className="flex" style={{ gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href="/#features" style={{ color: 'var(--text-color)' }}>Features</Link>
          <Link href="/#how-it-works" style={{ color: 'var(--text-color)' }}>How It Works</Link>
          <Link href="/#team" style={{ color: 'var(--text-color)' }}>Meet the Team</Link>
          <Link href="/#faq" style={{ color: 'var(--text-color)' }}>FAQ</Link>
          <a href="https://wa.me/17096002875?text=Hi%20Lucy!" className="btn btn-whatsapp" style={{ padding: '0.5rem 1rem' }} target="_blank" rel="noopener noreferrer">
            WhatsApp Lucy →
          </a>
        </nav>
      </div>
    </header>
  );
}
