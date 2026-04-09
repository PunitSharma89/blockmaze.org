export default {
  name: "blog",
  title: "Blog",
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
      title: "Excerpt",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt Text", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
        },
      ],
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta Title", type: "string" },
        { name: "metaDescription", title: "Meta Description", type: "text", rows: 2 },
        { name: "ogImage", title: "OG Image", type: "image" },
      ],
    },
  ],
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
      date: "publishedAt",
    },
  },
};
