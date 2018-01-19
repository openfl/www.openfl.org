{% if embed %}
{% if embed_uuid %}{% assign embed_uuid = embed_uuid | plus: 1 %}{% else %}{% assign embed_uuid = 0 %}{% endif %}
{% assign width = include.width | default: 550 %}
{% assign height = include.height | default: 400 %}
<div id="embed-{{embed_uuid}}" class="openfl-embed" style="max-width: {{width}}px; max-height: {{height}}px;"></div>
<script type="text/javascript">
(function () {
	{{ embed }}
	{% unless include.nostage %}
	var stage = new Stage ({{width}}, {{height}}, {% if include.color %}parseInt ("0x{{include.color}}"){% else %}0xFFFFFF{% endif %}, App, { renderer: "{{include.renderer|default:"dom"}}" });
	document.getElementById ("embed-{{embed_uuid}}").appendChild (stage.element);
	{% endunless %}
})();
</script>
{% assign embed = nil %}
{% endif %}