interface StartupIdea {
    idea: string;
    monetisation: number;
    monetisation_reason: string;
    ease_of_build: number;
    ease_of_build_reason: string;
    competition: number;
    competition_reason: string;
    category: string;
    categories: string[];
}

export const startupIdeas: StartupIdea[] = [
    {
        "idea": "Call Co-pilot for Sales",
        "monetisation": 5,
        "monetisation_reason": "Sales teams have high budgets and pay for tools that increase revenue.",
        "ease_of_build": 2,
        "ease_of_build_reason": "AI-driven call assistance requires complex ML models and integrations.",
        "competition": 3,
        "competition_reason": "There are existing AI sales tools, but room for differentiation exists.",
        "category": "SaaS, Sales",
        "categories": [
            "SaaS",
            "Sales"
        ]
    },
    {
        "idea": "Email Deliverability Testing",
        "monetisation": 4,
        "monetisation_reason": "Email teams are willing to pay for inboxing improvements.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Requires integrations with email providers and spam testing infrastructure.",
        "competition": 4,
        "competition_reason": "Well-known tools exist; differentiation on accuracy and UX.",
        "category": "Email, Marketing, SaaS",
        "categories": [
            "Email",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Website Feedback Widget",
        "monetisation": 4,
        "monetisation_reason": "SMBs pay for customer feedback tools; clear value proposition.",
        "ease_of_build": 4,
        "ease_of_build_reason": "A frontend snippet and backend storage; manageable MVP scope.",
        "competition": 4,
        "competition_reason": "Crowded space; differentiation via price, UX, and integrations.",
        "category": "Productivity, SaaS",
        "categories": [
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Conversational Data Analytics",
        "monetisation": 5,
        "monetisation_reason": "Enterprises pay for analytics time-savers.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Natural language to SQL is hard; needs robust parsing/LLM.",
        "competition": 3,
        "competition_reason": "Some players exist but the space evolves fast.",
        "category": "AI, Analytics, Data, SaaS",
        "categories": [
            "AI",
            "Analytics",
            "Data",
            "SaaS"
        ]
    },
    {
        "idea": "Reddit Marketing Tool",
        "monetisation": 3,
        "monetisation_reason": "Niche but strong need for marketers.",
        "ease_of_build": 3,
        "ease_of_build_reason": "API + dashboards; policy-compliant automation needed.",
        "competition": 3,
        "competition_reason": "Some tools exist; room for execution.",
        "category": "Marketing, SaaS",
        "categories": [
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Invoice Generator",
        "monetisation": 3,
        "monetisation_reason": "Many free options; monetise via advanced features.",
        "ease_of_build": 4,
        "ease_of_build_reason": "CRUD + PDF; payments optional.",
        "competition": 5,
        "competition_reason": "Highly saturated.",
        "category": "Finance, SaaS",
        "categories": [
            "Finance",
            "SaaS"
        ]
    },
    {
        "idea": "Expense Splitting App",
        "monetisation": 3,
        "monetisation_reason": "Freemium potential; consumer subscriptions can be tough.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Mobile/web app with sync; manageable MVP.",
        "competition": 4,
        "competition_reason": "Popular incumbents exist.",
        "category": "Finance, Mobile",
        "categories": [
            "Finance",
            "Mobile"
        ]
    },
    {
        "idea": "Password Manager Alternative",
        "monetisation": 4,
        "monetisation_reason": "Security tools command solid pricing.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Security and cryptography requirements are high.",
        "competition": 5,
        "competition_reason": "Crowded by strong incumbents.",
        "category": "Security, SaaS",
        "categories": [
            "Security",
            "SaaS"
        ]
    },
    {
        "idea": "Project Management Platform",
        "monetisation": 4,
        "monetisation_reason": "B2B productivity tools monetise well.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Large surface area but MVP possible.",
        "competition": 5,
        "competition_reason": "Very competitive landscape.",
        "category": "Productivity, SaaS",
        "categories": [
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Customer Support Platform",
        "monetisation": 4,
        "monetisation_reason": "Clear ROI for businesses.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Multi-channel + automation complexity.",
        "competition": 5,
        "competition_reason": "Strong incumbents.",
        "category": "SaaS",
        "categories": [
            "SaaS"
        ]
    },
    {
        "idea": "Gym Accountability App",
        "monetisation": 3,
        "monetisation_reason": "Consumer subscription possible; churn risk.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Mobile app with notifications/social.",
        "competition": 4,
        "competition_reason": "Many fitness apps exist.",
        "category": "Mobile",
        "categories": [
            "Mobile"
        ]
    },
    {
        "idea": "Landing Page Database",
        "monetisation": 3,
        "monetisation_reason": "Niche subscriptions; B2B appeal.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Collect, tag, and search pages.",
        "competition": 3,
        "competition_reason": "Some alternatives exist.",
        "category": "Marketing, SaaS",
        "categories": [
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Failed Startup Database",
        "monetisation": 2,
        "monetisation_reason": "Tough to monetise content-only databases.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Data collection/curation heavy.",
        "competition": 2,
        "competition_reason": "Few strong incumbents.",
        "category": "Content",
        "categories": [
            "Content"
        ]
    },
    {
        "idea": "Tech Stack Hunter",
        "monetisation": 4,
        "monetisation_reason": "Sales/BD teams pay for lead intel.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Scraping + enrichment + UI.",
        "competition": 4,
        "competition_reason": "Known competitors exist.",
        "category": "Sales, Data, SaaS",
        "categories": [
            "Sales",
            "Data",
            "SaaS"
        ]
    },
    {
        "idea": "Viral Content Analyzer",
        "monetisation": 3,
        "monetisation_reason": "Marketers pay; depends on insights accuracy.",
        "ease_of_build": 3,
        "ease_of_build_reason": "APIs + scoring; ML optional.",
        "competition": 3,
        "competition_reason": "Several tools exist.",
        "category": "Marketing, Analytics, SaaS",
        "categories": [
            "Marketing",
            "Analytics",
            "SaaS"
        ]
    },
    {
        "idea": "SEO Keyword Research",
        "monetisation": 4,
        "monetisation_reason": "SEO budgets are large.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Data sourcing + SERP parsing.",
        "competition": 5,
        "competition_reason": "Dominated by strong incumbents.",
        "category": "SEO, Marketing, SaaS",
        "categories": [
            "SEO",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Social Media Scheduler",
        "monetisation": 3,
        "monetisation_reason": "Commodity features; pricing pressure.",
        "ease_of_build": 4,
        "ease_of_build_reason": "APIs + queues + UI.",
        "competition": 5,
        "competition_reason": "Many incumbents.",
        "category": "Marketing, SaaS",
        "categories": [
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Competitor Analysis Tool",
        "monetisation": 4,
        "monetisation_reason": "B2B teams pay for intel.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Scraping + enrichment + UI.",
        "competition": 4,
        "competition_reason": "Some strong players exist.",
        "category": "Analytics, SaaS",
        "categories": [
            "Analytics",
            "SaaS"
        ]
    },
    {
        "idea": "Website Analytics Alternative",
        "monetisation": 3,
        "monetisation_reason": "Privacy-focused demand exists.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Tracking SDK + dashboard.",
        "competition": 4,
        "competition_reason": "A few notable incumbents.",
        "category": "Analytics, SaaS",
        "categories": [
            "Analytics",
            "SaaS"
        ]
    },
    {
        "idea": "Email Signature Generator",
        "monetisation": 2,
        "monetisation_reason": "Hard to monetise; upsell via pro features.",
        "ease_of_build": 5,
        "ease_of_build_reason": "Simple generator + templates.",
        "competition": 4,
        "competition_reason": "Many free tools exist.",
        "category": "Marketing",
        "categories": [
            "Marketing"
        ]
    },
    {
        "idea": "Chrome Extension Builder",
        "monetisation": 3,
        "monetisation_reason": "Niche; agencies/devs may pay.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Meta tooling + scaffolding.",
        "competition": 2,
        "competition_reason": "Not many specialised builders.",
        "category": "Chrome Extension, DevTools",
        "categories": [
            "Chrome Extension",
            "DevTools"
        ]
    },
    {
        "idea": "AI Cold Email Writer",
        "monetisation": 4,
        "monetisation_reason": "Outbound teams pay for ROI.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM + prompts + deliverability checks.",
        "competition": 4,
        "competition_reason": "Crowded AI email space.",
        "category": "AI, Email, Marketing, SaaS",
        "categories": [
            "AI",
            "Email",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Sales CRM Helper",
        "monetisation": 5,
        "monetisation_reason": "CRMs tie to revenue; high willingness to pay.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Integrations + workflow automation.",
        "competition": 4,
        "competition_reason": "CRM ecosystem is mature.",
        "category": "Sales, SaaS",
        "categories": [
            "Sales",
            "SaaS"
        ]
    },
    {
        "idea": "Market Research Summariser",
        "monetisation": 3,
        "monetisation_reason": "Useful but many substitutes.",
        "ease_of_build": 4,
        "ease_of_build_reason": "LLM summarisation + scraping.",
        "competition": 3,
        "competition_reason": "Varied tools exist.",
        "category": "AI, Marketing, SaaS",
        "categories": [
            "AI",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Idea Scoring Engine",
        "monetisation": 3,
        "monetisation_reason": "Indie founders will pay modestly.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Scoring model + UI.",
        "competition": 2,
        "competition_reason": "Few direct incumbents.",
        "category": "SaaS",
        "categories": [
            "SaaS"
        ]
    },
    {
        "idea": "Landing Page Heatmaps",
        "monetisation": 4,
        "monetisation_reason": "Conversion optimisation budgets exist.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Tracking, session replay, heatmaps.",
        "competition": 4,
        "competition_reason": "Known competitors.",
        "category": "Analytics, Marketing, SaaS",
        "categories": [
            "Analytics",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Invoice OCR Extractor",
        "monetisation": 4,
        "monetisation_reason": "Finance ops pay for automation.",
        "ease_of_build": 3,
        "ease_of_build_reason": "OCR + validation + exports.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "AI, Finance, SaaS",
        "categories": [
            "AI",
            "Finance",
            "SaaS"
        ]
    },
    {
        "idea": "Screenshot Diff Tool",
        "monetisation": 3,
        "monetisation_reason": "QA teams pay if accurate.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Image diffing + CI integrations.",
        "competition": 3,
        "competition_reason": "Some incumbents exist.",
        "category": "DevTools, SaaS",
        "categories": [
            "DevTools",
            "SaaS"
        ]
    },
    {
        "idea": "Contract Clause Checker",
        "monetisation": 4,
        "monetisation_reason": "Legal teams pay for time savings.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM + clause rules + redlines.",
        "competition": 3,
        "competition_reason": "Legaltech is growing with AI.",
        "category": "AI, Legal, SaaS",
        "categories": [
            "AI",
            "Legal",
            "SaaS"
        ]
    },
    {
        "idea": "Privacy Policy Generator",
        "monetisation": 3,
        "monetisation_reason": "SMBs pay small subs; compliance risk drives demand.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Template-driven generator + updates.",
        "competition": 4,
        "competition_reason": "Many generators exist.",
        "category": "Legal, SaaS",
        "categories": [
            "Legal",
            "SaaS"
        ]
    },
    {
        "idea": "Shopify Checkout Optimiser",
        "monetisation": 4,
        "monetisation_reason": "Merchants pay for conversion lifts.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Shopify API + A/B testing.",
        "competition": 4,
        "competition_reason": "Apps ecosystem is competitive.",
        "category": "E-commerce, Marketing, SaaS",
        "categories": [
            "E-commerce",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Prompt Library for Teams",
        "monetisation": 3,
        "monetisation_reason": "Teams pay modestly for shared AI workflows.",
        "ease_of_build": 4,
        "ease_of_build_reason": "CRUD + versioning + permissions.",
        "competition": 3,
        "competition_reason": "Several tools exist.",
        "category": "AI, SaaS",
        "categories": [
            "AI",
            "SaaS"
        ]
    },
    {
        "idea": "Code Snippet Manager",
        "monetisation": 3,
        "monetisation_reason": "Dev productivity budgets exist.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Local + sync + search.",
        "competition": 3,
        "competition_reason": "Some incumbents.",
        "category": "DevTools",
        "categories": [
            "DevTools"
        ]
    },
    {
        "idea": "LLM-Powered Support Bot",
        "monetisation": 4,
        "monetisation_reason": "Deflect tickets → clear ROI.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM + retrieval + integrations.",
        "competition": 4,
        "competition_reason": "Crowded but effective execution wins.",
        "category": "AI, SaaS",
        "categories": [
            "AI",
            "SaaS"
        ]
    },
    {
        "idea": "Recruiting Outreach Personaliser",
        "monetisation": 3,
        "monetisation_reason": "Agencies/HR teams pay modestly.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Email, enrichment, and templates.",
        "competition": 3,
        "competition_reason": "Some players exist.",
        "category": "Email, HR, Marketing, SaaS",
        "categories": [
            "Email",
            "HR",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Automated Interview Scheduler",
        "monetisation": 3,
        "monetisation_reason": "SMBs will pay; competitive space.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Calendars + reminders + links.",
        "competition": 4,
        "competition_reason": "Many incumbents.",
        "category": "HR, Productivity, SaaS",
        "categories": [
            "HR",
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Pricing Page Optimiser",
        "monetisation": 4,
        "monetisation_reason": "Direct impact on revenue.",
        "ease_of_build": 3,
        "ease_of_build_reason": "A/B tests + experiments.",
        "competition": 3,
        "competition_reason": "Several tools exist.",
        "category": "Analytics, Marketing, SaaS",
        "categories": [
            "Analytics",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Customer Churn Predictor",
        "monetisation": 4,
        "monetisation_reason": "Retention lifts = high value.",
        "ease_of_build": 3,
        "ease_of_build_reason": "ML models + customer data integrations.",
        "competition": 3,
        "competition_reason": "A few players exist.",
        "category": "AI, Analytics, SaaS",
        "categories": [
            "AI",
            "Analytics",
            "SaaS"
        ]
    },
    {
        "idea": "Sales Email A/B Tester",
        "monetisation": 3,
        "monetisation_reason": "Useful to outbound teams; limited willingness to pay.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Email templating + stats.",
        "competition": 3,
        "competition_reason": "Some tools exist.",
        "category": "Email, Marketing, Sales, SaaS",
        "categories": [
            "Email",
            "Marketing",
            "Sales",
            "SaaS"
        ]
    },
    {
        "idea": "Customer Feedback Classifier",
        "monetisation": 3,
        "monetisation_reason": "Ops teams pay if insights are actionable.",
        "ease_of_build": 4,
        "ease_of_build_reason": "LLM + rules + dashboard.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "AI, Analytics, SaaS",
        "categories": [
            "AI",
            "Analytics",
            "SaaS"
        ]
    },
    {
        "idea": "Slack Knowledge Search",
        "monetisation": 3,
        "monetisation_reason": "Knowledge workers value time savings.",
        "ease_of_build": 3,
        "ease_of_build_reason": "APIs + indexing + UI.",
        "competition": 3,
        "competition_reason": "Some tools exist.",
        "category": "AI, Productivity, SaaS",
        "categories": [
            "AI",
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "YouTube Transcript Summariser",
        "monetisation": 2,
        "monetisation_reason": "Hard to monetise; great as a feature.",
        "ease_of_build": 4,
        "ease_of_build_reason": "LLM summarisation + fetch transcripts.",
        "competition": 4,
        "competition_reason": "Many alternatives exist.",
        "category": "AI, Content, SaaS",
        "categories": [
            "AI",
            "Content",
            "SaaS"
        ]
    },
    {
        "idea": "Data Cleaning Toolkit",
        "monetisation": 3,
        "monetisation_reason": "Ops/analysts pay if it saves time.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Transforms, validation, exports.",
        "competition": 3,
        "competition_reason": "Some competition.",
        "category": "Data, DevTools, SaaS",
        "categories": [
            "Data",
            "DevTools",
            "SaaS"
        ]
    },
    {
        "idea": "ETL for Founders",
        "monetisation": 3,
        "monetisation_reason": "Indie founders pay modestly.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Connectors + pipelines + UI.",
        "competition": 3,
        "competition_reason": "Several players exist.",
        "category": "Data, SaaS",
        "categories": [
            "Data",
            "SaaS"
        ]
    },
    {
        "idea": "Sales Call Recorder with Notes",
        "monetisation": 4,
        "monetisation_reason": "Saves rep time; increases close rate.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Recording, diarisation, AI notes.",
        "competition": 4,
        "competition_reason": "Competitive (Gong, Chorus, etc.).",
        "category": "AI, Sales, SaaS",
        "categories": [
            "AI",
            "Sales",
            "SaaS"
        ]
    },
    {
        "idea": "Product Analytics for Notion",
        "monetisation": 3,
        "monetisation_reason": "Notion ecosystem buyers exist.",
        "ease_of_build": 3,
        "ease_of_build_reason": "API + events + dashboards.",
        "competition": 2,
        "competition_reason": "Fewer incumbents in this niche.",
        "category": "Analytics, SaaS",
        "categories": [
            "Analytics",
            "SaaS"
        ]
    },
    {
        "idea": "Churn-Focused NPS Tool",
        "monetisation": 3,
        "monetisation_reason": "Retention teams pay if predictive.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Surveys + analysis + alerts.",
        "competition": 3,
        "competition_reason": "Some NPS tools exist.",
        "category": "Analytics, SaaS",
        "categories": [
            "Analytics",
            "SaaS"
        ]
    },
    {
        "idea": "Product Roadmap Voting",
        "monetisation": 2,
        "monetisation_reason": "Hard to charge premium; works as feature.",
        "ease_of_build": 4,
        "ease_of_build_reason": "CRUD + votes + auth.",
        "competition": 4,
        "competition_reason": "Many tools exist.",
        "category": "Productivity, SaaS",
        "categories": [
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Onboarding Checklist Generator",
        "monetisation": 3,
        "monetisation_reason": "SMBs pay small subs for setup efficiency.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Templates + steps + assignments.",
        "competition": 3,
        "competition_reason": "A few players exist.",
        "category": "Productivity, SaaS",
        "categories": [
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Customer Call Summaries",
        "monetisation": 4,
        "monetisation_reason": "Time savings for CS teams; valuable.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Transcription + LLM summarisation.",
        "competition": 4,
        "competition_reason": "Competitive with AI tooling.",
        "category": "AI, Productivity, SaaS",
        "categories": [
            "AI",
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Meeting Notes Copilot",
        "monetisation": 3,
        "monetisation_reason": "Useful but crowded assistants space.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Transcription + actions + integrations.",
        "competition": 4,
        "competition_reason": "Crowded.",
        "category": "AI, Productivity, SaaS",
        "categories": [
            "AI",
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Shared Snippets for Teams",
        "monetisation": 3,
        "monetisation_reason": "Developer teams pay modestly.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Sync + search + permissions.",
        "competition": 3,
        "competition_reason": "Some tools exist.",
        "category": "DevTools, SaaS",
        "categories": [
            "DevTools",
            "SaaS"
        ]
    },
    {
        "idea": "Terminal Recorder for Demos",
        "monetisation": 2,
        "monetisation_reason": "Niche; OSS or freemium upsell.",
        "ease_of_build": 3,
        "ease_of_build_reason": "TTY capture + rendering.",
        "competition": 2,
        "competition_reason": "Few specialised tools.",
        "category": "DevTools",
        "categories": [
            "DevTools"
        ]
    },
    {
        "idea": "Open Source Licensing Scanner",
        "monetisation": 3,
        "monetisation_reason": "Compliance risk drives demand.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Scanning + rules + reports.",
        "competition": 3,
        "competition_reason": "Some incumbents exist.",
        "category": "DevTools, Legal",
        "categories": [
            "DevTools",
            "Legal"
        ]
    },
    {
        "idea": "Docker Image Size Reducer",
        "monetisation": 2,
        "monetisation_reason": "Niche dev tooling; monetise via teams.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Optimisation and CI hooks.",
        "competition": 2,
        "competition_reason": "Few focused tools.",
        "category": "DevTools",
        "categories": [
            "DevTools"
        ]
    },
    {
        "idea": "Log Search with Alerts",
        "monetisation": 4,
        "monetisation_reason": "Ops/SRE teams pay for reliability.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Ingestion, index, alerting.",
        "competition": 4,
        "competition_reason": "Strong incumbents.",
        "category": "Analytics, DevTools, SaaS",
        "categories": [
            "Analytics",
            "DevTools",
            "SaaS"
        ]
    },
    {
        "idea": "GDPR Cookie Scanner",
        "monetisation": 3,
        "monetisation_reason": "Compliance budgets exist.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Crawler + reports.",
        "competition": 4,
        "competition_reason": "Many scanners exist.",
        "category": "Legal, SaaS",
        "categories": [
            "Legal",
            "SaaS"
        ]
    },
    {
        "idea": "API Status Page Generator",
        "monetisation": 3,
        "monetisation_reason": "SMBs pay for uptime assurance.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Heartbeats + UI.",
        "competition": 3,
        "competition_reason": "Competitors exist but room for UX-focused tools.",
        "category": "API, DevTools, SaaS",
        "categories": [
            "API",
            "DevTools",
            "SaaS"
        ]
    },
    {
        "idea": "Feature Flag Service",
        "monetisation": 3,
        "monetisation_reason": "Dev teams pay; price-sensitive.",
        "ease_of_build": 3,
        "ease_of_build_reason": "SDKs + targeting + analytics.",
        "competition": 4,
        "competition_reason": "Several incumbents.",
        "category": "DevTools, SaaS",
        "categories": [
            "DevTools",
            "SaaS"
        ]
    },
    {
        "idea": "In-App Notification Centre",
        "monetisation": 3,
        "monetisation_reason": "Developer time-saver; priced per MAU.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Embeddable UI + delivery.",
        "competition": 3,
        "competition_reason": "Some players exist.",
        "category": "DevTools, SaaS",
        "categories": [
            "DevTools",
            "SaaS"
        ]
    },
    {
        "idea": "AI Data Enrichment",
        "monetisation": 4,
        "monetisation_reason": "Sales/ops teams pay for contact/company data.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Scraping + APIs + LLM fill-ins.",
        "competition": 4,
        "competition_reason": "Competitive with data vendors.",
        "category": "AI, Data, Sales, SaaS",
        "categories": [
            "AI",
            "Data",
            "Sales",
            "SaaS"
        ]
    },
    {
        "idea": "AI-Powered Resume Builder",
        "monetisation": 3,
        "monetisation_reason": "Job seekers may pay, but price sensitivity is high.",
        "ease_of_build": 4,
        "ease_of_build_reason": "LLM + templates; moderate complexity.",
        "competition": 4,
        "competition_reason": "Many resume builders exist.",
        "category": "AI, HR, Productivity, SaaS",
        "categories": [
            "AI",
            "HR",
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Automated Cover Letter Writer",
        "monetisation": 2,
        "monetisation_reason": "Harder to monetise directly; churn risk.",
        "ease_of_build": 4,
        "ease_of_build_reason": "LLM + job data integration.",
        "competition": 4,
        "competition_reason": "Many free AI tools exist.",
        "category": "AI, HR, Productivity",
        "categories": [
            "AI",
            "HR",
            "Productivity"
        ]
    },
    {
        "idea": "AI Interview Coach",
        "monetisation": 3,
        "monetisation_reason": "Job seekers may pay modestly.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM conversation simulation.",
        "competition": 3,
        "competition_reason": "Some similar products exist.",
        "category": "AI, HR, Education",
        "categories": [
            "AI",
            "HR",
            "Education"
        ]
    },
    {
        "idea": "Crypto Portfolio Tracker",
        "monetisation": 3,
        "monetisation_reason": "Retail investors pay for analytics.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Exchange APIs + dashboards.",
        "competition": 4,
        "competition_reason": "Highly saturated market.",
        "category": "Crypto, Finance, SaaS",
        "categories": [
            "Crypto",
            "Finance",
            "SaaS"
        ]
    },
    {
        "idea": "NFT Price Alert Service",
        "monetisation": 2,
        "monetisation_reason": "Smaller audience post-hype.",
        "ease_of_build": 4,
        "ease_of_build_reason": "APIs + alerts + notifications.",
        "competition": 3,
        "competition_reason": "Some incumbents exist.",
        "category": "Crypto, Mobile, Finance",
        "categories": [
            "Crypto",
            "Mobile",
            "Finance"
        ]
    },
    {
        "idea": "Blockchain Explorer Alternative",
        "monetisation": 3,
        "monetisation_reason": "Niche but some institutional demand.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Requires deep infra and nodes.",
        "competition": 3,
        "competition_reason": "A few strong incumbents.",
        "category": "Crypto, Analytics, SaaS",
        "categories": [
            "Crypto",
            "Analytics",
            "SaaS"
        ]
    },
    {
        "idea": "DAO Governance Tools",
        "monetisation": 3,
        "monetisation_reason": "DAOs and Web3 orgs spend on governance.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Smart contracts + dashboards.",
        "competition": 2,
        "competition_reason": "Still relatively open space.",
        "category": "Crypto, Governance, SaaS",
        "categories": [
            "Crypto",
            "Governance",
            "SaaS"
        ]
    },
    {
        "idea": "Smart Contract Security Scanner",
        "monetisation": 4,
        "monetisation_reason": "High demand for security audits in crypto.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Requires advanced static analysis + blockchain expertise.",
        "competition": 3,
        "competition_reason": "Some established players but growing space.",
        "category": "Crypto, Security, DevTools",
        "categories": [
            "Crypto",
            "Security",
            "DevTools"
        ]
    },
    {
        "idea": "DeFi Yield Aggregator",
        "monetisation": 3,
        "monetisation_reason": "Some users will pay a % fee on optimised yield.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Complex smart contracts and integrations.",
        "competition": 4,
        "competition_reason": "Several players exist.",
        "category": "Crypto, Finance, SaaS",
        "categories": [
            "Crypto",
            "Finance",
            "SaaS"
        ]
    },
    {
        "idea": "Crypto Tax Calculator",
        "monetisation": 4,
        "monetisation_reason": "High demand for compliance tools.",
        "ease_of_build": 3,
        "ease_of_build_reason": "APIs + tax rules per region.",
        "competition": 4,
        "competition_reason": "Several players exist.",
        "category": "Crypto, Finance, Legal, SaaS",
        "categories": [
            "Crypto",
            "Finance",
            "Legal",
            "SaaS"
        ]
    },
    {
        "idea": "Local SEO Rank Tracker",
        "monetisation": 4,
        "monetisation_reason": "SMBs pay for SEO visibility tools.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Scraping SERPs + dashboards.",
        "competition": 4,
        "competition_reason": "Competitive SEO tooling space.",
        "category": "SEO, Marketing, SaaS",
        "categories": [
            "SEO",
            "Marketing",
            "SaaS"
        ]
    },
    {
        "idea": "Content Idea Generator",
        "monetisation": 2,
        "monetisation_reason": "Hard to monetise; could be freemium upsell.",
        "ease_of_build": 4,
        "ease_of_build_reason": "LLM text generation.",
        "competition": 3,
        "competition_reason": "Several exist.",
        "category": "AI, Marketing, Content",
        "categories": [
            "AI",
            "Marketing",
            "Content"
        ]
    },
    {
        "idea": "Podcast Clip Generator",
        "monetisation": 3,
        "monetisation_reason": "Podcasters may pay for convenience.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Audio processing + AI summarisation.",
        "competition": 3,
        "competition_reason": "A few incumbents exist.",
        "category": "AI, Content, Audio",
        "categories": [
            "AI",
            "Content",
            "Audio"
        ]
    },
    {
        "idea": "Video Subtitle Generator",
        "monetisation": 3,
        "monetisation_reason": "SMBs and creators will pay.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Speech-to-text + captions export.",
        "competition": 4,
        "competition_reason": "Well-served market.",
        "category": "AI, Content, Video",
        "categories": [
            "AI",
            "Content",
            "Video"
        ]
    },
    {
        "idea": "Short-Form Video Editor",
        "monetisation": 3,
        "monetisation_reason": "Creators will pay, but churn risk is high.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Video editing + templates.",
        "competition": 4,
        "competition_reason": "Many incumbents exist.",
        "category": "Content, Video",
        "categories": [
            "Content",
            "Video"
        ]
    },
    {
        "idea": "Content Repurposing Tool",
        "monetisation": 3,
        "monetisation_reason": "Marketers pay for workflow streamlining.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM + templates + integrations.",
        "competition": 3,
        "competition_reason": "Some players exist.",
        "category": "AI, Content, Marketing",
        "categories": [
            "AI",
            "Content",
            "Marketing"
        ]
    },
    {
        "idea": "AI Meme Generator",
        "monetisation": 2,
        "monetisation_reason": "Difficult to monetise beyond novelty.",
        "ease_of_build": 4,
        "ease_of_build_reason": "LLM + image generation.",
        "competition": 3,
        "competition_reason": "Some exist already.",
        "category": "AI, Content, Entertainment",
        "categories": [
            "AI",
            "Content",
            "Entertainment"
        ]
    },
    {
        "idea": "Voice Cloning SaaS",
        "monetisation": 4,
        "monetisation_reason": "Enterprises pay for synthetic voices.",
        "ease_of_build": 2,
        "ease_of_build_reason": "ML model training is expensive.",
        "competition": 4,
        "competition_reason": "Several strong players exist.",
        "category": "AI, Audio, SaaS",
        "categories": [
            "AI",
            "Audio",
            "SaaS"
        ]
    },
    {
        "idea": "Music Generation Platform",
        "monetisation": 3,
        "monetisation_reason": "Creators may pay, but licensing issues arise.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Training models for music is complex.",
        "competition": 4,
        "competition_reason": "Several players exist.",
        "category": "AI, Audio, Entertainment",
        "categories": [
            "AI",
            "Audio",
            "Entertainment"
        ]
    },
    {
        "idea": "AI Dungeon Master",
        "monetisation": 3,
        "monetisation_reason": "Niche but loyal audience.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM interactive storytelling.",
        "competition": 2,
        "competition_reason": "Few direct competitors.",
        "category": "AI, Entertainment, Gaming",
        "categories": [
            "AI",
            "Entertainment",
            "Gaming"
        ]
    },
    {
        "idea": "AI Generated Comic Creator",
        "monetisation": 2,
        "monetisation_reason": "Mostly novelty, hard to monetise.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Image gen + layout.",
        "competition": 3,
        "competition_reason": "Some projects exist.",
        "category": "AI, Entertainment, Content",
        "categories": [
            "AI",
            "Entertainment",
            "Content"
        ]
    },
    {
        "idea": "AI Script Writer",
        "monetisation": 3,
        "monetisation_reason": "Screenwriters may use as inspiration.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM generation + templates.",
        "competition": 3,
        "competition_reason": "Several free tools exist.",
        "category": "AI, Content, Entertainment",
        "categories": [
            "AI",
            "Content",
            "Entertainment"
        ]
    },
    {
        "idea": "Stock Market Sentiment Analyzer",
        "monetisation": 4,
        "monetisation_reason": "Traders and funds pay for alpha.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Complex NLP and data sourcing.",
        "competition": 4,
        "competition_reason": "Highly competitive.",
        "category": "AI, Finance, Analytics",
        "categories": [
            "AI",
            "Finance",
            "Analytics"
        ]
    },
    {
        "idea": "Retail Demand Forecasting",
        "monetisation": 4,
        "monetisation_reason": "Enterprises pay high prices for accurate forecasting.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Requires large datasets + ML models.",
        "competition": 3,
        "competition_reason": "Some incumbents exist.",
        "category": "AI, Analytics, SaaS, Retail",
        "categories": [
            "AI",
            "Analytics",
            "SaaS",
            "Retail"
        ]
    },
    {
        "idea": "Energy Usage Optimisation",
        "monetisation": 4,
        "monetisation_reason": "Businesses pay for cost savings.",
        "ease_of_build": 2,
        "ease_of_build_reason": "IoT + ML forecasting complexity.",
        "competition": 3,
        "competition_reason": "Some niche competition.",
        "category": "AI, Energy, SaaS",
        "categories": [
            "AI",
            "Energy",
            "SaaS"
        ]
    },
    {
        "idea": "Predictive Maintenance for Machines",
        "monetisation": 4,
        "monetisation_reason": "Industrial clients pay for reduced downtime.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Sensor integrations + ML models.",
        "competition": 3,
        "competition_reason": "Moderate incumbency.",
        "category": "AI, IoT, SaaS, Industry",
        "categories": [
            "AI",
            "IoT",
            "SaaS",
            "Industry"
        ]
    },
    {
        "idea": "AI Tutoring Assistant",
        "monetisation": 3,
        "monetisation_reason": "Parents/students pay, but churn is a risk.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM dialogue + curriculum content.",
        "competition": 3,
        "competition_reason": "Some existing products.",
        "category": "AI, Education, SaaS",
        "categories": [
            "AI",
            "Education",
            "SaaS"
        ]
    },
    {
        "idea": "Language Learning with AI",
        "monetisation": 4,
        "monetisation_reason": "Large consumer market with high demand.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM + speech recognition + gamification.",
        "competition": 5,
        "competition_reason": "Very crowded with strong incumbents.",
        "category": "AI, Education, Mobile",
        "categories": [
            "AI",
            "Education",
            "Mobile"
        ]
    },
    {
        "idea": "Mathematics Problem Solver",
        "monetisation": 3,
        "monetisation_reason": "Students may pay but many free tools exist.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Symbolic computation or LLM.",
        "competition": 4,
        "competition_reason": "Many incumbents (e.g. Wolfram Alpha).",
        "category": "Education, AI",
        "categories": [
            "Education",
            "AI"
        ]
    },
    {
        "idea": "Homework Grader",
        "monetisation": 3,
        "monetisation_reason": "Schools pay modestly for grading automation.",
        "ease_of_build": 3,
        "ease_of_build_reason": "OCR + LLM + rubric system.",
        "competition": 3,
        "competition_reason": "Some competitors exist.",
        "category": "Education, AI, SaaS",
        "categories": [
            "Education",
            "AI",
            "SaaS"
        ]
    },
    {
        "idea": "Personalised Study Planner",
        "monetisation": 2,
        "monetisation_reason": "Difficult to charge much; high churn.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Calendar + reminders + adaptive logic.",
        "competition": 4,
        "competition_reason": "Many free alternatives exist.",
        "category": "Education, Productivity, Mobile",
        "categories": [
            "Education",
            "Productivity",
            "Mobile"
        ]
    },
    {
        "idea": "Collaborative Whiteboard Tool",
        "monetisation": 3,
        "monetisation_reason": "B2B adoption possible but space is crowded.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Realtime sync + drawing UI.",
        "competition": 4,
        "competition_reason": "Several strong incumbents exist.",
        "category": "Productivity, Collaboration, SaaS",
        "categories": [
            "Productivity",
            "Collaboration",
            "SaaS"
        ]
    },
    {
        "idea": "Shared Knowledge Base",
        "monetisation": 3,
        "monetisation_reason": "SMBs pay for internal documentation tools.",
        "ease_of_build": 4,
        "ease_of_build_reason": "CRUD + search + permissions.",
        "competition": 4,
        "competition_reason": "Crowded space.",
        "category": "Productivity, SaaS",
        "categories": [
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Goal Tracking App",
        "monetisation": 2,
        "monetisation_reason": "Hard to monetise; consumer churn risk.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Mobile/web app with goals + streaks.",
        "competition": 4,
        "competition_reason": "Crowded with habit apps.",
        "category": "Productivity, Mobile",
        "categories": [
            "Productivity",
            "Mobile"
        ]
    },
    {
        "idea": "Habit Streak Tracker",
        "monetisation": 2,
        "monetisation_reason": "Consumer apps are hard to monetise beyond subscriptions.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Simple streak counter + reminders.",
        "competition": 4,
        "competition_reason": "Highly saturated space.",
        "category": "Productivity, Mobile, Health",
        "categories": [
            "Productivity",
            "Mobile",
            "Health"
        ]
    },
    {
        "idea": "Mindfulness App with AI Coach",
        "monetisation": 3,
        "monetisation_reason": "Some consumers pay for guided meditation.",
        "ease_of_build": 3,
        "ease_of_build_reason": "LLM chat + audio content.",
        "competition": 4,
        "competition_reason": "Headspace/Calm are strong incumbents.",
        "category": "Health, AI, Mobile",
        "categories": [
            "Health",
            "AI",
            "Mobile"
        ]
    },
    {
        "idea": "Meal Planner with Recipes",
        "monetisation": 3,
        "monetisation_reason": "Families/individuals pay modestly for personalised planning.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Recipe DB + recommendation engine.",
        "competition": 4,
        "competition_reason": "Crowded space with free alternatives.",
        "category": "Health, Food, Mobile",
        "categories": [
            "Health",
            "Food",
            "Mobile"
        ]
    },
    {
        "idea": "Calorie Tracking App",
        "monetisation": 3,
        "monetisation_reason": "Freemium possible; ads common.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Database + barcode scanner.",
        "competition": 5,
        "competition_reason": "Very crowded market.",
        "category": "Health, Food, Mobile",
        "categories": [
            "Health",
            "Food",
            "Mobile"
        ]
    },
    {
        "idea": "Fitness Coaching Platform",
        "monetisation": 4,
        "monetisation_reason": "People pay for personal trainers and plans.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Workout tracking + video content.",
        "competition": 4,
        "competition_reason": "Many incumbents.",
        "category": "Health, Fitness, SaaS, Mobile",
        "categories": [
            "Health",
            "Fitness",
            "SaaS",
            "Mobile"
        ]
    },
    {
        "idea": "Sleep Tracking App",
        "monetisation": 2,
        "monetisation_reason": "Most consumers expect free or hardware integration.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Mobile sensors + analytics.",
        "competition": 4,
        "competition_reason": "Wearables dominate this niche.",
        "category": "Health, Mobile, Wearables",
        "categories": [
            "Health",
            "Mobile",
            "Wearables"
        ]
    },
    {
        "idea": "Water Intake Tracker",
        "monetisation": 2,
        "monetisation_reason": "Low willingness to pay; ads more likely.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Simple reminders and logging.",
        "competition": 4,
        "competition_reason": "Many free competitors.",
        "category": "Health, Mobile, Productivity",
        "categories": [
            "Health",
            "Mobile",
            "Productivity"
        ]
    },
    {
        "idea": "Pet Health Record App",
        "monetisation": 3,
        "monetisation_reason": "Pet owners may pay; vets might partner.",
        "ease_of_build": 4,
        "ease_of_build_reason": "CRUD + reminders + data sync.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "Health, Pets, Mobile",
        "categories": [
            "Health",
            "Pets",
            "Mobile"
        ]
    },
    {
        "idea": "Dog Walking Marketplace",
        "monetisation": 4,
        "monetisation_reason": "Commission-based revenue is strong.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Marketplace with scheduling + payments.",
        "competition": 4,
        "competition_reason": "Some incumbents like Rover exist.",
        "category": "Pets, Marketplace, Mobile",
        "categories": [
            "Pets",
            "Marketplace",
            "Mobile"
        ]
    },
    {
        "idea": "Pet Training App",
        "monetisation": 2,
        "monetisation_reason": "Pet owners may not pay much; ads possible.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Video content + gamification.",
        "competition": 3,
        "competition_reason": "Some incumbents exist.",
        "category": "Pets, Mobile, Education",
        "categories": [
            "Pets",
            "Mobile",
            "Education"
        ]
    },
    {
        "idea": "Smart Home Automation Dashboard",
        "monetisation": 3,
        "monetisation_reason": "Hardware tie-ins may boost revenue.",
        "ease_of_build": 3,
        "ease_of_build_reason": "IoT integration + dashboard.",
        "competition": 4,
        "competition_reason": "Big tech already dominates.",
        "category": "IoT, Smart Home, SaaS",
        "categories": [
            "IoT",
            "Smart Home",
            "SaaS"
        ]
    },
    {
        "idea": "Home Energy Monitoring App",
        "monetisation": 3,
        "monetisation_reason": "Consumers pay for energy cost savings.",
        "ease_of_build": 3,
        "ease_of_build_reason": "IoT sensors + analytics.",
        "competition": 3,
        "competition_reason": "Some players exist.",
        "category": "IoT, Energy, Mobile",
        "categories": [
            "IoT",
            "Energy",
            "Mobile"
        ]
    },
    {
        "idea": "Air Quality Monitor Dashboard",
        "monetisation": 3,
        "monetisation_reason": "Consumers and schools may pay.",
        "ease_of_build": 3,
        "ease_of_build_reason": "IoT sensors + data viz.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "IoT, Environment, Mobile",
        "categories": [
            "IoT",
            "Environment",
            "Mobile"
        ]
    },
    {
        "idea": "Neighborhood Safety App",
        "monetisation": 2,
        "monetisation_reason": "Difficult to monetise; trust issues.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Crowdsourcing + maps.",
        "competition": 3,
        "competition_reason": "Some competitors exist.",
        "category": "Mobile, Safety, Community",
        "categories": [
            "Mobile",
            "Safety",
            "Community"
        ]
    },
    {
        "idea": "Hyperlocal News Aggregator",
        "monetisation": 2,
        "monetisation_reason": "Ads-driven, but low margins.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Scraping + aggregation.",
        "competition": 3,
        "competition_reason": "Few strong incumbents.",
        "category": "News, Community, Mobile",
        "categories": [
            "News",
            "Community",
            "Mobile"
        ]
    },
    {
        "idea": "Digital Business Card App",
        "monetisation": 3,
        "monetisation_reason": "Professionals may pay for premium features.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Simple sharing app.",
        "competition": 3,
        "competition_reason": "Some incumbents exist.",
        "category": "Productivity, Mobile, Networking",
        "categories": [
            "Productivity",
            "Mobile",
            "Networking"
        ]
    },
    {
        "idea": "Virtual Event Platform",
        "monetisation": 4,
        "monetisation_reason": "B2B events monetise strongly.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Complex real-time video infra.",
        "competition": 4,
        "competition_reason": "Several incumbents.",
        "category": "Events, SaaS, Collaboration",
        "categories": [
            "Events",
            "SaaS",
            "Collaboration"
        ]
    },
    {
        "idea": "Hybrid Work Scheduler",
        "monetisation": 3,
        "monetisation_reason": "Companies may pay, but adoption risk.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Calendar + resource allocation.",
        "competition": 3,
        "competition_reason": "Some competitors exist.",
        "category": "Productivity, SaaS, HR",
        "categories": [
            "Productivity",
            "SaaS",
            "HR"
        ]
    },
    {
        "idea": "Employee Wellness Platform",
        "monetisation": 4,
        "monetisation_reason": "Enterprises pay for wellness tools.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Tracking + content + rewards.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "Health, HR, SaaS",
        "categories": [
            "Health",
            "HR",
            "SaaS"
        ]
    },
    {
        "idea": "Corporate Learning Platform",
        "monetisation": 4,
        "monetisation_reason": "Enterprises pay for L&D solutions.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Course hosting + tracking.",
        "competition": 3,
        "competition_reason": "Some competitors exist.",
        "category": "Education, HR, SaaS",
        "categories": [
            "Education",
            "HR",
            "SaaS"
        ]
    },
    {
        "idea": "Team Recognition App",
        "monetisation": 3,
        "monetisation_reason": "SMBs may pay for culture tools.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Gamified badges + feed.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "HR, SaaS, Productivity",
        "categories": [
            "HR",
            "SaaS",
            "Productivity"
        ]
    },
    {
        "idea": "Shift Scheduling Tool",
        "monetisation": 4,
        "monetisation_reason": "SMBs in retail/hospitality pay for this.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Calendar + rules engine.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "HR, SaaS, Productivity",
        "categories": [
            "HR",
            "SaaS",
            "Productivity"
        ]
    },
    {
        "idea": "Remote Work Productivity Tracker",
        "monetisation": 3,
        "monetisation_reason": "SMBs may pay, but privacy concerns.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Activity tracking + reporting.",
        "competition": 4,
        "competition_reason": "Competitive space with incumbents.",
        "category": "HR, SaaS, Productivity",
        "categories": [
            "HR",
            "SaaS",
            "Productivity"
        ]
    },
    {
        "idea": "Virtual Office Metaverse",
        "monetisation": 3,
        "monetisation_reason": "Novelty-driven; uncertain monetisation.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Complex 3D + networking.",
        "competition": 2,
        "competition_reason": "Few strong players yet.",
        "category": "Metaverse, Collaboration, SaaS",
        "categories": [
            "Metaverse",
            "Collaboration",
            "SaaS"
        ]
    },
    {
        "idea": "Knowledge Sharing Community",
        "monetisation": 2,
        "monetisation_reason": "Hard to monetise communities without scale.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Forum + Q&A system.",
        "competition": 4,
        "competition_reason": "Communities exist for most niches.",
        "category": "Community, Education, SaaS",
        "categories": [
            "Community",
            "Education",
            "SaaS"
        ]
    },
    {
        "idea": "B2B Marketplace for Services",
        "monetisation": 4,
        "monetisation_reason": "Strong monetisation through commissions.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Marketplace infra + payments.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "Marketplace, B2B, SaaS",
        "categories": [
            "Marketplace",
            "B2B",
            "SaaS"
        ]
    },
    {
        "idea": "Freelancer Portfolio Builder",
        "monetisation": 3,
        "monetisation_reason": "Freelancers may pay for premium features.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Portfolio sites are simple CRUD with design templates.",
        "competition": 4,
        "competition_reason": "Many incumbents like Behance and Dribbble.",
        "category": "Freelance, Productivity, SaaS",
        "categories": [
            "Freelance",
            "Productivity",
            "SaaS"
        ]
    },
    {
        "idea": "Remote Job Board",
        "monetisation": 3,
        "monetisation_reason": "Companies may pay to post jobs, but competition is strong.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Job boards are relatively simple with filtering/search.",
        "competition": 5,
        "competition_reason": "Highly saturated market.",
        "category": "Jobs, Marketplace, SaaS",
        "categories": [
            "Jobs",
            "Marketplace",
            "SaaS"
        ]
    },
    {
        "idea": "Niche Job Board (e.g. Web3 Developers)",
        "monetisation": 4,
        "monetisation_reason": "High-value niche roles can generate strong revenue.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Simpler than broad job boards, just filtering and niche focus.",
        "competition": 3,
        "competition_reason": "Less competition in narrow niches.",
        "category": "Jobs, Marketplace, SaaS",
        "categories": [
            "Jobs",
            "Marketplace",
            "SaaS"
        ]
    },
    {
        "idea": "Freelancer Marketplace",
        "monetisation": 4,
        "monetisation_reason": "Strong commissions and platform fees possible.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Two-sided marketplace with payments.",
        "competition": 5,
        "competition_reason": "Very crowded market (Upwork, Fiverr).",
        "category": "Freelance, Marketplace, SaaS",
        "categories": [
            "Freelance",
            "Marketplace",
            "SaaS"
        ]
    },
    {
        "idea": "Micro-Consulting Platform",
        "monetisation": 4,
        "monetisation_reason": "Experts can charge for advice; commissions possible.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Booking + video call infra.",
        "competition": 3,
        "competition_reason": "Moderate competition, fragmented.",
        "category": "Consulting, Marketplace, SaaS",
        "categories": [
            "Consulting",
            "Marketplace",
            "SaaS"
        ]
    },
    {
        "idea": "Paid Newsletter Platform",
        "monetisation": 4,
        "monetisation_reason": "Creators directly monetise through subscriptions.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Payments + email infra.",
        "competition": 4,
        "competition_reason": "Strong incumbents like Substack.",
        "category": "Content, Creator Economy, SaaS",
        "categories": [
            "Content",
            "Creator Economy",
            "SaaS"
        ]
    },
    {
        "idea": "Podcast Monetisation Platform",
        "monetisation": 4,
        "monetisation_reason": "Growing market; hosts want revenue options.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Audio hosting + ad matching.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "Content, Creator Economy, Audio",
        "categories": [
            "Content",
            "Creator Economy",
            "Audio"
        ]
    },
    {
        "idea": "Video Course Platform",
        "monetisation": 4,
        "monetisation_reason": "Strong consumer and B2B demand for online learning.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Video hosting + LMS features.",
        "competition": 4,
        "competition_reason": "Crowded with Udemy, Teachable etc.",
        "category": "Education, Content, SaaS",
        "categories": [
            "Education",
            "Content",
            "SaaS"
        ]
    },
    {
        "idea": "Micro-SaaS for Creators (Analytics, Tools)",
        "monetisation": 3,
        "monetisation_reason": "Small but paying niche audience.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Focused single-purpose tools.",
        "competition": 3,
        "competition_reason": "Competition is fragmented.",
        "category": "Creator Economy, SaaS, Analytics",
        "categories": [
            "Creator Economy",
            "SaaS",
            "Analytics"
        ]
    },
    {
        "idea": "Online Tutoring Marketplace",
        "monetisation": 4,
        "monetisation_reason": "Strong monetisation through commission on tutoring.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Booking + video calls.",
        "competition": 4,
        "competition_reason": "Some strong incumbents like Preply.",
        "category": "Education, Marketplace, SaaS",
        "categories": [
            "Education",
            "Marketplace",
            "SaaS"
        ]
    },
    {
        "idea": "Parenting Tips Community",
        "monetisation": 2,
        "monetisation_reason": "Hard to monetise communities without scale.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Forum-style app.",
        "competition": 3,
        "competition_reason": "Some competitors exist.",
        "category": "Community, Parenting, Content",
        "categories": [
            "Community",
            "Parenting",
            "Content"
        ]
    },
    {
        "idea": "Local Babysitter Marketplace",
        "monetisation": 4,
        "monetisation_reason": "Parents pay; commissions possible.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Booking + payments + reviews.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "Parenting, Marketplace, SaaS",
        "categories": [
            "Parenting",
            "Marketplace",
            "SaaS"
        ]
    },
    {
        "idea": "Online Therapy Platform",
        "monetisation": 4,
        "monetisation_reason": "Strong B2C monetisation through therapy sessions.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Complex legal and compliance requirements.",
        "competition": 4,
        "competition_reason": "Strong incumbents like BetterHelp.",
        "category": "Health, Mental Health, SaaS",
        "categories": [
            "Health",
            "Mental Health",
            "SaaS"
        ]
    },
    {
        "idea": "Telemedicine Platform",
        "monetisation": 4,
        "monetisation_reason": "High willingness to pay in healthcare.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Compliance-heavy and infra-intensive.",
        "competition": 4,
        "competition_reason": "Many players exist.",
        "category": "Health, SaaS, Medical",
        "categories": [
            "Health",
            "SaaS",
            "Medical"
        ]
    },
    {
        "idea": "AI Symptom Checker",
        "monetisation": 3,
        "monetisation_reason": "Consumer trust issues but potential in B2B partnerships.",
        "ease_of_build": 2,
        "ease_of_build_reason": "AI + regulatory complexity.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "Health, AI, Medical",
        "categories": [
            "Health",
            "AI",
            "Medical"
        ]
    },
    {
        "idea": "Remote Patient Monitoring Platform",
        "monetisation": 4,
        "monetisation_reason": "Strong B2B monetisation with hospitals/clinics.",
        "ease_of_build": 2,
        "ease_of_build_reason": "IoT + compliance heavy.",
        "competition": 3,
        "competition_reason": "Some incumbents, but fragmented.",
        "category": "Health, IoT, Medical",
        "categories": [
            "Health",
            "IoT",
            "Medical"
        ]
    },
    {
        "idea": "Digital Pharmacy",
        "monetisation": 4,
        "monetisation_reason": "High revenue potential, regulated.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Complex logistics and compliance.",
        "competition": 4,
        "competition_reason": "Strong competition already.",
        "category": "Health, E-commerce, Medical",
        "categories": [
            "Health",
            "E-commerce",
            "Medical"
        ]
    },
    {
        "idea": "Chronic Condition Support App",
        "monetisation": 3,
        "monetisation_reason": "Consumers may pay; insurers may partner.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Tracking + community.",
        "competition": 3,
        "competition_reason": "Some competitors exist.",
        "category": "Health, Community, Mobile",
        "categories": [
            "Health",
            "Community",
            "Mobile"
        ]
    },
    {
        "idea": "Elder Care Coordination Platform",
        "monetisation": 4,
        "monetisation_reason": "Families may pay; potential B2B with care providers.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Scheduling + reminders.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "Health, Family, SaaS",
        "categories": [
            "Health",
            "Family",
            "SaaS"
        ]
    },
    {
        "idea": "Medication Reminder App",
        "monetisation": 2,
        "monetisation_reason": "Low willingness to pay; ads possible.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Simple reminders + notifications.",
        "competition": 3,
        "competition_reason": "Moderate competition.",
        "category": "Health, Mobile, Medical",
        "categories": [
            "Health",
            "Mobile",
            "Medical"
        ]
    },
    {
        "idea": "Home Workout Video Platform",
        "monetisation": 3,
        "monetisation_reason": "Consumers may pay subscriptions for content.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Video hosting + streaming.",
        "competition": 4,
        "competition_reason": "Competition from YouTube/fitness apps.",
        "category": "Health, Fitness, Content",
        "categories": [
            "Health",
            "Fitness",
            "Content"
        ]
    },
    {
        "idea": "Nutrition Coaching App",
        "monetisation": 3,
        "monetisation_reason": "Some consumers may pay for personalised plans.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Meal planning + coaching chat.",
        "competition": 3,
        "competition_reason": "Some competitors exist.",
        "category": "Health, Food, Mobile",
        "categories": [
            "Health",
            "Food",
            "Mobile"
        ]
    },
    {
        "idea": "Mental Health Journal",
        "monetisation": 2,
        "monetisation_reason": "Hard to monetise consumer journaling apps.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Simple CRUD journaling.",
        "competition": 4,
        "competition_reason": "Many free alternatives.",
        "category": "Health, Mental Health, Mobile",
        "categories": [
            "Health",
            "Mental Health",
            "Mobile"
        ]
    },
    {
        "idea": "Sleep Tracking App",
        "monetisation": 3,
        "monetisation_reason": "Freemium + upsell to premium analytics.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Mobile sensors + charts.",
        "competition": 4,
        "competition_reason": "Strong incumbents like Fitbit, Oura.",
        "category": "Health, Mobile, Wellness",
        "categories": [
            "Health",
            "Mobile",
            "Wellness"
        ]
    },
    {
        "idea": "Mindfulness Meditation App",
        "monetisation": 3,
        "monetisation_reason": "Subscriptions possible but crowded space.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Audio streaming + notifications.",
        "competition": 5,
        "competition_reason": "Very strong incumbents like Calm, Headspace.",
        "category": "Health, Mental Health, Mobile",
        "categories": [
            "Health",
            "Mental Health",
            "Mobile"
        ]
    },
    {
        "idea": "Corporate Wellness Platform",
        "monetisation": 4,
        "monetisation_reason": "Enterprises will pay for employee wellness.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Dashboards + integrations.",
        "competition": 3,
        "competition_reason": "Growing space, moderate competition.",
        "category": "Health, B2B, SaaS",
        "categories": [
            "Health",
            "B2B",
            "SaaS"
        ]
    },
    {
        "idea": "Virtual Fitness Classes",
        "monetisation": 4,
        "monetisation_reason": "Consumers pay subscriptions for live classes.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Video streaming infra.",
        "competition": 4,
        "competition_reason": "Strong competition (Peloton, etc.).",
        "category": "Health, Fitness, Content",
        "categories": [
            "Health",
            "Fitness",
            "Content"
        ]
    },
    {
        "idea": "AI Personal Trainer",
        "monetisation": 4,
        "monetisation_reason": "Strong consumer appeal for personalised fitness.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Requires AI model + exercise recognition.",
        "competition": 3,
        "competition_reason": "Emerging space with startups but not fully saturated.",
        "category": "Health, AI, Fitness",
        "categories": [
            "Health",
            "AI",
            "Fitness"
        ]
    },
    {
        "idea": "Pet Health Tracking App",
        "monetisation": 3,
        "monetisation_reason": "Pet owners spend readily; potential subscriptions.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Mobile tracking + reminders.",
        "competition": 2,
        "competition_reason": "Less crowded than human health apps.",
        "category": "Pets, Health, Mobile",
        "categories": [
            "Pets",
            "Health",
            "Mobile"
        ]
    },
    {
        "idea": "Pet Sitting Marketplace",
        "monetisation": 4,
        "monetisation_reason": "Strong consumer demand; commission model.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Marketplace infra + reviews.",
        "competition": 3,
        "competition_reason": "Moderate competition (Rover, etc.).",
        "category": "Pets, Marketplace, SaaS",
        "categories": [
            "Pets",
            "Marketplace",
            "SaaS"
        ]
    },
    {
        "idea": "Pet Adoption Platform",
        "monetisation": 2,
        "monetisation_reason": "Harder to monetise directly; possible donations or ads.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Listings + search.",
        "competition": 3,
        "competition_reason": "Moderate competition, mostly non-profit run.",
        "category": "Pets, Community, Marketplace",
        "categories": [
            "Pets",
            "Community",
            "Marketplace"
        ]
    },
    {
        "idea": "Mind Map Creator",
        "monetisation": 3,
        "monetisation_reason": "Productivity tool; potential freemium for professionals and students.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Frontend-heavy app; mind map generation manageable with existing libraries.",
        "competition": 3,
        "competition_reason": "Some mind mapping tools exist, but auto-conversion from notes is niche.",
        "category": "Productivity, SaaS",
        "categories": ["Productivity", "SaaS"]
    },
    {
        "idea": "Landing Page Generator for App Listings",
        "monetisation": 4,
        "monetisation_reason": "Targeted at app developers; potential subscription for ongoing page generation.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Requires template generation and API integrations for SEO and design matching.",
        "competition": 3,
        "competition_reason": "Some landing page tools exist; niche focus on app stores helps differentiation.",
        "category": "Marketing, SaaS",
        "categories": ["Marketing", "SaaS"]
    },
    {
        "idea": "Chargeback Prevention Tool",
        "monetisation": 5,
        "monetisation_reason": "Financial tool; businesses are willing to pay to reduce losses from disputes.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Requires payment gateway integrations and transaction monitoring.",
        "competition": 3,
        "competition_reason": "Few tools provide guaranteed reduction to 0%, some competition exists.",
        "category": "Finance, SaaS",
        "categories": ["Finance", "SaaS"]
    },
    {
        "idea": "QR & Barcode Scanner with Generator",
        "monetisation": 3,
        "monetisation_reason": "Free basic version; potential premium for business analytics and batch scanning.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Mobile app with standard scanning libraries; QR code generation is straightforward.",
        "competition": 4,
        "competition_reason": "Many QR apps exist; differentiation via multi-format support and business focus.",
        "category": "Mobile, Productivity",
        "categories": ["Mobile", "Productivity"]
    },
    {
        "idea": "AI Content Detection Tool",
        "monetisation": 3,
        "monetisation_reason": "Free basic tool; could monetise via enterprise insights or API access.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Needs AI summarisation and voting system; moderate complexity.",
        "competition": 3,
        "competition_reason": "Several AI detection tools exist; community voting adds differentiation.",
        "category": "AI, Productivity",
        "categories": ["AI", "Productivity"]
    },
    {
        "idea": "Cross-Platform Social Media Screenshot Tool",
        "monetisation": 3,
        "monetisation_reason": "Freemium; professionals and agencies may pay for advanced features.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Screenshots and formatting across platforms is moderately complex.",
        "competition": 3,
        "competition_reason": "Few tools provide multi-platform, pixel-perfect screenshots.",
        "category": "Productivity, SaaS",
        "categories": ["Productivity", "SaaS"]
    },
    {
        "idea": "Reddit Pain Point to Product Platform",
        "monetisation": 4,
        "monetisation_reason": "SaaS for idea validation; could sell to product teams and founders.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Requires scraping, data analysis, and a lightweight dashboard.",
        "competition": 3,
        "competition_reason": "Some platforms exist but few focus on Reddit specifically.",
        "category": "Analytics, SaaS",
        "categories": ["Analytics", "SaaS"]
    },
    {
        "idea": "Free Invoice Generator",
        "monetisation": 3,
        "monetisation_reason": "Could monetise via premium features or pro templates; basic version is free.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Frontend PDF generation; lightweight backend or client-side storage.",
        "competition": 4,
        "competition_reason": "Many invoice generators exist; browser-only storage is differentiator.",
        "category": "Finance, SaaS",
        "categories": ["Finance", "SaaS"]
    },
    {
        "idea": "Social Media Scheduler",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS; marketers pay for productivity tools with automation.",
        "ease_of_build": 3,
        "ease_of_build_reason": "APIs and queue handling; moderately complex.",
        "competition": 5,
        "competition_reason": "Many established incumbents.",
        "category": "Marketing, SaaS",
        "categories": ["Marketing", "SaaS"]
    },
    {
        "idea": "AI Speaking Practice Tutor",
        "monetisation": 4,
        "monetisation_reason": "Subscription model; students and professionals willing to pay.",
        "ease_of_build": 3,
        "ease_of_build_reason": "TTS + AI conversation system; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few tools focus on rapid speaking skill improvement.",
        "category": "Education, AI, Mobile",
        "categories": ["Education", "AI", "Mobile"]
    },
    {
        "idea": "Reading Tracker App",
        "monetisation": 3,
        "monetisation_reason": "Freemium or subscription; useful for avid readers and students.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Basic CRUD app; can be lightweight mobile app.",
        "competition": 3,
        "competition_reason": "Some tracking apps exist; focus on UX differentiates it.",
        "category": "Productivity, Mobile",
        "categories": ["Productivity", "Mobile"]
    },
    {
        "idea": "Job Matching Web App",
        "monetisation": 4,
        "monetisation_reason": "Companies may pay for faster candidate matching; premium features for job seekers.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Requires smart CV parsing and AI matching; browser extension adds complexity.",
        "competition": 4,
        "competition_reason": "Several job platforms exist; instant AI application is niche.",
        "category": "HR Tech, AI, SaaS",
        "categories": ["HR Tech", "AI", "SaaS"]
    },
    {
        "idea": "AI Study Material Generator",
        "monetisation": 3,
        "monetisation_reason": "Free basic use; potential subscription for teachers or students.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Parsing PDFs/PPTs/Youtube + AI summarisation; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some edtech tools exist; AI summarisation with flashcards is niche.",
        "category": "Education, AI",
        "categories": ["Education", "AI"]
    },
    {
        "idea": "Lightweight Photo Editor",
        "monetisation": 3,
        "monetisation_reason": "Freemium with pro features for hobbyists or beginners.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Basic image processing; limited feature set keeps complexity low.",
        "competition": 4,
        "competition_reason": "Many photo editors exist; beginner-focused UX helps differentiation.",
        "category": "Productivity, Mobile",
        "categories": ["Productivity", "Mobile"]
    },
    {
        "idea": "Affordable Customer Support Tool",
        "monetisation": 4,
        "monetisation_reason": "Small teams and solo founders are willing to pay; low-cost SaaS.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Ticketing system + automation; moderate complexity.",
        "competition": 4,
        "competition_reason": "Many support tools exist; affordability and simplicity differentiates.",
        "category": "Customer Support, SaaS",
        "categories": ["Customer Support", "SaaS"]
    },
    {
        "idea": "Offline Screenshot Tool",
        "monetisation": 3,
        "monetisation_reason": "Free download; could monetise with premium features or enterprise edition.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Desktop-only; local screenshot capture is simple; offline handling is easy.",
        "competition": 3,
        "competition_reason": "Some offline screenshot tools exist; simplicity is a differentiator.",
        "category": "Productivity, Desktop",
        "categories": ["Productivity", "Desktop"]
    },
    {
        "idea": "AI Role-Play for Workplace Conversations",
        "monetisation": 4,
        "monetisation_reason": "Subscription for HR teams or employees; personalised AI feedback is valuable.",
        "ease_of_build": 3,
        "ease_of_build_reason": "AI character simulation and feedback; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few tools focus on AI-guided role play for workplace conversations.",
        "category": "HR Tech, AI",
        "categories": ["HR Tech", "AI"]
    },
    {
        "idea": "Procure-to-Pay Automation Platform",
        "monetisation": 5,
        "monetisation_reason": "B2B SaaS; companies willing to pay to automate procurement processes.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Complex workflows and integrations; enterprise-grade complexity.",
        "competition": 3,
        "competition_reason": "Some enterprise tools exist; niche for SMBs with automation focus.",
        "category": "Finance, SaaS",
        "categories": ["Finance", "SaaS"]
    },
    {
        "idea": "Voice Assistance for Non-Speaking Users",
        "monetisation": 4,
        "monetisation_reason": "Subscription or one-time purchase; high value for accessibility tools.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Text-to-speech generation and interface; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few apps provide high-quality TTS for non-speaking users.",
        "category": "Accessibility, AI",
        "categories": ["Accessibility", "AI"]
    },
    {
        "idea": "Recruiter Automation Tool",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS for HR teams; saves recruiters time and effort.",
        "ease_of_build": 3,
        "ease_of_build_reason": "AI CV parsing, scoring, and automation; moderate complexity.",
        "competition": 4,
        "competition_reason": "Some recruiting tools exist, but AI-driven automation is still niche.",
        "category": "HR Tech, AI",
        "categories": ["HR Tech", "AI"]
    },
    {
        "idea": "Product Documentation Generator for PMs",
        "monetisation": 3,
        "monetisation_reason": "PMs and small teams may pay for faster documentation.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Template system + AI summarisation; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few AI-first PM documentation tools exist.",
        "category": "Productivity, AI",
        "categories": ["Productivity", "AI"]
    },
    {
        "idea": "Virtual Tour Builder Plugin",
        "monetisation": 3,
        "monetisation_reason": "Freemium; website owners may pay for pro features.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Panorama scenes + hotspot navigation; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some VR tour plugins exist, but UX focus can differentiate.",
        "category": "Web, Productivity",
        "categories": ["Web", "Productivity"]
    },
    {
        "idea": "Custom Welding Machine Branding",
        "monetisation": 4,
        "monetisation_reason": "B2B; manufacturers pay for customised branding.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Physical product modifications; requires equipment and expertise.",
        "competition": 3,
        "competition_reason": "Few competitors in niche market; B2B advantage.",
        "category": "Manufacturing, B2B",
        "categories": ["Manufacturing", "B2B"]
    },
    {
        "idea": "Mobile App Curation Subreddit",
        "monetisation": 2,
        "monetisation_reason": "Community-based; monetisation is limited unless ads or sponsorships.",
        "ease_of_build": 5,
        "ease_of_build_reason": "Simple subreddit creation; minimal technical work.",
        "competition": 3,
        "competition_reason": "Many tech-focused subreddits exist; niche can still grow.",
        "category": "Community, Web",
        "categories": ["Community", "Web"]
    },
    {
        "idea": "Open Source Multi-Agent System for Local Enterprise Development",
        "monetisation": 3,
        "monetisation_reason": "Could monetise via consulting, enterprise support, or premium modules.",
        "ease_of_build": 2,
        "ease_of_build_reason": "Complex AI + multi-agent coordination; high technical barrier.",
        "competition": 3,
        "competition_reason": "Few open-source enterprise-focused multi-agent systems exist.",
        "category": "AI, Enterprise, Open Source",
        "categories": ["AI", "Enterprise", "Open Source"]
    },
    {
        "idea": "AI Visibility Platform for Businesses",
        "monetisation": 4,
        "monetisation_reason": "Subscription model; brands want presence in AI search.",
        "ease_of_build": 3,
        "ease_of_build_reason": "GEO analysis + AI response mapping; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few platforms focus specifically on AI search visibility.",
        "category": "AI, Marketing",
        "categories": ["AI", "Marketing"]
    },
    {
        "idea": "Internal Knowledge Base for Non-Technical Users",
        "monetisation": 3,
        "monetisation_reason": "Subscription or SaaS for teams; helps internal knowledge management.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Knowledge base + context-aware search; manageable.",
        "competition": 3,
        "competition_reason": "Many knowledge bases exist; non-technical UX focus is niche.",
        "category": "Productivity, SaaS",
        "categories": ["Productivity", "SaaS"]
    },
    {
        "idea": "Sleep Experiment Tracker",
        "monetisation": 3,
        "monetisation_reason": "Freemium; wearable users may pay for advanced analytics.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Integration with wearables + experiment timeline; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some sleep apps exist; controlled experiment tracking is niche.",
        "category": "Health, Mobile",
        "categories": ["Health", "Mobile"]
    },
    {
        "idea": "Super Launch Platform",
        "monetisation": 4,
        "monetisation_reason": "Subscription for startups to launch products; B2B SaaS.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Landing pages + analytics; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some launchpads exist; clean, minimal UX is differentiator.",
        "category": "Marketing, SaaS",
        "categories": ["Marketing", "SaaS"]
    },
    {
        "idea": "Lead Generation via Social Monitoring",
        "monetisation": 4,
        "monetisation_reason": "B2B; startups and agencies pay for real-time lead notifications.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Monitoring + notification system; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some lead-gen tools exist; social monitoring focus is differentiator.",
        "category": "Marketing, SaaS",
        "categories": ["Marketing", "SaaS"]
    },
    {
        "idea": "Email Marketing Automation for Stripe Users",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS; businesses pay for trial-to-paid conversion automation.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Integration with Stripe + campaign automation; moderate complexity.",
        "competition": 4,
        "competition_reason": "Many marketing automation tools exist; Stripe-specific focus is niche.",
        "category": "Marketing, SaaS",
        "categories": ["Marketing", "SaaS"]
    },
    {
        "idea": "Product Update Notification Page + Widget",
        "monetisation": 3,
        "monetisation_reason": "Freemium SaaS; teams pay for more branding/customisation options.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Frontend + small backend; moderate difficulty.",
        "competition": 3,
        "competition_reason": "Few tools allow easy update pages + widgets for SaaS teams.",
        "category": "Productivity, SaaS",
        "categories": ["Productivity", "SaaS"]
    },
    {
        "idea": "Developer Project Planning Tool",
        "monetisation": 4,
        "monetisation_reason": "Subscription for developers and enterprises; helps speed project planning.",
        "ease_of_build": 3,
        "ease_of_build_reason": "AI prompts + task breakdown + git integration; moderate complexity.",
        "competition": 4,
        "competition_reason": "Some tools exist; AI-driven breakdown is a differentiator.",
        "category": "Productivity, AI, SaaS",
        "categories": ["Productivity", "AI", "SaaS"]
    },
    {
        "idea": "Website Conversion Optimisation Tool",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS; businesses pay for higher conversion.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Analytics + copy suggestions; moderate complexity.",
        "competition": 4,
        "competition_reason": "Several CRO tools exist; free during MVP helps adoption.",
        "category": "Marketing, SaaS",
        "categories": ["Marketing", "SaaS"]
    },
    {
        "idea": "Travel Itinerary Builder for Agents",
        "monetisation": 3,
        "monetisation_reason": "Freemium or subscription for travel agents; saves time.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Template system + itinerary generation; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some tools exist; fast, automated itinerary creation is niche.",
        "category": "Travel, Productivity",
        "categories": ["Travel", "Productivity"]
    },
    {
        "idea": "AI Webpage Assistant Chrome Extension",
        "monetisation": 3,
        "monetisation_reason": "Freemium; could monetise advanced AI features.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Web scraping + AI summarisation; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some webpage AI tools exist; extension convenience differentiates.",
        "category": "AI, Productivity",
        "categories": ["AI", "Productivity"]
    },
    {
        "idea": "Launch Pack for First Sales",
        "monetisation": 4,
        "monetisation_reason": "Subscription or one-time payment; early-stage startups need help with sales.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Landing pages + content + outreach integration; moderate complexity.",
        "competition": 3,
        "competition_reason": "Launch packs exist, but comprehensive first-sales focus is niche.",
        "category": "Marketing, SaaS",
        "categories": ["Marketing", "SaaS"]
    },
    {
        "idea": "VR Tours WordPress Plugin",
        "monetisation": 3,
        "monetisation_reason": "Freemium plugin; website owners pay for premium features.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Panorama + interactive hotspots; moderate difficulty.",
        "competition": 3,
        "competition_reason": "Few easy-to-use VR WordPress plugins exist.",
        "category": "Web, Productivity",
        "categories": ["Web", "Productivity"]
    },
    {
        "idea": "Tab-Based AI Quick Input Tool",
        "monetisation": 3,
        "monetisation_reason": "Freemium; could monetise pro features for power users.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Keyboard shortcut handling + AI integration; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few similar productivity AI input tools exist.",
        "category": "Productivity, AI",
        "categories": ["Productivity", "AI"]
    },
    {
        "idea": "Kids Learning Insights Platform",
        "monetisation": 4,
        "monetisation_reason": "B2C SaaS; parents and schools may pay for learning insights.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Data aggregation + profile generation; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some edtech tools exist; personalised insights are differentiator.",
        "category": "Education, Analytics",
        "categories": ["Education", "Analytics"]
    },
    {
        "idea": "Automated Stripe Campaigns Tool",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS; helps businesses improve conversion from trial to paid.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Stripe integration + automated campaign system; moderate complexity.",
        "competition": 4,
        "competition_reason": "Marketing automation exists; Stripe-specific focus is niche.",
        "category": "Marketing, SaaS",
        "categories": ["Marketing", "SaaS"]
    },
    {
        "idea": "Virtual Tour Creator for WordPress",
        "monetisation": 3,
        "monetisation_reason": "Freemium plugin for website owners; premium for advanced features.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Panorama + hotspots + navigation; moderate difficulty.",
        "competition": 3,
        "competition_reason": "Few VR tour WordPress plugins exist with easy UX.",
        "category": "Web, Productivity",
        "categories": ["Web", "Productivity"]
    },
    {
        "idea": "Custom AI Voice Generator",
        "monetisation": 4,
        "monetisation_reason": "Subscription or one-time purchase; accessibility and creative users.",
        "ease_of_build": 3,
        "ease_of_build_reason": "TTS engine integration; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few high-quality custom voice generators exist.",
        "category": "AI, Accessibility",
        "categories": ["AI", "Accessibility"]
    },
    {
        "idea": "Nail Biting Prevention App for Mac",
        "monetisation": 3,
        "monetisation_reason": "Freemium; could sell advanced reminders or analytics.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Desktop app with notifications and detection; manageable.",
        "competition": 3,
        "competition_reason": "Few habit apps focus specifically on nail biting on Mac.",
        "category": "Health, Desktop",
        "categories": ["Health", "Desktop"]
    },
    {
        "idea": "AI Photo Studio",
        "monetisation": 4,
        "monetisation_reason": "Freemium or paid subscriptions for professional photo editing and AI effects.",
        "ease_of_build": 3,
        "ease_of_build_reason": "AI image generation and editing pipelines; moderate complexity.",
        "competition": 4,
        "competition_reason": "Some AI photo tools exist, but demand is high and feature differentiation is possible.",
        "category": "AI, Creativity",
        "categories": ["AI", "Creativity"]
    },
    {
        "idea": "AI Podcast Analytics and Coach",
        "monetisation": 4,
        "monetisation_reason": "Subscription for podcasters who want detailed AI-driven feedback.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Audio analysis + AI feedback generation; moderate complexity.",
        "competition": 3,
        "competition_reason": "Most podcast analytics focus on basic metrics; content-driven AI is niche.",
        "category": "AI, Content, Media",
        "categories": ["AI", "Content", "Media"]
    },
    {
        "idea": "Automated Pinterest Posting Tool",
        "monetisation": 3,
        "monetisation_reason": "Freemium or subscription for social media users and marketers.",
        "ease_of_build": 4,
        "ease_of_build_reason": "API integration for posting; relatively straightforward.",
        "competition": 3,
        "competition_reason": "Some social media automation tools exist, but Pinterest-focused automation is niche.",
        "category": "Marketing, Productivity",
        "categories": ["Marketing", "Productivity"]
    },
    {
        "idea": "AI Growth Engine for Engagement",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS helping startups increase retention and revenue; subscription model.",
        "ease_of_build": 3,
        "ease_of_build_reason": "AI recommendations + user engagement tracking; moderate complexity.",
        "competition": 3,
        "competition_reason": "Many growth tools exist, but integrated AI-driven challenge system is novel.",
        "category": "AI, Marketing",
        "categories": ["AI", "Marketing"]
    },
    {
        "idea": "Startup Visibility on AI Platforms",
        "monetisation": 4,
        "monetisation_reason": "B2B subscription for companies wanting visibility in AI search results.",
        "ease_of_build": 3,
        "ease_of_build_reason": "GEO + AI response management; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few platforms optimise brands for AI responses specifically.",
        "category": "AI, Marketing",
        "categories": ["AI", "Marketing"]
    },
    {
        "idea": "Endless Scroll Movie Discovery",
        "monetisation": 3,
        "monetisation_reason": "Ads or subscription; monetises discovery and engagement.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Video feed with clips and recommendations; relatively straightforward.",
        "competition": 3,
        "competition_reason": "Movie recommendation exists, but short clip endless scroll is less common.",
        "category": "Entertainment, Media",
        "categories": ["Entertainment", "Media"]
    },
    {
        "idea": "Search Engine for Coding Courses",
        "monetisation": 3,
        "monetisation_reason": "Ads or affiliate commissions from course providers.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Search and API integration; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some course search engines exist, but AI summarisation adds differentiation.",
        "category": "Education, AI",
        "categories": ["Education", "AI"]
    },
    {
        "idea": "Smart Child Tracker App",
        "monetisation": 3,
        "monetisation_reason": "Subscription or freemium for parents wanting child activity tracking.",
        "ease_of_build": 4,
        "ease_of_build_reason": "App with tracking and notifications; manageable complexity.",
        "competition": 3,
        "competition_reason": "Child tracking apps exist, but smart/AI features are less common.",
        "category": "Parenting, Mobile",
        "categories": ["Parenting", "Mobile"]
    },
    {
        "idea": "Competitive Paper Trading Game",
        "monetisation": 3,
        "monetisation_reason": "Freemium, ads, or premium leaderboards for trading enthusiasts.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Simulated market + scoring; manageable.",
        "competition": 3,
        "competition_reason": "Some trading games exist, but competitive and instant-play design is niche.",
        "category": "Finance, Gamification",
        "categories": ["Finance", "Gamification"]
    },
    {
        "idea": "AI-Powered Cover Letter Generator",
        "monetisation": 4,
        "monetisation_reason": "Subscription for job seekers wanting personalised letters.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Text generation with templates; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few AI tools focus solely on cover letters with personalisation.",
        "category": "AI, Career",
        "categories": ["AI", "Career"]
    },
    {
        "idea": "Book Vocabulary Builder",
        "monetisation": 3,
        "monetisation_reason": "Subscription or freemium for readers to learn vocabulary.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Text parsing + word tracking; fairly straightforward.",
        "competition": 3,
        "competition_reason": "Some vocabulary apps exist, but book-specific integration is less common.",
        "category": "Education, AI",
        "categories": ["Education", "AI"]
    },
    {
        "idea": "AI Brand Visibility Platform",
        "monetisation": 4,
        "monetisation_reason": "B2B subscriptions for visibility across AI platforms.",
        "ease_of_build": 3,
        "ease_of_build_reason": "GEO data + AI search integration; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few competitors target AI response visibility specifically.",
        "category": "Marketing, AI",
        "categories": ["Marketing", "AI"]
    },
    {
        "idea": "Smart Investment Assistant",
        "monetisation": 4,
        "monetisation_reason": "Subscription for personal finance and investing insights.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Finance data + AI recommendations; moderate complexity.",
        "competition": 4,
        "competition_reason": "Many finance tools exist, but gamified AI assistant is niche.",
        "category": "Finance, AI",
        "categories": ["Finance", "AI"]
    },
    {
        "idea": "AI Memory Transfer Tool",
        "monetisation": 3,
        "monetisation_reason": "Subscription for AI developers to manage multi-AI memory.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Backend management + API integration; moderate.",
        "competition": 3,
        "competition_reason": "Few tools exist to transfer memory across AI systems.",
        "category": "AI, Productivity",
        "categories": ["AI", "Productivity"]
    },
    {
        "idea": "End-to-End MVP Platform",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS for developers and startups; subscription or pay-per-project.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Full workflow integration; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some MVP platforms exist, but cloud-independent and no vendor lock-in is rare.",
        "category": "Developer Tools, SaaS",
        "categories": ["Developer Tools", "SaaS"]
    },
    {
        "idea": "AI Feedback for SaaS & eCom",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS; subscription for actionable insights from customer surveys.",
        "ease_of_build": 3,
        "ease_of_build_reason": "AI summarisation + dashboard; moderate.",
        "competition": 3,
        "competition_reason": "Many analytics dashboards exist, but AI-driven instant summaries are niche.",
        "category": "AI, Marketing",
        "categories": ["AI", "Marketing"]
    },
    {
        "idea": "Movie Clip Discovery Platform",
        "monetisation": 3,
        "monetisation_reason": "Ads or premium features for curated movie clip discovery.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Endless scroll + video clips; straightforward.",
        "competition": 3,
        "competition_reason": "Entertainment discovery exists, but short clips + gamified scroll is less common.",
        "category": "Entertainment, Media",
        "categories": ["Entertainment", "Media"]
    },
    {
        "idea": "Coding Course Search Engine",
        "monetisation": 3,
        "monetisation_reason": "Ads, affiliate commissions, or freemium subscriptions.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Search engine + AI summarisation; moderate complexity.",
        "competition": 3,
        "competition_reason": "Some search engines exist, AI summarisation adds uniqueness.",
        "category": "Education, AI",
        "categories": ["Education", "AI"]
    },
    {
        "idea": "AI-Powered Child Tracker",
        "monetisation": 3,
        "monetisation_reason": "Subscription for parents, freemium or premium features.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Mobile app with tracking + alerts; manageable.",
        "competition": 3,
        "competition_reason": "Child tracking apps exist, but AI smart alerts are rare.",
        "category": "Parenting, Mobile",
        "categories": ["Parenting", "Mobile"]
    },
    {
        "idea": "Paper Trading Competition Game",
        "monetisation": 3,
        "monetisation_reason": "Freemium, ads, or premium leaderboards.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Simulated market + scoring; straightforward.",
        "competition": 3,
        "competition_reason": "Trading games exist, but competitive leaderboard is niche.",
        "category": "Finance, Gamification",
        "categories": ["Finance", "Gamification"]
    },
    {
        "idea": "Personalized AI Cover Letter Generator",
        "monetisation": 4,
        "monetisation_reason": "Subscription for job seekers.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Text generation + templates; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few competitors focus solely on AI-generated cover letters.",
        "category": "Career, AI",
        "categories": ["Career", "AI"]
    },
    {
        "idea": "Daily Learning Digest",
        "monetisation": 3,
        "monetisation_reason": "Subscription for curated daily learning emails.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Email automation + content aggregation; straightforward.",
        "competition": 3,
        "competition_reason": "Some daily learning emails exist, curation quality differentiates.",
        "category": "Education, Productivity",
        "categories": ["Education", "Productivity"]
    },
    {
        "idea": "Multi-Provider AI Chat GUI",
        "monetisation": 3,
        "monetisation_reason": "Subscription or one-time purchase for AI power users.",
        "ease_of_build": 3,
        "ease_of_build_reason": "GUI integration + API handling; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few GUI tools allow multi-provider AI memory and local search.",
        "category": "AI, Productivity",
        "categories": ["AI", "Productivity"]
    },
    {
        "idea": "Tiny Tot Activity Tracker",
        "monetisation": 3,
        "monetisation_reason": "Subscription for parents.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Mobile app + notifications; manageable.",
        "competition": 3,
        "competition_reason": "Child trackers exist, AI or smart features add differentiation.",
        "category": "Parenting, Mobile",
        "categories": ["Parenting", "Mobile"]
    },
    {
        "idea": "Instant Opinion Analysis Tool",
        "monetisation": 4,
        "monetisation_reason": "B2B SaaS for product feedback; subscription.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Survey deployment + AI analysis; moderate complexity.",
        "competition": 3,
        "competition_reason": "Feedback analysis exists, AI summarisation for SaaS & eCom is niche.",
        "category": "AI, Marketing",
        "categories": ["AI", "Marketing"]
    },
    {
        "idea": "No-Code MVP Builder",
        "monetisation": 4,
        "monetisation_reason": "Subscription or usage-based; SaaS for startups.",
        "ease_of_build": 3,
        "ease_of_build_reason": "End-to-end workflow; moderate complexity.",
        "competition": 3,
        "competition_reason": "No-code MVP tools exist, cloud-independent approach adds uniqueness.",
        "category": "Developer Tools, SaaS",
        "categories": ["Developer Tools", "SaaS"]
    },
    {
        "idea": "AI Movie Clip Discovery Feed",
        "monetisation": 3,
        "monetisation_reason": "Ads or premium subscription for entertainment discovery.",
        "ease_of_build": 4,
        "ease_of_build_reason": "Video feed + recommendations; manageable.",
        "competition": 3,
        "competition_reason": "Movie recommendation exists, short clips feed is less saturated.",
        "category": "Entertainment, Media",
        "categories": ["Entertainment", "Media"]
    },
    {
        "idea": "Personal Finance Learning Companion",
        "monetisation": 4,
        "monetisation_reason": "Subscription or freemium for investing and finance learning.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Content + interactive simulations; moderate complexity.",
        "competition": 3,
        "competition_reason": "Finance education apps exist, gamified AI companion is less common.",
        "category": "Finance, Education",
        "categories": ["Finance", "Education"]
    },
    {
        "idea": "AI Conversational Memory Manager",
        "monetisation": 3,
        "monetisation_reason": "Subscription for AI developers and enthusiasts.",
        "ease_of_build": 3,
        "ease_of_build_reason": "Cross-AI memory handling; moderate complexity.",
        "competition": 3,
        "competition_reason": "Few tools exist for storing and transferring AI memory.",
        "category": "AI, Productivity",
        "categories": ["AI", "Productivity"]
    }
]
