---
title: Municipales 2026 Vélo Île-de-France
categories:
  - outil métier
  - cartographie
tags:
  - développement web
  - cartographie
  - association
  - écologie
  - sensibilisation
clientName: Collectif Vélo Île-de-France
clientDescription: Fondé en 2019, le Collectif Vélo Île-de-France rassemble 45 associations dans 160 communes, représentant 8 000 adhérent·es. Il œuvre à faire de la région un espace cyclable inclusif et sûr.
projectStack:
  - Astro
  - Tailwind CSS
  - DaisyUI
  - Leaflet
  - Django
  - DecapCMS
  - TypeScript
projectResume: Plateforme de suivi des engagements vélo des candidat·es aux municipales 2026 en Île-de-France
projectLink: https://municipales2026.velo-iledefrance.fr/
projectStatus: En cours
projectEnd: ''
projectThumbnail: ''
projectThumbnailAlt: ''
draft: false
---

## Le contexte

La commune est l'échelle déterminante pour le développement du vélo : pistes cyclables, sécurité routière, stationnement, éducation à la mobilité. À l'approche des municipales 2026, le Collectif Vélo Île-de-France souhaitait un outil pour recenser et rendre visibles les engagements des candidat·es en faveur du vélo sur l'ensemble des 8 départements franciliens.

## La solution

Nous avons développé une plateforme de recensement des engagements vélo des candidat·es aux municipales 2026 dans toute l'Île-de-France. Les associations locales interpellent les candidat·es de leur commune, recueillent leurs engagements, et les publient sur la plateforme. Les citoyen·nes peuvent ensuite consulter et comparer ces engagements ville par ville avant d'aller voter.

### Recensement des engagements

Le cœur de la plateforme est le système de collecte et de publication des engagements. Chaque engagement est associé à un·e candidat·e, une commune et des thématiques (infrastructure, sécurité, éducation, etc.), et peut être qualifié comme engagement propre du ou de la candidat·e ou comme réponse à une demande d'association. Les fiches par commune présentent l'ensemble des candidat·es et de leurs engagements, avec un système de filtrage par thématique et un accordéon pour les descriptions détaillées.

### Carte interactive

Une carte Leaflet offre une vue d'ensemble des communes couvertes. Les marqueurs sont regroupés par clustering et s'adaptent au niveau de zoom. Chaque popup affiche les statistiques de la commune et renvoie vers sa fiche détaillée.

### Recherche et navigation

Un moteur de recherche avec autocomplétion permet de trouver sa commune par nom ou code postal. Un annuaire classe l'ensemble des villes par département pour une navigation exhaustive.

### Chiffres clés

- **3 386 engagements** recensés
- **3 404 candidat·es** enregistré·es
- **1 971 communes** couvertes sur les 8 départements d'Île-de-France
- **45 associations** partenaires

### Export de données

La plateforme expose des endpoints JSON et CSV permettant aux associations et aux citoyen·es d'exploiter les données : engagements par candidat·e, candidat·es par ville, et export complet du jeu de données.

## Notre contribution

TelesCoop a conçu et développé l'ensemble de la plateforme : un frontend Astro avec carte Leaflet et clustering, un backend Django pour le formulaire de contact et l'envoi d'emails via Mailgun, et un pipeline d'import de données depuis des fichiers Excel. Le contenu est géré via DecapCMS et organisé par département, permettant au collectif de maintenir les données de manière autonome tout au long de la campagne électorale.
