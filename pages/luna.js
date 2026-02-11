import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Luna() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luna - Virtual Assistant & Executive Support",
    "provider": {
      "@type": "Organization",
      "name": "Flawless Productions"
    },
    "description": "Professional virtual assistant for scheduling, coordination, and daily management.",
    "offers": {
      "@type": "Offer",
      "price": "1000",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31"
    }
  };

  return (
    <Layout
      title="Luna - Virtual Assistant & Executive Support | Flawless Productions"
      description="Virtual Assistant & Executive Support That Actually Keeps Up. Luna handles the chaos so you can focus on the work that matters."
      ogTitle="Luna - Virtual Assistant & Executive Support That Actually Keeps Up"
      ogDescription="Virtual Assistant & Executive Support That Actually Keeps Up. Luna handles the chaos so you can focus on the work that matters."
      ogImage="https://flawlessprod.com/images/luna-og.jpg"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/luna"
    >
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 style={{ color: '#1565c0', marginBottom: '1rem' }}>Luna</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Virtual Assistant & Executive Support That Actually Keeps Up</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              You're drowning in emails, double-booking meetings, and forgetting deadlines. Luna handles the chaos so you can focus on the work that matters.
            </p>
            <Link href="#pricing" className="btn btn-lg" style={{ backgroundColor: '#1565c0' }}>
              View Pricing
            </Link>
          </div>
          <div className="flex-center">
            <div style={{ width: '100%', height: '400px', backgroundColor: '#e3f2fd', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #1565c0' }}>
               <span style={{ color: '#1565c0', fontSize: '1.5rem' }}>Luna Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>What Luna Offers</h2>

          <p style={{ fontSize: '1.25rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Luna isn't another task app. She's a proactive executive assistant who learns your preferences, anticipates your needs, and handles the boring stuff before you even ask.
          </p>

          <div className="grid-2" style={{ marginBottom: '4rem' }}>
            <div>
              <h3 style={{ color: '#1565c0', marginBottom: '1rem' }}>Calendar & Scheduling</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Meeting coordination</li>
                <li>Calendar management (read-only sync)</li>
                <li>Appointment booking and confirmations</li>
                <li>Schedule optimization</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#1565c0', marginBottom: '1rem' }}>Task Management</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Daily reminders and follow-ups</li>
                <li>To-do tracking</li>
                <li>Project coordination</li>
                <li>Deadline management</li>
              </ul>
            </div>
          </div>

          <div className="grid-2" style={{ marginBottom: '4rem' }}>
             <div>
              <h3 style={{ color: '#1565c0', marginBottom: '1rem' }}>Communication Support</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Email management</li>
                <li>Message screening and prioritization</li>
                <li>Professional correspondence</li>
                <li>Follow-up automation</li>
              </ul>
            </div>
             <div>
              <h3 style={{ color: '#1565c0', marginBottom: '1rem' }}>Personal Assistance</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Travel coordination</li>
                <li>Research and information gathering</li>
                <li>Document organization</li>
                <li>Administrative support</li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div id="pricing" className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '2rem' }}>Pricing & What's Included</h2>
            <div className="card" style={{ padding: '3rem', border: '2px solid #1565c0', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', top: '20px', right: '-30px', transform: 'rotate(45deg)', background: '#1565c0', color: 'white', padding: '0.5rem 3rem', fontWeight: 'bold' }}>
                SPECIAL
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Monthly Plan</h3>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1565c0', marginBottom: '0.5rem' }}>
                $1,000<span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}>/month</span>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#28a745', fontWeight: 'bold', marginBottom: '2rem' }}>
                First Month: $500 (50% OFF)
              </div>

              <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: '0 auto 2rem', maxWidth: '400px' }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> 8 AM - 8 PM availability
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> Daily reminders & follow-ups
                </li>
                 <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> Email management
                </li>
                 <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> Proactive check-ins
                </li>
                 <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> Travel & Research
                </li>
              </ul>

              <Link href="/#contact" className="btn btn-lg" style={{ width: '100%', backgroundColor: '#1565c0' }}>
                Book Your Free Onboarding
              </Link>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Trained by Nina—not a generic chatbot reading from a script.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="container" style={{ paddingBottom: '4rem' }}>
         <p className="text-center">
            <Link href="/" style={{ marginRight: '1rem' }}>&larr; Back to Home</Link> | <Link href="/lucy" style={{ marginLeft: '1rem' }}>Check out Lucy &rarr;</Link>
         </p>
      </div>
    </Layout>
  );
}
