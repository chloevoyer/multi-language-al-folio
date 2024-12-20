---
layout: distill
title: Intégration Garmin 🡒 Notion ⌚
toc: true
icon: # ti-icon-brand-notion
date: 2024-09-01 11:12:00
description: Synchronisez automatiquement vos activités Garmin avec Notion grâce à des workflows automatisés
tags: lifestyle productivity
categories: tools
featured: false
thumbnail: assets/img/thumbnails/garmin-run.png
lang: fr-ca
---

Ce projet connecte vos activités Garmin et vos records personnels à votre base de données Notion, vous permettant de suivre vos métriques de performance en un seul endroit.

## Fonctionnalités ✨

- Synchronisation automatique des activités Garmin vers Notion
- Extraction des records personnels Garmin comme le kilomètre le plus rapide et la plus longue sortie vélo
- Configuration facile avec des instructions claires et un minimum de programmation requis

## Prérequis 🛠️

- Un compte Notion avec accès API
- Un compte Garmin Connect pour extraire les données d'activité
- Si vous souhaitez synchroniser vos séances Peloton avec Garmin, consultez peloton-to-garmin

## Pour commencer 🎯

Suivez ces étapes pour configurer l'intégration :

### 1. Configurer les secrets d'environnement

Assurez-vous que vos secrets d'environnement sont correctement configurés pour un accès sécurisé aux données.

### 2. Créer un token Notion

- Rendez-vous sur Notion Integrations
- Créez une nouvelle intégration et copiez le token d'intégration
- Partagez l'intégration avec la base de données cible dans Notion

### 3. Exécuter les scripts localement

Si vous ne souhaitez pas utiliser le workflow automatique :

- Exécutez [garmin-activities.py](https://github.com/chloevoyer/garmin-to-notion/blob/main/garmin-activities.py) pour synchroniser vos activités Garmin vers Notion
  `python garmin-activities.py`
- Exécutez [person-records.py](https://github.com/chloevoyer/garmin-to-notion/blob/main/personal-records.py) pour extraire les records d'activité (par exemple, course la plus rapide, sortie de vélo la plus longue)
   `python personal-records.py`

## Exemple de configuration 📝

Vous pouvez personnaliser les scripts selon vos besoins en modifiant les variables d'environnement et les paramètres de la base de données Notion.

Voici une capture d'écran de mon tableau de bord Notion :

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/thumbnails/notion-template.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

Mon modèle Notion est disponible gratuitement et peut être dupliqué dans votre Notion [ici](https://www.notion.so/fr/templates/fitness-tracker-738)
