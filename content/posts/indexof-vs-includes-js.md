---
title: Perbedaan indexOf dan includes Pada String Javascript
tags: [javascript]
date: 2024-11-05 14:05:00 +0700
images:
- /images/posts/indexof-vs-includes-js/thumbnail.jpg
---

Method `indexOf` dan `includes` pada string javascript sama-sama dapat digunakan untuk mencari teks pada suatu string.

<!--more-->

```javascript
const str = 'superadmin'

console.log(str.indexOf('admin')) // 5
console.log(str.indexOf('user')) // -1

console.log(str.includes('admin')) // true
console.log(str.includes('user')) // false
```

Pada contoh di atas, perbedaannya sudah cukup jelas terlihat. `indexOf` mengembalikan posisi index dari teks yang dicari pada string jika ditemukan, jika tidak ditemukan `indexOf` akan mengembalikan `-1`.

`includes` mengembalikan `true` jika teks ditemukan pada string dan `false` jika teks tidak ditemukan.