export default {
  name: "protocolPage",
  title: "Protocol Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            {
              name: "sectionId",
              title: "Section ID (for anchor link)",
              type: "string",
              description: "e.g. introduction, node-setup, system-requirements",
              validation: (Rule: { required: () => unknown }) => Rule.required(),
            },
            {
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (Rule: { required: () => unknown }) => Rule.required(),
            },
            {
              name: "rawHtml",
              title: "Content (HTML)",
              type: "text",
              rows: 10,
              description: "Paste your HTML content here",
            },
          ],
          preview: {
            select: { title: "heading" },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: "title" },
  },
};
