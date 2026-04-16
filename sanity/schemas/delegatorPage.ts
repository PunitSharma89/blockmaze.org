import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "delegatorPage",
  title: "Delegator Page",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Language", type: "string", readOnly: true, hidden: true }),
    /* ── Hero ── */
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "badge", title: "Badge Text", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Body Text", type: "text", rows: 3 }),
        defineField({ name: "buttonText", title: "Button Text", type: "string" }),
        defineField({ name: "buttonHref", title: "Button Link", type: "string" }),
        defineField({
          name: "image",
          title: "Hero Image (optional)",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
      ],
    }),

    /* ── Benefits ── */
    defineField({
      name: "benefitsSection",
      title: "Why Delegate — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "benefits",
      title: "Benefit Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "iconPath", title: "Icon Image Path", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── Evaluate ── */
    defineField({
      name: "evaluateSection",
      title: "What To Evaluate Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Intro Text", type: "text", rows: 3 }),
        defineField({ name: "subtext", title: "Sub-intro Text", type: "text", rows: 2 }),
        defineField({
          name: "items",
          title: "Bullet Items",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "note", title: "Disclaimer Note", type: "text", rows: 2 }),
        defineField({
          name: "image",
          title: "Section Image (optional)",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
      ],
    }),

    /* ── Steps ── */
    defineField({
      name: "stepsSection",
      title: "How to Delegate — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "steps",
      title: "Delegation Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "stepsButton",
      title: "Steps CTA Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),

    /* ── Dashboard ── */
    defineField({
      name: "dashboardSection",
      title: "Dashboard — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "dashboardItems",
      title: "Dashboard Capability Items",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "dashboardImage",
      title: "Dashboard Image (optional)",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),

    /* ── Rewards Section ── */
    defineField({
      name: "rewardsSection",
      title: "Rewards, Commitment & Responsibility — Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "earningCard",
      title: "1. Earning Rewards Card",
      type: "object",
      fields: [
        defineField({ name: "iconPath", title: "Icon Image Path", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Body Text", type: "text", rows: 3 }),
        defineField({
          name: "rewardItems",
          title: "Reward Structure Items",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "note", title: "Footer Note", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "unbondingCard",
      title: "2. Unbonding Card",
      type: "object",
      fields: [
        defineField({ name: "iconPath", title: "Icon Image Path", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Body Text (para 1)", type: "text", rows: 3 }),
        defineField({
          name: "timeline",
          title: "Unbonding Timeline Items",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({ name: "text2", title: "Body Text (para 2 — redelegation note)", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "risksCard",
      title: "3. Risks Card",
      type: "object",
      fields: [
        defineField({ name: "iconPath", title: "Icon Image Path", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "intro", title: "Intro Text", type: "text", rows: 2 }),
        defineField({
          name: "risks",
          title: "Risk Items",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "title", title: "Risk Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
              ],
              preview: { select: { title: "title" } },
            }),
          ],
        }),
      ],
    }),

    /* ── CTA ── */
    defineField({
      name: "ctaSection",
      title: "CTA Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading (optional)", type: "string" }),
        defineField({ name: "subtext", title: "Subtext (optional)", type: "text", rows: 2 }),
        defineField({ name: "buttonText", title: "Button Text", type: "string" }),
        defineField({ name: "buttonHref", title: "Button Link", type: "string" }),
      ],
    }),
  ],
});
