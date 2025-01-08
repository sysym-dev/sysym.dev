---
title: Cara Menampilkan Post yang Dikelompokkan per Tahun di Hugo
tags: [hugo]
date: 2025-01-08 13:40:00 +0700
images:
- /images/posts/hugo-group-by-year/thumbnail.jpg
---

Pada artikel ini, saya akan membagikan tutorial tentang cara menampilkan post yang dikelompokkan per tahun di Hugo.

<!--more-->

Caranya adalah dengan menggunakan method `GroupByDate` pada `Pages`. Method ini akan menghasilkan `PageGroup` yang berisi daftar tahun yang memiliki post.

Tahun tersebut dapat diakses melalui `.Key`, untuk daftar post pada setiap tahun dapat diakses melalui `.Pages`.

```html
{{ range .Site.RegularPages.GroupByDate "2006" }}
  <h2>Tahun {{ .Key }}</h2>

  <ul>
    {{ range .Pages }}
    <li>
      <span>{{ .Date.Format "Jan 2" }}</span>
      <a href="{{ .Permalink }}">{{ .Title }}</a>
    </li>
    {{ end }}
  </ul>
{{ end }}
```