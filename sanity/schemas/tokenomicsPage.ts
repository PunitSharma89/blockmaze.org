import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "tokenomicsPage",
  title: "Tokenomics Page",
  type: "document",
  fields: [
    /* ── Hero ── */
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "badge", title: "Badge Text", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subheading", title: "Subheading", type: "string" }),
        defineField({ name: "bodyText", title: "Body Text", type: "text", rows: 4 }),
        defineField({ name: "button1Text", title: "Primary Button Text", type: "string" }),
        defineField({ name: "button1Href", title: "Primary Button Link", type: "string" }),
        defineField({ name: "button2Text", title: "Secondary Button Text", type: "string" }),
        defineField({ name: "button2Href", title: "Secondary Button Link", type: "string" }),
        defineField({
          name: "image",
          title: "Hero Image (optional)",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
      ],
    }),

    /* ── Core Token Utility ── */
    defineField({
      name: "utilitySection",
      title: "Core Token Utility — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "utilityCards",
      title: "Token Utility Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({
              name: "bullets",
              title: "Bullet Points",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── Token Allocation ── */
    defineField({
      name: "allocationSection",
      title: "Token Allocation — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext (optional)", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "tableHeaders",
      title: "Table Column Headers",
      type: "object",
      fields: [
        defineField({ name: "category", title: "Col 1: Category", type: "string" }),
        defineField({ name: "pct", title: "Col 2: Allocation %", type: "string" }),
        defineField({ name: "tokens", title: "Col 3: Tokens (BMZ)", type: "string" }),
        defineField({ name: "locking", title: "Col 4: Locking", type: "string" }),
        defineField({ name: "vesting", title: "Col 5: Vesting", type: "string" }),
      ],
    }),
    defineField({
      name: "tokenAllocation",
      title: "Token Allocation Rows",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "category", title: "Category", type: "string" }),
            defineField({ name: "pct", title: "Allocation %", type: "string" }),
            defineField({ name: "tokens", title: "Tokens (BMZ)", type: "string" }),
            defineField({ name: "locking", title: "Locking", type: "string" }),
            defineField({ name: "vesting", title: "Vesting", type: "string" }),
          ],
          preview: { select: { title: "category", subtitle: "pct" } },
        }),
      ],
    }),
    defineField({
      name: "allocationChartImage",
      title: "Allocation Chart Image (optional)",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),

    /* ── Token Allocation Breakdown & Purpose ── */
    defineField({
      name: "breakdownSection",
      title: "Token Allocation Breakdown & Purpose — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "breakdownItems",
      title: "Breakdown Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "category", title: "Category Name", type: "string" }),
            defineField({ name: "pct", title: "Allocation %", type: "string" }),
            defineField({ name: "purpose", title: "Purpose / Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "category", subtitle: "pct" } },
        }),
      ],
    }),

    /* ── Locking & Vesting ── */
    defineField({
      name: "lockingSection",
      title: "Locking & Vesting — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "lockingCards",
      title: "Locking & Vesting Cards",
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
  ],
});
