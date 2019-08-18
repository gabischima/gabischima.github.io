---
layout: default
title: Contato

section: contact
---

<div class="gsm-contact">
  <div class="gsm-contact__social">
    <div class="gsm-contact__title">
      Social
    </div>
    <div>
      {% for midia in site.social_midias %}
      <a href="{{midia.url}}" target="_blank" rel="noopener noreferrer">
        {%- include social-midias/{{midia.title}}.svg -%}
      </a>
      {% endfor %}
    </div>
  </div>
</div>