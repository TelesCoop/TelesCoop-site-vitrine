#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// Migrer les projets
function migrateProjects() {
  const projectsYaml = fs.readFileSync(
    path.join(projectRoot, 'src/content/data/projects.yaml'),
    'utf8'
  );
  const projects = yaml.load(projectsYaml);

  projects.forEach((project, index) => {
    const slug = slugify(project.title);
    const frontmatter = {
      title: project.title,
      categories: project.categories || [],
      tags: project.tags || [],
      clientName: project.clientName || '',
      clientDescription: project.clientDescription || '',
      projectStack: project.projectStack || [],
      projectResume: project.projectResume,
      projectDuration: project.projectDuration || '',
      projectDurationUnit: project.projectDurationUnit || '',
      projectLink: project.projectLink || '',
      projectGit: project.projectGit || '',
      projectStatus: project.projectStatus || 'En cours',
      projectEnd: project.projectEnd || '',
      projectThumbnail: project.projectThumbnail || '',
      projectThumbnailAlt: project.projectThumbnailAlt || '',
      testimony: project.testimony || '',
    };

    const content = project.projectDescription || '';

    const markdown = `---
${yaml.dump(frontmatter, { lineWidth: -1 })}---

${content}
`;

    fs.writeFileSync(
      path.join(projectRoot, 'src/content/projects', `${slug}.md`),
      markdown
    );
    console.log(`✅ Migré: ${project.title}`);
  });

  console.log(`\n✨ ${projects.length} projets migrés vers Markdown\n`);
}

// Migrer les articles de blog
function migrateBlog() {
  const blogYaml = fs.readFileSync(
    path.join(projectRoot, 'src/content/data/blog.yaml'),
    'utf8'
  );
  const articles = yaml.load(blogYaml);

  articles.forEach((article) => {
    const slug = slugify(article.title);
    const frontmatter = {
      title: article.title,
      date: article.date,
      excerpt: article.excerpt,
      categories: article.categories || [],
      readTime: article.readTime,
    };

    const content = article.content || '';

    const markdown = `---
${yaml.dump(frontmatter, { lineWidth: -1 })}---

${content}
`;

    fs.writeFileSync(
      path.join(projectRoot, 'src/content/blog', `${slug}.md`),
      markdown
    );
    console.log(`✅ Migré: ${article.title}`);
  });

  console.log(`\n✨ ${articles.length} articles migrés vers Markdown\n`);
}

// Migrer l'équipe
function migrateTeam() {
  const employeesYaml = fs.readFileSync(
    path.join(projectRoot, 'src/content/data/employees.yaml'),
    'utf8'
  );
  const employees = yaml.load(employeesYaml);

  employees.forEach((employee, index) => {
    const slug = slugify(employee.name);
    const frontmatter = {
      name: employee.name,
      title: employee.title,
      photo: employee.photo || '',
      order: index,
    };

    const content = employee.bio || '';

    const markdown = `---
${yaml.dump(frontmatter, { lineWidth: -1 })}---

${content}
`;

    fs.writeFileSync(
      path.join(projectRoot, 'src/content/team', `${slug}.md`),
      markdown
    );
    console.log(`✅ Migré: ${employee.name}`);
  });

  console.log(`\n✨ ${employees.length} membres d'équipe migrés vers Markdown\n`);
}

// Exécuter les migrations
console.log('🚀 Migration YAML → Markdown\n');
console.log('📦 Migration des projets...');
migrateProjects();

console.log('📝 Migration des articles de blog...');
migrateBlog();

console.log('👥 Migration de l\'équipe...');
migrateTeam();

console.log('✅ Migration terminée !');
