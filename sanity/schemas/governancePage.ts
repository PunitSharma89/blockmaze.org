import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "governancePage",
  title: "Governance Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "badge", title: "Badge Text", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 3 }),
        defineField({ name: "buttonText", title: "Button Text", type: "string" }),
        defineField({ name: "buttonHref", title: "Button Link", type: "string" }),
        defineField({
          name: "image",
          title: "Hero Image (optional — replaces SVG illustration)",
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
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "text", title: "Body Text", type: "text", rows: 4 }),
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
            defineField({
              name: "iconKey",
              title: "Icon Key",
              type: "string",
              description: "shield | document | chart | network | emergency | clock",
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title" } },
        }),
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
          title: "Compliance Image (optional — replaces SVG illustration)",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
        }),
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
