---
layout: archive
title: "Undergraduate Thesis"
permalink: /undergraduate_thesis/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.undergraduate_thesis reversed %}
  {% include archive-single.html %}
{% endfor %}
