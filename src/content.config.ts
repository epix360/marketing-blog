import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const home = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/home' }),
	schema: z.object({
		title: z.string(),
		heroImage: z.string().optional(),
		body: z.string().optional(),
	}),
});

const about = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/about' }),
	schema: z.object({
		title: z.string(),
		heroImage: z.string().optional(),
		body: z.string().optional(),
	}),
});

const blogIndex = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/blogIndex' }),
	schema: z.object({
		title: z.string(),
		body: z.string().optional(),
	}),
});

export const collections = {
	blog,
	home,
	about,
	blogIndex,
};
