import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Home Page" };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Document Title",
      type: "string",
      description: "Internal label only (e.g. 'Home Page'). Not shown on the website.",
    }),

    /* ── Hero ── */
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "chipLabel", title: "Chip Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "text", rows: 2 }),
        defineField({ name: "bodyText", title: "Body Text", type: "text", rows: 3 }),
        defineField({ name: "button1Text", title: "Primary Button Text", type: "string" }),
        defineField({ name: "button1Href", title: "Primary Button Link", type: "string" }),
        defineField({ name: "button2Text", title: "Secondary Button Text", type: "string" }),
        defineField({ name: "button2Href", title: "Secondary Button Link", type: "string" }),
      ],
    }),

    /* ── About ── */
    defineField({
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading (plain)", type: "string" }),
        defineField({ name: "headingHighlight", title: "Highlighted Word", type: "string" }),
        defineField({ name: "bodyText", title: "Body Text", type: "text", rows: 5 }),
      ],
    }),

    /* ── About Accordion (Vision + Mission) ── */
    defineField({
      name: "aboutAccordion",
      title: "About Accordion",
      type: "object",
      fields: [
        defineField({
          name: "vision",
          title: "Vision Card",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "bodyText", title: "Body Text", type: "text", rows: 3 }),
            defineField({
              name: "bullets",
              title: "Bullets",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
        }),
        defineField({
          name: "mission",
          title: "Mission Card",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "bodyText", title: "Body Text", type: "text", rows: 3 }),
            defineField({
              name: "bullets",
              title: "Bullets",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
        }),
      ],
    }),

    /* ── Problem Section ── */
    defineField({
      name: "problemSection",
      title: "Problem Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "headingHighlight", title: "Highlighted Words", type: "string" }),
      ],
    }),
    defineField({
      name: "problemCards",
      title: "Problem Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon Path", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),

    /* ── Accountability Arc ── */
    defineField({
      name: "accountabilitySection",
      title: "Accountability Arc Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "headingHighlight", title: "Highlighted Word", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "accountabilityServices",
      title: "Accountability Services",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "text", title: "Text", type: "string" }),
            defineField({ name: "icon", title: "Icon Path", type: "string" }),
            defineField({
              name: "position",
              title: "Position",
              type: "string",
              options: {
                list: ["top-center", "top-left", "top-right", "bottom-left", "bottom-right"],
              },
            }),
          ],
        }),
      ],
    }),

    /* ── Distinguishes / USP Section ── */
    defineField({
      name: "distinguishesSection",
      title: "Distinguishes Section (USPs)",
      type: "object",
      fields: [
        defineField({ name: "pill", title: "Pill Label", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "uspCards",
      title: "USP Cards (6 items)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon Path", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),

    /* ── Use Cases ── */
    defineField({
      name: "useCasesSection",
      title: "Use Cases Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "headingHighlight", title: "Highlighted Words", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "useCases",
      title: "Use Cases",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "icon", title: "Icon Path", type: "string" }),
          ],
        }),
      ],
    }),

    /* ── Ecosystem Tabs ── */
    defineField({
      name: "ecosystemSection",
      title: "Ecosystem Section",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "headingHighlight", title: "Highlighted Word", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "ecosystemItems",
      title: "Ecosystem Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
            defineField({ name: "imagePath", title: "Image Path", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "bullets",
              title: "Bullets",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
        }),
      ],
    }),

    /* ── Docs Banner ── */
    defineField({
      name: "docsBanner",
      title: "Documentation Banner",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "buttonText", title: "Button Text", type: "string" }),
        defineField({ name: "buttonHref", title: "Button Link", type: "string" }),
      ],
    }),

    /* ── Blogs Section ── */
    defineField({
      name: "blogsSection",
      title: "Blogs Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "heading", title: "Heading", type: "string" }),
        defineField({ name: "subtext", title: "Subtext", type: "text", rows: 3 }),
      ],
    }),

    /* ── FAQ ── */
    defineField({
      name: "faqSection",
      title: "FAQ Section",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
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
        }),
      ],
    }),

    defineField({
      name: "language",
      title: "Language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
  ],
});
