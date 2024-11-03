---
layout: post
title: Psychology Conferences 🎙️
icon: # fa-solid fa-microphone fa-solid fa-presentation-screen OR fa-podium-star 
date: 2024-10-15 11:12:00
last_updated: 2024-11-02
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
    data-pagination="true"
    data-search="true"
    data-toggle="table"
    data-url="{{ '/assets/json/en-us/conferences.json' | relative_url }}">
    <caption>{{- site.data[site.active_lang].strings.footer.last_updated }}{% include date_format.liquid format="short" date=page.last_updated %}</caption>
    <thead class="table-light">
      <tr class="table-header-row">
        <th data-field="abbreviation" data-halign="left" data-align="left" data-sortable="true">Abbreviation</th>
        <th data-field="title" data-formatter="conferenceNameFormatter" data-sortable="true">Conference Name</th>
        <th data-field="location" data-halign="left" data-align="left" data-sortable="true">Location</th>
        <th data-field="date" data-halign="left" data-align="left" data-sortable="true">Date</th>
        <th data-field="theme" data-halign="left" data-align="left" data-sortable="true">Theme</th>
      </tr>
    </thead>
  </table>
</div>

{% include conferences-list.html %}


<iframe 
  src="https://www.notion.so/chloevoyer/3ad05bf6976844ce82b360c234b3f0e0?v=5addbeae984a4a07aad786ce283d2427"
  width="100%" 
  height="500px" 
  frameborder="0"
  style="background: transparent; border: 1px solid #ccc;">
</iframe>
