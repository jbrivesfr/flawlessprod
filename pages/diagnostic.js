import Layout from '@/components/Layout';
import Diagnostic from '@/components/Diagnostic';

export default function DiagnosticPage() {
  return (
    <Layout
      title="Free AI Diagnostic in 4 Questions | Flawless Productions"
      description="Four questions to find where your business leaks time or money, the offer that fits, then a direct WhatsApp conversation with JB. No prices, no pressure."
      ogImage="https://flawlessprod.com/images/logo.png"
      canonicalUrl="https://flawlessprod.com/diagnostic"
    >
      <section className="section">
        <div className="container narrow text-center">
          <p className="eyebrow">4 questions · 1 minute</p>
          <h1 className="page-title">Where is your business leaking?</h1>
          <p className="lead">Answer four questions, see which offer fits, then message JB directly on WhatsApp. Your answers are pre-filled.</p>
        </div>
        <div className="container narrow">
          <Diagnostic />
        </div>
      </section>
    </Layout>
  );
}
