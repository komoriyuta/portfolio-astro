import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const projectsCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "content/projects" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            titleEn: z.string(),
            description: z.string(),
            period: z.string(),
            date: z.date(),
            thumbnail: image(),
            images: z.array(image()).optional(),
            video: z
                .object({
                    title: z.string(),
                    src: z.string(),
                    caption: z.string().optional(),
                })
                .optional(),
            videos: z
                .array(
                    z.object({
                        title: z.string(),
                        src: z.string(),
                        caption: z.string().optional(),
                    }),
                )
                .optional(),
            model: z
                .object({
                    title: z.string(),
                    src: z.string(),
                    alt: z.string(),
                    poster: z.string().optional(),
                })
                .optional(),
            splat: z
                .object({
                    title: z.string(),
                    src: z.string(),
                    alt: z.string(),
                    cameraUp: z.array(z.number()).length(3).optional(),
                    initialCameraPosition: z.array(z.number()).length(3).optional(),
                    initialCameraLookAt: z.array(z.number()).length(3).optional(),
                    scale: z.array(z.number()).length(3).optional(),
                    position: z.array(z.number()).length(3).optional(),
                    rotation: z.array(z.number()).length(4).optional(),
                    alphaThreshold: z.number().optional(),
                })
                .optional(),
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
