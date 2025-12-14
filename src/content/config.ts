
import { defineCollection, z } from 'astro:content';

const categoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    image_url: z.string(),
    active: z.boolean().default(true),
  }),
});

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category_id: z.string(),
    description: z.string(),
    image_url: z.string(),
    active: z.boolean().default(true),
  }),
});

const referencesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    team_name: z.string(),
    image_url: z.string(),
    description: z.string().optional(),
    active: z.boolean().default(true),
  }),
});

const featuredCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    image_url: z.string(),
    price: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    active: z.boolean().default(true),
  }),
});

export const collections = {
  'categories': categoriesCollection,
  'products': productsCollection,
  'references': referencesCollection,
  'featured': featuredCollection,
};
