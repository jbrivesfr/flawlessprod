import { useEffect, useMemo, useRef, useState } from 'react';
import { QUESTIONS, computeScore, fmtGain, scoreMessage, jeanLink } from '@/lib/aiScore';

// One question per screen, progress bar, result + short code FAS-XXXX and WhatsApp to Jean
// (JB's AI assistant) pre-filled with the score, top 3 and code. The answers are stored
// (no name, no contact) so Jean can read them from the code.
export default function AiScore() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const headingRef = useRef(null);
  const started = useRef(false);
  const logged = useRef(false);
  const [code, setCode] = useState(null);
  const [saving, setSaving] = useState(false);

  const done = step >= QUESTIONS.length;
  const current = QUESTIONS[step];
  const result = useMemo(() => (done ? computeScore(answers) : null), [done, answers]);
  const wa = result ? jeanLink(scoreMessage(result, code)) : '';
  const pct = Math.round((Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100);

  // Move focus to the new question for keyboard and screen-reader users.
  useEffect(() => {
    if (started.current) headingRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (!result || logged.current) return;
    logged.current = true;
    setSaving(true);
    fetch('/api/ai-score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    })
      .then((r) => r.json())
      .then((j) => j.ok && setCode(j.code))
      .catch(() => {})
      .finally(() => setSaving(false));
  }, [result, answers]);

  function choose(value) {
    started.current = true;
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    setStep(step + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setCode(null);
    logged.current = false;
  }

  return (
    <div className="score">
      <div className="score-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label="Progress">
        <span style={{ width: `${pct}%` }} />
      </div>

      {!done ? (
        <div aria-live="polite" key={current.id} className="score-screen">
          <p className="eyebrow">Question {step + 1} of {QUESTIONS.length}</p>
          <h2 ref={headingRef} tabIndex={-1} className="diag-q">{current.q}</h2>
          <div className="diag-options" role="group" aria-label={current.q}>
            {current.options.map((o) => (
              <button
                key={o.short}
                type="button"
                onClick={() => choose(o.short)}
                className={answers[current.id] === o.short ? 'diag-opt selected' : 'diag-opt'}
                aria-pressed={answers[current.id] === o.short}
              >
                {o.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button type="button" className="link-btn" onClick={() => setStep(step - 1)}>
              ← Back
            </button>
          )}
        </div>
      ) : (
        <div aria-live="polite" className="score-screen">
          <p className="eyebrow">Your AI Score</p>
          <h2 ref={headingRef} tabIndex={-1} className="score-num">
            {result.score}<span>/100</span>
          </h2>
          <p className="score-level">{result.level}</p>
          <p className="diag-text">
            Based on your answers, AI could typically give you back <strong>{fmtGain(result.hours)} a week</strong>.
            Here’s where we would start:
          </p>

          <ol className="score-top">
            {result.top.map((a) => (
              <li key={a.id}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <p className="score-gain">Typically {fmtGain(a.gain)} a week</p>
              </li>
            ))}
          </ol>

          <p className="score-code">
            Your code: <strong>{code || (saving ? '…' : '—')}</strong>
            <span>It’s already in the WhatsApp message, nothing to copy.</span>
          </p>

          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-whatsapp score-cta"
            aria-disabled={saving}
            style={saving ? { pointerEvents: 'none', opacity: 0.6 } : undefined}
          >
            Chat with Jean on WhatsApp
          </a>
          <p className="diag-note">
            Jean is JB’s AI assistant: he sets up the call with JB, in English or French.
          </p>
          <p className="diag-note">
            Your answers are shared with Jean, JB’s assistant, only to prepare the conversation.
            Estimates are cautious ranges, not promises — we measure the real number with you.
          </p>
          <button type="button" className="link-btn" onClick={reset}>Retake the AI Score</button>
        </div>
      )}
    </div>
  );
}
