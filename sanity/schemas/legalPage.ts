import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  preview: {
    select: { title: "pageTitle", subtitle: "slug.current" },
    prepare({ title, subtitle }) { return { title: title || "Legal Page", subtitle }; },
  },
  fields: [
    defineField({ name: "language", title: "Language", type: "string", readOnly: true, hidden: true }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "pageTitle" },
    }),
    defineField({ name: "pageTitle", title: "Page Title", type: "string" }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [defineArrayMember({ type: "text", rows: 3 } as Parameters<typeof defineArrayMember>[0])],
            }),
            defineField({
              name: "bullets",
              title: "Bullet Points (optional)",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: { select: { title: "heading" } },
        }),
      ],
    }),
  ],
});
