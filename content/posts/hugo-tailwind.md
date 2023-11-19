---
title: Cara Menggunakan Tailwind Di Hugo
tags: [tailwind, hugo]
date: 2023-11-19 10:00:00 +0700
---

Tailwind adalah *framework* yang menyediakan utilitas css untuk membuat desain pada web.

<!--more-->

Hugo adalah *SSG Generator* yang dibuat dalam bahasa Go.

Untuk menggunakan tailwind pada hugo caranya bisa menggunakan [hugo pipe](https://gohugo.io/hugo-pipes/) dan postcss.

Postcss adalah alat untuk mentransformasi kode css menggunakan *plugin-plugin* yang disediakan, salah satunya tailwind.

Langsung saja berikut langkah-langkah menggunakan tailwind di hugo.

## Instal Tailwind dan PostCSS

Masuk ke direktori proyek hugo. Install tailwind dan postcss menggunakan `npm`.

```bash
npm install -D tailwindcss postcss autoprefixer
```

Kemudian buat file konfigurasi tailwind dan postcss menggunakan perintah berikut.

```bash
npx tailwindcss init -p
```

Ada dua file yang otomatis dibuat, `postcss.config.js` dan `tailwind.config.js`.

Buka file `tailwind.config.js`, di properti `content`, tambahkan direktori atau file yang nantinya akan digunakan tailwind di sana.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Menambahkan Tailwind

Buat file css dengan nama `style.css` (atau bisa nama yang lain) di dalam direktori `assets/css`.

```bash
mkdir -p assets/css
touch assets/css/style.css
```

Buka file `style.css`, tambahkan direktif tailwind.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Menggunakan Tailwind

Selanjutnya buka file layout yang berisi tag head untuk menggunakan css. Misal di proyek saya filenya di `layouts/partials/head/link.html`.

Tambahkan file css ke tag `link` dengan menggunakan `resources` dari file `style.css` yang berisi tailwind yang sudah dibuat pada langkah sebelumnya.

```html
{{ with resources.Get "css/style.css" | postCSS }}
  <link rel="stylesheet" href="{{ .RelPermalink }}">
{{ end }}
```

Selanjutnya coba anda tambahkan class tailwind pada file tertentu, misal `layouts/index.html`, seharusnya tailwind sudah dapat digunakan.

```html
<h1 class="font-bold text-2xl">Test</h1>
```

## Referensi

- [https://tailwindcss.com/docs/installation/using-postcss](https://tailwindcss.com/docs/installation/using-postcss)
- [https://gohugo.io/hugo-pipes/postcss/](https://gohugo.io/hugo-pipes/postcss/)