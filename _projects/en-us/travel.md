---
layout: page
title: Travel Gallery 🌍✈️
description: Germany, Austria, Croatia, San Francisco, Nova Scotia, Prague, Greece
img: assets/img/headers/resized/travel.jpg
importance: 3
category: fun
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/life/travel/2025-greece/IMG_4139.JPEG" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/life/travel/2025-prague/IMG_2778.JPEG" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/life/travel/2025-prague/IMG_2877.PNG" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/life/travel/2025-prague/IMG_2742.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="image-gallery">
  {% assign images = site.static_files | where: "path", "/assets/img/travel" %}
  {% for file in site.static_files %}
    {% if file.path contains '/assets/img/travel/' and file.extname == '.jpg' %}
      <div class="gallery-item">
        <img src="{{ file.path | relative_url }}" alt="Travel photo">
      </div>
    {% endif %}
  {% endfor %}
</div>
