import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "description", title: "Site Description", type: "text" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "platform", title: "Platform", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
        }),
      ],
    }),
    defineField({ name: "footerText", title: "Footer Text (legacy)", type: "text" }),

    /* ── Footer ── */
    defineField({ name: "footerDescription", title: "Footer Description", type: "text", rows: 3 }),
    defineField({ name: "footerEmail", title: "Footer Email", type: "string" }),
    defineField({ name: "footerCompanyHeading", title: "Footer Column 1 Heading", type: "string" }),
    defineField({
      name: "footerCompanyLinks",
      title: "Footer Column 1 Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "string" }),
          ],
          preview: { select: { title: "label" } },
        }),
      ],
    }),
    defineField({ name: "footerQuickLinksHeading", title: "Footer Column 2 Heading", type: "string" }),
    defineField({
      name: "footerQuickLinks",
      title: "Footer Column 2 Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "string" }),
          ],
          preview: { select: { title: "label" } },
        }),
      ],
    }),
    defineField({ name: "footerCopyrightLeft", title: "Footer Copyright Left", type: "string" }),
    defineField({ name: "footerCopyrightRight", title: "Footer Copyright Right", type: "string" }),

    /* ── Header / Navigation ── */
    defineField({ name: "language", title: "Language", type: "string", readOnly: true, hidden: true }),
    defineField({ name: "logoAlt", title: "Logo Alt Text", type: "string" }),
    defineField({
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "string" }),
            defineField({ name: "mobileLabel", title: "Mobile Label (optional override)", type: "string" }),
            defineField({ name: "external", title: "External Link", type: "boolean" }),
            defineField({
              name: "children",
              title: "Dropdown Items",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Label", type: "string" }),
                    defineField({ name: "href", title: "URL", type: "string" }),
                    defineField({ name: "external", title: "External Link", type: "boolean" }),
                  ],
                  preview: { select: { title: "label" } },
                }),
              ],
            }),
          ],
          preview: { select: { title: "label" } },
        }),
      ],
    }),
  ],
});
