---
layout: default
title: Blog
weight: 1
permalink: blog/
---

<div id="home">
  <h1>Blog Posts</h1>
  <ul class="posts">
    {% for post in site.posts %}
    {% if post.categories contains "showcase" %}
    {% else %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
    {% endfor %}
  </ul>
</div>