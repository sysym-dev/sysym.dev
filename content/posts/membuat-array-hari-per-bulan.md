---
title: Membuat Array Berisi Daftar Tanggal dalam Satu Bulan Tertentu dengan Javascript
tags: [javascript]
date: 2023-12-09 17:00:00 +0700
---

```javascript
function createDateArrayInAMonth(year, month) {
    return new Array(new Date(year, month, 0).getDate())
        .fill()
        .map((_, i) => new Date(year, month - 1, i + 1))
}
```

<!--more-->

Fungsi `createDateArrayInAMonth` di atas akan mengembalikan sebuah array berisi daftar tanggal (tanggal dalam bentuk objek `Date`) dalam satu bulan tertentu.

Untuk mendapatkan daftar tanggal dalam satu bulan tertentu, pertama saya butuh informasi bulan apa di tahun berapa yang akan diambil daftar tanggalnya. Informasi ini didapat dari parameter fungsi `createDateArrayInAMonth`.

```javascript
function createDateArrayInAMonth(year, month)
```

Kemudian saya perlu mengetahui berapa jumlah hari di bulan yang ditentukan.

```javascript
new Date(year, month, 0).getDate()
```

> Untuk penjelasan lebih jelas bisa dibaca di [https://sysym.dev/menghitung-jumlah-hari-dalam-1-bulan-dengan-javascript](https://sysym.dev/menghitung-jumlah-hari-dalam-1-bulan-dengan-javascript)

Kemudian saya buat array dengan ukuran sesuai jumlah hari yang sudah diketahui.

```javascript
new Array(new Date(year, month, 0).getDate())
```

> Untuk membuat array dengan ukuran spesifik bisa dengan cara `new Array(ukuran)` atau `Array(ukuran)`

Kemudian saya melakukan perulangan pada array yang sudah dibuat, setiap perulangan akan membuat sebuah objek `Date` dengan tanggal sesuai index perulangan.

```javascript
return new Array(new Date(year, month, 0).getDate())
    .fill()
    .map((_, i) => new Date(year, month - 1, i + 1))
```

> Array yang dibuat menggunakan Array() atau new Array() isinya kosong dan tidak bisa diiterasi, maka dari itu perlu di isi dulu dengan method `fill`.

Kemudian saya coba jalankan fungsi `createDateArrayInAMonth` untuk mendapatkan array berisi daftar tanggal di bulan oktober (10) tahun 2023.

```javascript
console.log( createDateArrayInAMonth(2023, 10) )

// [
//   2023-09-30T16:00:00.000Z,
//   2023-10-01T16:00:00.000Z,
//   2023-10-02T16:00:00.000Z,
//   2023-10-03T16:00:00.000Z,
//   2023-10-04T16:00:00.000Z,
//   2023-10-05T16:00:00.000Z,
//   2023-10-06T16:00:00.000Z,
//   2023-10-07T16:00:00.000Z,
//   2023-10-08T16:00:00.000Z,
//   2023-10-09T16:00:00.000Z,
//   2023-10-10T16:00:00.000Z,
//   2023-10-11T16:00:00.000Z,
//   2023-10-12T16:00:00.000Z,
//   2023-10-13T16:00:00.000Z,
//   2023-10-14T16:00:00.000Z,
//   2023-10-15T16:00:00.000Z,
//   2023-10-16T16:00:00.000Z,
//   2023-10-17T16:00:00.000Z,
//   2023-10-18T16:00:00.000Z,
//   2023-10-19T16:00:00.000Z,
//   2023-10-20T16:00:00.000Z,
//   2023-10-21T16:00:00.000Z,
//   2023-10-22T16:00:00.000Z,
//   2023-10-23T16:00:00.000Z,
//   2023-10-24T16:00:00.000Z,
//   2023-10-25T16:00:00.000Z,
//   2023-10-26T16:00:00.000Z,
//   2023-10-27T16:00:00.000Z,
//   2023-10-28T16:00:00.000Z,
//   2023-10-29T16:00:00.000Z,
//   2023-10-30T16:00:00.000Z
// ]
```

Akan dihasilkan sebuah array berisi daftar tanggal di bulan Oktober 2023 dari tanggal 1 sampai tanggal 31.

Referensi :

- [https://stackoverflow.com/questions/13146418/find-all-the-days-in-a-month-with-date-object](https://stackoverflow.com/questions/13146418/find-all-the-days-in-a-month-with-date-object)