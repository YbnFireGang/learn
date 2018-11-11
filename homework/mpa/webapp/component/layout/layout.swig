<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}{% endblock %}</title>
    {% block head %}{% endblock %}
</head>
<body>
{% include "../header/header.swig" %}
{% block content %}{% endblock %}
{% include "../footer/footer.swig" %}
</body>
</html>
{% block scripts %}
    <!--injectjs-->
{% endblock %}