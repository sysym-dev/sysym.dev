---
title: Cara Cek Apakah Sebuah Element Hidden Dengan Javascript
tags: [javascript]
date: 2024-05-19 19:00:00 +0700
images:
- /images/posts/check-element-hidden/thumbnail.jpg
---

Untuk mengecek apakah sebuah element hidden dengan javascript bisa dengan cara melihat nilai property style css `display` atau `visibility` pada elemen tersebut.

<!--more-->

Untuk mendapatkan nilai style css pada suatu elemen, gunakan method `getComputedStyle` pada objek `window`. Method ini akan mengembalikan semua objek berisi styles pada element tersebut.

Contoh.

```js
function isHidden(el) {
  const styles = window.getComputedStyle(el)

  return styles.display === 'none' || styles.visibility === 'hidden'
}

const myDiv = document.querySelector('div')

isHidden(myDiv)
```

Jika ingin dicek `opacity`-nya juga, bisa ditambahkan `styles.opacity === '0'`.