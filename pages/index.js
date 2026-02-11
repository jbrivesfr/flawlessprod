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
    "description": "Stop Drowning in Busywork. Get a virtual team that actually works. No fluff, no training, no bullshit. Just results.",
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
      title="Flawless Productions - Stop Drowning in Busywork"
      description="Stop Drowning in Busywork. Get a virtual team that actually works. No fluff, no training, no bullshit. Just results."
      ogTitle="Flawless Productions - Stop Drowning in Busywork"
      ogDescription="Stop Drowning in Busywork. Get a virtual team that actually works. No fluff, no training, no bullshit. Just results."
      ogImage="https://flawlessprod.com/images/logo.png"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/"
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
              Stop Drowning in Busywork
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Get a virtual team that actually works. No fluff, no training, no bullshit. Just results.
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
            You're paying people to do tasks AI should handle. We're the fix.
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Our "Enhanced Agents" are virtual teammates trained by real experts—available 8 AM to 8 PM, PST. They don't need handholding, sick days, or HR complaints.
          </p>
          <p style={{ fontSize: '1.25rem' }}>
            Think AI meets human intelligence. No generic chatbots. No automation theater. Just work that gets done.
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
              <p style={{ marginBottom: '2rem' }}>
                Your Instagram isn't growing because you're posting randomly and hoping for likes. Lucy fixes that. Strategy, posting, DMs, client tracking—handled. You focus on business, she handles the noise.
              </p>
              <Link href="/lucy" className="btn btn-lg">Meet Lucy</Link>
            </div>

            {/* Luna Card */}
            <div className="card text-center" style={{ padding: '3rem' }}>
              <div style={{ height: '200px', backgroundColor: '#f0f0f0', marginBottom: '2rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem', color: '#999' }}>Luna Placeholder</span>
              </div>
              <h3>Luna</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Virtual Assistant & Scheduling</p>
              <p style={{ marginBottom: '2rem' }}>
                Stop forgetting meetings, missing deadlines, and responding to emails at 11 PM. Luna manages your calendar, tracks your tasks, and keeps you sane. She's the EA you can't afford to hire full-time.
              </p>
              <Link href="/luna" className="btn btn-lg">Meet Luna</Link>
            </div>
          </div>
          <p className="text-center" style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Need something custom? We build agents for specialized workflows. Ask.
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
              <p>Trained by people who've actually done the job. Not generic AI. Not offshore contractors reading scripts. Real expertise, digitized.</p>
            </div>
            <div className="card" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>Human Oversight</h3>
              <p>Every agent reports to real humans. When something needs judgment, you get it. When something needs automation, you get that too. Best of both.</p>
            </div>
            <div className="card" style={{ border: 'none', background: 'transparent', boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>Secure & Reliable</h3>
              <p>Your data stays private. Your workflows stay reliable. No offshore mystery teams, no data leaks, no amateur hour.</p>
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
              bio="Nina built a 20K+ YouTube following teaching social media strategy—then realized she could train AI to do it better. 10+ years as a VA and digital marketer. Now she's training enhanced agents instead of hiring expensive humans."
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
              bio="15+ years building digital systems that don't break. Handles the technical backbone so you don't have to care how it works—you just care that it does."
              image="/images/team/jb.jpg"
              links={[
                { label: 'LinkedIn', url: '#' },
                { label: 'GitHub', url: '#' }
              ]}
            />
            <TeamMember
              name="Shaun"
              role="Support & Operations"
              bio="Makes sure nothing falls through the cracks. Support, ops, coordination—Shaun's the glue keeping everything running."
              image="/images/team/shaun.jpg"
              links={[]}
            />
          </div>
          <p className="text-center" style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Real company. Real team. Real accountability.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Stop doing $10/hour work when you should be closing deals.</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.25rem', opacity: 0.9 }}>
            Book a free consultation. We'll show you exactly what you're wasting time on—and how to fix it.
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
                We'll send you our WhatsApp after you book. Real humans respond.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
