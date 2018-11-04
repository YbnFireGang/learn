<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}{% endblock %}</title>
    {% block head %}{% endblock %}
</head>
<body>
{% include "../../component/demo-header/index.swig" %}
{% block content %}{% endblock %}
{% include "../../component/demo-footer/index.swig" %}
</body>
</html>