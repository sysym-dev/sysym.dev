---
title: Cara Validasi Ekstensi File Pada File Input Dengan Javascript
tags: [javascript]
date: 2024-06-25 18:30:00 +0700
images:
- /images/posts/validate-input-file-type-js/thumbnail.jpg
---

Ekstensi file yang dipilih pada file input dapat divalidasi menggunakan javascript dengan mengakses setiap objek `files` pada file input dan memvalidasi properti `type`-nya.

<!--more-->

Objek `files` pada file input berisi array dari file apa saja yang dipilih pengguna. Elemennya dalam bentuk objek `File`.

Objek `File` memiliki properti `type` yang berisi mimetype / ekstensi dari file yang dipilih. Properti `type` inilah yang dapat digunakan untuk memvalidasi ekstensi file yang dipilih.

Contoh implementasinya.

```js
const input = document.querySelector('input[type=file]')

input.addEventListener('change', e => {
  const accepted = ['image/png', 'image/svg']
  const fileTypes = Array.from(e.target.files).map(file => file.type)

  const validFileTypes = fileTypes.every(type => accepted.includes(type))

  if (!validFileTypes) {
    alert('Ekstensi file yang diunggah tidak valid')

    e.target.value = null
  }
})
```

- Setiap kali pengguna memilih file yang dipilih akan divalidasi dengan menangkap event `change`
- Buat array berisi ekstensi apa saja yang diperbolehkan
- Buat array berisi ekstensi dari file yang telah dipilih
- Cek apakah setiap ekstensi dari file yang dipilih ada di ektensi yang diperbolehkan
- Jika tidak munculkan alert error dan hapus file yang dipilih dari input file

Referensi:

- https://developer.mozilla.org/en-US/docs/Web/API/File
- https://dpericich.medium.com/how-to-validate-file-types-for-file-uploads-in-javascript-front-end-ce81b8675f68