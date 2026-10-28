import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="container site-header-inner">
        <Link href="/" className="brand">Flawless Productions</Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/#point-of-view" className="nav-link">What we do</Link>
          <Link href="/#offers" className="nav-link">Offers</Link>
          <Link href="/#how-we-work" className="nav-link">How we work</Link>
          <Link href="/#faq" className="nav-link">FAQ</Link>
          <Link href="/#diagnostic" className="btn nav-cta">Free diagnostic</Link>
        </nav>
      </div>
    </header>
  );
}
