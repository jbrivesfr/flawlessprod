// Offers shown on the home page and suggested by the diagnostic.
// No prices on purpose: every project gets a fixed written quote after the diagnostic.
export const OFFERS = [
  {
    id: 'setup',
    title: 'Done-For-You AI Setup',
    tagline: 'Get hours back every week — your AI tools set up and working in 10 days.',
    forWhom: 'You’re a solo pro, coach, consultant or small team. You tried ChatGPT or Claude, but it never got past “nice demo”.',
    problem: 'Your inbox, admin and follow-ups eat your days. You bought tools, but nothing is connected and nothing remembers your business.',
    deliver: [
      'Three AI workflows built around how you actually work (e.g. inbox triage and reply drafts, client follow-up, documents or content)',
      'A shared memory of your business: offers, tone, clients, procedures',
      'Everything on accounts you own, with documented prompts and instructions',
      'A recorded handover so anyone on your team can use it',
    ],
    process: [
      ['Day 1', 'Map your week and pick the three biggest time sinks'],
      ['Days 2–7', 'Build and test on your real data'],
      ['Days 8–10', 'Handover, training, adjustments'],
    ],
    results: 'You see the hours you get back each week — counted before we start and checked again at day 30.',
    included: ['Diagnostic call', 'Setup and testing', 'Training session', '30-day check-in'],
  },
  {
    id: 'brain',
    title: 'Private Company Brain',
    tagline: 'Stop answering the same questions. Your company’s know-how, searchable by AI — and it never leaves your office.',
    forWhom: 'You run a law, finance, health or consulting practice — or any team with client data you can’t paste into a public chatbot.',
    problem: 'Your know-how lives in people’s heads and scattered files. The same questions come back every week, and confidentiality rules out the usual AI tools.',
    deliver: [
      'A private memory installed on your own computer or on a dedicated mini server we supply',
      'A local AI model for sensitive work: nothing leaves the building unless you decide it',
      'Your procedures, FAQs and history imported and organized',
      'Optional connection to Claude or ChatGPT desktop, with written rules on what can be shared',
    ],
    process: [
      ['Week 1', 'Data map: what is sensitive, what can go to the cloud'],
      ['Week 2', 'Install, import, connect'],
      ['Week 3', 'Team training and first monthly report'],
    ],
    results: 'Your team finds answers in seconds, new hires get up to speed faster, and you can tell any client exactly where their data goes.',
    included: ['Data map', 'Hardware option', 'Install and import', 'Team training', 'Monthly “what your brain learned” report'],
  },
  {
    id: 'leads',
    title: 'Lead Capture & Follow-Up System',
    tagline: 'Stop losing clients to whoever answers first. Every call and lead answered fast, and followed up until it closes.',
    forWhom: 'You’re a coach, practitioner or local service business, and your revenue depends on calls, bookings and quotes.',
    problem: 'You miss calls, reply late, forget to follow up. The client was ready — they just went to whoever answered first.',
    deliver: [
      'A qualifying quiz or form that scores each lead',
      'A simple CRM: every lead, its status and the next step',
      'Automatic follow-ups by email or text, written in your voice',
      'Optional missed-call text-back that replaces voicemail, not people',
    ],
    process: [
      ['Week 1', 'Audit of your current lead path and response times'],
      ['Weeks 2–3', 'Build, connect, test with real enquiries'],
      ['Week 4', 'Go live and weekly report'],
    ],
    results: 'You reply in minutes instead of hours, and no lead is ever left without a next step.',
    included: ['Lead-path audit', 'Quiz or form', 'CRM and follow-ups', 'Dashboard', 'Weekly report'],
  },
  {
    id: 'visibility',
    title: 'AI Visibility Audit',
    tagline: 'Your clients now ask ChatGPT who to hire. Make sure your name comes up.',
    forWhom: 'You’re a professional, firm or creator, and your clients ask an AI before they ask Google.',
    problem: 'When someone asks “who should I hire for…”, your name doesn’t come up — or what the AI says about you is wrong.',
    deliver: [
      'A test on 20 real questions your clients ask, across several AI assistants',
      'A prioritized fix list: pages, FAQs, profiles, structured data',
      'The pages and structured FAQs written and published with you',
      'The same 20 questions measured again every month',
    ],
    process: [
      ['Week 1', 'Measure and audit'],
      ['Weeks 2–3', 'Fixes and new pages'],
      ['Monthly', 'Re-measure and adjust'],
    ],
    results: 'A monthly scorecard showing where you stand. We give you a method and a measurement — never a fake guarantee.',
    included: ['20-question audit', 'Fix list', 'Pages and structured data', 'Monthly scorecard'],
  },
  {
    id: 'content',
    title: 'Content Engine, Human-Edited',
    tagline: 'Show up every week without spending your week on it. AI for the volume, real people for the judgment.',
    forWhom: 'You’re a coach, creator or founder. You know you should publish every week — and you don’t.',
    problem: 'Content takes too long, then your channels go dark for three weeks. And pure AI content sounds like everyone else.',
    deliver: [
      'An idea bank built from your calls, notes and past content',
      'Drafts, captions and short-video cuts prepared with AI',
      'Every piece reviewed and edited by our team before you see it',
      'An editorial calendar you approve in minutes, not hours',
    ],
    process: [
      ['Week 1', 'Voice and audience workshop, idea bank'],
      ['Week 2', 'First batch, your feedback'],
      ['Ongoing', 'Weekly batches and a monthly review'],
    ],
    results: 'You publish on a steady rhythm, in your voice, and see each month what actually brings you clients.',
    included: ['Voice workshop', 'Idea bank', 'Human editing', 'Editorial calendar', 'Monthly review'],
  },
];

export const OFFER_BY_ID = Object.fromEntries(OFFERS.map((o) => [o.id, o]));
