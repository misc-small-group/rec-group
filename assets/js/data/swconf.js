---
layout: compress
permalink: '/:path/swconf.js'
---
/* Keep static offline resources; relative_url in deny_paths alone cannot
   exclude /api/ on another origin when the site baseurl is /rec-group. */
const swconf = {
  {% if site.pwa.cache.enabled %}
  cacheName: 'chirpy-{{ "now" | date: "%s" }}',
  resources: [
    {{ '/assets/css/:THEME.css' | replace: ':THEME', site.theme | relative_url | jsonify }},
    {{ '/' | relative_url | jsonify }},
    {% for tab in site.tabs %}{{ tab.url | relative_url | jsonify }},{% endfor %}
    {% assign cached_files = site.static_files | where: 'swcache', true %}
    {% for file in cached_files %}{{ file.path | relative_url | jsonify }},{% endfor %}
  ],
  interceptor: {
    paths: ['/api/', {% for path in site.pwa.cache.deny_paths %}{% unless path == empty %}{{ path | relative_url | jsonify }},{% endunless %}{% endfor %}],
    urlPrefixes: [
      {% if site.data.assistant.api_base %}{{ site.data.assistant.api_base | jsonify }},{% endif %}
      {% if site.analytics.goatcounter.id and site.pageviews.provider == 'goatcounter' %}'https://{{ site.analytics.goatcounter.id }}.goatcounter.com/counter/',{% endif %}
    ]
  },
  purge: false
  {% else %}
  purge: true
  {% endif %}
};
