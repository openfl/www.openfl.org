---
layout: default
title: Home
weight: 0
---

### Developer Spotlight

{% for post in site.categories["spotlight"] limit:4 %}
  <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

### Showcase

{% for showcase in site.data.showcase limit:1 %}
  <p>{{ showcase.title }}</p>
{% endfor %}

### Latest Updates

{% for post in site.posts limit:5 %}
  <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

## Cross-Platform

Build games and applications for almost every platform imaginable -- Windows, Mac, iOS, Android, BlackBerry, Tizen, Flash and even HTML5. Bring your creative vision to life, on desktops, tablets, phones, even consoles. Publish to Steam, Amazon, OUYA... almost anywhere.

## Open-Source

Unlock potential with an open, hackable platform that is 100% free and open-source, backed by a passionate and responsive developer community. Delve deep when you want the power or flexibility of native codebase, but keep your hands clean when you are focused on content.

## Easy-to-Use

Accelerate your workflow with the fast, easy-to-use Flash API, as well as integrated support for SWF file assets, allowing use of the Flash editing environment directly. Build content in weeks instead of months, using a powerful and flexible programming language.
