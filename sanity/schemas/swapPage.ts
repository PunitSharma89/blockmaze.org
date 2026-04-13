import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "swapPage",
  title: "Swap Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "badge", title: "Badge Text", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Body Text", type: "text", rows: 4 }),
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
    defineField({
      name: "stepsSection",
      title: "Steps Section — Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "steps",
      title: "Process Steps",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Step Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
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
    defineField({
      name: "governanceSection",
      title: "Governance Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Paragraph 1", type: "text", rows: 3 }),
        defineField({ name: "text2", title: "Paragraph 2", type: "text", rows: 3 }),
        defineField({
          name: "image",
          title: "Governance Image (optional)",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "lockInSection",
      title: "Lock-In & Unswap Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Body Text", type: "text", rows: 4 }),
      ],
    }),
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
