// AI Score: 10 questions, deterministic rules, no LLM call.
// Result = a score out of 100 + the 3 things AI should do first, each with a cautious weekly gain.

export const JB_WA = '14154906663';

// Things we typically set up for clients. Gains are cautious ranges (hours per week), shown as "typically".
export const AREAS = {
  inbox: {
    title: 'Inbox and admin, drafted for you',
    text: 'Emails sorted, replies drafted, invoices and paperwork prepared — you check and send.',
    gain: [2, 4],
  },
  leads: {
    title: 'Follow-ups that go out on time',
    text: 'Every new lead gets a fast reply and reminders at the right moment, on top of the tools you already use. No new CRM.',
    gain: [1, 3],
  },
  calls: {
    title: 'Repeat questions and missed calls answered',
    text: 'The questions you get every week answered for you, missed calls texted back, and the real conversations handed to you.',
    gain: [1, 3],
  },
  booking: {
    title: 'Booking without the back-and-forth',
    text: 'Clients pick a slot, get confirmations and reminders. Fewer no-shows, no more email ping-pong.',
    gain: [1, 2],
  },
  content: {
    title: 'Content that actually goes out',
    text: 'Your ideas and recordings turned into posts, clips and newsletters — edited by people, in your voice.',
    gain: [2, 3],
  },
  brief: {
    title: 'A morning brief, every day',
    text: 'Money in, new leads, today’s appointments and tasks: one short message before you start, instead of five apps.',
    gain: [1, 2],
  },
  private: {
    title: 'A private AI on your own machines',
    text: 'AI that works on your client files from a computer or small server in your office. Nothing leaves it.',
    gain: [1, 3],
  },
};

// Each option: points per area (0–3 = how strongly AI could help there) and readiness points.
export const QUESTIONS = [
  {
    id: 'profile',
    q: 'What best describes your business?',
    options: [
      { label: 'Just me — solo pro, coach or creator', short: 'solo pro / coach / creator', pts: { content: 1, inbox: 1 } },
      { label: 'Local business or trade (calls, quotes, bookings)', short: 'local business / trade', pts: { calls: 1, booking: 1 } },
      { label: 'Professional practice (health, legal, finance, consulting)', short: 'professional practice', pts: { private: 1, inbox: 1 } },
      { label: 'Small team or online business (2–20 people)', short: 'small team / online business', pts: { brief: 1, leads: 1 } },
    ],
  },
  {
    id: 'admin',
    q: 'How many hours a week go to admin — email, invoices, scheduling, paperwork?',
    options: [
      { label: 'Less than 2', short: '< 2 h', pts: {} },
      { label: '2 to 5', short: '2–5 h', pts: { inbox: 1 } },
      { label: '5 to 10', short: '5–10 h', pts: { inbox: 2, brief: 1 } },
      { label: 'More than 10', short: '10+ h', pts: { inbox: 3, brief: 1 } },
    ],
  },
  {
    id: 'leads',
    q: 'When a new lead comes in, what usually happens?',
    options: [
      { label: 'We reply fast and always follow up', short: 'fast, always followed up', pts: {}, ready: 3 },
      { label: 'Mostly fine, but some slip through', short: 'some slip through', pts: { leads: 2 } },
      { label: 'Replies are often late, follow-ups forgotten', short: 'often late / forgotten', pts: { leads: 3 } },
      { label: 'We don’t really get leads that way', short: 'not really', pts: {} },
    ],
  },
  {
    id: 'calls',
    q: 'How often do missed calls or the same questions eat into your day?',
    options: [
      { label: 'Rarely', short: 'rarely', pts: {} },
      { label: 'A few times a week', short: 'a few times a week', pts: { calls: 2 } },
      { label: 'Every single day', short: 'every day', pts: { calls: 3 } },
    ],
  },
  {
    id: 'booking',
    q: 'How do clients book time with you?',
    options: [
      { label: 'Online booking, with reminders', short: 'online booking', pts: {}, ready: 3 },
      { label: 'Back-and-forth by email or text', short: 'email / text back-and-forth', pts: { booking: 2 } },
      { label: 'Mostly by phone', short: 'by phone', pts: { booking: 2, calls: 1 } },
      { label: 'Not relevant for us', short: 'not relevant', pts: {} },
    ],
  },
  {
    id: 'content',
    q: 'What about content and social media?',
    options: [
      { label: 'We post regularly, it works', short: 'regular', pts: {}, ready: 2 },
      { label: 'Irregular — it takes too long', short: 'irregular, too long', pts: { content: 3 } },
      { label: 'We don’t, but we should', short: 'not yet, should', pts: { content: 2 } },
      { label: 'Not important for us', short: 'not important', pts: {} },
    ],
  },
  {
    id: 'tools',
    q: 'Which tools do you already run on?',
    options: [
      { label: 'Mostly email, phone and paper', short: 'email / phone / paper', pts: { inbox: 1 }, ready: 4 },
      { label: 'Google Workspace or Microsoft 365', short: 'Google / Microsoft 365', pts: {}, ready: 10 },
      { label: 'A CRM or booking software too', short: 'CRM / booking software', pts: {}, ready: 12 },
      { label: 'Lots of apps that don’t talk to each other', short: 'many disconnected apps', pts: { brief: 2 }, ready: 8 },
    ],
  },
  {
    id: 'data',
    q: 'How sensitive is your clients’ data?',
    options: [
      { label: 'Normal business data', short: 'normal', pts: {}, ready: 6 },
      { label: 'Some confidential files', short: 'some confidential', pts: { private: 1 }, ready: 4 },
      { label: 'Highly sensitive (health, legal, financial)', short: 'highly sensitive', pts: { private: 3 }, ready: 3 },
      { label: 'Not sure', short: 'not sure', pts: { private: 1 }, ready: 3 },
    ],
  },
  {
    id: 'tried',
    q: 'What have you tried with AI so far?',
    options: [
      { label: 'Nothing yet', short: 'nothing yet', pts: {}, ready: 3 },
      { label: 'ChatGPT or similar, now and then', short: 'ChatGPT now and then', pts: {}, ready: 7 },
      { label: 'Some tools — nothing really stuck', short: 'tools, nothing stuck', pts: { brief: 1 }, ready: 9 },
      { label: 'AI is already part of my daily work', short: 'daily use', pts: {}, ready: 12 },
    ],
  },
  {
    id: 'goal',
    q: 'What matters most to you right now?',
    options: [
      { label: 'Getting time back', short: 'time', boost: { inbox: 1.3, calls: 1.2, booking: 1.2 } },
      { label: 'More clients, more revenue', short: 'money', boost: { leads: 1.4, content: 1.2, calls: 1.1 } },
      { label: 'Peace of mind — nothing slipping', short: 'peace of mind', boost: { brief: 1.5, leads: 1.2, private: 1.2 } },
    ],
  },
];

