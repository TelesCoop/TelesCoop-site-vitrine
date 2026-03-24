---
title: Trajectoires écologiques
categories:
  - outil métier
tags:
  - développement web
  - écologie
  - social
  - association
clientName: Trajectoires écologiques
clientDescription: Trajectoires écologiques est une association qui réunit des chercheurs et chercheuses en sociologie et en sciences du comportement avec des personnes engagées dans une démarche écologique. Ensemble, ils et elles cherchent à comprendre comment naissent, se construisent et se déploient les transformations écologiques individuelles.
projectStack:
  - Django
  - Django REST Framework
  - Vue.js 3
  - TypeScript
  - PostgreSQL
  - SurveyJS
  - Highcharts
projectResume: Plateforme de questionnaire de recherche pour cartographier les trajectoires de transformation écologique
projectStatus: En cours
projectEnd: ''
projectThumbnail: ''
projectThumbnailAlt: ''
draft: false
---

## Le contexte

Comment passe-t-on de la prise de conscience écologique à l'action ? Quels événements déclenchent le changement ? Quels freins ralentissent la transition ? Ces questions restent largement sans réponse faute de données suffisamment riches et nuancées. L'association Trajectoires écologiques s'est donné pour mission d'y répondre en s'appuyant sur la recherche en sciences humaines et sociales, en partenariat avec Sciences Po Paris et la Région Nouvelle-Aquitaine.

## La solution

Nous avons développé une plateforme web complète qui recueille les récits de vie des répondant·es à travers un questionnaire de recherche approfondi. Le parcours explore plusieurs dimensions de la transformation écologique : empreinte carbone, engagement politique, consommation, implication associative, et chronologie des événements déclencheurs.

### Les objectifs du projet

- **Produire des données inédites** — des données complexes et anonymisées pour mieux comprendre les dynamiques écologiques contemporaines
- **Identifier les freins et les leviers** — à l'échelle individuelle comme collective, pour éclairer les mécanismes du changement
- **Outiller les acteurs de la transition** — fournir aux structures publiques, privées et associatives des ressources pour affiner leurs stratégies et renforcer leur impact
- **Offrir un espace de réflexion** — permettre aux répondant·es de prendre du recul sur leur propre parcours et de mieux cerner ce qui les motive

### Un questionnaire riche et structuré

La plateforme guide les répondant·es à travers plusieurs thématiques :
- **Empreinte carbone** — logement, mobilité, alimentation, numérique
- **Engagement politique** — participation électorale, militantisme, vie associative
- **Consommation** — habitudes bancaires, épargne, choix de consommation
- **Chronologie personnelle** — frise des événements de vie et déclencheurs du changement
- **Connaissances et sensibilisation** — compréhension des enjeux écologiques

### Sécurité et conformité RGPD

La nature sensible des données collectées a guidé l'ensemble des choix techniques. Les réponses sont chiffrées en base de données, les données de recherche sont séparées et anonymisées, et la plateforme intègre les droits RGPD : export des données personnelles, rectification du profil et suppression de compte.

## Notre contribution

TelesCoop a conçu et développé l'ensemble de la plateforme : une API Django couplée à une interface Vue.js 3, avec un système de questionnaire dynamique basé sur SurveyJS. L'application intègre la sauvegarde automatique des réponses, la visualisation des résultats sous forme de graphiques interactifs.
