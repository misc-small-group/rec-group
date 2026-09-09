---
layout: page
title: Posts
icon: fas fa-book-open
order: 0
permalink: /posts/
---

<p>围绕推荐、排序、检索与生成式推荐的论文速报。先看问题与方法，再回到原文核对证据。</p>
<p><a href="{{ '/assistant/' | relative_url }}">打开论文助手 →</a> · <a href="{{ '/about/' | relative_url }}">了解小组与参与方式</a></p>

<div class="paper-library">
{% for post in site.posts %}
  <article class="mb-4 pb-4 border-bottom">
    <div class="text-muted small mb-2">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y-%m-%d' }}</time>
      {% if post.institutions and post.institutions.size > 0 %} · {{ post.institutions | join: ' / ' | escape }}{% endif %}
    </div>
    <h2 class="h5 mt-0"><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h2>
    <p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 | escape }}</p>
    <div class="small">
      {% for tag in post.tags %}<span class="me-2 text-muted">#{{ tag | escape }}</span>{% endfor %}
    </div>
    {% if post.arxiv_id %}
    <div class="small mt-2"><a href="{{ '/assistant/' | relative_url }}?paper={{ post.arxiv_id | url_encode }}">围绕这篇论文提问 →</a></div>
    {% endif %}
  </article>
{% else %}
  <p>论文还在整理中。欢迎先了解小组的阅读方向。</p>
{% endfor %}
</div>
