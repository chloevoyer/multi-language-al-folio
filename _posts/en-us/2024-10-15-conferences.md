---
layout: post
title: Psychology Conferences 🎙️
icon: # fa-solid fa-microphone fa-solid fa-presentation-screen OR fa-podium-star 
date: 2024-10-15 11:12:00
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

<div class="table-responsive">
  <table
    data-click-to-select="true"
    data-height="1000"
    data-pagination="true"
    data-search="true"
    data-toggle="table"
    data-url="{{ '/assets/json/en-us/conferences_en-us.json' | relative_url }}">
    <caption>{{- site.data[site.active_lang].strings.footer.last_updated }}{% include date_format.liquid format="short" date=post.time %}</caption>
    <thead class="table-light">
      <tr class="table-header-row">
        <th data-field="abbreviation" data-halign="left" data-align="left" data-sortable="true">Abbreviation</th>
        <th data-field="title" data-formatter="conferenceNameFormatter">Conference Name</th>
        <th data-field="location" data-halign="left" data-align="left" data-sortable="true">Location</th>
        <th data-field="date" data-halign="left" data-align="left" data-sortable="true">Date</th>
        <th data-field="theme" data-halign="left" data-align="left" data-sortable="true">Theme</th>
      </tr>
    </thead>
  </table>
</div>

<script>
  function conferenceNameFormatter(value, row) {
    if (row.url) {
      return '<a href="' + row.url + '" target="_blank" title="' + row.url + '">' + value + '</a>';
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
