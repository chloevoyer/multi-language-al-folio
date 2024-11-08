---
page_id: publications
layout: page
permalink: /publications/
title: publications
description: "* indique une contribution égale et une co-auteur principal"
nav: true
nav_order: 4
---

<p>Veuillez consulter <a href="https://scholar.google.fr/citations?user=g53kVKwAAAAJ&hl=fr&oi=sra" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar"></i>&nbsp;Google Scholar</a> pour une liste plus à jour de mes publications.</p>

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
