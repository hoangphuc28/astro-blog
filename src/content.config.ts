import { defineCollection, z } from "astro:content";

export const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  articles,
};
