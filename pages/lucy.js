import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Lucy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lucy - Social Media & Client Management",
    "provider": {
      "@type": "Organization",
      "name": "Flawless Productions"
    },
    "description": "Professional social media management and client relationship services",
    "offers": {
      "@type": "Offer",
      "price": "1000",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31"
    }
  };

  return (
    <Layout
      title="Lucy - Social Media & Client Management | Flawless Productions"
      description="Professional social media management and client coordination. Instagram optimization, content strategy, DM management, and client relationship tracking. From $500/month."
      ogTitle="Lucy - Social Media & Client Management Specialist"
      ogDescription="Your dedicated social media manager. Instagram setup, meta strategy, 12 professional images/month, DM management, client file tracking. $500 first month."
      ogImage="https://flawlessprod.com/images/lucy-og.jpg"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/lucy"
    >
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #fce4ec 0%, #ffffff 100%)' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 style={{ color: '#d81b60', marginBottom: '1rem' }}>Lucy</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Social Media & Client Management Specialist</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Your dedicated social media manager and client relationship expert.
            </p>
            <Link href="#pricing" className="btn btn-lg" style={{ backgroundColor: '#d81b60' }}>
              View Pricing
            </Link>
          </div>
          <div className="flex-center">
            <div style={{ width: '100%', height: '400px', backgroundColor: '#fce4ec', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #d81b60' }}>
               <span style={{ color: '#d81b60', fontSize: '1.5rem' }}>Lucy Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>What Lucy Offers</h2>

          <div className="grid-2" style={{ marginBottom: '4rem' }}>
            <div>
              <h3 style={{ color: '#d81b60', marginBottom: '1rem' }}>Social Media Management</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Instagram profile setup & optimization (aesthetics, tone, engagement)</li>
                <li>Niche identification and content strategy</li>
                <li>Meta angle development (your business + current trends)</li>
                <li>3-5 professional posts per week</li>
                <li>Comment & DM management</li>
                <li>Content calendar planning</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#d81b60', marginBottom: '1rem' }}>Client Relationship Management</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Client file organization and tracking</li>
                <li>Reminder system for follow-ups and calls</li>
                <li>Pre-call preparation sheets (obstacles, pitch points, client history)</li>
                <li>Calendar coordination (read-only sync)</li>
              </ul>
            </div>
          </div>

          <div className="grid-2" style={{ marginBottom: '4rem' }}>
             <div>
              <h3 style={{ color: '#d81b60', marginBottom: '1rem' }}>Marketing & Funnel Analysis</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Quick SEO/copywriting review</li>
                <li>Marketing funnel analysis (client → sale pathway)</li>
                <li>Conversion optimization suggestions</li>
                <li>Strategic intervention points in your funnel</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#d81b60', marginBottom: '1rem' }}>Professional Photography Service</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>12 professionally-sourced images per month (rights included)</li>
                <li>Themed photography matching your meta/niche</li>
                <li>No photography required from you (unless you want to provide selfies/POV)</li>
                <li>Same quality as Lucy's Instagram profile</li>
              </ul>
            </div>
          </div>

          {/* Meta Strategy */}
          <div className="card bg-alt" style={{ padding: '2rem', marginBottom: '4rem', borderLeft: '4px solid #d81b60' }}>
            <h3 style={{ color: '#d81b60', marginBottom: '1rem' }}>Lucy's Meta Strategy Expertise</h3>
            <p style={{ fontSize: '1.1rem' }}>
              Lucy excels at finding your "meta" - the intersection between your business, what people are talking about right now, and what your audience needs.
              For example: <em>Cybersecurity business + AI concerns = "Worried about AI security risks? We've got you covered."</em>
              Lucy identifies trends, fears, and needs in your industry and creates relatable, engaging content.
            </p>
          </div>

          {/* Pricing */}
          <div id="pricing" className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '2rem' }}>Pricing & What's Included</h2>
            <div className="card" style={{ padding: '3rem', border: '2px solid #d81b60', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20px', right: '-30px', transform: 'rotate(45deg)', background: '#d81b60', color: 'white', padding: '0.5rem 3rem', fontWeight: 'bold' }}>
                SPECIAL
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Monthly Plan</h3>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#d81b60', marginBottom: '0.5rem' }}>
                $1,000<span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}>/month</span>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#28a745', fontWeight: 'bold', marginBottom: '2rem' }}>
                First Month: $500 (50% OFF)
              </div>

              <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: '0 auto 2rem', maxWidth: '400px' }}>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> 12 professional images (rights included)
                </li>
                <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> 3-5 posts per week
                </li>
                 <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> DM & comment management
                </li>
                 <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> Client file tracking
                </li>
                 <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> Pre-call prep sheets
                </li>
                 <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#28a745', marginRight: '0.5rem' }}>✓</span> Direct WhatsApp access (8 AM - 8 PM)
                </li>
              </ul>

              <Link href="/#contact" className="btn btn-lg" style={{ width: '100%', backgroundColor: '#d81b60' }}>
                Book Your Free Onboarding
              </Link>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Managed by Nina Christina - 10 years digital marketing experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="container" style={{ paddingBottom: '4rem' }}>
         <p className="text-center">
            <Link href="/" style={{ marginRight: '1rem' }}>&larr; Back to Home</Link> | <Link href="/luna" style={{ marginLeft: '1rem' }}>Check out Luna &rarr;</Link>
         </p>
      </div>
    </Layout>
  );
}
