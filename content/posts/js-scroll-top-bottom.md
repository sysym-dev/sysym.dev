---
title: Cara Membuat Tombol Scroll ke Atas dan Bawah di JavaScript
tags: [javascript]
date: 2025-03-12 09:42:00 +0700
images:
- /images/posts/js-scroll-top-bottom/thumbnail.jpg
---

Tombol untuk scroll ke atas dan bawah halaman sering ditemui di web untuk memudahkan navigasi pengguna.

<!--more-->

Kita bisa menggunakan javascript untuk melakukan scroll ke titik koordinat tertentu dengan `window.scrollTo`.

```javascript
window.scrollTo(x, y)
// atau
window.scrollTo({
    top: // koordinat scroll vertikal,
    left: // koordinat scroll horizontal,
    behavior: 'smooth' | 'instant' | 'auto'
})
```

- Untuk membuat scroll ke atas halaman, isi koordinat `y` atau `top` dengan nilai `0`.
- Untuk membuat scroll ke bawah halaman, isi koordinat `y` atau `top` dengan nilai `document.body.scrollHeight` atau `document.documentElement.scrollHeight`.

`document.body.scrollHeight` dan `document.documentElement.scrollHeight` dapat digunakan untuk mendapatkan tinggi halaman yang bisa di-scroll.

Contoh:

```html
<button id="scroll-bottom">Scroll ke bawah</button>
<div style="height: 2000px"></div>
<button id="scroll-top">Scroll ke atas</button>

<script>
document
    .querySelector('#scroll-bottom')
    .addEventListener('click', () => {
        window.scrollTo(0, document.body.scrollHeight)
        // atau window.scrollTo(0, document.documentElement.scrollHeight)
    })
document
    .querySelector('#scroll-top')
    .addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
</script>
```

Hasilnya:

![Hasilnya](/images/posts/js-scroll-top-bottom/hasil.gif)