export default {
  name: "knowledgeHub",
  title: "Knowledge Hub",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "bulletPoints",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
      description: "List of bullet points shown below the description",
    },
    {
      name: "link",
      title: "Explore More Link",
      type: "string",
      description: "Page path for the Explore more button (e.g. /blockmaze-protocol/)",
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
    },
  },
};
