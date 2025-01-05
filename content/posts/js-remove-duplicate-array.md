---
title: Cara Menghapus Elemen Array Yang Duplikat Di Javascript
tags: [javascript]
date: 2024-08-03 20:30:00 +0700
images:
- /images/posts/js-remove-duplicate-array/thumbnail.jpg
popular: true
popularOrder: 2
---

Untuk menghapus elemen array yang duplikat di javascript, caranya bisa dengan mengecek setiap elemen di array apakah indexnya sama dengan index elemen pertama di array yang nilainya sama dengan elemen yang sedang dicek.

<!--more-->

Untuk menghapus elemen yang duplikat gunakan method `filter`, untuk mencari index dari elemen dengan nilai tertentu pada array gunakan method `indexOf`.

```js
const array = [1, 2, 3, 10, 4, 12, 4, 3, 1, 10]
const uniqueArray = array.filter((value, index) => {
 return array.indexOf(value) === index
})

console.log(uniqueArray)
// [ 1, 2, 3, 10, 4, 12 ]
```

Untuk cara lain bisa dengan mengubah array mennjadi `Set` lalu diubah lagi ke array. Hasil array akan dalam bentuk yang tidak ada duplikat karena `Set` hanya menyimpan nilai yang unik.

Untuk mengubah array ke set bisa dengan `Set` constructor, untuk mengubah `Set` ke array bisa dengan spread syntax.

```js
const array = [1, 2, 3, 10, 4, 12, 4, 3, 1, 10]
const uniqueArray = [...new Set(array)]

console.log(uniqueArray)
// [ 1, 2, 3, 10, 4, 12 ]
```

## Array Of Object

Untuk menghapus elemen array berisi objek yang nilai propertinya duplikat, bisa dengan cara yang sama dengan cara pertama seperti diatas. Bedanya method yang digunakan adalah `findIndex`.

Misal ada array `users` berisi objek `user` dengan properti `id` dan `name`. Array ini ingin dihilangkan elemen yang properti `id`-nya duplikat.

```js
const users = [
    { id: 1, name: 'Sanex' },
    { id: 2, name: 'Napolly' },
    { id: 2, name: 'Alfacare' },
    { id: 2, name: 'Cactus' },
    { id: 3, name: 'Soklin' },
    { id: 4, name: 'Supra' },
    { id: 4, name: 'Macbook' }
]
const uniqueUsers = users.filter((user, index) => {
    return users.findIndex(item => item.id === user.id) === index
})

console.log(uniqueUsers)
// [
//   { id: 1, name: 'Sanex' },
//   { id: 2, name: 'Napolly' },
//   { id: 3, name: 'Soklin' },
//   { id: 4, name: 'Supra' }
// ]
```