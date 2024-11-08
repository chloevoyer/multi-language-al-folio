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
    <h1>{{ site.data[site.active_lang].strings.publications.articles }}</h1>
    {% bibliography --query @article %}
    <h2>{{ site.data[site.active_lang].strings.publications.inproceedings }}</h2>
    {% bibliography --query @inproceedings %}
    <h1>{{ site.data[site.active_lang].strings.publications.preprints }}</h1>
    {% bibliography --query @preprint %}
    <h1>{{ site.data[site.active_lang].strings.publications.unpublished }}</h1>
    {% bibliography --query @unpublished %}
</div>
