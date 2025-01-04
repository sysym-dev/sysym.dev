---
title: Cara Deploy Ke Subdirektori di Netlify
tags: [netlify]
date: 2025-01-05 04:20:00 +0700
images:
- /images/posts/netlify-deploy-subdirektori/thumbnail.jpg
---

Ini adalah cara saya men-deploy 2 situs Netlify, yaitu `1001-tools` dan `todo`. Kedua situs tersebut itu ingin saya deploy ke subdirektori dari situs netlify Utama, yaitu `sysysm.dev`.

<!--more-->

Awalnya, `1001-tools` alamat deploynya adalah `1001-tools.netlify.app` dan `todo` alamat deploynya adalah `sysym-todo.netlify.app`

Nantinya, kedua situs tersebut akan dapat diakses dengan alamat berikut:

- `1001-tools` -> `sysysm.dev/1001-tools`
- `todo` -> `sysysm.dev/todo`

Di netlify, untuk deploy ke subdirektori dapat dilakukan dengan membuat proxy yang mengarahkan path tertentu ke situs Netlify lain.

Caranya,  tambahkan file `_redirects` di root direktori situs utama, dalam hal ini di `sysysm.dev`. File ini berisi daftar path subdirektori dan tujuannya.

Syntax.

```bash
/path/*  situs-netlify-tujuan.netlify.app/:splat  200
```

Contoh.

```bash
/1001-tools/*  https://1001-tools.netlify.app/:splat  200
/todo/*  https://sysym-todo.netlify.app/:splat  200
```

Deploy ulang situs utama (`sysym.dev`). Kemudian coba akses ke subdirektori yang telah ditambahkan, seharusnya akan diarahkan ke situs Netlify lain sesuai yang ditentukan di file `_redirects`.