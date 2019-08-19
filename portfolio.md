---
layout: default
title: Portfolio

section: portfolio
---

<ul class="gsm-portfolio">
  {% for item in site.portfolio %}
  <li class="gsm-portfolio__item">
    <p class="gsm-portfolio__item__title">
      {{ item.title }}
    </p>
    {% if item.subtitle %}
    <p class="gsm-portfolio__item__subtitle">
      {{ item.subtitle }}
    </p>
    {% endif %}
    <p class="gsm-portfolio__item__description">
      {{ item.description }}
    </p>
    {% if item.gallery %}
    <div class="gsm-gallery">
      <ul class="gsm-gallery__list _{{ item.gallery.direction }}">
      {% for url in item.gallery.images %}
      {% capture path %}/assets/images/portfolio/{{item.gallery.folder}}/{{ url }}{% endcapture %}
        <li class="gsm-gallery__list__item">
          <img src="{{ path | relative_url }}" id="{{item.gallery.folder}}{% if forloop.index0 < 10 %}0{% endif %}{{ forloop.index0 }}" gsm-modal-trigger>
        </li>
      {% endfor %}
      </ul>
    </div>
    {% endif %}
  </li>
  {% endfor %}
</ul>

<div class="gsm-modal">
  <div class="gsm-modal__close">
    {%- include close.svg -%}
  </div>
  <div class="gsm-modal__content" id="modalContent">
    <div class="gsm-modal__content__img">
      <img id="modalImg">
    </div>
  </div>
</div>

<script src="{{ "/assets/js/external/forEach.js " | prepend: site.baseurl }}"></script>
<script src="{{ "/assets/js/modal.js " | prepend: site.baseurl }}"></script>
