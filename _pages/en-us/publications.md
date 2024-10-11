---
page_id: publications
layout: page
permalink: /publications/
title: publications
description: "* denotes equal contribution and joint lead authorship."
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<p>Please see my <a href="https://scholar.google.ca/citations?user=g53kVKwAAAAJ&hl" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar"></i>&nbsp;Google Scholar</a> for the most up-to-date list of publications.</p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">
    
<h1>peer-reviewed journal articles</h1>
{% bibliography --query @article %}

<h2>conference proceedings</h2>
{% bibliography --query @inproceedings %}

<h1>preprints</h1>
{% bibliography --query @preprint %}

<h1>manuscripts in preparation</h1>
{% bibliography --query @unpublished %}

</div>
