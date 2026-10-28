import Layout from '@/components/Layout';
import TeamMember from '@/components/TeamMember';
import Diagnostic from '@/components/Diagnostic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { OFFERS } from '@/lib/offers';

const STATS = [
  { value: '40 of 86', label: 'AI businesses we analyzed were app “wrappers” or automation agencies: the two most crowded categories, and the hardest to verify.' },
  { value: '≈ $1k/mo', label: 'Verified median revenue of small AI-built products (read straight from payment data). The stories online are 10–20× higher.' },
  { value: '2 of 26', label: 'Apps on a viral “vibe-coded apps making money” list had verified revenue. The other claims were self-declared.' },
  { value: '89%', label: 'Of 750 small-business owners surveyed say AI pays off — through scheduling, payroll and follow-ups, not robots.' },
];

const WORKS = [
  'Boring fixes: missed calls, lead response time, follow-ups, reviews',
  'A monthly care plan with a report — not a resold tool',
  'Local and private AI: clients pay when “nothing leaves the building”',
  'Real expertise in a trade, turned into a simple system',
];

const FAILS = [
  '“Autonomous agents” sold to small businesses',
  'Cold email and freelance marketplaces as the only channel',
  'White-label tools resold without service: they churn',
  'Unverifiable revenue screenshots and made-up ROI',
];

const STANCE = [
  ['We don’t sell “AI agents”.', 'We fix one specific leak in your business, then keep it working.'],
  ['Measured, not promised.', 'We record a baseline before we start and check the number again at 30 days.'],
  ['Private by default.', 'Sensitive data stays on your machines. Cloud AI only where you say yes, in writing.'],
  ['Done for you, owned by you.', 'We build on your accounts. Prompts, data and documentation are yours. No lock-in.'],
  ['Honest AI.', 'When AI talks to your clients, it says it’s AI. Complaints drop when it does.'],
];

const STEPS = [
  ['Diagnostic', '4 questions online, then a short call with JB to find the real leak.'],
  ['Fixed scope', 'A written scope, timeline and quote before anything starts. No hourly surprises.'],
  ['Build on real data', 'We build and test on your actual emails, leads and documents — not a demo.'],
  ['Handover', 'Training, documentation and a recorded walkthrough for your team.'],
  ['Monthly care', 'Optional: monthly check-up, a short report, improvements and fast fixes.'],
];

const FAQS = [
  ['Do you sell AI agents or a software subscription?', 'No. We sell outcomes: a fixed project that solves one problem, built on tools you own, with optional monthly care. If a simple automation does the job, that’s what you get.'],
  ['Why are there no prices on the site?', 'Every business starts from a different place. After the diagnostic and a short call, you get a fixed written quote and timeline. No hourly billing.'],
  ['Where does my data go?', 'We map it with you first. Sensitive data can stay entirely on your own computer or on a dedicated mini server running a local AI model. Anything that goes to a cloud AI is agreed in writing.'],
  ['Do I need to be technical?', 'No. We set everything up, train you and your team, and leave a recorded walkthrough. You use it from tools you already know.'],
  ['What if it doesn’t deliver?', 'We agree on one number before we start (hours saved, response time, leads followed up) and check it at 30 days. If it’s not moving, we adjust before anything else.'],
  ['Do you work outside the US?', 'Yes. We work remotely, in English and French.'],
];

