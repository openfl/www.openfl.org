---
layout: default
title: Showcase
weight: 2
permalink: showcase/
---

# Showcase

{% for showcase in site.data.showcase %}
  <p>Title: {{ showcase.title }}<br/>Developer: {{ showcase.developer }}</p>
{% endfor %}