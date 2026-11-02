import { QUESTIONS, cleanAnswers, computeScore } from '@/lib/aiScore';

// AI Score: stores the submission in a private GCS bucket (read every 5 min by a job on the
// Mac mini that turns it into a note in Jean's memory) and returns a short code FAS-XXXX.
// The score is recomputed here from the answers (list values only, no free text).
// No name, no email, no IP stored. Also one JSON line in Cloud Logging ("AI_SCORE").
const BUCKET = process.env.AISCORE_BUCKET || 'chatbot-374301-ai-score';
const ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'; // no 0/O, 1/I/L

// Simple per-instance abuse guard: 10 submissions per hour per IP.
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 3600_000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 10;
}

async function token() {
  if (process.env.AISCORE_DEV_TOKEN) return process.env.AISCORE_DEV_TOKEN;
  const r = await fetch(
    'http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token',
    { headers: { 'Metadata-Flavor': 'Google' } },
  );
  if (!r.ok) throw new Error(`metadata ${r.status}`);
  return (await r.json()).access_token;
}

function newCode() {
  let s = '';
  for (let i = 0; i < 4; i++) s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  return `FAS-${s}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return res.status(429).json({ ok: false, error: 'rate_limited' });

  const d = req.body && typeof req.body === 'object' ? req.body : {};
  const answers = cleanAnswers(d.answers);
  if (!answers) return res.status(400).json({ ok: false, error: 'bad_answers' });

  const result = computeScore(answers);
  const pick = (q) => q.options.find((o) => o.short === answers[q.id]);
  // "Problem" = the answers that point strongly at a pain (2+ points somewhere).
  const pains = QUESTIONS.filter((q) => q.id !== 'goal' && Object.values(pick(q).pts || {}).some((v) => v >= 2))
    .map((q) => `${q.q} → ${pick(q).label}`);
  const base = {
    site: 'flawlessprod.com',
    lang: 'en',
    ts: new Date().toISOString(),
    score: result.score,
    level: result.level,
    hours: result.hours,
    problem: pains.join(' · ') || 'none flagged',
    goal: pick(QUESTIONS.find((q) => q.id === 'goal')).label,
    top: result.top.map((a) => ({ id: a.id, title: a.title, gain: a.gain })),
    answers: QUESTIONS.map((q) => ({ id: q.id, q: q.q, a: pick(q).label })),
  };
  console.log('AI_SCORE ' + JSON.stringify({ ts: base.ts, site: base.site, score: base.score, top: result.top.map((a) => a.id), answers }));

  try {
    const tk = await token();
    for (let attempt = 0; attempt < 5; attempt++) {
      const code = newCode();
      // ifGenerationMatch=0: never overwrites an existing submission (collision → new code).
      const url =
        `https://storage.googleapis.com/upload/storage/v1/b/${BUCKET}/o?uploadType=media` +
        `&ifGenerationMatch=0&name=${encodeURIComponent(`submissions/${code}.json`)}`;
      const r = await fetch(url, {
        method: 'POST',
        headers: { Authorization: `Bearer ${tk}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, ...base }),
      });
      if (r.status === 412) continue;
      if (!r.ok) throw new Error(`gcs ${r.status} ${(await r.text()).slice(0, 200)}`);
      return res.status(200).json({ ok: true, code, score: result.score });
    }
    throw new Error('code collisions');
  } catch (e) {
    console.error('AI_SCORE_ERROR ' + String(e));
    return res.status(502).json({ ok: false, error: 'storage' });
  }
}
