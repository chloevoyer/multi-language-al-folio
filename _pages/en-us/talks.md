---
page_id: talks
layout: page
title: talks
permalink: /talks/
description: "* denotes equal contribution and joint lead authorship."
nav: true
nav_order: 5
pretty_table: true
---

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1>oral presentations</h1>
{% bibliography --query @presentation %}
</div>

<h2>conferences attended</h2>

<div class="conferences">

<div class="table-responsive table-borderless">
<table class="table-borderless" id="table" data-toggle="table" data-url="{{ '/assets/json/en-us/table_data_en-us.json' | relative_url }}">
  <thead>
    <tr>
      <th data-field="date">Date</th>
      <th data-field="conference">Conference</th>
      <th data-field="location">Location</th>
    </tr>
  </thead>
</table>
</div>
