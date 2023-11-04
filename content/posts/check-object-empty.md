---
title: "Javascript : Cara Cek Apakah Sebuah Objek Kosong / Tidak Ada Properti"
tags: [javascript]
date: 2023-11-04 19:30:00 +0700
---

Objek pada javascript terdiri dari kumpulan properti. Sebuah objek dikatakan kosong jika ia tidak memiliki properti.

<!--more-->

Cara cek apakah objek kosong bisa dengan menggunakan `Object.keys()`.

Caranya, objek yang akan dicek dimasukkan sebagai argumen ke *method* `Object.keys`, *method* ini akan mengembalikan *array* yang berisi kumpulan *properti key* pada objek.

Jika ukuran *array* yang dikembalikan adalah 0 maka objek tersebut adalah objek kosong.

```js
const user = {
    name: 'hen'
}
const project = {}

console.log( 'Apakah Kosong', Object.keys(user).length === 0 ) // Apakah kosong false
console.log( 'Apakah Kosong', Object.keys(project).length === 0 ) // Apakah kosong true
```