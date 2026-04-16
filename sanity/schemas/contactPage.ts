import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  preview: {
    select: { title: "title" },
    prepare({ title }) { return { title: title || "Contact Page" }; },
  },
  fields: [
    defineField({ name: "title", title: "Document Title", type: "string", description: "Internal label only." }),
    defineField({ name: "language", title: "Language", type: "string", readOnly: true, hidden: true }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "bodyText", title: "Body Text", type: "text", rows: 2 }),
  ],
});
