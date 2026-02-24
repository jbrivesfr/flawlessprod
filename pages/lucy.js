import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Lucy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lucy - Social Media & Smart Assistant",
    "provider": {
      "@type": "Organization",
      "name": "Flawless Productions"
    },
    "description": "Your smart assistant — always on, unlimited requests, right from your phone. Social media management and smart assistant support via WhatsApp.",
    "offers": {
      "@type": "Offer",
      "price": "1000",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31"
    }
  };

  return (
    <Layout
      title="Lucy - Your Social Media & Smart Assistant | Flawless Productions"
      description="Your smart assistant — always on, unlimited requests, right from your phone. Social media management, content calendar, client tracking. $1,000/month, first month $500."
      ogTitle="Lucy - Your Social Media & Smart Assistant"
      ogDescription="Always available, unlimited requests, right from your phone. Content calendar, social media management, client tracking via WhatsApp."
      ogImage="https://flawlessprod.com/images/lucy-og.jpg"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/lucy"
    >
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #fce4ec 0%, #ffffff 100%)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 500 }}>
            Your Social Media & Smart Assistant
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
            Your smart assistant — always on, unlimited requests, right from your phone
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
            You're juggling too much and dropping things. Lucy is always available, handles whatever you throw at her, and keeps your social media running on autopilot — with a real content calendar.
          </p>
          <a href="https://wa.me/17096002875?text=Hi%20Lucy!" className="btn btn-lg btn-whatsapp" target="_blank" rel="noopener noreferrer">
            💬 Start with Lucy — 50% off first month
          </a>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Here's what's actually broken.</h2>
          <div style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              You don't have a smart assistant. Or your smart assistant works 9-5. Or costs $3K/month and you're scared to message her on a Sunday.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Your Instagram goes dark for 3 weeks because life got busy. Your content is random. Your DMs pile up. You keep saying "I'll catch up this weekend" — and you don't.
            </p>
            <p style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '2rem' }}>
              Lucy is the fix.
            </p>

            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Three reasons people keep Lucy:</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
              <li><strong>Always available</strong> — Ping her at 6 AM or 11 PM. She responds.</li>
              <li><strong>Unlimited requests</strong> — No hourly tracker. No "that's outside scope." Just done.</li>
              <li><strong>Content calendar on lock</strong> — Consistent posting, trends tracked, never scramble again.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Lucy Does - Detailed Sections */}
      <section className="section bg-alt">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>What Lucy Does</h2>

          {/* Social Media Management */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#d81b60' }}>Social Media Management</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Instagram that looks intentional, consistent, and actually converts — not like you threw it together at 3 AM.
            </p>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>What's included:</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Instagram profile setup & optimization (bio, highlights, aesthetic)</li>
                <li>Weekly content calendar (3-5 posts planned ahead)</li>
                <li>Caption writing — short-form and long-form</li>
                <li>Hashtag research and optimization</li>
                <li>Story ideas and daily engagement prompts</li>
                <li>Reels hooks and concept briefs</li>
                <li>Posting schedule management</li>
                <li>DM monitoring and response drafts</li>
                <li>Profile analytics review (weekly or monthly)</li>
              </ul>
            </div>
          </div>

          {/* The Content Calendar */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#d81b60' }}>The Content Calendar</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7', fontStyle: 'italic' }}>
              The "always scrambling for content" problem ends here.
            </p>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Lucy builds a real content calendar. Weekly themes. Planned posts. Trend integration. So you're never waking up Monday wondering what to post.
            </p>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>What's in the calendar:</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Monthly content themes aligned to your offers and goals</li>
                <li>3-5 posts/week planned and captioned in advance</li>
                <li>Reels and Shorts hooks mapped to trending sounds</li>
                <li>Flexibility built in for real-time trending moments</li>
                <li>Content repurposing (one idea → multiple formats)</li>
              </ul>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
                Consistent presence. No more random posting and praying.
              </p>
            </div>
          </div>

          {/* From Your Phone */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#d81b60' }}>From Your Phone — Literally</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              You shouldn't need to sit at a desktop to run your business.
            </p>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Lucy lives where you are. WhatsApp her from the couch, the car, the gym. Whatever works.
            </p>
            <div className="card" style={{ padding: '2rem', backgroundColor: '#fce4ec' }}>
              <h4 style={{ marginBottom: '1rem' }}>Real examples:</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Voice note: "I want to post about my new offer" → Lucy writes 3 caption options</li>
                <li>Screenshot of a competitor post → Lucy gives you the counter-strategy + a better version</li>
                <li>"I need 5 hooks for a reel about burnout" → done in minutes</li>
                <li>Photo from your weekend → turned into an on-brand story sequence</li>
                <li>"What should I post this week?" → full content plan, ready to review</li>
              </ul>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
                No dashboards to log into. No tools to update. Just send a message, get results.
              </p>
            </div>
          </div>

          {/* Content Strategy - The Meta */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#d81b60' }}>Content Strategy — The "Meta"</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Here's the problem: you're posting about your product. Nobody cares about your product.
            </p>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              They care about their problems.
            </p>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Lucy finds the intersection between what you sell, what's trending, and what your audience is scared of or obsessed with. That's the "meta" — and it's what turns content into clients.
            </p>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>How it works:</h4>
              <ol style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Lucy studies your niche, your offers, and your audience</li>
                <li>She monitors trends, news, and competitor content weekly</li>
                <li>She maps your content to what's top-of-mind for your audience right now</li>
                <li>The result: content that feels timely, relatable, and relevant — not salesy</li>
              </ol>
              <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--background-alt)', borderLeft: '4px solid #d81b60', borderRadius: '8px' }}>
                <h5 style={{ marginBottom: '1rem' }}>Example:</h5>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
                  You're a fitness coach. Everyone's talking about GLP-1 / Ozempic.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1rem' }}>
                  Lucy's post: <strong>"Everyone's on Ozempic. Here's what happens when you stop — and what actually lasts."</strong>
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  That's content that gets saved, shared, and converts. Not "new 12-week program available now."
                </p>
              </div>
            </div>
          </div>

          {/* Client & CRM Tracking */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#d81b60' }}>Client & CRM Tracking</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Never lose a lead or forget a follow-up again.
            </p>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>What Lucy tracks:</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>New leads and where they came from</li>
                <li>Follow-up timelines and reminders</li>
                <li>Client notes and relationship context</li>
                <li>Outreach messages drafted and ready to send</li>
                <li>Status updates (prospect → client → renewal)</li>
              </ul>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
                She's not just managing your Instagram. She's managing your pipeline.
              </p>
            </div>
          </div>

          {/* Research & Competitive Intelligence */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#d81b60' }}>Research & Competitive Intelligence</h3>
            <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              Stay ahead without spending hours online.
            </p>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>What Lucy monitors:</h4>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Your niche trends (weekly summary)</li>
                <li>Competitor content — what's working, what's not</li>
                <li>Hashtag and keyword performance</li>
                <li>New platform features and algorithm shifts</li>
                <li>Trending audio for Reels/Shorts</li>
              </ul>
              <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 600 }}>
                Every week you'll know what's trending in your space — without having to find it yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Getting started is simple.</h2>
          <div className="grid" style={{ gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#d81b60', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
              <h3 style={{ marginBottom: '1rem' }}>Subscribe</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Choose your plan. First month is 50% off. No long-term commitment.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#d81b60', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
              <h3 style={{ marginBottom: '1rem' }}>Quick onboarding</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Lucy will ask you a few questions about your business, your brand voice, and your goals. Takes about 15 minutes over WhatsApp.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#d81b60', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
              <h3 style={{ marginBottom: '1rem' }}>She gets to work</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Content calendar drafted within 48 hours. From there — just message her whenever you need something. She's always there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-alt">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>What it costs (and what you get)</h2>
          
          <div className="card" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', border: '2px solid #d81b60' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Monthly Plan</h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#d81b60', marginBottom: '0.5rem' }}>
                $1,000<span style={{ fontSize: '1.2rem', color: '#666', fontWeight: 'normal' }}>/month</span>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#28a745', fontWeight: 'bold', marginBottom: '1rem' }}>
                First month: $500
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                Unlimited requests. Always available. Content calendar included.
              </p>
            </div>

            <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '2rem', marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>What's included:</h4>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.05rem', lineHeight: '2' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Unlimited WhatsApp requests
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Full content calendar (monthly)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Caption writing (unlimited)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  DM and engagement management
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Weekly trend and competitor report
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Client/lead tracking
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Strategy calls (monthly check-in)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Direct access to Lucy — no middlemen
                </li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: 'var(--background-alt)', borderRadius: '8px', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Managed directly by Nina Christina
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                10+ years digital marketing experience. Not outsourced. Not a random assistant. Nina trains every agent personally.
              </p>
            </div>

            <a href="https://wa.me/17096002875?text=Hi%20Lucy!" className="btn btn-lg btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ width: '100%', fontSize: '1.2rem' }}>
              💬 Start with Lucy — First Month $500
            </a>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
         <p className="text-center">
            <Link href="/" style={{ marginRight: '1rem' }}>&larr; Back to Home</Link> | <Link href="/luna" style={{ marginLeft: '1rem' }}>Check out Luna &rarr;</Link>
         </p>
      </div>
    </Layout>
  );
}
