---
title: Mendefinisikan Sebuah Array Dengan Kondisional Element
tags: [javascript]
date: 2023-09-17 11:00:00 +0700
---

Array pada javascript dapat digunakan untuk menyimpan beberapa element sekaligus dalam satu variabel.

<!--more-->

Ada beberapa element pada array yang keberadaanya kondisional, maksudnya element tersebut hanya akan masuk pada array jika memenuhi kondisi tertentu.

Ada dua cara yang bisa dilakukan:

- `spread operator` pada element yang kondisional
- Di filter arraynya hanya yang bernilai `truthy` saja.

## Menggunakan spread operator

```js
const productAttributes = [
    'id',
    'name',
    ...(true ? ['Price'] : []),
    ...(false ? ['Stock'] : [])
]

console.log( productAttributes )
// ['id', 'name', 'stock']
```

## Menggunakan filter array

```js
const productAttributes = [
    'id',
    'name',
    true && 'Price',
    false && 'Stock'
].filter(Boolean)

console.log( productAttributes )
// ['id', 'name', 'stock']
```

---

Kalau saya lebih sering menggunakan `spread operator`.

Sumber:

- [https://stackoverflow.com/questions/44908159/how-to-define-an-array-with-conditional-elements](https://stackoverflow.com/questions/44908159/how-to-define-an-array-with-conditional-elements)