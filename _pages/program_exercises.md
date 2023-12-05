---
layout: archive
title: "Program exercises"
permalink: /program_exercises/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.program_exercises reversed %}
  {% include archive-single.html %}
{% endfor %}
