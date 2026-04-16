import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "About Page" };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      description: "Internal label only.",
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),

    /* ── Hero ── */
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "chipLabel", title: "Chip Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingHighlight",
          title: "Highlighted Word",
          type: "string",
        }),
        defineField({
          name: "bodyText",
          title: "Body Text",
          type: "text",
          rows: 3,
        }),
      ],
    }),

    /* ── Foundation Scroller ── */
    defineField({
      name: "foundationSection",
      title: "Foundation Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingHighlight",
          title: "Highlighted Word",
          type: "string",
        }),
        defineField({
          name: "bodyText",
          title: "Body Text",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),

    /* ── Roles Section ── */
    defineField({
      name: "rolesSection",
      title: "Roles Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingHighlight",
          title: "Highlighted Word",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "roles",
      title: "Role Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon Path", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── Ecosystem Section ── */
    defineField({
      name: "ecosystemSection",
      title: "Ecosystem Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingHighlight",
          title: "Highlighted Word",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "ecosystemComponents",
      title: "Ecosystem Components",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── Accountability Section (AccountabilityScroll) ── */
    defineField({
      name: "accountabilitySection",
      title: "Accountability Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingHighlight",
          title: "Highlighted Word",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "accountabilityItems",
      title: "Accountability Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon Path", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),

    /* ── Vision Section ── */
    defineField({
      name: "visionSection",
      title: "Vision Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "bodyText",
          title: "Body Text",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "bullets",
          title: "Bullet Points",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),

    /* ── Leadership Section ── */
    defineField({
      name: "leadershipSection",
      title: "Leadership Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingHighlight",
          title: "Highlighted Word",
          type: "string",
        }),
        defineField({
          name: "subtext",
          title: "Subtext",
          type: "text",
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: "team",
      title: "Team Members",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({
              name: "role",
              title: "Role / Title",
              type: "string",
            }),
            defineField({ name: "photo", title: "Photo Path", type: "string" }),
            defineField({
              name: "linkedin",
              title: "LinkedIn URL",
              type: "string",
            }),
            defineField({ name: "bio", title: "Bio", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "name", subtitle: "role" } },
        }),
      ],
    }),

    /* ── FAQ ── */
    defineField({
      name: "faqSection",
      title: "FAQ Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({
          name: "headingHighlight",
          title: "Highlighted Word",
          type: "string",
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
            defineField({
              name: "question",
              title: "Question",
              type: "string",
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 3,
            }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
  ],
});
