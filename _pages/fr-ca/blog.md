---
page_id: blog
layout: default
permalink: /blog/
title: blogue
blog_name: chloé-voyer
description: un espace ouvert pour la recherche académique
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
  per_page: 5
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
          <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ site.data[site.active_lang].strings.blog_posts.tags[tag] | default: tag }}</a>
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
          <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ site.data[site.active_lang].strings.blog_posts.categories[category] | default: category }}</a>
        </li>
        {% unless forloop.last %}
          <p>&bull;</p>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", true | where: "lang", site.active_lang %}
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
                  {% assign read_time = post.content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
                  {% assign year = post.date | date: "%Y" %}
                  <p class="post-meta">
                    {{ read_time }}&nbsp;{{ site.data[site.active_lang].strings.blog_posts.read_time }}&nbsp; &middot; &nbsp;
                    <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
                      <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
                    </a>
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
  {% assign all_posts = site.posts | where: "lang", site.active_lang %}
  {% assign external_sources = site.external_sources[site.active_lang] | default: {} %}
  {% for source in external_sources %}
    {% assign all_posts = all_posts | concat: source.posts %}
  {% endfor %}
  
  {% assign sorted_posts = all_posts | sort: "date" | reverse %}

  {% for post in sorted_posts %}
    <li>
      {% if post.external_source %}
        <h3>
          <a class="post-title" href="{{ post.url }}" target="_blank">{{ post.title }}</a>
          <svg width="2rem" height="2rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </h3>
        <p class="post-meta">
          {% include date_format.liquid format="long" date=post.date %}
          &nbsp; &middot; &nbsp; {{ post.external_source }}
        </p>
      {% else %}
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
          {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
          {{ read_time }}&nbsp;{{ site.data[site.active_lang].strings.blog_posts.read_time }} &nbsp; &middot; &nbsp;
          {% include date_format.liquid format="long" date=post.date %}
        </p>
        <p class="post-tags">
          {% assign year = post.date | date: "%Y" %}
          <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl}}">
            <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
          </a>
          {% if post.tags.size > 0 %}
            &nbsp; &middot; &nbsp;
            {% for tag in post.tags %}
              <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-hashtag fa-sm"></i> {{ site.data[site.active_lang].strings.blog_posts.tags[tag] | default: tag }}
              </a>
              {% unless forloop.last %}&nbsp;{% endunless %}
            {% endfor %}
          {% endif %}
          {% if post.categories.size > 0 %}
            &nbsp; &middot; &nbsp;
            {% for category in post.categories %}
              <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl}}">
                <i class="fa-solid fa-tag fa-sm"></i> {{ site.data[site.active_lang].strings.blog_posts.categories[category] | default: category }}
              </a>
              {% unless forloop.last %}&nbsp;{% endunless %}
            {% endfor %}
          {% endif %}
        </p>
      {% endif %}

      {% if post.thumbnail %}
        <div class="row">
          <div class="col-sm-9">
            <!-- Post content -->
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
