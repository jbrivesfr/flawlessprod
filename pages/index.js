import Layout from '@/components/Layout';
import ExpBackground from '@/components/ExpBackground';
import Link from 'next/link';
import { waLink } from '@/lib/aiScore';

const WHAT_WE_DO = [
  ['A morning brief, every day', 'We send our clients one short message before they start: money in, new leads, today’s appointments and tasks. No more opening five apps to know where things stand.'],
  ['Follow-ups that go out on time', 'We make sure no lead goes cold: a fast first reply, then reminders at the right moment — on top of the tools they already use, without a new CRM.'],
  ['Repeat questions and missed calls, handled', 'We answer the questions our clients get every week and text back missed calls, then hand the real conversations to them.'],
  ['A private AI, installed on their machines', 'When client data is sensitive — health, legal, finance, coaching — we install an AI that runs on their own computer or a small server in their office. Nothing leaves it.'],
  ['2 to 4 weeks inside their business', 'We sit with our clients on the one problem that costs them the most, fix it on their real work, train the team and track the results with them.'],
  ['Content and video for creators', 'We turn ideas and recordings into posts, clips and newsletters that actually go out — AI for the volume, real people for the editing, in their voice.'],
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

const WHY = [
  'The biggest AI companies build for multinationals and governments. That’s where the big contracts are — some of the best-known labs sell almost exclusively to large enterprises and states.',
  'Meanwhile, the people who run a business on their own — solopreneurs, independents, practitioners, small teams — get a chatbot and a pricing page. Nobody sits down with them.',
  'We do. We bring the same AI to the rest of us: set up on your tools, private when it needs to be, and judged on results you can measure.',
];

const VALUE = [
  ['Done for you.', 'You don’t have to learn AI. We set it up, test it on your real work and hand it over ready to use.'],
  ['Measured.', 'We agree on one number before we start — hours saved, response time, leads followed up — and check it at 30 days.'],
  ['Private by default.', 'Sensitive data stays on your machines. Cloud AI only where you say yes, in writing.'],
  ['Yours.', 'Built on your accounts. Prompts, data and documentation belong to you. No lock-in.'],
  ['Honest.', 'When AI talks to your clients, it says it’s AI. People trust it more when it does.'],
];

const STEPS = [
  ['AI Score', '10 questions online, then a WhatsApp conversation with JB to find the real leak.'],
  ['Fixed scope', 'A written scope, timeline and quote before anything starts. No hourly surprises.'],
  ['Build on real data', 'We build and test on your actual emails, leads and documents — not a demo.'],
  ['Handover', 'Training, documentation and a recorded walkthrough for your team.'],
  ['Monthly care', 'Optional: monthly check-up, a short report, improvements and fast fixes.'],
];

const FAQS = [
  ['Who do you work with?', 'Solopreneurs, independents, professionals in private practice and small teams — people who run a business without an IT department. Not the Fortune 500.'],
  ['Do you sell AI agents or a software subscription?', 'No. We sell outcomes: a fixed project that solves one problem, built on tools you own, with optional monthly care. If a simple automation does the job, that’s what you get.'],
  ['Why are there no prices on the site?', 'Every business starts from a different place. After the AI Score and a short conversation, you get a fixed written quote and timeline. No hourly billing.'],
  ['Where does my data go?', 'We map it with you first. Sensitive data can stay entirely on your own computer or on a dedicated mini server running a local AI model. Anything that goes to a cloud AI is agreed in writing.'],
  ['Do I need to be technical?', 'No. We set everything up, train you and your team, and leave a recorded walkthrough. You use it from tools you already know.'],
  ['What if it doesn’t deliver?', 'We agree on one number before we start (hours saved, response time, leads followed up) and check it at 30 days. If it’s not moving, we adjust before anything else.'],
  ['Do you work outside the US?', 'Yes. We work remotely, in English and French.'],
];

const WA_HELLO = waLink('Hi JB, I’m coming from flawlessprod.com. Can we talk?');

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flawless Productions",
    "url": "https://flawlessprod.com",
    "logo": "https://flawlessprod.com/images/logo.png",
    "slogan": "Big AI builds for the Fortune 500. We build AI for the rest of us.",
    "description": "Flawless Productions builds practical, private and measurable AI for solopreneurs, independents, professionals and small teams — set up on their own tools.",
    "makesOffer": WHAT_WE_DO.map(([t, d]) => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": t, "description": d }
    }))
  };

  return (
    <Layout
      title="Flawless Productions — Big AI Builds for the Fortune 500. We Build AI for the Rest of Us."
      description="Practical, private AI for solopreneurs, independents and small teams — set up on your tools, with results you can measure. Get your free AI Score in 2 minutes."
      ogTitle="Big AI builds for the Fortune 500. We build AI for the rest of us."
      ogDescription="Practical, private AI for solopreneurs, independents and small teams. Free AI Score in 2 minutes, then talk to JB directly."
      ogImage="https://flawlessprod.com/images/logo.png"
      schema={schema}
      canonicalUrl="https://flawlessprod.com/"
    >
      {/* Hero — manifeste (JB 2026-11-02) sur le fond exponentiel */}
      <section className="hero-video">
        <ExpBackground />
        <div className="hero-video-overlay" />
        <div className="hero-video-content">
          <p className="hero-eyebrow">Flawless Productions</p>
          <h1 className="hero-title">Big AI builds for the <span className="nowrap">Fortune 500.</span> <span className="hero-accent">We build AI for the rest of us.</span></h1>
          <p className="hero-sub">
            For solopreneurs, independents, professionals and small teams. We set up AI on the tools you already use, keep your data private, and measure what it gives you back.
          </p>
          <div className="hero-ctas">
            <Link href="/ai-score" className="btn btn-lg">Get your AI Score — 2 min</Link>
            <a href={WA_HELLO} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-light">Talk to JB on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section id="why" className="section">
        <div className="container narrow">
          <div className="section-head">
            <p className="eyebrow">Why we exist</p>
            <h2 className="section-title">The giants aren’t building for you.</h2>
          </div>
          <div className="why">
            {WHY.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* What we do for our clients */}
      <section id="what-we-do" className="section bg-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do for our clients</p>
            <h2 className="section-title">Concrete work, on their tools, judged on results.</h2>
            <p className="lead">No product to learn and no new platform. We start from the problem that costs the most, fix it, and keep it working.</p>
          </div>
          <div className="client-work">
            {WHAT_WE_DO.map(([t, d]) => (
              <article key={t} className="card work-card">
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <div className="text-center work-cta">
            <Link href="/ai-score" className="btn btn-lg">Which of these would help you first? Get your AI Score</Link>
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

      {/* Commitments */}
      <section id="point-of-view" className="section bg-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our commitments</p>
            <h2 className="section-title">Most AI businesses sell hype. We fix boring problems.</h2>
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
            <Link href="/ai-score" className="btn btn-lg btn-light stance-cta">Get your AI Score</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
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
      <section id="contact" className="section cta-band">
        <div className="container narrow text-center">
          <h2>What could AI do for your business?</h2>
          <p>10 questions, 2 minutes: your score out of 100 and the 3 things AI should do for you first. Or just say hello — JB replies personally.</p>
          <div className="hero-ctas">
            <Link href="/ai-score" className="btn btn-lg btn-light">Get your AI Score</Link>
            <a href={WA_HELLO} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-whatsapp">Talk to JB on WhatsApp</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
