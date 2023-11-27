---
layout: archive
title: "Work Exp"
permalink: /work_exp/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.work_exp reversed %}
  {% include archive-single.html %}
{% endfor %}
