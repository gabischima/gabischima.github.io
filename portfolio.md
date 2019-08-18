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
  </li>
  {% endfor %}
</ul>