---
title: Cara Mengambil Nilai dari Atribut Data pada Element HTML di Javascript
tags: [javascript]
date: 2024-12-14 18:50:00 +0700
images:
- /images/posts/js-dataset/thumbnail.jpg
---

Atribut `data-*` pada *element* HTML dapat digunakan menyimpan informasi tertentu pada *element* tersebut.

<!--more-->

Contoh *element* `p` berikut menyimpan data `id`, `type` dan `title` pada atribut `data-*`.

```html
<p data-id="1" data-type="post" data-title="Test" data-user-id="14"></p>
```

Untuk mengambil atau membaca data pada tersebut di javascript, kita bisa menggunakan properti `dataset` pada elemennya.

Nama data pada dataset akan diubah jadi camel case, jika ingin mengambil data `id` maka gunakan `element.dataset.id`, untuk  data `user-id` gunakan `element.dataset.userId`.

Contoh.

```javascript
const p = document.querySelector('p')

console.log(p.dataset.id)
// 1
console.log(p.dataset.type)
// post
console.log(p.dataset.title)
// Test
console.log(p.dataset.userId)
// 14
```

Sumber : https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes