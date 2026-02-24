import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-alt section">
      <div className="container">
        <div className="grid-2">
          <div>
            <h3>Flawless Productions</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Smart teams that actually work.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/#features" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>Features</Link></li>
              <li><Link href="/#how-it-works" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>How It Works</Link></li>
              <li><Link href="/#faq" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>FAQ</Link></li>
              <li><Link href="/privacy" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" style={{ display: 'block', padding: '0.25rem 0', color: 'var(--text-color)' }}>Terms of Service</Link></li>
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
