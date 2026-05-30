import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    lang:        z.enum(['fr', 'en']),
    tags:        z.array(z.string()).default([]),
    readingTime:     z.number().optional(),
    author:          z.string().default('Soulimane Farah'),
    translationSlug: z.string().optional(),
    modDate:         z.coerce.date().optional(),
  }),
});

export const collections = { blog };
