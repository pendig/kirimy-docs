// sidebars.js

const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Introduction",
      items: [
        "introduction/what-is-kirimy",
        "introduction/features",
        "introduction/architecture",
        "introduction/login-methods",
        "introduction/pricing-and-plans",
        // "introduction/faq", // optional
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/login", "getting-started/dashboard"],
    },
    {
      type: "category",
      label: "Sessions",
      items: [
        "sessions/overview",
        "sessions/create-session",
        "sessions/qr-and-status",
        "sessions/edit-session",
        "sessions/reconnect-terminate-delete",
      ],
    },
    {
      type: "category",
      label: "Contacts",
      items: [
        "contacts/contact-list",
        "contacts/import-contact",
        "contacts/lookup",
        "contacts/delete",
      ],
    },
    {
      type: "category",
      label: "Templates",
      items: [
        "templates/create-template",
        "templates/using-ai",
        "templates/template-format-guide",
        "templates/template-preview",
      ],
    },
    {
      type: "category",
      label: "Blasting",
      items: [
        "blasting/create-blasting",
        "blasting/schedule-and-interval",
        "blasting/play-stop-edit",
        "blasting/blast-logs",
      ],
    },
    {
      type: "category",
      label: "Blast Report",
      items: [
        "blast-report/process-log",
        "blast-report/summary-log",
        "blast-report/message-log-detail",
      ],
    },
    {
      type: "category",
      label: "Chat",
      items: ["chat/manual-chat"],
    },
    {
      type: "category",
      label: "AI Agent",
      items: [
        "ai-agent/create-agent",
        "ai-agent/system-message",
        "ai-agent/upload-knowledge",
        "ai-agent/whatsapp-integration",
      ],
    },
    {
      type: "category",
      label: "Tickets",
      items: [
        "tickets/ticket-list",
        "tickets/ticket-detail",
        "tickets/auto-ticket-creation",
      ],
    },
  ],
};

module.exports = sidebars;
