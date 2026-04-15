import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    /* ── Hero ── */
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "chipLabel", title: "Chip Label", type: "string" }),
        defineField({ name: "heading", title: "Heading (before highlight)", type: "text", rows: 2 }),
        defineField({ name: "headingHighlight", title: "Highlighted Word", type: "string" }),
        defineField({ name: "headingSuffix", title: "Heading (after highlight)", type: "string" }),
        defineField({ name: "bodyText", title: "Body Text", type: "text", rows: 3 }),
      ],
    }),
  ],
});
