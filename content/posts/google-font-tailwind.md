---
title: Menggunakan Google Font Di Tailwind
tags: [tailwind]
date: 2023-08-13 06:00:00 +0700
---

Google Font adalah produk Google yang penyedia beragam jenis font gratis.

<!--more-->

Anda dapat menggunakan google font sebagai font di tailwindcss, berikut langkah-langkahnya.

## Menyiapkan Google Font

Buka `https://fonts.google.com/`, lalu pilih font yang akan anda gunakan.

Tambahkan link dari font yang dipilih ke tag `head` di file html.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&display=swap" rel="stylesheet">
```

## Menggunakan Google Font di Tailwind

Ada beberapa cara untuk menggunakan google font di tailwind:

### Cara 1 : Menambahkan Font di Font Family Utility

Anda dapat menambahkan font dari Google Font di font-family utility.

Pertama buka file `tailwind.config.js`, tambahkan google font di `theme.fontFamily`.

```js
module.exports = {
  theme: {
    fontFamily: {
      'oswald': ['Oswald', 'serif'],
    }
  }
}
```

Google Font sudah bisa digunakan pada element html dengan menambahkan class `font-{nama-font}`, contoh:

```html
<h1 class="font-oswald">Whereas recognition of the inherent dignity</h1>
```

### Cara 2 : Extend Default Font Family

Default font-family di tailwind adalah `sans`, anda dapat mengubahnya menjadi font dari Google Font.

Buka file `tailwind.config.js`, tambahkan google font di `theme.extend.fontFamily`.

Agar tetap ada default font dari tailwind sebagai alternatif, tambahkan juga default font tailwind setelah Google Font.

```js
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Oswald', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}
```

Secara otomatis, tailwind akan menggunakan Google Font sebagai default font.

### Cara 3 : Menggunakan Direktif Layer Base

Cara ini adalah cara dengan menambahkan font dari Google Font langsung di css menggunakan direktif tailwind.

Buka file css yang berisi direktif-direktif tailwind, kemudian tambahkan direktif `layer base`, di dalamnya masukan selector dan gunakan font dari Google Font.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Oswald', system-ui, sans-serif;
  }
}
```

Anda bisa mengganti `html` menjadi selector lain, misal `body`.

### Cara 4 : Menggunakan Arbitary Value

Cara ini paling mudah karena anda tinggal menambahkan nama font dari google font sebagai arbitary value pada utility class `font`.

Penggunaanya `font-{nama-font}`. Contoh.

```html
<p class="font-['Oswald']">Whereas recognition of the inherent dignity</p>
```