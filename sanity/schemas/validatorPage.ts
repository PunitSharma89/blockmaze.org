import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "validatorPage",
  title: "Validator Page",
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
        defineField({ name: "subtext", title: "Body Text (paragraph 1)", type: "text", rows: 3 }),
        defineField({ name: "subtext2", title: "Body Text (paragraph 2)", type: "text", rows: 3 }),
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

    /* ── Who Should Use ── */
    defineField({
      name: "whoSection",
      title: "Who Should Use — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "whoCards",
      title: "Who Should Use Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "imagePath", title: "Image Path (e.g. /images/validator-plat001.png)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── Steps ── */
    defineField({
      name: "stepsSection",
      title: "How to Participate — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "steps",
      title: "Participation Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Step Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "details",
              title: "Bullet Detail Items",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({ name: "note", title: "Note (paragraph after bullets)", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "stepsButton",
      title: "Steps Section CTA Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),

    /* ── How Validation Works ── */
    defineField({
      name: "validationSection",
      title: "How Validation Works — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "validationCards",
      title: "How Validation Works Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "iconKey", title: "Icon Key", type: "string", description: "shield | document | chart | network | clock | lock | arrow" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── Dashboard ── */
    defineField({
      name: "dashboardSection",
      title: "Dashboard Management — Section Header",
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
      name: "dashboardButton",
      title: "Dashboard CTA Button",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Button Text", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),
    defineField({
      name: "noteText",
      title: "Disclaimer / Note Text",
      type: "text",
      rows: 2,
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
