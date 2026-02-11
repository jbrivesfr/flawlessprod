import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-alt section">
      <div className="container">
        <div className="grid-2">
          <div>
            <h3>Flawless Productions</h3>
            <p>Virtual teams that actually work.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>Home</Link></li>
              <li><Link href="/lucy" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>Lucy</Link></li>
              <li><Link href="/luna" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>Luna</Link></li>
              <li><Link href="/#contact" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '2rem', borderTop: '1px solid #eaeaea', paddingTop: '1rem', color: 'var(--text-muted)' }}>
          <p>&copy; {new Date().getFullYear()} Flawless Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
