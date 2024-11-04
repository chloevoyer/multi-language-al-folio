---
layout: post
title: Conférences de psychologie 🎙️
icon: # fa-solid fa-microphone fa-solid fa-presentation-screen OR fa-podium-star 
date: 2024-10-15 11:12:00
description: Une liste non exhaustive de conférences dans le domaine de la psychologie
tags: conférences
categories: recherche
lang: fr-ca
featured: true
related_posts: true
pretty_table: true
---

## Une liste non exhaustive de conférences dans le domaine de la psychologie

{% include conferences-list.html %}

<table
  data-click-to-select="true"
  data-height="460"
  data-pagination="true"
  data-search="true"
  data-toggle="table"
  data-url="{{ '_data/fr-ca/conferences_fr-ca.json' | relative_url }}">
    <thead class="table-light">
      <tr class="table-header-row">
        <th data-field="acronym" data-halign="left" data-align="left" data-sortable="true">Abbreviation</th>
        <th data-field="name" data-formatter="conferenceNameFormatter" data-sortable="true">Conference Name</th>
        <th data-field="location" data-halign="left" data-align="left" data-sortable="true">Location</th>
        <th data-field="date" data-halign="left" data-align="left" data-sortable="true">Date</th>
        <th data-field="theme" data-halign="left" data-align="left" data-sortable="true">Theme</th>
      </tr>
    </thead>
  </table>
</div>

<div class="caption" style="text-align: left;">
    {{- site.data[site.active_lang].strings.footer.last_updated }}{% include date_format.liquid format="short" date=page.last_updated %}
</div>
