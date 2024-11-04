---
layout: post
title: Psychology Conferences 🎙️
icon: # fa-solid fa-microphone fa-solid fa-presentation-screen OR fa-podium-star 
date: 2024-10-15 11:12:00
last_updated: 2024-11-03 11:12:00
description: A non-exhaustive list of conferences in the field of psychology
tags: conferences
categories: research
lang: en-us
related_posts: true
pretty_table: true
featured: true
suggestions_form: true
---

## A non-exhaustive list of upcoming psychology conferences

{% include conferences-list.html %}

<div class="table-responsive">
  <table
    id="conference-table"
    data-click-to-select="true"
    data-pagination="true"
    data-search="true"
    data-toggle="table"
    data-maintain-meta-data="true"
    data-url="{{ '/assets/json/en-us/conferences-en-us.json' | relative_url }}">
    <thead class="table-light">
      <tr class="table-header-row">
        <th 
          data-field="acronym" 
          data-halign="left" 
          data-align="left" 
          data-sortable="true"
          data-width="120"
          data-width-unit="px">Abbreviation</th>
        <th 
          data-field="name" 
          data-formatter="conferenceNameFormatter" 
          data-sortable="true"
          data-width="40"
          data-width-unit="%">Conference Name</th>
        <th 
          data-field="date" 
          data-halign="left" 
          data-align="left" 
          data-sortable="true"
          data-width="140"
          data-width-unit="px">Date</th>
        <th 
          data-field="location" 
          data-halign="left" 
          data-align="left" 
          data-sortable="true"
          data-width="25"
          data-width-unit="%">Location</th>
      </tr>
    </thead>
  </table>
</div>

<style>
/* Ensure consistent column widths and proper text wrapping */
.bootstrap-table .fixed-table-container .table thead th,
.bootstrap-table .fixed-table-container .table tbody td {
  white-space: normal;
  vertical-align: middle;
  word-wrap: break-word;
}

/* Maintain table structure */
.bootstrap-table .fixed-table-container {
  overflow: visible;
}

/* Ensure proper padding and alignment */
.bootstrap-table .fixed-table-container .table td,
.bootstrap-table .fixed-table-container .table th {
  padding: 0.75rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .bootstrap-table .fixed-table-container .table thead th,
  .bootstrap-table .fixed-table-container .table tbody td {
    min-width: 100px;  /* Minimum width for mobile */
  }
}
</style>

<div class="caption" style="text-align: left;">
    {{- site.data[site.active_lang].strings.footer.last_updated }}{% include date_format.liquid format="short" date=page.last_updated }}
</div>
