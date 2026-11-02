import Link from 'next/link';
import { jeanLink } from '@/lib/aiScore';

export default function Footer() {
  return (
    <footer className="footer bg-alt section">
      <div className="container">
        <div className="grid-2">
          <div>
            <h3>Flawless Productions</h3>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>Big AI builds for the Fortune 500. We build AI for the rest of us.</p>
          </div>
          <div>
            <h4>Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/#why" className="footer-link">Why we exist</Link></li>
              <li><Link href="/#what-we-do" className="footer-link">What we do for our clients</Link></li>
              <li><Link href="/#how-we-work" className="footer-link">How we work</Link></li>
              <li><Link href="/#faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/ai-score" className="footer-link">AI Score (2 minutes)</Link></li>
              <li><Link href="/diagnostic" className="footer-link">Quick 4-question diagnostic</Link></li>
              <li><a href={jeanLink('Hi Jean, I’m coming from flawlessprod.com. I’d like to talk with JB.')} target="_blank" rel="noopener noreferrer" className="footer-link">Chat with Jean on WhatsApp</a></li>
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
