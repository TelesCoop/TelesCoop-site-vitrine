# TelesCoop - Site vitrine

Site vitrine de [TelesCoop](https://telescoop.fr), construit avec Astro et Tailwind CSS. Le contenu est géré via DecapCMS.

## Développer

```bash
npm install
npm run dev
```

Pour développer avec le CMS local :

```bash
npx decap-server &
npm run dev
```

L'interface d'administration est accessible sur `http://localhost:4321/admin/`.

## Build

```bash
npm run build
npm run preview
```

## Déploiement

Le déploiement est automatique via GitHub Actions à chaque push sur `main`. Le workflow exécute le playbook Ansible `deploy/frontend.yml` qui :

1. Pull le dernier code sur le serveur
2. Installe les dépendances et build le site
3. Copie le résultat vers le dossier servi par nginx

### Secrets GitHub requis

- `SSH_PRIVATE_KEY` — clé SSH pour se connecter au serveur de prod
- `ANSIBLE_VAULT_KEY` — clé de déchiffrement du vault Ansible

### Déploiement manuel

```bash
cd deploy
ansible-playbook frontend.yml --limit prod
```

## Contenu

Le contenu est organisé en collections Astro dans `src/content/` :

- **`projects/`** — fiches projets (catégories, stack, description)
- **`blog/`** — articles de blog
- **`data/`** — données structurées (équipe, témoignages, palettes de couleurs, page d'accueil)

### Organisation des projets

- **Catégories** — type de projet : site vitrine, outil métier, cartographie, gestion de contenu…
- **Tags** — finalité : écologie, sensibilisation, intérêt général, social…
