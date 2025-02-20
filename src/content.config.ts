import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum([
      'cloud-unraveled',
      'devops-diaries',
      'building-in-public',
      'rants-and-real-talk',
      'lessons-from-trenches'
    ]).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };