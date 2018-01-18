{% if ts %}{% assign typescript = ts %}{% endif %}
{% if hx %}{% assign haxe = hx %}{% endif %}
{% if js %}{% assign javascript = js %}{% endif %}

{% assign tab_names = site.emptyArray %}
{% assign tab_contents = site.emptyArray %}
{% if typescript %}{% assign tab_names = tab_names | push: "TypeScript" %}{% assign tab_contents = tab_contents | push: typescript %}{% endif %}
{% if haxe %}{% assign tab_names = tab_names | push: "Haxe" %}{% assign tab_contents = tab_contents | push: haxe %}{% endif %}
{% if es6 %}{% assign tab_names = tab_names | push: "ES6" %}{% assign tab_contents = tab_contents | push: es6 %}{% endif %}
{% if es5 %}{% assign tab_names = tab_names | push: "ES5" %}{% assign tab_contents = tab_contents | push: es5 %}{% endif %}
{% if javascript %}{% assign tab_names = tab_names | push: "JavaScript" %}{% assign tab_contents = tab_contents | push: javascript %}{% endif %}
{% if bash %}{% assign tab_names = tab_names | push: "Bash" %}{% assign tab_contents = tab_contents | push: bash %}{% endif %}

{% if tab_names.size > 0 %}{% if tab_names.size == 1 %}
{{ tab_contents[0] }}
{% else %}
{% include tabs.md %}
{% endif %}{% endif %}

{% assign ts = nil %}{% assign hx = nil %}{% assign js = nil %}{% assign typescript = nil %}{% assign haxe = nil %}{% assign es6 = nil %}{% assign es5 = nil %}{% assign javascript = nil %}{% assign bash = nil %}