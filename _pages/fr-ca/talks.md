---
page_id: talks
layout: page
title: présentations
permalink: /talks/
description: "* indique une contribution égale et une co-auteur principal."
nav: true
nav_order: 5
pretty_table: true
---

<p>Veuillez consulter <a href="https://scholar.google.fr/citations?user=g53kVKwAAAAJ&hl=fr&oi=sra" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar"></i>&nbsp;Google Scholar</a> pour une liste plus à jour de mes publications.</p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1>présentations orales</h1>
{% bibliography --query @presentation %}
</div>

<h2>conférences suivies</h2>

<div class="conférences">

<div class="table-responsive table-borderless">
<table class="table-borderless" id="table" data-toggle="table" data-url="{{ '/assets/json/fr-ca/conferences_attended_data-fr-ca.json' | relative_url }}">
  <thead>
    <tr>
      <th data-field="date">Date</th>
      <th data-field="conference">Conférence</th>
      <th data-field="location">Emplacement</th>
    </tr>
  </thead>
</table>
</div>
