import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-alt section">
      <div className="container">
        <div className="grid-2">
          <div>
            <h3>Flawless Productions</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Practical AI, set up for you. Measured. Private.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/#point-of-view" className="footer-link">Our point of view</Link></li>
              <li><Link href="/#offers" className="footer-link">Offers</Link></li>
              <li><Link href="/#how-we-work" className="footer-link">How we work</Link></li>
              <li><Link href="/#faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/diagnostic" className="footer-link">Free diagnostic</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center" style={{ marginTop: '2rem', borderTop: '1px solid #eaeaea', paddingTop: '1rem', color: 'var(--text-muted)' }}>
          <p>&copy; 2026 Flawless Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
