---
title: Test note 2
date: 2023-09-05
---

Test note 2 content

Текст со сноской [^1]

{% quote "Дядюшка Боб", "https://ya.ru" %}
<p>Тестовая цитата</p>
<p>Новая строка</p>
{% endquote %}

{% figure "Листинг 1" %}

```js
console.log(123)
```

{% endfigure %}

{% figure "Очень умная подпись" %}
  {% image "https://images.unsplash.com/photo-1608178398319-48f814d0750c", "Alt text" %}
{% endfigure %}

[^1]: Описание сноски 1
