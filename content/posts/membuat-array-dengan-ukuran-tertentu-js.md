---
title: Cara Membuat Array dengan Ukuran Tertentu di Javascript
tags: [javascript]
date: 2023-12-16 14:00:00 +0700
---

Membuat array dengan ukuran tertentu pada javascript bisa dilakukan dengan beberapa, berikut di antaranya:

<!--more-->

## Array Constructor

Array constructor dapat digunakan untuk membuat sebuah array. Jika pada constructor diberikan sebuah argumen berupa integer, maka array yang dibuat akan berukuran sebesar integer tersebut.

```javascript
const nums = new Array(3)
const arr = Array(3) 

console.log(nums.length, arr.length)
// 3 3
```

> Array constructor dapat dipanggil dengan atau tanpa `new` keyword.

Dengan array constructor, meski ukuran array sudah ditentukan, namun elemennya masih kosong. Dan tidak bisa diiterasi / dilakukan perulangan.

```javascript
const nums = new Array(3)

console.log(nums.map((_, i) => i + 1))
// [empty x 3]
```

Untuk mengatasinya, harus diisi setiap elemen array-nya dulu, misal dengan method `fill`.

```javascript
const nums = new Array(3).fill()

console.log(nums.map((_, i) => i + 1))
// [1, 2, 3]
```

## Array From Method

Array From (`Array.from`) adalah method static untuk membuat array dari objek dengan karakteristik teretntu.

Misalnya sebuah objek yang memiliki property `length` bernilai 10. Maka objek tersebut dapat menghasilkan sebuah array dengan ukuran 10 jika digunakan di `Array.from`.

```javascript
const obj = { length: 5 }
const arr = Array.from(obj)

console.log(arr.length) // 5
console.log(arr) // [undefined, undefined, undefined, undefined, undefined]
```

Array From juga menerima argumen kedua yang dapat digunakan untuk mengisi setiap elemen di array.

```javascript
const obj = { length: 5 }
const arr = Array.from(obj, (_, i) => i + 1)

console.log(arr.length) // 5
console.log(arr) // [1, 2, 3, 4, 5]
```

> Jika argumen dikosongkan, maka setiap elemen akan bernilai `undefined`

## Sumber

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#sequence_generator_range)