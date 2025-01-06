---
title: Cara Mengatasi 404 Di Vue Router Yang Dideploy Di Netlify
tags: [netlify, vue]
date: 2025-01-07 06:35:00 +0700
images:
- /images/posts/netlify-404-vue-router/thumbnail.jpg
---

Masalah 404 pada halaman Vue Router yang dideploy di Netlify terjadi karena Netlify tidak secara otomatis mengarahkan semua halaman ke file `index.html`.

<!--more-->

Agar Vue Router dapat berfungsi dengan benar, setiap halaman harus diarahkan ke file `index.html`.

Untuk mengatasinya buatlah *rewrite proxy* di Netlify dengan langkah berikut:

1. Buat file bernama `_redirects` di direktori `public` pada project Vue.
2. Isi file tersebut dengan kode bawah ini.

```bash
/*    /index.html    200
```

Dengan menambahkan rewrite proxy ini, setiap halaman project yang diakses di Netlify akan diarahkan ke file `index.html`, sehingga Vue Router dapat berfungsi dengan benar.

> Pastikan file `_redirects` disertakan dalam root project ketika project dibuild, misalnya di direktori `public`.

Sumber : https://docs.netlify.com/routing/redirects/rewrites-proxies