// Filled in when fewer than 3 areas stand out.
const FALLBACK = ['brief', 'inbox', 'leads'];

export function computeScore(answers) {
  const pts = Object.fromEntries(Object.keys(AREAS).map((k) => [k, 0]));
  let ready = 0;
  let boost = {};
  for (const q of QUESTIONS) {
    const o = q.options.find((x) => x.short === answers[q.id]);
    if (!o) continue;
    for (const [k, v] of Object.entries(o.pts || {})) pts[k] += v;
    ready += o.ready || 0;
    if (o.boost) boost = o.boost;
  }

  const ranked = Object.keys(AREAS)
    .map((k) => ({ id: k, w: pts[k] * (boost[k] || 1) }))
    .filter((a) => a.w > 0)
    .sort((a, b) => b.w - a.w);
  for (const k of FALLBACK) if (ranked.length < 3 && !ranked.some((a) => a.id === k)) ranked.push({ id: k, w: 0 });

  // Gain scales with how strongly the answers point there: weak signal → lower end of the range.
  const top = ranked.slice(0, 3).map(({ id }) => {
    const [lo, hi] = AREAS[id].gain;
    const p = Math.min(pts[id], 3);
    const gain = p >= 3 ? [lo, hi] : p === 2 ? [Math.max(1, lo - 1), Math.max(lo, hi - 1)] : [1, Math.max(1, lo)];
    return { id, ...AREAS[id], gain };
  });

  const opportunity = Math.min(60, Object.values(pts).reduce((s, v) => s + v, 0) * 3.5);
  const score = Math.max(12, Math.min(97, Math.round(opportunity + Math.min(40, ready))));
  const hours = top.reduce((s, a) => [s[0] + a.gain[0], s[1] + a.gain[1]], [0, 0]);
  const level = score >= 70 ? 'Big potential' : score >= 45 ? 'Real potential' : 'A few quick wins';
  return { score, level, top, hours };
}

export function fmtGain([lo, hi]) {
  return lo === hi ? `${lo} h` : `${lo}–${hi} h`;
}

export function waLink(text) {
  return `https://wa.me/${JB_WA}?text=${encodeURIComponent(text)}`;
}

export function scoreMessage(result) {
  const lines = [
    `Hi JB, I just took the AI Score on flawlessprod.com: ${result.score}/100.`,
    'My top 3:',
    ...result.top.map((a, i) => `${i + 1}. ${a.title}`),
    'Can we talk?',
  ];
  return lines.join('\n');
}
