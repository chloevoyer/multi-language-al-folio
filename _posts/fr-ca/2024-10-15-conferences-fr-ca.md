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

{{- site.data[site.active_lang].strings.footer.last_updated }}{% include date_format.liquid format='long' date=page.last_updated -%}

<table
  data-click-to-select="true"
  data-height="460"
  data-pagination="true"
  data-search="true"
  data-toggle="table"
  data-url="{{ '/assets/json/fr-ca/conferences.json' | relative_url }}">
  <caption>{{- site.data[site.active_lang].strings.footer.last_updated }} Dernière mise à jour le 15 octobre 2024 {% include date_format.liquid format='long' date=page.last_updated -%}</caption>
  <thead>
    <tr>
      <th data-field="Abbreviation" data-halign="left" data-align="left" data-sortable="true">Abbreviation</th>
      <th data-field="Conference Name" data-formatter="conferenceNameFormatter">Conference Name</th>
      <!-- <th data-field="Submission Deadline" data-halign="right" data-align="left" data-sortable="true">Submission Deadline</th> -->
      <th data-field="Location" data-halign="left" data-align="left" data-sortable="true">Location</th>
      <th data-field="Date" data-halign="left" data-align="left" data-sortable="true">Date</th>
      <!-- <th data-field="Discipline" data-halign="left" data-align="left" data-sortable="true">Discipline</th>
      <th data-field="Local vs. Abroad" data-halign="left" data-align="left" data-sortable="true">Local vs. Abroad</th>
      <th data-field="Modality" data-halign="left" data-align="left" data-sortable="true">Modality</th> -->
      <th data-field="Theme" data-halign="left" data-align="left" data-sortable="true">Theme</th>
    </tr>
  </thead>
</table>

<script>
  $(function() {
    $('table').on('click', 'a', function(e) {
      e.stopPropagation();
    });
  });
</script>

<script>
  function conferenceNameFormatter(value, row) {
    if (row.URL) {
      return '<a href="' + row.URL + '" target="_blank" title="' + row.URL + '">' + value + '</a>';
    }
    return value;
  }

  // Prevent link clicks from interfering with table sorting
  $(function() {
    $('table').on('click', 'a', function(e) {
      e.stopPropagation();
    });
  });
</script>
