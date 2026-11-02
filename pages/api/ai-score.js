// AI Score: anonymous log only (answers + score, no name, no contact), one JSON line
// in Cloud Logging — filter on "AI_SCORE".
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }
  const d = req.body && typeof req.body === 'object' ? req.body : {};
  const answers = {};
  for (const [k, v] of Object.entries(d.answers || {}).slice(0, 12)) {
    answers[String(k).slice(0, 20)] = String(v).slice(0, 60);
  }
  const record = {
    ts: new Date().toISOString(),
    site: 'flawlessprod.com',
    score: Number.isFinite(d.score) ? Math.round(d.score) : null,
    top: Array.isArray(d.top) ? d.top.slice(0, 3).map((t) => String(t).slice(0, 20)) : [],
    answers,
  };
  console.log('AI_SCORE ' + JSON.stringify(record));
  return res.status(200).json({ ok: true });
}
