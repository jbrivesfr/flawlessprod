import Layout from '@/components/Layout';
import TeamMember from '@/components/TeamMember';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly can Lucy do?",
      answer: "Lucy handles social media management, content calendar creation, caption writing, DM management, client tracking, research, competitor analysis, and any general VA requests you send her way. If you're not sure whether she can handle something — just ask her."
    },
    {
      question: "How does it work technically?",
      answer: "You get Lucy's WhatsApp number after subscribing. That's it. Message her like a real assistant. No app, no account, no onboarding calls. She responds and delivers results directly in the chat."
    },
    {
      question: "What does \"unlimited requests\" actually mean?",
      answer: "It means no hourly billing, no scope creep conversations, no extra charges for doing more. You pay a flat monthly fee and send as many requests as you need. The more you use Lucy, the more value you get."
    },
    {
      question: "Is this actually AI or a real person?",
      answer: "Both. Lucy is an Enhanced Agent — AI trained by real human experts (Nina's team). She combines AI speed and availability with human judgment and expertise. You get the best of both: always available like AI, sharp like a 10-year veteran VA."
    },
    {
      question: "What are your hours?",
      answer: "Lucy is available extended hours — well beyond a typical 9-5. Early mornings, evenings, weekends. You're not locked into business hours. (Exact response windows depend on your plan.)"
    },
    {
      question: "Is my data secure?",
      answer: "Yes. Your conversations stay private. No data shared with third parties. No offshore mystery teams. Just your dedicated agent and our internal team."
    },
    {
      question: "What does it cost?",
      answer: "$1,000/month — unlimited requests, always available. First month is $500 (50% off) so you can see the difference before committing fully."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. No long-term contracts. Month-to-month."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Flawless Productions",
    "url": "https://flawlessprod.com",
    "logo": "https://flawlessprod.com/images/logo.png",
    "description": "Virtual assistant services with Lucy and Luna. Enhanced agents for modern business.",
    "founders": [
      { "@type": "Person", "name": "Nina Christina" },
      { "@type": "Person", "name": "JB Reeves" }
    ]
  };

  return (
    <Layout
      title="Flawless Productions - The Side VA That Actually Gets Things Done"
      description="Lucy manages your social media, handles your requests, and keeps your content calendar running — all from WhatsApp. No app. No login. No waiting."
      ogTitle="The Side VA That Actually Gets Things Done"
      ogDescription="Your AI assistant, one WhatsApp away. Unlimited requests, always available."
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
            Your AI assistant, one WhatsApp away
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>
            The side VA that actually gets things done
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'rgba(255,255,255,0.85)', marginBottom: '2.5rem', maxWidth: '700px', lineHeight: 1.5 }}>
            Lucy manages your social media, handles your requests, and keeps your content calendar running — all from a single WhatsApp message. No app. No login. No waiting.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/17096002875?text=Hi%20Lucy!" className="btn btn-lg btn-whatsapp" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp Lucy Now
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1rem', fontSize: '0.95rem' }}>
            or text +1 (709) 600-2875
          </p>
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

      {/* The Problem Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>You're doing too much. And it's slowing you down.</h2>
          <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              You started your business to focus on what you're good at.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Instead, you're writing captions at midnight. Forgetting to post for 3 weeks. Scrambling to reply to DMs. Running on a chaotic mix of saved drafts and good intentions.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              That's not a strategy. That's survival mode.
            </p>
            <p style={{ fontWeight: 700, fontSize: '1.3rem' }}>
              You need a VA in your corner. But not the $3K/month kind.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section bg-alt">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Meet Lucy — your always-on side VA</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
              Lucy is an Enhanced Agent. Part AI, part human-trained expert. She's available when you wake up, when you're stuck in traffic, and when you finally have 5 minutes to think.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '700px', margin: '1rem auto' }}>
              She doesn't work 9-5. She doesn't take sick days. She doesn't bill you by the hour.
            </p>
            <p style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '1.5rem' }}>
              You just message her. She handles it.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="grid" style={{ gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>1. Always Available</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                Ping her from your phone at 6 AM or 11 PM. She responds. Your business doesn't stop — neither does she.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>2. Unlimited Requests</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                No hourly tracker. No "that's outside scope." Send one request or fifty this week — same price, same quality.
              </p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>3. Everything From Your Phone</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                No dashboards to learn. No tools to subscribe to. Just WhatsApp. That's your interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Three steps. That's it.</h2>
          <div className="grid" style={{ gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
              <h3 style={{ marginBottom: '1rem' }}>Subscribe</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Pick your plan. First month is half off. No contracts.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
              <h3 style={{ marginBottom: '1rem' }}>WhatsApp Lucy</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                You'll get Lucy's direct WhatsApp number. Message her like you would a real assistant. Voice notes, screenshots, quick texts — whatever works for you.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
              <h3 style={{ marginBottom: '1rem' }}>It Gets Done</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
                Lucy handles the task and sends you the result. Post drafted. Calendar updated. Strategy sent. Done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Lucy Handles Section */}
      <section id="features" className="section bg-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Everything you need. Handled.</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
              Countless capabilities. One assistant. Zero hassle.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {/* Content Calendar */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>📅 Content Calendar</h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                No more Monday morning panic. Lucy builds your weekly content plan — themes, captions, posting schedule — so you're always ahead, never scrambling.
              </p>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>3-5 posts/week planned in advance</li>
                <li>Monthly themes aligned to your offers</li>
                <li>Reels/Shorts hooks mapped to trending audio</li>
                <li>Real-time flexibility for trending moments</li>
              </ul>
            </div>

            {/* Social Media Management */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>📱 Social Media Management</h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Instagram that looks intentional, not like an afterthought.
              </p>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>Profile setup and optimization</li>
                <li>Caption writing and hashtag strategy</li>
                <li>Story ideas and Reels concepts</li>
                <li>Engagement and DM management</li>
                <li>Competitor analysis and trend monitoring</li>
              </ul>
            </div>

            {/* Content Strategy */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>✍️ Content Strategy (The "Meta")</h3>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
                You're posting about your product. Nobody cares about your product — they care about their problems. Lucy finds the intersection between what you sell, what's trending, and what your audience is scared of or obsessed with.
              </p>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', padding: '1rem', backgroundColor: 'var(--background-alt)', borderRadius: '8px', marginBottom: '1rem' }}>
                Example: You sell coaching. Everyone's anxious about AI taking jobs. Lucy's post: "AI won't replace you — but it will replace coaches who ignore it. Here's what to do."
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                That's content that converts. Not "check out my new offer."
              </p>
            </div>

            {/* From Your Phone */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>📲 From Your Phone — Literally</h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Drop Lucy a voice note and she turns it into a caption. Screenshot a competitor and she gives you the counter-strategy. Forget what to post? She sends you 3 options in under 5 minutes.
              </p>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>Voice note → polished post</li>
                <li>"I need 5 hooks for this reel" → done in minutes</li>
                <li>Photo dump → full week of content ideas</li>
                <li>Anything you'd text a human assistant</li>
              </ul>
            </div>

            {/* Client & CRM */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>📊 Client & CRM Tracking</h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Never lose track of a lead or client follow-up again. Lucy tracks who you need to reach, when, and why.
              </p>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>Lead and prospect tracking</li>
                <li>Follow-up reminders</li>
                <li>Client relationship notes</li>
                <li>Outreach sequences drafted and ready</li>
              </ul>
            </div>

            {/* Research */}
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>🔍 Research & Competitive Intel</h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Stay ahead without spending hours online. Lucy monitors your niche, surfaces what's trending, and tells you what your competitors are doing that's working.
              </p>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
                <li>Industry trend reports</li>
                <li>Competitor content analysis</li>
                <li>Hashtag and keyword research</li>
                <li>Weekly insight summaries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>People love Lucy</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
              Real results from real clients.
            </p>
          </div>

          <div className="grid" style={{ gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary-color)' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem', fontStyle: 'italic' }}>
                "I hadn't posted consistently in 6 months. Lucy set up a content calendar in the first week and we've posted 4x/week since. My reach doubled in 30 days."
              </p>
              <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>— Sarah K., Online Coach</p>
            </div>

            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary-color)' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem', fontStyle: 'italic' }}>
                "I used to spend my Sunday nights writing captions. Now I send Lucy a voice note on Friday and my whole week is done. It's genuinely changed how I work."
              </p>
              <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>— Marcus D., Ecommerce Founder</p>
            </div>

            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary-color)' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem', fontStyle: 'italic' }}>
                "Lucy caught 3 client follow-ups I'd completely forgotten about. One turned into a $2,000 project. She paid for herself in the first month."
              </p>
              <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>— Priya M., Freelance Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Real people. Real expertise. Real accountability.</h2>
            <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
              Lucy isn't some generic chatbot. She's trained by a team that has actually done this work.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <TeamMember
              name="Nina Christina"
              role="Founder & Head of Training"
              bio="Nina built a 20K+ YouTube following teaching social media strategy — then realized she could train AI to do it better. 10+ years as a VA and digital marketer. She personally trains and oversees every Enhanced Agent. Not outsourced. Not automated. Nina's fingerprints are on every interaction."
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

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Frequently Asked Questions</h2>

          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-icon ${openFaq === index ? 'open' : ''}`}>+</span>
                </button>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Ready to get your time back?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.7' }}>
            Stop doing $10/hour work when you should be closing deals.
          </p>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', fontWeight: 600 }}>
            Lucy is ready when you are.
          </p>
          <a href="https://wa.me/17096002875?text=Hi%20Lucy!" className="btn btn-lg btn-whatsapp" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.3rem' }}>
            💬 WhatsApp Lucy Now
          </a>
          <p style={{ marginTop: '1.5rem', fontSize: '1rem', opacity: 0.85 }}>
            First month 50% off — no contracts
          </p>
        </div>
      </section>
    </Layout>
  );
}
