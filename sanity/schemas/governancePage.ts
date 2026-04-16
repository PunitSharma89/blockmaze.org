import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "governancePage",
  title: "Governance Page",
  type: "document",
  fields: [
    defineField({ name: "language", title: "Language", type: "string", readOnly: true, hidden: true }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "badge", title: "Badge Text", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 3 }),
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
    defineField({
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Body Text", type: "text", rows: 4 }),
      ],
    }),
    defineField({
      name: "rolesSection",
      title: "Roles Section — Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "roles",
      title: "Role Cards (Responsibilities section)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "iconKey", title: "Icon Key", type: "string", description: "shield | document | chart | network | emergency | clock" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "scopeSection",
      title: "Governance Scope — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "scopeItems",
      title: "Governance Scope Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "iconKey", title: "Icon Key", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "structureSection",
      title: "Governance Structure — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subHeading", title: "Sub Heading", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "structure",
      title: "Governance Structure Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "iconKey", title: "Icon Key", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
    defineField({
      name: "stepsSection",
      title: "Process Steps — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "steps",
      title: "Process Steps (How Council Operates)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "num", title: "Step Number", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "num" } },
        }),
      ],
    }),
    defineField({
      name: "compliance",
      title: "Compliance & Risk Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Body Text", type: "text", rows: 3 }),
        defineField({
          name: "tags",
          title: "Tags",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "image",
          title: "Compliance Image (optional)",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "getInvolvedSection",
      title: "Get Involved — Section Header",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
      ],
    }),
    defineField({
      name: "getInvolved",
      title: "Get Involved Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "iconKey", title: "Icon Key", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
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
