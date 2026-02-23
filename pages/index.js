import Layout from '@/components/Layout';
import TeamMember from '@/components/TeamMember';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Lucy', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi! I'm interested in Flawless Productions.\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/17096002875?text=${text}`, '_blank');
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flawless Productions",
    "url": "https://flawlessprod.com",
    "logo": "https://flawlessprod.com/images/logo.png",
    "description": "Enhanced agent services for modern business",
    "founders": [
      { "@type": "Person", "name": "Nina Christina" },
      { "@type": "Person", "name": "JB Reeves" }
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
            <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://player.vimeo.com/video/1167226262?autoplay=1&muted=1&loop=1&background=1"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Flawless Productions - Enhanced Agents"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section bg-alt">
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>The Power of Enhanced Agents</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            You&apos;re paying people to do tasks AI should handle. We&apos;re the fix.
          </p>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
            Our &quot;Enhanced Agents&quot; are virtual teammates trained by real experts—available 8 AM to 8 PM, PST.
            They don&apos;t need handholding, sick days, or HR complaints.
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
              <div style={{ height: '200px', backgroundColor: '#fce4ec', marginBottom: '2rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '3rem' }}>💼</span>
              </div>
              <h3>Lucy</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Social Media & Client Management</p>
              <p style={{ marginBottom: '2rem' }}>
                Your Instagram isn&apos;t growing because you&apos;re posting randomly and hoping for likes.
                Lucy fixes that. Strategy, posting, DMs, client tracking—handled.
                You focus on business, she handles the noise.
              </p>
              <Link href="/lucy" className="btn btn-lg">Meet Lucy</Link>
            </div>

            {/* Luna Card */}
            <div className="card text-center" style={{ padding: '3rem' }}>
              <div style={{ height: '200px', backgroundColor: '#e8eaf6', marginBottom: '2rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '3rem' }}>📅</span>
              </div>
              <h3>Luna</h3>
              <p style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Virtual Assistant & Executive Support</p>
              <p style={{ marginBottom: '2rem' }}>
                Stop forgetting meetings, missing deadlines, and responding to emails at 11 PM.
                Luna manages your calendar, tracks your tasks, and keeps you sane.
                She&apos;s the EA you can&apos;t afford to hire full-time.
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
              <p>Trained by people who&apos;ve actually done the job. Not generic AI. Not offshore contractors reading scripts. Real expertise, digitized.</p>
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
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Who&apos;s Behind Flawless Productions</h2>
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
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Stop doing $10/hour work when you should be closing deals.</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.25rem', opacity: 0.9 }}>
            Book a free consultation. We&apos;ll show you exactly what you&apos;re wasting time on—and how to fix it.
          </p>
          <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', maxWidth: '500px', margin: '0 auto', color: 'var(--text-color)' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Book Your Free Consultation</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>I&apos;m interested in</label>
                <select
                  value={form.service}
                  onChange={e => setForm({...form, service: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                >
                  <option>Lucy (Social Media & Client Management)</option>
                  <option>Luna (Virtual Assistant & Executive Support)</option>
                  <option>Both</option>
                  <option>Custom solution</option>
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Tell us about your business</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  rows={3}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box', resize: 'vertical' }}
                  placeholder="What do you need help with?"
                />
              </div>
              <button type="submit" className="btn" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
                💬 Book via WhatsApp
              </button>
            </form>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              You&apos;ll be connected directly with Lucy on WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
