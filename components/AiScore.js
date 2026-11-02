import { useEffect, useMemo, useRef, useState } from 'react';
import { QUESTIONS, computeScore, fmtGain, scoreMessage, waLink } from '@/lib/aiScore';

// One question per screen, progress bar, result + WhatsApp to JB pre-filled with the score.
// Only an anonymous record is logged (answers + score, no name, no contact).
export default function AiScore() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const headingRef = useRef(null);
  const started = useRef(false);
  const logged = useRef(false);

  const done = step >= QUESTIONS.length;
  const current = QUESTIONS[step];
  const result = useMemo(() => (done ? computeScore(answers) : null), [done, answers]);
  const wa = result ? waLink(scoreMessage(result)) : '';
  const pct = Math.round((Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100);

  // Move focus to the new question for keyboard and screen-reader users.
  useEffect(() => {
    if (started.current) headingRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (!result || logged.current) return;
    logged.current = true;
    fetch('/api/ai-score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers, score: result.score, top: result.top.map((a) => a.id) }),
    }).catch(() => {});
  }, [result, answers]);

  function choose(value) {
    started.current = true;
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    setStep(step + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
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

          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-whatsapp score-cta">
            Talk to JB on WhatsApp
          </a>
          <p className="diag-note">
            Opens WhatsApp with your score and top 3 pre-filled. JB replies personally, in English or French.
            Estimates are cautious ranges, not promises — we measure the real number with you.
          </p>
          <button type="button" className="link-btn" onClick={reset}>Retake the AI Score</button>
        </div>
      )}
    </div>
  );
}