export default function Home() {
  // The Vimeo video is domain-restricted: only embed it on flawlessprod.com (previews get the plain dark banner).
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    setShowVideo(/(^|\.)flawlessprod\.com$/.test(window.location.hostname));
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flawless Productions",
    "url": "https://flawlessprod.com",
    "logo": "https://flawlessprod.com/images/logo.png",
    "description": "Flawless Productions sets up practical, measurable and private AI for small businesses and professionals: done-for-you setup, private company brain, lead follow-up, AI visibility and content.",
    "founders": [
      { "@type": "Person", "name": "Nina Christina" },
      { "@type": "Person", "name": "JB Reeves" }
    ],
    "makesOffer": OFFERS.map((o) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": o.title, "description": o.tagline }
    }))
  };

  return (
    <Layout
      title="Flawless Productions — Practical AI, Set Up For You, Measured, Private"
      description="No AI-agent hype. We find where your business leaks time or money, build the fix on your own tools, measure it and keep it private. Take the free 1-minute diagnostic."
      ogTitle="Flawless Productions — Practical AI, Set Up For You"
      ogDescription="What actually works with AI in small business right now, five done-for-you offers, and a free diagnostic."
      ogImage="https://flawlessprod.com/images/logo.png"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/"
    >
      {/* Hero — full-width video banner (brand) */}
      <section className="hero-video">
        {showVideo && (
        <iframe
          src="https://player.vimeo.com/video/1167226262?autoplay=1&muted=1&loop=1&background=1"
          className="hero-video-frame"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Flawless Productions background video"
          aria-hidden="true"
          tabIndex={-1}
        />
        )}
        <div className="hero-video-overlay" />
        <div className="hero-video-content">
          <p className="hero-eyebrow">Flawless Productions</p>
          <h1 className="hero-title">AI that fixes real problems. Set up for you, measured, private.</h1>
          <p className="hero-sub">
            No “AI agent” hype. We find where your business leaks time or money, build the fix on your own tools, and keep it working.
          </p>
          <div className="hero-ctas">
            <Link href="#diagnostic" className="btn btn-lg">Take the 1-minute diagnostic</Link>
            <Link href="#offers" className="btn btn-lg btn-light">See the offers</Link>
          </div>
        </div>
      </section>

      {/* Point of view */}
      <section id="point-of-view" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our point of view</p>
            <h2 className="section-title">Most AI businesses sell hype. The ones that work fix boring problems.</h2>
            <p className="lead">
              We read 214 public discussions from founders and business owners published between May and October 2026 and kept 86 real AI businesses, across 13 categories. We weighted verified numbers over self-reported ones. Here is what we saw.
            </p>
          </div>

          <div className="stats">
            {STATS.map((s) => (
              <div key={s.value} className="stat">
                <p className="stat-value">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid-2 pov-cols">
            <div className="card pov-card works">
              <h3>What works</h3>
              <ul className="checklist">{WORKS.map((w) => <li key={w}>{w}</li>)}</ul>
            </div>
            <div className="card pov-card fails">
              <h3>What doesn’t</h3>
              <ul className="crosslist">{FAILS.map((w) => <li key={w}>{w}</li>)}</ul>
            </div>
          </div>

          <div className="stance">
            <h3 className="stance-title">So here is our stance</h3>
            <ol className="stance-list">
              {STANCE.map(([t, d]) => (
                <li key={t}><strong>{t}</strong> {d}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="section bg-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Offers</p>
            <h2 className="section-title">Five ways we help. Each one fixes one leak.</h2>
            <p className="lead">Fixed scope, fixed timeline, a written quote after the diagnostic. Every offer can continue with monthly care.</p>
          </div>

          <div className="offers">
            {OFFERS.map((o, i) => (
              <article key={o.id} id={`offer-${o.id}`} className="card offer">
                <p className="offer-num">0{i + 1}</p>
                <h3 className="offer-title">{o.title}</h3>
                <p className="offer-tagline">{o.tagline}</p>
                <dl className="offer-facts">
                  <div><dt>For whom</dt><dd>{o.forWhom}</dd></div>
                  <div><dt>The problem</dt><dd>{o.problem}</dd></div>
                </dl>
                <h4 className="offer-sub">What we deliver</h4>
                <ul className="checklist">{o.deliver.map((d) => <li key={d}>{d}</li>)}</ul>
                <h4 className="offer-sub">How it runs</h4>
                <ol className="timeline">
                  {o.process.map(([when, what]) => (
                    <li key={when}><span>{when}</span>{what}</li>
                  ))}
                </ol>
                <h4 className="offer-sub">Results to expect</h4>
                <p className="offer-results">{o.results}</p>
                <p className="offer-included"><strong>Included:</strong> {o.included.join(' · ')}</p>
                <Link href="#diagnostic" className="btn offer-cta">Is this for me? Take the diagnostic</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="section">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2 className="section-title">Five steps, no surprises.</h2>
          </div>
          <ol className="steps">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="step">
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Diagnostic */}
      <section id="diagnostic" className="section bg-alt">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Free diagnostic · 1 minute</p>
            <h2 className="section-title">Where is your business leaking?</h2>
            <p className="lead">Four questions, the offer that fits, then a direct WhatsApp conversation with JB. Your answers are pre-filled.</p>
          </div>
          <Diagnostic />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The team</p>
            <h2 className="section-title">Real people behind every project</h2>
            <p className="lead">Every project is scoped, built and supported by the same small team. Not outsourced.</p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <TeamMember
              name="Nina Christina"
              role="Founder · Training & Content"
              bio="Nina built a 20K+ YouTube following teaching social media strategy. 10+ years as an assistant and digital marketer. She leads onboarding, training and content quality, and reviews every delivery."
              links={[
                { label: 'YouTube', url: 'https://youtube.com/@FlawlessChristina' },
                { label: 'Instagram', url: 'https://instagram.com/reevesnina' }
              ]}
            />
            <TeamMember
              name="JB"
              role="Technical Lead"
              bio="15+ years building digital systems that don’t break. JB designs the private AI and automation setups, runs the diagnostics and answers you personally."
              links={[]}
            />
            <TeamMember
              name="Shaun"
              role="Operations & Client Success"
              bio="Makes sure nothing falls through the cracks. Support, monthly care and coordination — Shaun keeps every setup running."
              links={[]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-alt">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Straight answers</h2>
          </div>
          <div className="faq-list">
            {FAQS.map(([q, a]) => (
              <details key={q} className="faq-item">
                <summary className="faq-question">{q}<span className="faq-icon" aria-hidden="true">+</span></summary>
                <p className="faq-a">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section cta-band">
        <div className="container narrow text-center">
          <h2>Find your biggest leak in one minute.</h2>
          <p>Four questions. A clear recommendation. A real person on the other end.</p>
          <Link href="#diagnostic" className="btn btn-lg btn-light">Take the free diagnostic</Link>
        </div>
      </section>
    </Layout>
  );
}
