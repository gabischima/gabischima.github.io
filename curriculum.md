---
layout: default
title: Currículo

section: curriculum
---

<ul class="gsm-curriculum">
    {% for session in site.curriculum %}
    <li class="gsm-curriculum__item">
      <p class="gsm-curriculum__item__title">
        {{ session.title }}
      </p>
      <ul class="gsm-curriculum__item__content">
        {% for item in session.items %}
        <li>
          {{ item.title }}
          {% if item.subsections %}
          <ul>
            {% for subsection in item.subsections %}
            <li>{{ subsection }}</li>
            {% endfor %}
          </ul>
          {% endif %}
        </li>
        {% endfor %}
      </ul>
    </li>
    {% endfor %}
</ul>