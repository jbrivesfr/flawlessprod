import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Luna() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luna - Executive Assistant & Operations Specialist",
    "provider": {
      "@type": "Organization",
      "name": "Flawless Productions"
    },
    "description": "Smart assistant support that actually keeps up. Calendar management, email support, task coordination via WhatsApp.",
    "offers": {
      "@type": "Offer",
      "price": "1000",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31"
    }
  };

  return (
    <Layout
      title="Luna - Your Executive Assistant & Operations Specialist | Flawless Productions"
      description="Smart assistant support that actually keeps up. Calendar management, email support, task coordination. $1,000/month, first month $500."
      ogTitle="Luna - Your Executive Assistant & Operations Specialist"
      ogDescription="You're drowning in emails, double-booking meetings, and forgetting deadlines. Luna handles the chaos via WhatsApp."
      ogImage="https://flawlessprod.com/images/luna-og.jpg"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/luna"
    >
      {/* Hero Section */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 500 }}>
            Your Executive Assistant & Operations Specialist
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--primary-dark)' }}>
            Smart assistant support that actually keeps up
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
            You're drowning in emails, double-booking meetings, and forgetting deadlines. Luna handles the chaos so you can focus on the work that matters.
          </p>
          <a href="https://wa.me/17096002875?text=Hi%20Luna!" className="btn btn-lg btn-whatsapp" target="_blank" rel="noopener noreferrer">
            💬 Start with Luna — 50% off first month
          </a>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>You're running your business AND doing the admin. That's two jobs.</h2>
          <div style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Every hour you spend scheduling, following up, organizing, and managing is an hour you didn't spend on the work that actually grows your business.
            </p>
            <p style={{ fontWeight: 700, fontSize: '1.3rem' }}>
              Luna is the EA you can't afford to hire full-time — but can't afford to go without.
            </p>
          </div>
        </div>
      </section>

      {/* What Luna Does - Detailed Sections */}
      <section className="section bg-alt">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="text-center" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>What Luna Does</h2>
          <p className="text-center" style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Luna isn't another task app you'll ignore. She's proactive. She reminds you. She coordinates. She keeps your life from falling apart.
          </p>

          {/* Calendar & Schedule Management */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1565c0' }}>Calendar & Schedule Management</h3>
            <div className="card" style={{ padding: '2rem' }}>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Add, move, and manage appointments</li>
                <li>Resolve scheduling conflicts before they become problems</li>
                <li>Set reminders and prep briefings before every meeting</li>
                <li>Coordinate across time zones with contacts and clients</li>
                <li>Block focus time and protect your deep work hours</li>
              </ul>
            </div>
          </div>

          {/* Email & Inbox Management */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1565c0' }}>Email & Inbox Management</h3>
            <div className="card" style={{ padding: '2rem' }}>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Summarize long email threads (get the TL;DR)</li>
                <li>Filter and prioritize what actually needs your attention</li>
                <li>Draft professional replies — you review, approve, send</li>
                <li>Follow-up tracking so nothing falls through the cracks</li>
                <li>Unsubscribe and spam management</li>
              </ul>
            </div>
          </div>

          {/* Task & Project Coordination */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1565c0' }}>Task & Project Coordination</h3>
            <div className="card" style={{ padding: '2rem' }}>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Maintain your task list and flag urgent items</li>
                <li>Break big projects into actionable steps</li>
                <li>Weekly priorities summary every Monday morning</li>
                <li>Deadline tracking and proactive reminders</li>
                <li>Coordinate with your team or contractors on your behalf</li>
              </ul>
            </div>
          </div>

          {/* Research & Information Gathering */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1565c0' }}>Research & Information Gathering</h3>
            <div className="card" style={{ padding: '2rem' }}>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Find the best option for any purchase or decision</li>
                <li>Summarize articles, reports, and documents</li>
                <li>Build briefings before important calls or meetings</li>
                <li>Compare vendors, tools, or service providers</li>
                <li>Answer quick questions so you don't have to Google</li>
              </ul>
            </div>
          </div>

          {/* Daily & Weekly Automations */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1565c0' }}>Daily & Weekly Automations</h3>
            <div className="card" style={{ padding: '2rem' }}>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Morning briefing: weather, calendar, priorities, news</li>
                <li>Weekly summary of tasks completed and upcoming</li>
                <li>Expense tracking and receipt organization</li>
                <li>Flight and travel monitoring</li>
                <li>Any recurring admin task you'd rather not think about</li>
              </ul>
            </div>
          </div>

          {/* Admin & Professional Correspondence */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1565c0' }}>Admin & Professional Correspondence</h3>
            <div className="card" style={{ padding: '2rem' }}>
              <ul style={{ fontSize: '1.05rem', lineHeight: '2', paddingLeft: '1.5rem' }}>
                <li>Draft contracts, proposals, and formal emails</li>
                <li>Handle customer service follow-ups</li>
                <li>Coordinate with vendors and service providers</li>
                <li>Document and organize important information</li>
                <li>Anything you'd ask a top-tier executive assistant</li>
              </ul>
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
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#1565c0', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
              <h3 style={{ marginBottom: '1rem' }}>Subscribe</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Choose your plan. First month 50% off.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#1565c0', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
              <h3 style={{ marginBottom: '1rem' }}>Quick setup</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Luna gets context on your calendar, tools, and priorities. 15 minutes over WhatsApp.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#1565c0', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
              <h3 style={{ marginBottom: '1rem' }}>She stays ahead of you</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Luna doesn't wait for you to ask. She proactively flags things, reminds you of deadlines, and keeps your week organized before it starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section bg-alt">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>What it costs (and what you get)</h2>
          
          <div className="card" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', border: '2px solid #1565c0' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Monthly Plan</h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#1565c0', marginBottom: '0.5rem' }}>
                $1,000<span style={{ fontSize: '1.2rem', color: '#666', fontWeight: 'normal' }}>/month</span>
              </div>
              <div style={{ fontSize: '1.5rem', color: '#28a745', fontWeight: 'bold', marginBottom: '1rem' }}>
                First month: $500
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                Unlimited requests. Proactive support. Always available.
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
                  Calendar management (daily)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Email summarization and draft replies
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Task tracking and deadline reminders
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Weekly priorities briefing (Monday morning)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Research and information gathering
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Admin and correspondence drafting
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#28a745', marginRight: '0.75rem', fontSize: '1.3rem' }}>✓</span>
                  Morning briefings (daily, if wanted)
                </li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: 'var(--background-alt)', borderRadius: '8px', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Trained by Nina Christina
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Not a generic chatbot reading from a script. Real expertise, real oversight.
              </p>
            </div>

            <a href="https://wa.me/17096002875?text=Hi%20Luna!" className="btn btn-lg btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ width: '100%', fontSize: '1.2rem' }}>
              💬 Start with Luna — First Month $500
            </a>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
         <p className="text-center">
            <Link href="/" style={{ marginRight: '1rem' }}>&larr; Back to Home</Link> | <Link href="/lucy" style={{ marginLeft: '1rem' }}>Check out Lucy &rarr;</Link>
         </p>
      </div>
    </Layout>
  );
}
