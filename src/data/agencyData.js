/**
 * =========================================================================
 * APEXGROWTH DIGITAL - AGENCY DATA CONFIGURATION
 * =========================================================================
 * This file serves as the single source of truth for the agency's content.
 * You can easily customize company names, branding, services, products,
 * FAQs, statistics, contact details, and social links here.
 */

export const agencyData = {
  // BRANDING & BASIC INFO
  brand: {
    name: "ApexGrowth",
    suffix: "Digital",
    tagline: "Premier Digital Marketing & Growth Partner",
    foundedYear: 2021,
    rating: "4.9/5",
    totalReviews: "180+",
  },

  // NAVIGATION MENU LINKS
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // HERO SECTION DATA
  hero: {
    badge: "⚡ High-Performance Growth Partner",
    headlineStart: "Grow Your Business With ",
    headlineGradient: "Smarter Digital Marketing",
    headlineEnd: "",
    subheadline:
      "We build data-driven organic search authority, high-ROI paid media campaigns, and conversion-optimized websites that turn casual browsers into lifetime customers.",
    primaryCta: {
      label: "Get Started",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore Services",
      href: "#services",
    },
    // Social Proof Avatars & Rating
    socialProof: {
      avatars: [
        { initial: "SV", name: "Sarah Vance", company: "Novasphere", color: "#6366f1" },
        { initial: "MR", name: "Marcus Reed", company: "HyperScale", color: "#06b6d4" },
        { initial: "EL", name: "Elena Laurent", company: "Lumina Labs", color: "#10b981" },
        { initial: "DK", name: "David Kim", company: "Velocity AI", color: "#f59e0b" },
      ],
      rating: "4.9/5",
      ratingCount: "180+",
      ratingText: "from verified founders & CMOs",
    },
    // Interactive Timeframe Performance Datasets
    timeframes: {
      "30D": {
        revenue: "$248,500",
        revenueGrowth: "+342.5%",
        roas: "4.8x",
        roasGrowth: "+1.2x",
        conversions: "1,420",
        convGrowth: "+28.4%",
        chartBars: [
          { label: "W1", height: 38 },
          { label: "W2", height: 52 },
          { label: "W3", height: 70 },
          { label: "W4", height: 95, tooltip: "+$68.4k", active: true },
        ],
        liveEvent: "Enterprise SaaS booked Growth Audit ($14.2k/mo)",
      },
      "90D": {
        revenue: "$784,200",
        revenueGrowth: "+418.0%",
        roas: "5.2x",
        roasGrowth: "+1.8x",
        conversions: "4,680",
        convGrowth: "+36.1%",
        chartBars: [
          { label: "M1", height: 42 },
          { label: "M2", height: 68 },
          { label: "M3", height: 96, tooltip: "+$210k", active: true },
        ],
        liveEvent: "DTC Brand scaled to 5.2x ROAS on Meta & Google",
      },
      "1Y": {
        revenue: "$2,840,000",
        revenueGrowth: "+520.4%",
        roas: "5.6x",
        roasGrowth: "+2.1x",
        conversions: "18,920",
        convGrowth: "+49.3%",
        chartBars: [
          { label: "Q1", height: 40 },
          { label: "Q2", height: 62 },
          { label: "Q3", height: 82 },
          { label: "Q4", height: 98, tooltip: "+$890k", active: true },
        ],
        liveEvent: "Global B2B captured #1 Google Ranking across 140 keywords",
      },
    },
    // Hero Trust Metrics Strip
    stats: [
      { value: "100+", label: "Projects Delivered", desc: "Across 14 industries" },
      { value: "50+", label: "Happy Clients", desc: "Enterprise & high-growth SMBs" },
      { value: "5+", label: "Years Experience", desc: "Proven track record" },
      { value: "98.7%", label: "Client Retention", desc: "Long-term partnership rate" },
    ],
    // Client Logo Proof (Trust Bar)
    clientLogos: [
      { name: "Novasphere", category: "SaaS Tech" },
      { name: "HyperScale", category: "E-Commerce" },
      { name: "QuantumPay", category: "Fintech" },
      { name: "Lumina Labs", category: "HealthTech" },
      { name: "Velocity AI", category: "AI Platform" },
      { name: "Aura Home", category: "Direct-to-Consumer" },
    ],
  },

  // ABOUT US SECTION DATA
  about: {
    badge: "WHO WE ARE",
    title: "We Don't Just Buy Clicks. We Scale Market Leaders.",
    description:
      "ApexGrowth was founded by a collective of seasoned growth engineers, creative strategists, and former Fortune 500 performance marketers. We noticed traditional agencies rely on vanity metrics like impressions and clicks that don't translate to real bank deposits.",
    descriptionSecond:
      "We took the opposite approach: full-funnel transparency, custom bespoke strategies, and a relentless focus on customer acquisition cost (CAC) and lifetime value (LTV).",
    mission:
      "To empower visionary businesses with enterprise-grade marketing intelligence, relentless testing, and scalable customer acquisition engines.",
    vision:
      "To be the world's most trusted growth partner where marketing is treated as a predictable, high-yield investment rather than an overhead expense.",
    highlights: [
      {
        id: "rev",
        value: "$48M+",
        title: "Client Revenue Generated",
        desc: "Direct attributed revenue tracked across all client campaigns.",
      },
      {
        id: "roas",
        value: "4.8x",
        title: "Average ROAS",
        desc: "Return on ad spend achieved across search and social paid media.",
      },
      {
        id: "team",
        value: "35+",
        title: "In-House Specialists",
        desc: "Certified Google, Meta, and SEO specialists with zero outsourcing.",
      },
      {
        id: "awards",
        value: "14+",
        title: "Industry Accolades",
        desc: "Recognized by Search Engine Land, Clutch, and Digiday.",
      },
    ],
    pillars: [
      {
        title: "Data-First Decision Making",
        desc: "Every creative hypothesis and bid adjustment is powered by statistical testing and multi-touch attribution.",
      },
      {
        title: "Uncompromising Transparency",
        desc: "You retain 100% ownership of your ad accounts, assets, and data with live 24/7 dashboard access.",
      },
      {
        title: "Rapid Sprint Execution",
        desc: "We deploy, test, and iterate creative ad variations and landing page experiments on weekly sprint cycles.",
      },
    ],
    steps: [
      {
        num: "01",
        phase: "Diagnostics",
        timeline: "Days 1–14",
        title: "Full-Funnel Intelligence Audit",
        desc: "We unearth hidden leakage across your organic visibility, paid search bids, and conversion barriers with statistical rigor.",
        deliverable: "45-Point Leakage & Competitor Matrix",
        kpi: "Zero Assumption Baseline",
      },
      {
        num: "02",
        phase: "Architecture",
        timeline: "Days 15–21",
        title: "Bespoke Revenue Blueprint",
        desc: "No cookie-cutter templates. We architect a targeted roadmap tuned to your specific unit economics and category landscape.",
        deliverable: "Channel Allocation & Creative Playbook",
        kpi: "3.5x Minimum Target ROAS",
      },
      {
        num: "03",
        phase: "Sprint Execution",
        timeline: "Weekly Sprints",
        title: "Rapid Testing & Creative Iteration",
        desc: "Weekly creative iterations and bid adjustments to aggressively drive down blended CAC and boost conversion yields.",
        deliverable: "Sprint Teardowns & Multi-Touch Attribution",
        kpi: "-34% Blended CAC Reduction",
      },
      {
        num: "04",
        phase: "Domination",
        timeline: "Compounding",
        title: "Category Scale & Automation",
        desc: "Automating high-performing funnels and deploying multi-channel expansion to dominate market share long-term.",
        deliverable: "Proprietary Automation Hub & Enterprise Scale Ops",
        kpi: "+185% Compounding Revenue Growth",
      },
    ],
  },

  // SERVICES SECTION DATA (8 Required Services)
  services: [
    {
      id: "seo",
      iconName: "Search",
      category: "Organic Growth",
      name: "SEO (Search Engine Optimization)",
      shortDesc:
        "Dominate organic search results, outrank fierce competitors, and capture high-intent buyers before they ever see an ad.",
      deliverables: [
        "Full Technical SEO Audit & Core Web Vitals Fixes",
        "Competitor Gap Analysis & Keyword Clustering",
        "Authoritative White-Hat Link Building",
        "Structured Schema & Local Google Map Pack",
      ],
      metric: "+185% Avg Organic Traffic Growth",
      timeline: "3–6 Month Compounding Sprints",
    },
    {
      id: "social-media",
      iconName: "Share2",
      category: "Brand & Engagement",
      name: "Social Media Marketing",
      shortDesc:
        "Transform passive scrollers into passionate brand champions with viral reels, high-aesthetic feeds, and engaged communities.",
      deliverables: [
        "Content Calendar & Trend Strategy",
        "High-Resolution Short-Form Video Production (Reels/TikTok)",
        "Daily Community Management & Comment Moderation",
        "Influencer Sourcing & Creator Partnerships",
      ],
      metric: "4.2M+ Monthly Target Impressions",
      timeline: "Ongoing Monthly Retainer",
    },
    {
      id: "ppc-ads",
      iconName: "Target",
      category: "Paid Acquisition",
      name: "Google Ads / PPC",
      shortDesc:
        "Capture ready-to-buy prospects at the precise moment of intent with hyper-optimized Search, Shopping, and YouTube campaigns.",
      deliverables: [
        "Negative Keyword Shielding & Bid Optimizations",
        "High-Converting Responsive Search Ads",
        "Google Shopping & Performance Max Setup",
        "Advanced Server-Side Conversion API Tracking",
      ],
      metric: "3.8x Industry Average ROAS",
      timeline: "Active Sprint with Weekly Cadence",
    },
    {
      id: "content-marketing",
      iconName: "FileText",
      category: "Organic Growth",
      name: "Content Marketing",
      shortDesc:
        "Establish undeniable category authority with in-depth industry guides, high-converting case studies, and editorial thought leadership.",
      deliverables: [
        "Editorial Strategy & Content Hub Architecture",
        "SEO-Optimized Pillar Articles & Longform Guides",
        "Lead Magnet Ebooks, Checklists & Whitepapers",
        "Content Repurposing for Multi-Channel Distribution",
      ],
      metric: "65% Higher Qualified Inbound Leads",
      timeline: "Weekly Publishing Schedule",
    },
    {
      id: "web-development",
      iconName: "Code2",
      category: "Technology & Conversion",
      name: "Web Development",
      shortDesc:
        "Custom, blazing-fast responsive websites and landing pages meticulously engineered to convert traffic into qualified inquiries.",
      deliverables: [
        "Mobile-First Responsive UI/UX Architecture",
        "React & Modern Web Technology Stack",
        "Sub-Second Page Load Speed & Core Web Vitals 95+",
        "Interactive Form Integrations & CRM Webhooks",
      ],
      metric: "< 0.8s Average Page Load Speed",
      timeline: "3–6 Weeks Rapid Delivery",
    },
    {
      id: "branding",
      iconName: "Palette",
      category: "Brand & Engagement",
      name: "Branding & Visual Identity",
      shortDesc:
        "Craft a cohesive, unforgettable brand aesthetic with distinctive logos, color systems, typography rules, and marketing collateral.",
      deliverables: [
        "Complete Brand Guidelines & Identity Bible",
        "Logo Design, Iconography & Typography Scale",
        "Social Media Kit & Presentation Deck Templates",
        "High-Fidelity Ad Creative Templates",
      ],
      metric: "100% Bespoke Brand Deliverables",
      timeline: "2–4 Weeks Turnaround",
    },
    {
      id: "email-marketing",
      iconName: "Mail",
      category: "Retention & CRM",
      name: "Email Marketing & Automation",
      shortDesc:
        "Turn one-time shoppers into repeat purchasers with personalized behavioral email flows, SMS notifications, and retention campaigns.",
      deliverables: [
        "Automated Welcome, Abandoned Cart & Post-Purchase Flows",
        "Hyper-Segmented List Hygiene & Deliverability Auditing",
        "A/B Split Testing for Subject Lines & Copy",
        "High-CTR Responsive Email Template Design",
      ],
      metric: "42.8% Average Campaign Open Rate",
      timeline: "Ongoing Retainer & Flow Setup",
    },
    {
      id: "cro-performance",
      iconName: "TrendingUp",
      category: "Technology & Conversion",
      name: "Performance Marketing & CRO",
      shortDesc:
        "Systematically optimize your conversion funnel through scientific heatmaps, user recordings, and multivariate A/B testing.",
      deliverables: [
        "User Session Recordings & Heatmap Diagnostics",
        "Multivariate Landing Page Split Testing",
        "Checkout Flow & Micro-Friction Elimination",
        "Omnichannel Attribution & ROAS Auditing",
      ],
      metric: "+41% Average Conversion Lift",
      timeline: "Bi-Weekly Testing Sprints",
    },
  ],

  // PRODUCTS & SOLUTIONS SECTION DATA (4 Required Solutions)
  products: [
    {
      id: "marketing-automation",
      iconName: "Cpu",
      badge: "Automation Core",
      tier: "Enterprise Ready",
      name: "Marketing Automation Suite",
      tagline: "End-to-end customer journey orchestration on autopilot",
      shortDesc:
        "Connect your CRM, email triggers, lead scoring, and SMS alerts into an intelligent omnichannel workflow that nurtures leads 24/7 without manual intervention.",
      features: [
        "Visual drag-and-drop workflow builder",
        "Dynamic lead scoring & auto-qualification",
        "Real-time CRM sync (HubSpot, Salesforce, Pipedrive)",
        "Triggered multichannel alerts (Email, SMS, Slack)",
      ],
      statLabel: "Time Saved",
      statValue: "28+ hrs/week",
      cta: "Explore Suite",
    },
    {
      id: "seo-tools",
      iconName: "Gauge",
      badge: "Search Intelligence",
      tier: "Included in Growth",
      name: "SEO Intelligence Tool",
      tagline: "Live SERP tracking & automated technical site monitoring",
      shortDesc:
        "A proprietary diagnostic command center that tracks your target keywords across 140+ geographical markets, alerts on technical drops, and identifies competitor content gaps.",
      features: [
        "Daily keyword position & volatility tracking",
        "Automated 404 & crawl anomaly alert system",
        "AI-driven content optimization suggestions",
        "Competitor backlink gap notifications",
      ],
      statLabel: "Rank Tracking",
      statValue: "140+ Countries",
      cta: "View Tool Demo",
    },
    {
      id: "social-management",
      iconName: "Layers",
      badge: "Social Operations",
      tier: "Team Collaboration",
      name: "Social Media Management Hub",
      tagline: "Unified editorial calendar & multi-channel publishing",
      shortDesc:
        "Centralize content creation, client approval stages, asset storage, and scheduled publishing across Instagram, LinkedIn, X, TikTok, and Facebook in one collaborative workspace.",
      features: [
        "Single-click scheduling to 6+ major platforms",
        "Visual preview for grid, stories, reels, and feeds",
        "Client approval portal with timestamped comments",
        "AI caption co-pilot with brand tone matching",
      ],
      statLabel: "Platforms",
      statValue: "All Major Networks",
      cta: "Explore Hub",
    },
    {
      id: "analytics-reporting",
      iconName: "BarChart3",
      badge: "Executive BI",
      tier: "Executive Standard",
      name: "Analytics & ROI Reporting Engine",
      tagline: "Cross-channel attribution without the spreadsheet chaos",
      shortDesc:
        "Eliminate fragmented reports. Our unified dashboard blends Google Analytics 4, Meta Ads, Google Ads, and your merchant data into a single verified source of financial truth.",
      features: [
        "Multi-touch algorithmic attribution modeling",
        "Real-time blended CAC, MER, and ROAS calculations",
        "Automated weekly client executive PDF reports",
        "Custom KPI threshold notifications to Slack/Email",
      ],
      statLabel: "Data Accuracy",
      statValue: "99.8% Verified",
      cta: "See Sample Report",
    },
  ],

  // TESTIMONIALS / SOCIAL PROOF
  testimonials: [
    {
      quote:
        "ApexGrowth transformed our customer acquisition economics. In 6 months, our organic search leads increased by 210% and our blended CAC dropped by 34%. They are an indispensable partner.",
      author: "Marcus Vance",
      title: "Chief Marketing Officer",
      company: "Novasphere Cloud",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
      rating: 5,
    },
    {
      quote:
        "Unlike previous agencies who gave us endless spreadsheets with vanity clicks, ApexGrowth focused squarely on bottom-line revenue. Their PPC rebuild alone generated a 4.6x ROAS.",
      author: "Elena Rostova",
      title: "Founder & CEO",
      company: "Aura Home Goods",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
      rating: 5,
    },
    {
      quote:
        "The speed and technical precision of their web development and SEO teams are world-class. Our new site ranks #1 for our top 12 commercial keywords and converts at 5.2%.",
      author: "David Sterling",
      title: "VP of Digital Growth",
      company: "HyperScale Logistics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
      rating: 5,
    },
  ],

  // FAQ SECTION DATA (Realistic & Detailed)
  faqs: [
    {
      id: "faq-1",
      question: "What digital marketing services do you provide?",
      answer:
        "We are a full-service growth agency offering an integrated suite of services: Technical & Content SEO, Google Ads (PPC), Paid Social (Meta, LinkedIn, TikTok), Content Marketing, Custom Web Design & Development, Brand Identity Systems, Email/SMS Lifecycle Marketing, and Conversion Rate Optimization (CRO). We customize our service mix based specifically on your growth stage and target market.",
      category: "Services",
    },
    {
      id: "faq-2",
      question: "How long does SEO take to show measurable results?",
      answer:
        "SEO is a compounding, long-term asset. While initial technical fixes, site speed improvements, and indexing optimizations often yield ranking lifts within 4 to 8 weeks, significant organic revenue growth and competitive category dominance typically materialize within 3 to 6 months. We provide bi-weekly ranking velocity reports so you see progress at every stage.",
      category: "SEO",
    },
    {
      id: "faq-3",
      question: "How much does digital marketing cost and how do you price?",
      answer:
        "Our engagements are customized to your goals and scale. Most clients partner with us on a monthly retainer starting from $3,000/month for focused growth sprints up to $15,000+/month for full omnichannel management. For web development and branding, we provide fixed-scope project quotes. We never charge hidden markups on your direct ad spend.",
      category: "Pricing",
    },
    {
      id: "faq-4",
      question: "Do you provide customized marketing strategies?",
      answer:
        "Yes, 100%. We do not use cookie-cutter templates. Before launching any campaign, we execute a comprehensive 14-day discovery and audit phase analyzing your historical analytics, unit economics, competitor gaps, and customer psychology to engineer a bespoke growth roadmap.",
      category: "Strategy",
    },
    {
      id: "faq-5",
      question: "Can you manage our social media accounts end-to-end?",
      answer:
        "Absolutely. Our social media team handles everything from creative ideation, high-definition short-form video editing (Reels/TikTok), graphic design, copy writing, publishing, community engagement, and influencer outreach. You have full approval rights over our monthly editorial calendar before anything goes live.",
      category: "Social Media",
    },
    {
      id: "faq-6",
      question: "How can I get started with your agency?",
      answer:
        "Getting started is simple. Fill out the consultation form below with your current challenges and goals. Our growth team will review your website and ad history, and schedule a complimentary 30-minute Growth Audit call within 24 hours to present actionable insights and our proposed action plan.",
      category: "Onboarding",
    },
    {
      id: "faq-7",
      question: "How do you track and report campaign ROI?",
      answer:
        "Transparency is our core pillar. We configure server-side conversion tracking (Google Analytics 4, Meta Conversions API) and provide you with a 24/7 live executive dashboard showing exact spend, cost per acquisition (CAC), leads generated, and return on ad spend (ROAS). You also receive weekly sprint reviews and monthly strategic deep-dives.",
      category: "Reporting",
    },
  ],

  // CONTACT & REQUIREMENTS SECTION DATA
  contact: {
    badge: "GET IN TOUCH",
    title: "Ready to Grow Your Business?",
    subtitle:
      "Tell us about your project, current bottlenecks, and growth targets. Our senior strategists will analyze your market and provide a tailored proposal within 24 hours.",
    email: "growth@apexgrowth.agency",
    phone: "+1 (800) 456-GROW (4769)",
    address: "450 Lexington Ave, Suite 1800, New York, NY 10017",
    hours: "Monday – Friday: 8:00 AM – 6:00 PM EST (24/7 Client Emergency Support)",
    guarantee: "⚡ Guaranteed response within 2 hours during business hours",
    serviceOptions: [
      "Full-Funnel Growth (All Services)",
      "SEO & Organic Search Dominance",
      "Google Ads & PPC Paid Acquisition",
      "Social Media Marketing & Content",
      "Custom Web Development & Landing Pages",
      "Branding & Creative Design",
      "Email Marketing & Lifecycle Automation",
      "Conversion Rate Optimization (CRO)",
    ],
    budgetOptions: [
      "$1,500 – $3,000 / month",
      "$3,000 – $7,500 / month",
      "$7,500 – $15,000 / month",
      "$15,000+ / month (Enterprise)",
      "One-time Project / Fixed Scope",
    ],
  },

  // SOCIAL MEDIA LINKS
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter / X", href: "https://x.com", icon: "Twitter" },
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { name: "YouTube", href: "https://youtube.com", icon: "Youtube" },
    { name: "GitHub", href: "https://github.com", icon: "Github" },
  ],

  // FOOTER DATA
  footer: {
    tagline:
      "Data-driven digital marketing agency dedicated to turning ambitious brands into undisputed category leaders.",
    copyright: "© 2026 ApexGrowth Digital Agency LLC. All rights reserved.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Digital Solutions", href: "#products" },
      { label: "Frequently Asked Questions", href: "#faq" },
      { label: "Contact & Consultation", href: "#contact" },
    ],
  },
};
