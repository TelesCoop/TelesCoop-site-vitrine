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

// Collection pour les témoignages en Markdown
const testimonialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    client: z.string(),
    client_poste: z.string().optional(),
    logo: z.string().optional(),
    borderColor: z.string().default('#ff8714'),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

// Collection pour les palettes de couleurs
const palettesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    id: z.string(),
    description: z.string().optional(),
    icon: z.string().default('🎨'),
    colors: z.object({
      beige: z.string(),
      yellow: z.string(),
      orange: z.string(),
      green: z.string(),
      blue: z.string(),
      purple: z.string(),
      pink: z.string(),
      coral: z.string(),
      peach: z.string(),
      border: z.string(),
      text: z.string(),
    }),
    textColors: z.object({
      yellow: z.string().default('#000000'),
      orange: z.string().default('#FFFFFF'),
      green: z.string().default('#FFFFFF'),
      blue: z.string().default('#FFFFFF'),
      purple: z.string().default('#FFFFFF'),
      pink: z.string().default('#FFFFFF'),
      coral: z.string().default('#FFFFFF'),
      peach: z.string().default('#000000'),
      beige: z.string().default('#000000'),
    }).optional(),
  }),
});

export const collections = {
  data: dataCollection,
  projects: projectsCollection,
  blog: blogCollection,
  team: teamCollection,
  testimonials: testimonialsCollection,
  palettes: palettesCollection,
};
