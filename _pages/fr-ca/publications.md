---
page_id: publications
layout: page
permalink: /publications/
title: publications
description: "* indique une contribution égale et une co-auteur principal."
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<p>Veuillez consulter mon <a href="https://scholar.google.fr/citations?user=g53kVKwAAAAJ&hl=fr&oi=sra" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar"></i>&nbsp;Google Scholar</a> pour la liste la plus à jour des publications.</p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">
    <h1>articles de revues à comité de lecture</h1>
    {% bibliography --query @article %}

    <h2>actes de conférence</h2>
    {% bibliography --query @inproceedings %}

    <h1>pré-impressions</h1>
    {% bibliography --query @preprint %}

    <h1>manuscrits en préparation</h1>
    {% bibliography --query @unpublished %}

</div>
