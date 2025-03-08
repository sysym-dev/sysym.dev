---
title: Menghitung Jumlah Hari Dalam 1 Bulan Dengan Javascript
tags: [javascript]
date: 2023-12-03 10:00:00 +0700
popular: true
popularOrder: 3
---

Jumlah hari dalam 1 bulan dapat dihitung di javascript dengan `Date` objek.

<!--more-->

Misal saya ingin menghitung jumlah hari di bulan desember tahun 2023.

```js
const year = 2023 // tahun 2023
const month = 12 // bulan desember

const totalDays = new Date(year, month, 0).getDate()

console.log(totalDays) // 31
```

`Date` *constructor* pada javascript dapat menerima 3 argumen, yaitu tahun, bulan, dan tanggal.

Jika argumen tanggal yang diberikan adalah `0`, maka akan dibuatkan objek date pada tanggal terakhir bulan dan tahun tersebut.

Kemudian method `getDate` pada objek `Date` dapat digunakan untuk mendapatkan tanggalnya saja dari objek `Date`.

```js
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate()
}

console.log( getDaysInMonth(2023, 12) ) // 31
console.log( getDaysInMonth(2023, 4) ) // 30
console.log( getDaysInMonth(2021, 8) ) // 31
console.log( getDaysInMonth(2019, 2) ) // 28
```

## Referensi

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- [https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript](https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript)