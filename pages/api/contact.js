// Diagnostic / contact endpoint: logs each request as one JSON line
// (Cloud Logging, filter on "CONTACT_REQUEST"), like jbrives.com.
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }
  const d = req.body && typeof req.body === 'object' ? req.body : {};
  const message = String(d.message || '').trim().slice(0, 4000);
  if (!message) return res.status(400).json({ ok: false, error: 'missing_message' });

  const record = {
    ts: new Date().toISOString(),
    site: 'flawlessprod.com',
    type: d.type || 'contact',
    name: String(d.name || '').trim().slice(0, 100) || null,
    message,
    answers: d.answers ?? null,
    suggested: d.suggested || null,
  };
  console.log('CONTACT_REQUEST ' + JSON.stringify(record));
  return res.status(200).json({ ok: true });
}
