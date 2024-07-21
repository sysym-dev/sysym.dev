---
title: Cara Format Angka Ke Rupiah Di Javascript
tags: [javascript]
date: 2024-07-21 18:00:00 +0700
images:
- /images/posts/js-format-rupiah/thumbnail.jpg
---

Format angka ke rupiah di javascript bisa dilakukan dengan menggunakan objek `Intl.NumberFormat`.

<!--more-->

```js
const number = 14500
const numberRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
}).format(number)

console.log(numberRupiah) // Rp 14.500,00
```

- Parameter pertama `id-ID` itu kode locale bahasa indonesia di BCP 47. 
- Parameter kedua berupa objek dengan properti `style` nilainya `currency` untuk memformat angka dalam bentuk mata uang dan properti `currency` untuk mengatur mata uangnya menjadi rupiah dengan kode `IDR`.

Lalu untuk memformat angkanya tinggal dipanggil method `format` dengan angka yang mau diformat.

Untuk variasi lain, misalnya dengan menambahakan properti `currencyDisplay` dengan nilai `name` atau `code`, yang hasilnya seperti berikut.

```js
const number = 14500
let numberRupiah

numberRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'name'
}).format(number)

console.log(numberRupiah) // 14.500,00 Rupiah Indonesia

numberRupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'code'
}).format(number)

console.log(numberRupiah) // IDR 14.500,00
```

Sumber : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat