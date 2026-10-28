import { useMemo, useRef, useState, useEffect } from 'react';
import { OFFER_BY_ID } from '@/lib/offers';

// Same contact flow as jbrives.com: a few questions, first name,
// email alert (Web3Forms) + server log (/api/contact), then WhatsApp to JB pre-filled.
const JB_WA = '14154906663';
const WEB3FORMS_KEY = '17dfd67d-fb00-4352-ae05-ef4e08ca135b';

const STEPS = [
  {
    id: 'profile',
    q: 'What best describes you?',
    options: [
      { label: 'Solo pro, coach or creator', value: 'solo pro / coach / creator' },
      { label: 'Local business or trade (calls, bookings, quotes)', value: 'local business' },
      { label: 'Professional firm (legal, finance, health, consulting)', value: 'professional firm' },
      { label: 'Online business or small agency', value: 'online business / agency' },
    ],
  },
  {
    id: 'leak',
    q: 'Where are you losing the most time or money?',
    options: [
      { label: 'Leads and calls slip through the cracks', value: 'leads and calls', offer: 'leads' },
      { label: 'Repetitive admin: email, scheduling, follow-ups', value: 'repetitive admin', offer: 'setup' },
      { label: 'Know-how is scattered, the same questions keep coming back', value: 'scattered know-how', offer: 'brain' },
      { label: 'Content takes too long, or doesn’t happen', value: 'content', offer: 'content' },
      { label: 'People can’t find us on Google or in ChatGPT', value: 'visibility', offer: 'visibility' },
    ],
  },
  {
    id: 'data',
    q: 'How sensitive is your data?',
    options: [
      { label: 'Client data must stay in-house', value: 'must stay in-house' },
      { label: 'Normal business data', value: 'normal' },
      { label: 'Not sure', value: 'not sure' },
    ],
  },
  {
    id: 'when',
    q: 'When do you want results?',
    options: [
      { label: 'This month', value: 'this month' },
      { label: 'Within 90 days', value: 'within 90 days' },
      { label: 'Just exploring for now', value: 'exploring' },
    ],
  },
];

function suggestOffer(answers) {
  const leak = STEPS[1].options.find((o) => o.value === answers.leak);
  const offer = OFFER_BY_ID[leak?.offer || 'setup'];
  const privateNote = answers.data === 'must stay in-house' && offer.id !== 'brain';
  return { offer, privateNote };
}

export default function Diagnostic() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [err, setErr] = useState('');
  const [sent, setSent] = useState(false);
  const headingRef = useRef(null);
  const started = useRef(false);

  const done = STEPS.every((s) => answers[s.id]);
  const current = STEPS[step];
  const fit = done ? suggestOffer(answers) : null;

  // Move focus to the new question for keyboard and screen-reader users.
  useEffect(() => {
    if (started.current) headingRef.current?.focus();
  }, [step, done]);

  const summary = useMemo(
    () => STEPS.map((s) => `• ${s.q} → ${answers[s.id] || '—'}`).join('\n'),
    [answers]
  );

  const waLink = useMemo(() => {
    const lines = [
      'Hi JB 👋 I’m coming from flawlessprod.com (diagnostic).',
      '',
      summary,
      fit ? `• Suggested: ${fit.offer.title}${fit.privateNote ? ' (private setup)' : ''}` : '',
      '',
      'I’d like to talk about it.',
    ];
    return `https://wa.me/${JB_WA}?text=${encodeURIComponent(lines.join('\n'))}`;
  }, [summary, fit]);

  function choose(id, value) {
    started.current = true;
    setAnswers((prev) => ({ ...prev, [id]: value }));
    if (step < STEPS.length - 1) setStep(step + 1);
  }

  function submit(e) {
    e.preventDefault();
    const first = name.trim();
    if (first.length < 2) {
      setErr('Please enter your first name.');
      return;
    }
    setErr('');
    const suggested = `${fit.offer.title}${fit.privateNote ? ' (private setup)' : ''}`;
    const message = `Diagnostic flawlessprod.com\n${summary}\n• Suggested: ${suggested}`;

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Diagnostic flawlessprod.com — ${first}`,
        from_name: first,
        name: first,
        message,
      }),
    }).catch(() => {});

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'diagnostic', name: first, message, answers, suggested }),
    }).catch(() => {});

    window.open(waLink, '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setName('');
    setSent(false);
  }

  return (
    <div className="diag">
      <div className="diag-progress" aria-hidden="true">
        {STEPS.map((s, i) => (
          <span key={s.id} className={answers[s.id] ? 'on' : i === step ? 'cur' : ''} />
        ))}
      </div>

      {!done ? (
        <div aria-live="polite">
          <p className="eyebrow">Question {step + 1} of {STEPS.length}</p>
          <h3 ref={headingRef} tabIndex={-1} className="diag-q">{current.q}</h3>
          <div className="diag-options" role="group" aria-label={current.q}>
            {current.options.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => choose(current.id, o.value)}
                className={answers[current.id] === o.value ? 'diag-opt selected' : 'diag-opt'}
                aria-pressed={answers[current.id] === o.value}
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
        <div aria-live="polite">
          <p className="eyebrow">Your result</p>
          <h3 ref={headingRef} tabIndex={-1} className="diag-q">
            Likely fit: {fit.offer.title}
            {fit.privateNote && <span className="diag-private"> — on a private, local-first setup</span>}
          </h3>
          <p className="diag-text">{fit.offer.tagline} We confirm it together in a short call — sometimes the real fix is smaller than you think.</p>

          <dl className="diag-summary">
            {STEPS.map((s) => (
              <div key={s.id}>
                <dt>{s.q}</dt>
                <dd>{answers[s.id]}</dd>
              </div>
            ))}
          </dl>

          {sent ? (
            <p className="diag-sent" role="status">
              Thanks {name.trim()} — WhatsApp should have opened with your answers. If it didn’t,{' '}
              <a href={waLink} target="_blank" rel="noopener noreferrer">tap here</a>.
            </p>
          ) : (
            <form onSubmit={submit} className="diag-form" noValidate>
              <label htmlFor="diag-name" className="sr-only">First name</label>
              <input
                id="diag-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
                autoComplete="given-name"
                aria-invalid={!!err}
                aria-describedby={err ? 'diag-err' : 'diag-note'}
              />
              <button type="submit" className="btn btn-lg btn-whatsapp">Message JB on WhatsApp</button>
            </form>
          )}
          {err && <p id="diag-err" className="diag-err" role="alert">{err}</p>}
          <p id="diag-note" className="diag-note">
            Your answers are sent to us and pre-filled in WhatsApp. JB replies personally, in English or French.
          </p>
          <button type="button" className="link-btn" onClick={reset}>Retake the diagnostic</button>
        </div>
      )}
    </div>
  );
}
