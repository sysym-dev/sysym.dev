---
title: Cara Konversi Array Ke CSV Di Javascript
tags: [javascript]
date: 2024-11-03 18:40:00 +0700
images:
- /images/posts/konversi-array-csv-js/thumbnail.jpg
---

Ikuti langkah-langkah berikut untuk mengonversi array ke csv di javascript:

<!--more-->

## 1. Siapkan Header

Siapkan header csv dalam bentuk array.

```javascript
const headers = ['id', 'name', 'city']
```

## 2. Siapkan Data

Siapkan data csv dalam bentuk array of objek. Pastikan properti objek sesuai dengan header yang sudah disiapkan di atas.

```javascript
const data = [
    { id: 1, name: "Alice", city: "New York" },
    { id: 2, name: "Bob", city: "Los Angeles" },
    { id: 3, name: "Charlie", city: "Chicago" },
    { id: 4, name: "David", city: "Houston" },
    { id: 5, name: "Eve", city: "Phoenix" },
    { id: 6, name: "Frank", city: "Philadelphia" },
    { id: 7, name: "Grace", city: "San Antonio" },
    { id: 8, name: "Hank", city: "San Diego" },
    { id: 9, name: "Ivy", city: "Dallas" },
    { id: 10, name: "Jake", city: "San Jose" }
];

```

## 3. Konversi Array ke CSV

Buat sebuah variabel `separator` untuk mengatur separator item datanya, misalnya komah.

Buat sebuah variabel `csv` untuk menyimpan data csvnya yang nilainya gabungan dari:

- Array `headers` dijoin dengan separator untuk membuat header csvnya.
- Array `data` dimap setiap itemnya sesua dengan header lalu dijoin dengan separator untuk membuat datanya.

Hasilnya lalu dijoinkan dengan separator new line (`\n`).

```javascript
const separator = ','
const csv = [
    headers.join(separator),
    ...data.map(row => headers.map(header => row[header]).join(separator))
].join('\n')
```

Hasilnya.

```javascript
console.log(csv)
/*
id,name,city
1,Alice,New York
2,Bob,Los Angeles
3,Charlie,Chicago
4,David,Houston
5,Eve,Phoenix
6,Frank,Philadelphia
7,Grace,San Antonio
8,Hank,San Diego
9,Ivy,Dallas
10,Jake,San Jose
*/
```