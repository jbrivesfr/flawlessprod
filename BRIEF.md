# Flawless Productions Website - Project Brief for Jules

**Project:** Complete website build for flawlessprod.com  
**Repository:** Create new repo `jbrivesfr/flawlessprod`  
**Tech Stack:** Next.js with SSR/SSG (following AUDIT-SEO-KETO-2026-02-09.md recommendations)  
**Style:** Professional, clean, minimalistic  
**SEO:** CRITICAL PRIORITY - Proper SSR/SSG implementation

---

## CRITICAL ARCHITECTURE REQUIREMENTS

**Based on SEO Audit learnings (AUDIT-SEO-KETO-2026-02-09.md):**

1. **Server-Side Rendering (SSR) or Static Site Generation (SSG)**
   - Use Next.js with `getStaticProps` for pages
   - ALL content must be in HTML source (no client-side only rendering)
   - Pages must be crawlable by Google
   - Meta tags must be in initial HTML

2. **Every page MUST have:**
   - Unique, optimized `<title>` tag (50-60 characters)
   - Meta description (150-160 characters)
   - Open Graph tags (og:title, og:description, og:image, og:type)
   - Twitter Card tags
   - Proper H1 (one per page)
   - Semantic HTML structure (H2-H6 hierarchy)
   - Schema.org JSON-LD structured data

3. **Technical SEO Requirements:**
   - Functional robots.txt
   - Optimized sitemap.xml with proper priorities
   - All images with descriptive alt attributes
   - Canonical tags on every page
   - Breadcrumbs navigation
   - Internal linking structure

---

## CRITICAL RULES

1. **NEVER use the word "AI"** - Always say "agents" or "enhanced agents" or "EAs"
2. **Professional business tone** - This is a legitimate agency
3. **Clean, minimalistic design** - No clutter, professional aesthetics
4. **Trust signals** - Real people, real credentials, real company
5. **SEO-first** - Content must be in HTML source, not client-rendered

---

## Website Structure

### 1. Homepage (`/`)

**Meta tags:**
```html
<title>Flawless Productions - Enhanced Agents for Modern Business</title>
<meta name="description" content="Professional virtual assistant services with Lucy and Luna. Social media management, client coordination, and executive support. Human-trained enhanced agents available 8 AM - 8 PM." />
```

**Schema.org (Organization):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Flawless Productions",
  "url": "https://flawlessprod.com",
  "logo": "https://flawlessprod.com/logo.png",
  "description": "Enhanced agent services for modern business",
  "founders": [
    {
      "@type": "Person",
      "name": "Nina Christina"
    },
    {
      "@type": "Person",
      "name": "JB Reeves"
    }
  ]
}
```

**Hero Section:**
- H1: "Enhanced Agents for Modern Business"
- Subheading: "Human-trained, professionally managed. Get 100x more done."
- Video banner placeholder (Lucy working - professional setting)
- CTA: "Book Free Consultation"

**What We Offer Section:**
- H2: "The Power of Enhanced Agents"
- Explanation of human expertise + enhanced tools
- "Trained to be cooperative, secure, and productive"
- "Your virtual team, available 8 AM - 8 PM"

**Services Overview:**
- H2: "Our Agents"
- Lucy card: Social Media & Client Management → Link to /lucy
- Luna card: Virtual Assistant & Scheduling → Link to /luna
- "Custom solutions available"

**Educational Section:**
- H2: "What Are Enhanced Agents?"
- Bullet points:
  - Professionally trained virtual team members
  - Combine human oversight with advanced automation
  - Always supervised by real people
  - Secure, reliable, and productive
  - Not just automation - it's augmented teamwork

**Team Section:**
- H2: "Who's Behind Flawless Productions"

**Founder Block:**
**Nina Christina**
- H3: "Nina Christina - Founder & Agency Manager"
- Professional business photo (placeholder: `/images/team/nina.jpg`)
- Bio paragraph:
  "Former virtual assistant and English teacher turned business influencer. Built a 20K+ YouTube following teaching social media strategy. Now training enhanced agents with everything learned over 10 years in digital marketing."
- Links: YouTube (Flawless Christina), LinkedIn, Instagram (@reevesnina)

**Technical Director Block:**
**JB Reeves (Jean)**
- H3: "JB Reeves - Technical Director"
- Professional business photo (placeholder: `/images/team/jb.jpg`)
- Bio paragraph:
  "French web designer and developer from Paris. 15+ years building digital solutions. Handles technical infrastructure and system design for Flawless Productions."
- Links: LinkedIn, GitHub

**Team Member Block:**
**Shaun**
- H3: "Shaun - Operations"
- Professional photo (placeholder: `/images/team/shaun.jpg`)
- Brief bio paragraph
- Role: Support & Operations

**Note in content:** "Backed by shareholders and a professional team structure"

**CTA Section:**
- H2: "Ready to Scale Your Business?"
- Button: "Book a Free Consultation"
- Text: "WhatsApp contact provided after booking"

---

### 2. Lucy's Page (`/lucy`)

**Meta tags:**
```html
<title>Lucy - Social Media & Client Management | Flawless Productions</title>
<meta name="description" content="Professional social media management and client coordination. Instagram optimization, content strategy, DM management, and client relationship tracking. From $500/month." />
```

**Open Graph:**
```html
<meta property="og:title" content="Lucy - Social Media & Client Management Specialist" />
<meta property="og:description" content="Your dedicated social media manager. Instagram setup, meta strategy, 12 professional images/month, DM management, client file tracking. $500 first month." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://flawlessprod.com/images/lucy-og.jpg" />
```

**Schema.org (Service):**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lucy - Social Media & Client Management",
  "provider": {
    "@type": "Organization",
    "name": "Flawless Productions"
  },
  "description": "Professional social media management and client relationship services",
  "offers": {
    "@type": "Offer",
    "price": "1000",
    "priceCurrency": "USD",
    "priceValidUntil": "2026-12-31"
  }
}
```

