---
layout: archive
title: "Personal Game Project"
permalink: /personal_game_project/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

This page shows my personal game project.

In most of them, I do some design job.

{% include base_path %}

{% for post in site.personal_game_project reversed %}
  {% include archive-single.html %}
{% endfor %}
