---
page_id: publications
layout: page
permalink: /papers/
title: papers
description: "* denotes equal contribution and joint lead authorship"
nav: true
nav_order: 4
---

<p>Please see my <a href="https://scholar.google.ca/citations?user=g53kVKwAAAAJ&hl" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar"></i>&nbsp;Google Scholar</a> for the most up-to-date list of publications.</p>

{% include bib_search.liquid %}

<div class="publications">
  {% capture articles %}{% bibliography --query @article %}{% endcapture %}
  {% if articles.size > 1 %}
    <h1>{{ site.data[site.active_lang].strings.publications.articles }}</h1>
    {{ articles }}
  {% endif %}

  {% capture inproceedings %}{% bibliography --query @inproceedings %}{% endcapture %}
  {% if inproceedings.size > 1 %}
    <h2>{{ site.data[site.active_lang].strings.publications.inproceedings }}</h2>
    {{ inproceedings }}
  {% endif %}

  {% capture preprints %}{% bibliography --query @preprint %}{% endcapture %}
  {% if preprints.size > 1 %}
    <h1>{{ site.data[site.active_lang].strings.publications.preprints }}</h1>
    {{ preprints }}
  {% endif %}

  {% capture unpublished %}{% bibliography --query @unpublished %}{% endcapture %}
  {% if unpublished.size > 1 %}
    <h1>{{ site.data[site.active_lang].strings.publications.unpublished }}</h1>
    {{ unpublished }}
  {% endif %}
</div>