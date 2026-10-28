import Layout from '@/components/Layout';
import TeamMember from '@/components/TeamMember';
import Diagnostic from '@/components/Diagnostic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { OFFERS } from '@/lib/offers';

const PAINS = [
  ['Everyone says AI saves hours.', 'Your week still looks exactly the same.'],
  ['You tried a few tools.', 'A ChatGPT account, an app or two. Nothing stuck, nothing talks to anything else.'],
  ['Things slip through the cracks.', 'Leads wait too long, follow-ups get forgotten, the same questions eat your day.'],
  ['You feel your competitors moving faster.', 'And you can’t tell what’s real from hype — or find the time to test it.'],
  ['Your client data is sensitive.', 'You can’t paste it into a chatbot and hope for the best.'],
];

const DO = [
  'Fix the boring, costly problems: missed calls, slow follow-ups, admin, scattered know-how',
  'Set it up on the tools you already use, and train your team',
  'Keep it working every month, with a short report',
  'Keep sensitive data on your own machines',
];

const DONT = [
  'Sell you “autonomous AI agents” or another subscription',
  'Lock you into a platform you can’t leave',
  'Promise ROI we can’t measure',
  'Leave you alone with a tool nobody uses after week two',
];

const VALUE = [
  ['Done for you.', 'You don’t have to learn AI. We set it up, test it on your real work and hand it over ready to use.'],
  ['Measured.', 'We agree on one number before we start — hours saved, response time, leads followed up — and check it at 30 days.'],
  ['Private by default.', 'Sensitive data stays on your machines. Cloud AI only where you say yes, in writing.'],
  ['Yours.', 'Built on your accounts. Prompts, data and documentation belong to you. No lock-in.'],
  ['Honest.', 'When AI talks to your clients, it says it’s AI. People trust it more when it does.'],
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
      title="Flawless Productions — We Help Businesses Catch Up on AI Tools"
      description="Falling behind on AI? We set up the AI tools that fix your boring, costly problems — done for you, measured, private. Take the free 1-minute diagnostic."
      ogTitle="We help businesses catch up on AI tools"
      ogDescription="Done-for-you AI setup for small businesses and professionals: measured, private, no hype. Free 1-minute diagnostic."
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
          <h1 className="hero-title">We help businesses catch up on AI tools.</h1>
          <p className="hero-sub">
            You know AI could give you back hours every week. You just don’t have the time to figure out which tools, set them up and make them stick. We do it for you — on your tools, privately, with results you can measure.
          </p>
          <div className="hero-ctas">
            <Link href="#diagnostic" className="btn btn-lg">Find what AI can fix for you</Link>
            <Link href="#offers" className="btn btn-lg btn-light">See the offers</Link>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section id="problem" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Sound familiar?</p>
            <h2 className="section-title">You’re running a business, not an AI lab.</h2>
            <p className="lead">New AI tools come out every week. You don’t have the hours to test them all — so you fall a little further behind, and the work keeps piling up.</p>
          </div>
          <div className="pains">
            {PAINS.map(([t, d]) => (
              <div key={t} className="pain">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section id="point-of-view" className="section bg-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we bring</p>
            <h2 className="section-title">Most AI businesses sell hype. We fix boring problems.</h2>
            <p className="lead">
              We help small businesses and professionals catch up on AI tools — without the learning curve. We find the one place your business loses the most time or money, set up the AI that fixes it, train your team and keep it working.
            </p>
          </div>

          <div className="proof">
            <div className="stat proof-stat">
              <p className="stat-value">89%</p>
              <p className="stat-label">Of 750 small-business owners surveyed say AI pays off — through scheduling, payroll and follow-ups, not robots.</p>
            </div>
            <p className="proof-text">
              The gain is real. What’s missing is the time to set it up properly. <strong>That’s the part we take off your plate.</strong>
            </p>
          </div>

          <div className="grid-2 pov-cols">
            <div className="card pov-card works">
              <h3>What we do for you</h3>
              <ul className="checklist">{DO.map((w) => <li key={w}>{w}</li>)}</ul>
            </div>
            <div className="card pov-card fails">
              <h3>What we won’t do</h3>
              <ul className="crosslist">{DONT.map((w) => <li key={w}>{w}</li>)}</ul>
            </div>
          </div>

          <div className="stance">
            <h3 className="stance-title">What you get when you work with us</h3>
            <ul className="stance-list value-list">
              {VALUE.map(([t, d]) => (
                <li key={t}><strong>{t}</strong> {d}</li>
              ))}
            </ul>
            <Link href="#diagnostic" className="btn btn-lg btn-light stance-cta">Get your free diagnostic</Link>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="section bg-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Offers</p>
            <h2 className="section-title">Pick your problem. We set up the fix.</h2>
            <p className="lead">Each offer solves one problem, with a fixed scope, a fixed timeline and a written quote before we start. Every one can continue with monthly care so it keeps working.</p>
          </div>

          <div className="offers">
            {OFFERS.map((o, i) => (
              <article key={o.id} id={`offer-${o.id}`} className="card offer">
                <p className="offer-num">0{i + 1}</p>
                <h3 className="offer-title">{o.title}</h3>
                <p className="offer-tagline">{o.tagline}</p>
                <dl className="offer-facts">
                  <div><dt>This is for you if</dt><dd>{o.forWhom}</dd></div>
                  <div><dt>What’s going on</dt><dd>{o.problem}</dd></div>
                </dl>
                <h4 className="offer-sub">What we set up for you</h4>
                <ul className="checklist">{o.deliver.map((d) => <li key={d}>{d}</li>)}</ul>
                <h4 className="offer-sub">How it runs</h4>
                <ol className="timeline">
                  {o.process.map(([when, what]) => (
                    <li key={when}><span>{when}</span>{what}</li>
                  ))}
                </ol>
                <h4 className="offer-sub">What changes for you</h4>
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
