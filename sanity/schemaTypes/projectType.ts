import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "challenges",
      type: "array",
      title: "Challenges",
      of: [
        {
          type: "object",
          name: "challenge",
          title: "Challenges",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "string", title: "Description" },
          ],
        },
      ],
    }),
    defineField({
      name: "shortDescription",
      type: "string",
    }),
    defineField({
      name: "learning",
      type: "string",
    }),
    defineField({
      name: "stack",
      type: "array",
      title: "Stack",
      of: [
        {
          type: "object",
          name: "stack-item",
          title: "Stack Item",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "type", type: "string", title: "Type" },
          ],
        },
      ],
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Links",
      of: [
        {
          type: "object",
          name: "link-item",
          title: "Link Item",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "url", type: "string", title: "Url" },
          ],
        },
      ],
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
