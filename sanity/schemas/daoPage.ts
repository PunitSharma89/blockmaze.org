import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "daoPage",
  title: "DAO Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "badge", title: "Badge Text", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext (line 1)", type: "text", rows: 2 }),
        defineField({ name: "subtext2", title: "Subtext (paragraph 2)", type: "text", rows: 3 }),
        defineField({ name: "buttonText", title: "Primary Button Text", type: "string" }),
        defineField({ name: "buttonHref", title: "Primary Button Link", type: "string" }),
        defineField({ name: "secondButtonText", title: "Secondary Button Text", type: "string" }),
        defineField({ name: "secondButtonHref", title: "Secondary Button Link", type: "string" }),
        defineField({
          name: "image",
          title: "Hero Image (optional)",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
      ],
    }),

    /* ── About ── */
    defineField({
      name: "aboutSection",
      title: "About Section — Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({ name: "aboutText", title: "About Body Text", type: "text", rows: 4 }),
    defineField({
      name: "aboutButton",
      title: "About Section CTA Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),

    /* ── About cards (dark section below about) ── */
    defineField({
      name: "aboutCards",
      title: "About Cards (dark section)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Card Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "aboutCardsButton",
      title: "About Cards Section CTA Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),

    /* ── Marquee ── */
    defineField({
      name: "marqueeItems",
      title: "Marquee / Ticker Items",
      description: "Scrolling text strip between sections",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),

    /* ── Steps ── */
    defineField({
      name: "stepsSection",
      title: "How Governance Works — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "steps",
      title: "Governance Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "iconPath", title: "Icon Image Path (e.g. /images/dao-step01.png)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── Eligibility ── */
    defineField({
      name: "eligibilitySection",
      title: "Voting Eligibility — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "eligibilityItems",
      title: "Eligibility Requirements",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),

    /* ── Mechanisms ── */
    defineField({
      name: "mechanismsSection",
      title: "Core Governance Mechanisms — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "mechanisms",
      title: "Core Governance Mechanism Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "iconPath", title: "Icon Image Path (e.g. /images/core01.png)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── FAQ ── */
    defineField({
      name: "faqSection",
      title: "FAQ — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQ Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
  ],
});
