import { defineCollection, z } from 'astro:content';

// Collection pour les données YAML (configuration, etc.)
const dataCollection = defineCollection({
  type: 'data',
});

// Collection pour les projets en Markdown
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    clientName: z.string().optional(),
    clientDescription: z.string().optional(),
    projectStack: z.array(z.string()).optional(),
    projectResume: z.string(),
    projectDuration: z.string().optional(),
    projectDurationUnit: z.string().optional(),
    projectLink: z.string().optional(),
    projectGit: z.string().optional(),
    projectStatus: z.enum(['En cours', 'Terminé']).default('En cours'),
    projectEnd: z.string().optional(),
    projectThumbnail: z.string().optional(),
    projectThumbnailAlt: z.string().optional(),
    testimony: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Collection pour les articles de blog en Markdown
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    categories: z.array(z.string()).optional(),
    readTime: z.number(),
    draft: z.boolean().default(false),
  }),
});

// Collection pour l'équipe en Markdown
const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    photo: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  data: dataCollection,
  projects: projectsCollection,
  blog: blogCollection,
  team: teamCollection,
};
