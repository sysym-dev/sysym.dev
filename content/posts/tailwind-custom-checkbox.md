---
title: Cara Custom Style Checkbox Menggunakan Tailwind
tags: [tailwind]
date: 2025-02-02 16:11:00 +0700
images:
- /images/posts/tailwind-custom-checkbox/thumbnail.jpg
---

Ada dua cara untuk mengustomisasi style checkbox menggunakan tailwind, menggunakan plugin tailwind forms dan custom secara manual dengan class tailwind. Berikut penjelasannya:

<!--more-->

## 1. Menggunakan Plugin Tailwind Forms

Cara pertama adalah menggunakan plugin tailwind forms. Dengan menggunakan plugin ini, style checkbox dapat dicustom mulai dari warna, bentuk, dll dengan class tailwind.

Pertama instal pluginnya terlebih dahulu.

```bash
npm install -D @tailwindcss/forms
```

Kemudian buka file `tailwind.config.js`, tambahkan `require('@tailwindcss/forms')` ke dalam array `plugins`.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
```

Untuk tailwind versi 4, tambahkan `@plugin "@tailwindcss/forms";` ke dalam file css tailwind.

```css
@import "tailwindcss";

@theme {
  /* ... */
}

@plugin "@tailwindcss/forms";
```

Setelah plugin ditambahkan, checkbox akan memiliki style bawaan dari plugin. Untuk menyesuaikannya cukup dengan menambahkan class tailwind. Contoh:

```html
<label>
  <input type="checkbox" class="w-4 h-4 rounded-md border-blue-600 border-2 mr-1" />
  <span>Label</span>
</label>
```

Hasilnya.

![Hasil menggunakan plugin tailwind forms](/images/posts/tailwind-custom-checkbox/hasil-plugin-tailwind-forms.gif)

## 2. Custom Secara Manual dengan Class Tailwind

Cara kedua adalah mengcustom secara manual dengan class tailwind. Cara ini memerlukan langkah tambahan namun masih mudah untuk dilakukan.

Pertama tambahkan class `appearance-none` untuk mereset style bawaan browser pada checkbox.

```html
<label>
  <input type="checkbox" class="appearance-none" />
  <span>Label</span>
</label>
```

Kemudian tambahkan class `w-4 h-4 border border-gray-300 rounded` pada checkbox agar checkbox berbentuk kotak.

```html
<label>
  <input type="checkbox" class="appearance-none w-4 h-4 border border-gray-300 rounded" />
  <span>Label</span>
</label>

```

Kemudian tambahkan pseudo class `checked:bg-blue-600 checked:border-0` untuk mengubah warna background ketika checkbox dicentang.

```html
<label>
  <input type="checkbox" class="appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-blue-600 checked:border-0" />
  <span>Label</span>
</label>

```

Kemudian tambahkan svg untuk menampilkan ikon centang. Ikon ini defaultnya hidden ketika checkbox tidak dicentang.

```html
<label class="relative">
  <input type="checkbox" class="appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-blue-600 checked:border-0" />
  <svg class="w-4 h-4 absolute top-0 left-0 text-white hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z" fill="currentColor"></path></svg>
  <span>Label</span>
</label>

```

Agar ikon muncul ketika checkbox dicentang, tambahkan class `peer` pada checkbox, dan  `peer-checked:block` pada ikon.

```html
<label class="relative">
  <input type="checkbox" class="appearance-none w-4 h-4 border border-gray-300 rounded checked:bg-blue-600 checked:border-0 peer" />
  <svg class="w-4 h-4 absolute top-0 left-0 text-white hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z" fill="currentColor"></path></svg>
  <span>Label</span>
</label>

```

Hasilnya.

![Hasil custom manual](/images/posts/tailwind-custom-checkbox/hasil-manual.gif)