**Hero Section:**
- H1: "Lucy - Social Media & Client Management Specialist"
- Professional image/video placeholder (`/images/lucy-hero.jpg`)
- Subheading: "Your dedicated social media manager and client relationship expert"

**What Lucy Offers:**
- H2: "Services"

**Social Media Management:**
- H3: "Social Media Management"
- Bullet list:
  - Instagram profile setup & optimization (aesthetics, tone, engagement)
  - Niche identification and content strategy
  - Meta angle development (your business + current trends)
  - 3-5 professional posts per week
  - Comment & DM management
  - Content calendar planning

**Client Relationship Management:**
- H3: "Client Relationship Management"
- Bullet list:
  - Client file organization and tracking
  - Reminder system for follow-ups and calls
  - Pre-call preparation sheets (obstacles, pitch points, client history)
  - Calendar coordination (read-only sync)

**Marketing Services:**
- H3: "Marketing & Funnel Analysis"
- Bullet list:
  - Quick SEO/copywriting review
  - Marketing funnel analysis (client → sale pathway)
  - Conversion optimization suggestions
  - Strategic intervention points in your funnel

**Visual Content:**
- H3: "Professional Photography Service"
- Bullet list:
  - 12 professionally-sourced images per month (rights included)
  - Themed photography matching your meta/niche
  - No photography required from you
  - You provide: casual phone shots, POV content, selfies
  - Lucy provides: professional-quality themed images
  - Same quality as Lucy's Instagram profile

**Meta Strategy Section:**
- H3: "Lucy's Meta Strategy Expertise"
- Paragraph explaining the "meta" concept:
  "Lucy excels at finding your 'meta' - the intersection between your business, what people are talking about right now, and what your audience needs. For example: Cybersecurity business + AI concerns = 'Worried about AI security risks? We've got you covered.' Lucy identifies trends, fears, and needs in your industry and creates relatable, engaging content."

**Instagram Profile Mastery:**
- H3: "Complete Instagram Presence Setup"
- Bullet list:
  - Profile aesthetics (visual consistency)
  - Tone of voice (your brand personality)
  - Engagement strategy (how to interact)
  - Niche positioning (who you serve, why they care)

**Availability:**
- H3: "Availability & Communication"
- Bullet list:
  - Direct WhatsApp contact (after booking)
  - 8 AM - 8 PM availability
  - Quick response times
  - Ongoing strategy refinement

