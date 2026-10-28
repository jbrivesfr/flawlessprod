// Offers shown on the home page and suggested by the diagnostic.
// No prices on purpose: every project gets a fixed written quote after the diagnostic.
export const OFFERS = [
  {
    id: 'setup',
    title: 'Done-For-You AI Setup',
    tagline: 'Your everyday AI, wired into your real week in 10 days.',
    forWhom: 'Solo pros, coaches, consultants and small teams who tried ChatGPT or Claude but never got past “nice demo”.',
    problem: 'Hours lost every week in the inbox, admin and follow-ups. Tools bought, nothing connected, nothing that remembers your business.',
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
    results: 'A before/after count of hours per week, checked again at day 30.',
    included: ['Diagnostic call', 'Setup and testing', 'Training session', '30-day check-in'],
  },
  {
    id: 'brain',
    title: 'Private Company Brain',
    tagline: 'Your company’s memory, searchable by AI — and it stays with you.',
    forWhom: 'Law, finance, health and consulting firms, and any team handling client data it can’t paste into a public chatbot.',
    problem: 'Know-how lives in people’s heads and scattered files. The same questions get asked every week. Confidentiality blocks the usual AI tools.',
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
    results: 'Internal questions answered in seconds, faster onboarding, and a clear written answer to “where does our data go?”.',
    included: ['Data map', 'Hardware option', 'Install and import', 'Team training', 'Monthly “what your brain learned” report'],
  },
  {
    id: 'leads',
    title: 'Lead Capture & Follow-Up System',
    tagline: 'Every call, form and lead answered fast — and followed up until it closes.',
    forWhom: 'Coaches, practitioners and local service businesses that live on calls, bookings and quotes.',
    problem: 'Missed calls, slow replies and forgotten follow-ups. The lead was there; it went to whoever answered first.',
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
    results: 'Response time measured in minutes instead of hours, and no lead without a next step.',
    included: ['Lead-path audit', 'Quiz or form', 'CRM and follow-ups', 'Dashboard', 'Weekly report'],
  },
  {
    id: 'visibility',
    title: 'AI Visibility Audit',
    tagline: 'Find out what ChatGPT, Perplexity and Google say about you — and fix it.',
    forWhom: 'Professionals, firms and creators whose clients now ask an AI before they ask Google.',
    problem: 'When someone asks “who should I hire for…”, your name doesn’t come up — or the answer about you is wrong.',
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
    results: 'A monthly scorecard. We sell a method and a measurement — never a guarantee of being cited.',
    included: ['20-question audit', 'Fix list', 'Pages and structured data', 'Monthly scorecard'],
  },
  {
    id: 'content',
    title: 'Content Engine, Human-Edited',
    tagline: 'Consistent content in your voice — AI for the volume, people for the judgment.',
    forWhom: 'Coaches, creators and founders who know they should publish every week and don’t.',
    problem: 'Content takes too long, then goes dark for three weeks. Pure AI content sounds like everyone else.',
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
    results: 'A steady publishing rhythm and a monthly look at what actually brings clients.',
    included: ['Voice workshop', 'Idea bank', 'Human editing', 'Editorial calendar', 'Monthly review'],
  },
];

export const OFFER_BY_ID = Object.fromEntries(OFFERS.map((o) => [o.id, o]));
