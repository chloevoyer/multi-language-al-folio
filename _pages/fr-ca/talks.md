---
page_id: talks
layout: page
title: présentations
permalink: /talks/
description: "* indique une contribution égale et co-auteur principal"
nav: true
nav_order: 5
pretty_table: true
published: false
---

<p>Veuillez consulter <a href="https://scholar.google.fr/citations?user=g53kVKwAAAAJ&hl=fr&oi=sra" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar"></i>&nbsp;Google Scholar</a> pour une liste plus à jour de mes publications.</p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1>{{ site.data[site.active_lang].strings.talks.oral }}</h1>

{% bibliography --query @presentation %}

</div>

<h2 class="section-heading">{{ site.data[site.active_lang].strings.conferences_attended.heading }}</h2>

---

<div style="margin-bottom: 5rem;">
  <div class="table-responsive table-borderless">
    <table class="table-borderless"
           id="table"
           data-toggle="table"
           data-url="{{ '/assets/json/conferences_attended.json' | relative_url }}">
      <thead>
        <tr>
          <th data-field="date" data-formatter="dateFormatter">{{ site.data[site.active_lang].strings.conferences_attended.date }}</th>
          <th data-field="conference" data-formatter="conferenceFormatter">{{ site.data[site.active_lang].strings.conferences_attended.name }}</th>
          <th data-field="location" data-align="right">{{ site.data[site.active_lang].strings.conferences_attended.location }}</th>
        </tr>
      </thead>
    </table>
  </div>
</div>

<script>
  function dateFormatter(value, row) {
      const date = new Date(value);
      const month = date.toLocaleString('{{ site.active_lang }}', { month: 'short' });
      const year = date.getFullYear();
      {% if site.active_lang == 'fr-ca' %}
      return `${month.toLowerCase()} ${year}`;
      {% else %}
      return `${month} ${year}`;
      {% endif %}
  }

  function conferenceFormatter(value, row) {
      // Replace ordinal indicators including French "e " (with space)
      let formattedValue = value
          .replace(/(\d+)(st|nd|rd|th|er|e )/gi, function(match, number, ordinal) {
              // Preserve the space after 'e' if it exists
              const space = ordinal === 'e ' ? ' ' : '';
              return `${number}<sup>${ordinal.trim()}</sup>${space}`;
          });

      if (row.abbrv && row.url) {
          return `${formattedValue} (<a href="${row.url}" target="_blank">${row.abbrv}</a>)`;
      } else if (row.abbrv) {
          return `${formattedValue} (${row.abbrv})`;
      }
      return formattedValue;
  }
</script>
