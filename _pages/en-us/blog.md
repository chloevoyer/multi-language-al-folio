---
page_id: blog
layout: default
permalink: /blog/
title: blog
blog_name: chloe-voyer
description: an open space for academic research
display_tags:
  - funding
  - communication
  - lifestyle
  - literature-review
display_categories:
  - research
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = page.blog_name | size %}
{% assign blog_description_size = page.description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
    <h1>{{ page.blog_name }}</h1>
    <h2>{{ page.description }}</h2>
  </div>
  {% endif %}

{% if page.display_tags and page.display_tags.size > 0 or page.display_categories and page.display_categories.size > 0 %}

  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in page.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
      {% if page.display_categories.size > 0 and page.display_tags.size > 0 %}
        <p>&bull;</p>
      {% endif %}
      {% for category in page.display_categories %}
        <li>
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
  {% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" | where: "lang", site.active_lang %}
{% if featured_posts.size > 0 %}
<br>

<div class="container featured-posts">
{% assign is_even = featured_posts.size | modulo: 2 %}
<div class="row row-cols-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %}">
{% for post in featured_posts %}
<div class="col mb-4">
<a href="{{ post.url | relative_url }}">
<div class="card hoverable">
<div class="row g-0">
<div class="col-md-12">
<div class="card-body">
<div class="float-right">
<i class="fa-solid fa-thumbtack fa-xs"></i>
</div>
<h3 class="card-title text-lowercase">{{ post.title }}</h3>
<p class="card-text">{{ post.description }}</p>

                    {% if post.external_source == blank %}
                      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
                    {% else %}
                      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                    {% endif %}
                    {% assign year = post.date | date: "%Y" %}

                    <p class="post-meta">
                      <i class="fa-solid fa-clock-four fa-sm"></i>  {{ read_time }}&nbsp;{{ site.data[site.active_lang].strings.blog_posts.read_time }}&nbsp; &middot; &nbsp;
                      <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                        <i class="fa-solid fa-calendar fa-sm"></i>  {{ year }} </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      {% endfor %}
      </div>
    </div>
    <hr>

{% endif %}

  <ul class="post-list">

    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts | where: "lang", site.active_lang %}
    {% else %}
      {% assign postlist = site.posts | where: "lang", site.active_lang %}
    {% endif %}

    {% for post in postlist %}

    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li>

{% if post.thumbnail %}

<div class="row">
          <div class="col-sm-9">
{% endif %}
        <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ read_time }}&nbsp; {{ site.data[site.active_lang].strings.blog_posts.read_time }} &nbsp; &middot; &nbsp;
        {% include date_format.liquid format="long" date=post.date %}
        {% if post.external_source %}
        &nbsp; &middot; &nbsp; {{ post.external_source }}
        {% endif %}
      </p>
      <p class="post-tags">
        <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
          <i class="fa-solid fa-calendar fa-sm"></i>  {{ year }} </a>

          {% if tags != "" %}
          &nbsp; &middot; &nbsp;
            {% for tag in post.tags %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl}}">
              <i class="fa-solid fa-hashtag fa-sm"></i>  {{ tag }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
              {% endfor %}
          {% endif %}

          {% if categories != "" %}
          &nbsp; &middot; &nbsp;
            {% for category in post.categories %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}">
              <i class="fa-solid fa-tag fa-sm"></i>  {{ category }}</a>
              {% unless forloop.last %}
                &nbsp;
              {% endunless %}
              {% endfor %}
          {% endif %}
    </p>

{% if post.thumbnail %}

</div>

  <div class="col-sm-3">
    <img class="card-img" src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; height: 90%" alt="image">
  </div>
</div>
{% endif %}
    </li>

    {% endfor %}

  </ul>

{% if page.pagination.enabled %}
{% include pagination.liquid %}
{% endif %}

</div>

<!-- conferences -->
<div class="conferences-container">
  <div class="filters">
    <select id="topicFilter" onchange="filterConferences()">
      <option value="">All Topics</option>
      {% assign all_topics = "" | split: "" %}
      {% for conf in site.data.conferences.conferences %}
        {% assign all_topics = all_topics | concat: conf.topics %}
      {% endfor %}
      {% assign unique_topics = all_topics | uniq | sort %}
      {% for topic in unique_topics %}
        <option value="{{ topic }}">{{ topic }}</option>
      {% endfor %}
    </select>

    <select id="formatFilter" onchange="filterConferences()">
      <option value="">All Formats</option>
      {% assign formats = site.data.conferences.conferences | map: 'format' | uniq | sort %}
      {% for format in formats %}
        {% if format != "" %}
          <option value="{{ format }}">{{ format }}</option>
        {% endif %}
      {% endfor %}
    </select>
  </div>

  <div class="conferences">
    {% assign conferences = site.data.conferences.conferences %}
    {% for conference in conferences %}
      <div class="conference-card" 
           data-topics="{{ conference.topics | join: ',' }}"
           data-format="{{ conference.format }}">
        <div class="conference-status {{ conference.status | downcase }}">
          {{ conference.status }}
        </div>
        <h2>{{ conference.name }}</h2>
        <div class="conference-dates">
          <strong>Event:</strong> 
          {{ conference.start_date | date: "%B %d, %Y" }}
          {% if conference.end_date %}
            - {{ conference.end_date | date: "%B %d, %Y" }}
          {% endif %}
        </div>

        {% if conference.application_deadline %}
          <div class="deadline">
            <strong>Deadline:</strong> {{ conference.application_deadline | date: "%B %d, %Y" }}
          </div>
        {% endif %}
        
        <div class="location">
          <strong>Location:</strong> {{ conference.city }}, {{ conference.country }}
        </div>
        
        <div class="details">
          <div class="format">{{ conference.format }}</div>
          <div class="type">{{ conference.acceptance_type }}</div>
        </div>
        
        <div class="topics">
          {% for topic in conference.topics %}
            <span class="topic-tag">{{ topic }}</span>
          {% endfor %}
        </div>
        
        {% if conference.comments != "" %}
          <div class="comments">
            {{ conference.comments }}
          </div>
        {% endif %}
        
        {% if conference.url != "" %}
          <a href="{{ conference.url }}" class="conference-link" target="_blank">Conference Website</a>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</div>

<style>
.conferences-container {
  padding: 2rem;
}

.filters {
  margin-bottom: 2rem;
}

.filters select {
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
}

.conferences {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.conference-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
}

.conference-status {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
}

.conference-status.done {
  background-color: #d1fae5;
  color: #065f46;
}

.conference-status.planned {
  background-color: #fef3c7;
  color: #92400e;
}

.conference-status.applied {
  background-color: #dbeafe;
  color: #1e40af;
}

.conference-dates, .deadline, .location, .details {
  margin: 1rem 0;
  font-size: 0.925rem;
}

.details {
  display: flex;
  gap: 1rem;
}

.format, .type {
  background-color: #f3f4f6;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.topic-tag {
  background-color: #e5e7eb;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
}

.comments {
  margin: 1rem 0;
  font-size: 0.875rem;
  color: #6b7280;
}

.conference-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.875rem;
  transition: background-color 0.2s;
}

.conference-link:hover {
  background: #1d4ed8;
}
</style>

<script>
function filterConferences() {
  const topicFilter = document.getElementById('topicFilter').value;
  const formatFilter = document.getElementById('formatFilter').value;
  
  document.querySelectorAll('.conference-card').forEach(card => {
    const topics = card.dataset.topics.split(',');
    const format = card.dataset.format;

    const matchesTopic = !topicFilter || topics.includes(topicFilter);
    const matchesFormat = !formatFilter || format === formatFilter;

    card.style.display = (matchesTopic && matchesFormat) ? 'block' : 'none';
  });
}
</script>
