import Layout from '@/components/Layout';
import AiScore from '@/components/AiScore';

export default function AiScorePage() {
  return (
    <Layout
      title="AI Score: What Could AI Do for Your Business? | Flawless Productions"
      description="10 questions, 2 minutes. Get your AI Score out of 100, the 3 things AI should do for you first and the hours you could typically get back. Then chat with Jean, JB’s assistant, on WhatsApp."
      ogTitle="Your AI Score in 2 minutes"
      ogDescription="10 questions. Your score out of 100, your top 3 AI priorities and the hours you could get back. Free, no email required."
      ogImage="https://flawlessprod.com/images/logo.png"
      canonicalUrl="https://flawlessprod.com/ai-score"
      hideFloat
    >
      <section className="section score-page">
        <div className="container narrow text-center score-intro">
          <p className="eyebrow">AI Score · 10 questions · 2 minutes</p>
          <h1 className="page-title">What could AI do for your business?</h1>
          <p className="lead">Your score out of 100, the 3 things AI should do for you first, and how many hours you could get back. No email required.</p>
        </div>
        <div className="container narrow">
          <AiScore />
        </div>
      </section>
    </Layout>
  );
}