**Pricing:**
- H2: "Pricing & What's Included"
- Regular: $1,000/month (highlighted)
- First Month Special: $500 (50% off - try it out) (prominent badge)
- Free onboarding consultation

**Included:**
- H3: "What's Included in Your $1,000/month"
- Bullet list:
  - 12 ready-to-use professional images (themed, rights included)
  - 3-5 posts per week with meta-driven strategy
  - DM & comment management
  - Client file management & tracking
  - Pre-call prep sheets for your sales calls
  - Calendar coordination (read-only sync)
  - Direct WhatsApp access (8 AM - 8 PM)
  - Ongoing strategy refinement

**CTA:**
- H2: "Get Started with Lucy"
- Button: "Book Your Free Onboarding"
- Text: "After booking, you'll receive Lucy's WhatsApp"
- Trust badge: "Managed by Nina Christina - 10 years digital marketing experience"

**Internal links:**
- Link to homepage
- Link to /luna page
- Breadcrumbs: Home > Lucy

---

### 3. Luna's Page (`/luna`)

**Meta tags:**
```html
<title>Luna - Virtual Assistant & Executive Support | Flawless Productions</title>
<meta name="description" content="Professional virtual assistant for scheduling, coordination, and daily management. Calendar management, task tracking, email support. From $500/month." />
```

**Open Graph:**
```html
<meta property="og:title" content="Luna - Virtual Assistant & Executive Support" />
<meta property="og:description" content="Your personal assistant for calendar management, task coordination, and executive support. Proactive check-ins, 8 AM - 8 PM availability. $500 first month." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://flawlessprod.com/images/luna-og.jpg" />
```

**Schema.org (Service):** (Similar structure to Lucy)

**Hero Section:**
- H1: "Luna - Virtual Assistant & Executive Support"
- Professional image placeholder (`/images/luna-hero.jpg`)
- Subheading: "Your personal assistant for scheduling, coordination, and daily management"

**What Luna Offers:**
- H2: "Services"

**Calendar & Scheduling:**
- H3: "Calendar & Scheduling"
- Bullet list:
  - Meeting coordination
  - Calendar management (read-only sync)
  - Appointment booking and confirmations
  - Schedule optimization

**Task Management:**
- H3: "Task Management"
- Bullet list:
  - Daily reminders and follow-ups
  - To-do tracking
  - Project coordination
  - Deadline management

**Communication Support:**
- H3: "Communication Support"
- Bullet list:
  - Email management
  - Message screening and prioritization
  - Professional correspondence
  - Follow-up automation

**Personal Assistance:**
- H3: "Personal Assistance"
- Bullet list:
  - Travel coordination
  - Research and information gathering
  - Document organization
  - Administrative support

**Availability:**
- H3: "Availability & Communication"
- Bullet list:
  - Direct WhatsApp contact (after booking)
  - 8 AM - 8 PM availability
  - Proactive check-ins
  - Ongoing coordination

**Pricing:**
- H2: "Pricing & What's Included"
- Regular: $1,000/month
- First Month Special: $500 (50% off)
- Free onboarding consultation

**CTA:**
- H2: "Get Started with Luna"
- Button: "Book Your Free Onboarding"
- Text: "WhatsApp provided after booking"
- Trust badge: "Trained personally by Nina Christina"

**Internal links:**
- Link to homepage
- Link to /lucy page
- Breadcrumbs: Home > Luna

---

## Technical Implementation Requirements

### Next.js Structure:

```
flawlessprod/
├── pages/
│   ├── index.js           (Homepage - SSG)
│   ├── lucy.js            (Lucy page - SSG)
│   ├── luna.js            (Luna page - SSG)
│   └── api/
│       └── contact.js     (Contact form API)
├── components/
│   ├── Layout.js
│   ├── Head.js            (Meta tags component)
│   ├── Hero.js
│   ├── ServiceCard.js
│   └── TeamMember.js
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── team/
│       │   ├── nina.jpg (placeholder)
│       │   ├── jb.jpg (placeholder)
│       │   └── shaun.jpg (placeholder)
│       ├── lucy-hero.jpg (placeholder)
│       ├── luna-hero.jpg (placeholder)
│       └── logo.png (placeholder)
└── styles/
    └── globals.css
```

### robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://flawlessprod.com/sitemap.xml
```

### sitemap.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://flawlessprod.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://flawlessprod.com/lucy</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://flawlessprod.com/luna</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
```

### Booking Form:
- Contact form collects: Name, Email, Business Type, Service Interest (Lucy/Luna), Message
- After submission: Shows WhatsApp number
- Optional: Email notification to team

### Image Placeholders:
All images should have placeholder paths. JB will provide real images later.
- Team photos: `/images/team/nina.jpg`, `/images/team/jb.jpg`, `/images/team/shaun.jpg`
- Hero images: `/images/lucy-hero.jpg`, `/images/luna-hero.jpg`
- Logo: `/images/logo.png`
- Use Next.js Image component for optimization

---

## Design Guidelines

**Overall Style:**
- Clean, minimalistic, professional
- White space and breathing room
- Professional business photography (placeholders)
- Trust signals throughout

**Color Palette:**
- Professional blues/grays (trust, corporate)
- White backgrounds (clean, minimal)
- Accent colors for CTAs (subtle, not aggressive)

**Typography:**
- Clean sans-serif (Inter, Open Sans, or similar)
- Clear hierarchy
- Easy to read
- Proper H1-H6 structure

**Mobile Responsive:**
- Clean on all devices
- Easy navigation
- Professional on mobile

---

## Deployment - Google Cloud Run

**cloudbuild.yaml:**
```yaml
steps:
  # Install dependencies
  - name: 'node:18'
    entrypoint: npm
    args: ['install']

  # Build Next.js app
  - name: 'node:18'
    entrypoint: npm
    args: ['run', 'build']

  # Build Docker image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/flawlessprod:$COMMIT_SHA', '.']

  # Push to Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/flawlessprod:$COMMIT_SHA']

  # Deploy to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'flawlessprod'
      - '--image=gcr.io/$PROJECT_ID/flawlessprod:$COMMIT_SHA'
      - '--region=us-west1'
      - '--platform=managed'
      - '--allow-unauthenticated'

images:
  - 'gcr.io/$PROJECT_ID/flawlessprod:$COMMIT_SHA'

options:
  machineType: 'N1_HIGHCPU_8'
```

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**GCP Project:** chatbot-374301 (same as other sites)
**Region:** us-west1

---

## Content Tone & Voice

**Never say:**
- "AI assistant"
- "Bot"
- "Automated"
- "Artificial intelligence"

**Always say:**
- "Enhanced agent"
- "Virtual assistant"
- "Team member"
- "Professionally trained"
- "Human-supervised"

**Key Messages:**
1. Real people supervise everything
2. Enhanced agents = human training + powerful tools
3. You get human expertise + agent efficiency
4. Secure, reliable, professional
5. Not just automation - it's cooperation

---

## SEO Checklist for Jules

**Every page MUST have:**
- ✅ Unique H1
- ✅ Meta title (50-60 chars)
- ✅ Meta description (150-160 chars)
- ✅ Open Graph tags (title, description, image, type)
- ✅ Twitter Card tags
- ✅ Schema.org JSON-LD
- ✅ Proper H2-H6 hierarchy
- ✅ Image alt attributes
- ✅ Canonical tag
- ✅ Breadcrumbs
- ✅ Internal links

**Site-wide:**
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ SSR/SSG (no client-only rendering)
- ✅ Mobile responsive
- ✅ Fast loading

---

## Questions for JB

1. ✅ Domain: flawlessprod.com (confirmed)
2. Need real photos or use placeholders for now? (PLACEHOLDER FOR NOW)
3. Need video footage or placeholder? (PLACEHOLDER FOR NOW)
4. Preferred contact form integration?
5. Google Analytics tracking ID?

---

**End of Brief**

Build a professional, SEO-optimized website for Flawless Productions selling enhanced agent services (Lucy and Luna). Focus on SSR/SSG, proper meta tags, and clean professional design. Deploy to Google Cloud Run.
