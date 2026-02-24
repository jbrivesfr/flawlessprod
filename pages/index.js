import Layout from '@/components/Layout';
import TeamMember from '@/components/TeamMember';
import Link from 'next/link';

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flawless Productions",
    "url": "https://flawlessprod.com",
    "logo": "https://flawlessprod.com/images/logo.png",
    "description": "Flawless Productions — AI-powered personal agents available 24/7 via WhatsApp. Meet Lucy and Luna.",
    "founders": [
      { "@type": "Person", "name": "Nina Christina" },
      { "@type": "Person", "name": "JB Reeves" }
    ]
  };

  return (
    <Layout
      title="Flawless Productions - Personal Agents, One WhatsApp Away"
      description="Flawless Productions builds AI-powered personal agents that work 24/7 — available via WhatsApp. No apps, no logins, no waiting. Meet Lucy and Luna."
      ogTitle="Flawless Productions - Personal Agents, One WhatsApp Away"
      ogDescription="AI-powered personal agents working 24/7 via WhatsApp. No apps, no logins. Meet Lucy and Luna."
      ogImage="https://flawlessprod.com/images/logo.png"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/"
    >
      {/* Hero Section - Full Width Video Banner */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
        {/* Vimeo Background Video */}
        <iframe
          src="https://player.vimeo.com/video/1167226262?autoplay=1&muted=1&loop=1&background=1"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '177.78vh',
            minWidth: '100%',
            height: '56.25vw',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            border: 0,
            pointerEvents: 'none',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Flawless Productions Hero"
        />
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)',
        }} />
        {/* Content on top */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 2rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 500 }}>
            Flawless Productions
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
            Your team — always on, always working
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', maxWidth: '700px', lineHeight: 1.5 }}>
            AI-powered agents trained by real experts. Available 24/7 via WhatsApp. No apps, no dashboards, no waiting. Just results.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/lucy" className="btn btn-lg btn-whatsapp">
              Meet Lucy →
            </Link>
            <Link href="/luna" className="btn btn-lg" style={{ backgroundColor: 'white', color: '#333' }}>
              Meet Luna →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section style={{ backgroundColor: 'var(--background-alt)', padding: '2rem 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="container text-center">
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 500 }}>
            Trusted by solopreneurs, coaches, and online business owners.
          </p>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            10+ years experience. Real humans behind every agent.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>What we do</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            We build Enhanced Agents — AI trained by real human experts — and put them in your pocket via WhatsApp.
          </p>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            No apps to install. No accounts to manage. No 9-to-5 limitations. Just message your agent and it gets done.
          </p>
          <p style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '2rem' }}>
            We make world-class assistance accessible — without the $3K/month price tag.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section bg-alt">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Three steps. That's it.</h2>
          <div className="grid" style={{ gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
              <h3 style={{ marginBottom: '1rem' }}>Choose your agent</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Pick the agent that fits what you need. Lucy for social media and business tasks. Luna for other specialties.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
              <h3 style={{ marginBottom: '1rem' }}>Subscribe</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Pick your plan. First month is half off. No contracts, no commitment.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
              <h3 style={{ marginBottom: '1rem' }}>Message. Get results.</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                You'll get your agent's direct WhatsApp number. Message them like a real assistant — voice notes, screenshots, texts. They handle it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Agents Section */}
      <section id="agents" className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Meet the agents</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Each agent is trained by experts, available 24/7, and dedicated to making your life easier.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {/* Lucy Card */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '4px solid #d81b60' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#d81b60' }}>Lucy</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Social Media & Smart Assistant
                </p>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Your personal agent for social media, content calendars, client tracking, and any business task you throw her way. Available from 6 AM to 11 PM and beyond.
              </p>
              <ul style={{ fontSize: '1rem', lineHeight: '2', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                <li>Content calendar & caption writing</li>
                <li>Social media management</li>
                <li>Client & CRM tracking</li>
                <li>Research & competitive intel</li>
                <li>Unlimited WhatsApp requests</li>
              </ul>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#d81b60' }}>$1,000/mo</span>
                <span style={{ fontSize: '1rem', color: '#28a745', fontWeight: 600, marginLeft: '0.75rem' }}>First month $500</span>
              </div>
              <Link href="/lucy" className="btn btn-lg" style={{ display: 'block', textAlign: 'center', backgroundColor: '#d81b60', color: 'white', textDecoration: 'none', padding: '1rem', borderRadius: '8px', fontWeight: 700 }}>
                Meet Lucy →
              </Link>
            </div>

            {/* Luna Card */}
            <div className="card" style={{ padding: '2.5rem', borderTop: '4px solid var(--primary-color)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Luna</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Personal Agent
                </p>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Luna handles a different set of needs. Available 24/7 via WhatsApp, trained by real experts, ready to take on what you need most.
              </p>
              <ul style={{ fontSize: '1rem', lineHeight: '2', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                <li>Always available via WhatsApp</li>
                <li>Unlimited requests</li>
                <li>Expert-trained agent</li>
                <li>Fast, reliable delivery</li>
                <li>No apps or logins needed</li>
              </ul>
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-color)' }}>Plans available</span>
              </div>
              <Link href="/luna" className="btn btn-lg" style={{ display: 'block', textAlign: 'center', backgroundColor: 'var(--primary-color)', color: 'white', textDecoration: 'none', padding: '1rem', borderRadius: '8px', fontWeight: 700 }}>
                Meet Luna →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>The team behind the agents</h2>
            <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
              Every agent is trained, supervised, and accountable to a real team with real expertise. Not outsourced. Not automated randomness.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <TeamMember
              name="Nina Christina"
              role="Founder & Head of Training"
              bio="Nina built a 20K+ YouTube following teaching social media strategy — then realized she could train AI to do it better. 10+ years as an assistant and digital marketer. She personally trains and oversees every Enhanced Agent. Not outsourced. Not automated. Nina's fingerprints are on every interaction."
              image="/images/team/nina.jpg"
              links={[
                { label: 'YouTube', url: 'https://youtube.com/@FlawlessChristina' },
                { label: 'LinkedIn', url: '#' },
                { label: 'Instagram', url: 'https://instagram.com/reevesnina' }
              ]}
            />
            <TeamMember
              name="JB"
              role="Technical Lead"
              bio="15+ years building digital systems that don't break. Handles the infrastructure so you never have to think about how it works — just that it does."
              image="/images/team/jb.jpg"
              links={[
                { label: 'LinkedIn', url: '#' },
                { label: 'GitHub', url: '#' }
              ]}
            />
            <TeamMember
              name="Shaun"
              role="Operations & Client Success"
              bio="Makes sure nothing falls through the cracks. Support, ops, coordination — Shaun's the glue keeping everything running smoothly for clients."
              image="/images/team/shaun.jpg"
              links={[]}
            />
          </div>

          <p className="text-center" style={{ marginTop: '2rem', fontSize: '1.1rem', fontWeight: 600 }}>
            Real company. Real team. Real accountability.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Ready to work smarter?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.7' }}>
            Stop doing $10/hour work when you should be closing deals. Your agent is ready.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/lucy" className="btn btn-lg btn-whatsapp" style={{ fontSize: '1.2rem' }}>
              Meet Lucy →
            </Link>
            <Link href="/luna" className="btn btn-lg" style={{ backgroundColor: 'white', color: '#333', fontSize: '1.2rem' }}>
              Meet Luna →
            </Link>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '1rem', opacity: 0.85 }}>
            First month 50% off — no contracts
          </p>
        </div>
      </section>
    </Layout>
  );
}
