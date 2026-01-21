import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
	schema: z.object({
		name: z.string(),
		repo: z.string().optional(),
		link: z.string().optional(),
		technologies: z.array(z.string()).default([]),
		addDate: z.coerce.date(),
	}),
});

export const collections = { projects };
