import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      "Emotional Abuse",
      "Relationships",
      "Anxiety",
      "Addiction",
      "Personal Growth",
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Gaby Jimenez"),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
