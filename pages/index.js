import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import TeamMember from '@/components/TeamMember';
import Link from 'next/link';

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flawless Productions",
    "url": "https://flawlessprod.com",
    "logo": "https://flawlessprod.com/images/logo.png",
    "description": "Enhanced agent services for modern business",
    "founders": [
      {
        "@type": "Person",
        "name": "Nina Christina"
      },
      {
        "@type": "Person",
        "name": "JB Reeves"
      }
    ]
  };

  return (
    <Layout
      title="Flawless Productions - Enhanced Agents for Modern Business"
      description="Professional virtual assistant services with Lucy and Luna. Social media management, client coordination, and executive support. Human-trained enhanced agents available 8 AM - 8 PM."
      ogTitle="Flawless Productions - Enhanced Agents for Modern Business"
      ogDescription="Professional virtual assistant services with Lucy and Luna. Human-trained enhanced agents available 8 AM - 8 PM."
      ogImage="https://flawlessprod.com/images/logo.png"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
              Enhanced Agents for Modern Business
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Human-trained, professionally managed. Get 100x more done.
            </p>
            <Link href="/#contact" className="btn btn-lg">
              Book Free Consultation
            </Link>
          </div>
          <div className="flex-center">
             <div style={{ width: '100%', height: '400px', backgroundColor: '#eaeaea', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ color: '#999', fontSize: '1.5rem' }}>Video Placeholder (Lucy Working)</span>
             </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section bg-alt">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>The Power of Enhanced Agents</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            We combine human expertise with advanced tools to create "Enhanced Agents".
            Trained to be cooperative, secure, and productive, they serve as your virtual team,
            available 8 AM - 8 PM.
          </p>
          <p style={{ fontSize: '1.25rem' }}>
            Not just automation - it's augmented teamwork.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Our Agents</h2>
          <div className="grid-2">
            {/* Lucy Card */}
            <div className="card text-center" style={{ padding: '3rem' }}>
              <div style={{ height: '200px', backgroundColor: '#f0f0f0', marginBottom: '2rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem', color: '#999' }}>Lucy Placeholder</span>
              </div>
              <h3>Lucy</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Social Media & Client Management</p>
              <p style={{ marginBottom: '2rem' }}>Your dedicated social media manager. Instagram setup, content strategy, and client relationship tracking.</p>
              <Link href="/lucy" className="btn btn-lg">Meet Lucy</Link>
            </div>

            {/* Luna Card */}
            <div className="card text-center" style={{ padding: '3rem' }}>
              <div style={{ height: '200px', backgroundColor: '#f0f0f0', marginBottom: '2rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem', color: '#999' }}>Luna Placeholder</span>
              </div>
              <h3>Luna</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Virtual Assistant & Scheduling</p>
              <p style={{ marginBottom: '2rem' }}>Your personal assistant for calendar management, task coordination, and executive support.</p>
              <Link href="/luna" className="btn btn-lg">Meet Luna</Link>
            </div>
          </div>
          <p className="text-center" style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Custom solutions also available.
          </p>
        </div>
      </section>

      {/* Educational Section */}
      <section className="section bg-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>What Are Enhanced Agents?</h2>
          <div className="grid" style={{ gap: '2rem' }}>
            <div className="card" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>Professionally Trained</h3>
              <p>Our agents are virtual team members trained by industry experts to handle specific business functions with precision.</p>
            </div>
            <div className="card" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>Human Oversight</h3>
              <p>Every enhanced agent is supervised by real people. We combine human judgment with digital efficiency.</p>
            </div>
            <div className="card" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>Secure & Reliable</h3>
              <p>Built for business, our agents operate within secure parameters to ensure data privacy and reliable execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Who's Behind Flawless Productions</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <TeamMember
              name="Nina Christina"
              role="Founder & Agency Manager"
              bio="Former virtual assistant and English teacher turned business influencer. Built a 20K+ YouTube following teaching social media strategy. Now training enhanced agents with 10+ years experience."
              image="/images/team/nina.jpg"
              links={[
                { label: 'YouTube', url: 'https://youtube.com/@FlawlessChristina' },
                { label: 'LinkedIn', url: '#' },
                { label: 'Instagram', url: 'https://instagram.com/reevesnina' }
              ]}
            />
            <TeamMember
              name="JB Reeves"
              role="Technical Director"
              bio="French web designer and developer from Paris. 15+ years building digital solutions. Handles technical infrastructure and system design for Flawless Productions."
              image="/images/team/jb.jpg"
              links={[
                { label: 'LinkedIn', url: '#' },
                { label: 'GitHub', url: '#' }
              ]}
            />
            <TeamMember
              name="Shaun"
              role="Support & Operations"
              bio="Dedicated to ensuring smooth operations and client satisfaction. Handles support queries and coordinates team logistics."
              image="/images/team/shaun.jpg"
              links={[]}
            />
          </div>
          <p className="text-center" style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Backed by shareholders and a professional team structure.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to Scale Your Business?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.25rem', opacity: 0.9 }}>
            Book a free consultation to see how enhanced agents can transform your workflow.
          </p>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '500px', margin: '0 auto', color: 'var(--text-color)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Contact Us</h3>
            <p style={{ marginBottom: '1.5rem' }}>Fill out the form below or message us directly.</p>
            {/* Simple Form Placeholder or Button */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Redirecting to WhatsApp...'); window.location.href = 'https://wa.me/1234567890'; }}>
                <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name</label>
                    <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} required />
                </div>
                <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
                    <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd' }} required />
                </div>
                <button type="submit" className="btn" style={{ width: '100%' }}>Book Consultation (WhatsApp)</button>
            </form>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                WhatsApp contact provided after booking.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
