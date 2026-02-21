import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "../portfolio-content/projects" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            titleEn: z.string(),
            description: z.string(),
            period: z.string(),
            date: z.date(),
            thumbnail: image(),
            images: z.array(image()).optional(),
            result: z.string().optional(),
            tags: z.array(z.string()),
            award: z.string().optional(),
            links: z
                .array(
                    z.object({
                        label: z.string(),
                        url: z.string(),
                    }),
                )
                .optional(),
        }),
});

export const collections = {
    projects: projectsCollection,
};
