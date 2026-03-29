export const skillData = {
    "Data Analysis": {
        description: "Specialist in data ecosystem sanitation and conversion optimization through forensic tracking.",
        impact: [
            { label: "Revenue ID", value: "$2.57M" },
            { label: "Data Quality", value: "99.9%" }
        ],
        bullets: [
            "Deep Google Tag Manager audit for Wellness Center (USA), eliminating duplicate triggers.",
            "Complete reconstruction of conversion funnels in GA4 for real ROAS visibility.",
            "Identification of data pipeline anomalies causing revenue under-reporting.",
            "Technical documentation of tracking architecture for multi-city scalability."
        ],
        images: [
            { url: "assets/portfolio/ga4-dashboard-metrics.png", caption: "GA4: Monitoring sanitized conversion events (Forms and CTM)." }
        ]
    },
    "SQL Architecture & Management": {
        description: "Design of relational data infrastructures optimized for massive transaction analysis.",
        impact: [
            { label: "Transactions", value: "952K+" },
            { label: "Query Speed", value: "300%" }
        ],
        bullets: [
            "Star schema modeling (Fact/Dimension) to facilitate complex BI reporting.",
            "SQL query optimization in AWS Aurora for processing 5-year histories.",
            "Sanitation of logic in financial revenue extraction queries.",
            "Database administration for platforms with more than 25 active clients."
        ]
    },
    "Tracking Strategy & Automation": {
        description: "Orchestration of systems connecting marketing, sales, and operations in real-time.",
        impact: [
            { label: "Report Cycle", value: "30→1 Day" },
            { label: "KPI Alerts", value: "Real-time" }
        ],
        bullets: [
            "CallTrackingMetrics (CTM) integration with Slack and GA4 via n8n webhooks.",
            "Google Ads alert automation (via OAuth2) for budget anomaly detection.",
            "Development of technical SOPs for mass deployment of GTM containers.",
            "CRM -> Spreadsheets -> Dashboards synchronization without manual intervention."
        ],
        images: [
            { url: "assets/portfolio/n8n-alert-flow.png", caption: "n8n Workflow: Smart KPI alert automation for Google Ads." },
            { url: "assets/portfolio/n8n-ctm-integration.png", caption: "n8n Workflow: LIVE integration of Call Tracking with the Slack ecosystem." }
        ]
    },
    "Data Pipeline Engineering": {
        description: "Building robust infrastructures for the flow and processing of large data volumes.",
        bullets: [
            "Development of custom scripts in Python and JavaScript for data extraction.",
            "Integrations via REST API and Webhooks for real-time synchronization.",
            "Maintenance and monitoring of critical ETL processes."
        ]
    },
    "Infrastructure & Technical Support": {
        description: "Guarantee of high availability and security in cloud automation environments.",
        bullets: [
            "Self-hosted n8n server administration with automatic backup management.",
            "Implementation of security protocols for API key and OAuth2 handling.",
            "Resolution of infrastructure conflicts in complex REST API integrations.",
            "Proactive stability monitoring of cloud tracking services."
        ]
    },
    "Visualization & Business Intelligence": {
        description: "Fusion of artificial intelligence and data visualization for cost optimization.",
        impact: [
            { label: "Software Saving", value: "$500/mo" },
            { label: "Leads Processed", value: "24/7" }
        ],
        bullets: [
            "AI Chat Widget development (Custom JS/n8n) for lead qualification without human intervention.",
            "Replacement of costly tools (TalkFurther) with proprietary solutions integrated via GTM.",
            "Creation of interactive data storytelling focused on customer retention metrics.",
            "Corporate Dashboards in Looker Studio with ROAS visualization by channel."
        ],
        images: [
            { url: "assets/portfolio/chat-widget-1.png", caption: "AI Virtual Assistant: User interface implemented directly on the client's site." },
            { url: "assets/portfolio/chat-widget-2.png", caption: "Lead Qualification: Conversation flow capturing valuable data before reaching the CRM." },
            { url: "assets/portfolio/chat-widget-3.png", caption: "Backend Logic: Chat integration with n8n for immediate lead injection." }
        ]
    }
};
