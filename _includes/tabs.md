{% if tab_uuid %}{% assign tab_uuid = tab_uuid | plus: 1 %}{% else %}{% assign tab_uuid = 0 %}{% endif %}
{% if tab_set_name %}{% assign tab_set_id = tab_set_name | default: "tabset" | slugify %}{% else %}{% assign tab_set_id = "tabset" | append: tab_uuid %}{% endif %}
<div id="{{tab_set_id}}">
	<ul class="nav nav-tabs">
{% for name in tab_names %}
		<li{%if forloop.first%} class="active"{%endif%}><a data-toggle="tab" href="#{{tab_set_id}}-{{forloop.index0}}">{{ name | strip }}</a></li>
{% endfor %}
	</ul>
	<div class="tab-content">
{% for content in tab_contents %}
		<div id="{{tab_set_id}}-{{forloop.index0}}" class="tab-pane{%if forloop.first%} active{%endif%}">
		{{ content | markdownify }}
		</div>
{% endfor %}
	</div>
</div>