---
layout: default
title: Showcase
weight: 2
permalink: showcase/
---

<div id="home">
  <h1>Blog Posts</h1>
  <ul class="posts">
    {% for post in site.categories["showcase"] %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>