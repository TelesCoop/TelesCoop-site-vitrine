# Contexte

Site vitrine de TelesCoop

La technologie utilisée est `Eleventy` basé sur Javascript sans framework.
Eleventy est un générateur de sites statiques avec un accès à l'écosystème NPM.

Le site statique généré se trouve dans le dossier `output`.

# Tech

Version de Node utilisée: v16.14.0 (compatible à partir de v12)

Par défaut dans Eleventy, la syntaxe du moteur de templating est "Liquid" sur les fichiers HTML et Markdown.

Installer les dépendances :
- installer `yarn`
- `yarn install` installe les autres dépendances

## Environnement de Dev

Pour re-compiler le site en permanence à chaque changement de fichier et garder
la page à jour dans le navigateur (sur http://localhost:8080) : `yarn dev`.

Pour compiler le site (générer le dossier `output`) : `yarn build`.

Si le ficher de style source (`style.sass`) a été modifié, lancer `yarn build:sass`.

## Environnement de Prod

Use `deploy` folder.