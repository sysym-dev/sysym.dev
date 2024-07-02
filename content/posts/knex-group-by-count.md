---
title: Melakukan Group By Dan Count di Knex
tags: [knex]
date: 2024-07-02 20:00:00 +0700
images:
- /images/posts/knex-group-by-count/thumbnail.jpg
---

Knex query builder menyediakan method `groupBy` untuk mengelompokan data berdasarkan nilai kolom tertentu dan `count` untuk menghitung data.

<!--more-->

Dengan menggabungkan dua method ini, dapat dihasilkan pengelompokan data beserta jumlah data di setiap item kelompoknya.

Contohnya untuk menghitung jumlah order di setiap statusnya.

```js
const data = await knex('orders')
    .select('status')
    .groupBy('status')
    .count('status as count')

console.log(data)
// [
//   { status: 'draft', count: 24 },
//   { status: 'paid', count: 38 },
//   { status: 'received', count: 27 },
//   { status: 'shipped', count: 30 },
//   { status: 'valid', count: 25 }
// ]
```

Kalau ingin dalam bentuk objek bisa dengan di map datanya kemudian dimasukkan ke `Object.fromEntries`.

```js
const data = await knex('orders')
    .select('status')
    .groupBy('status')
    .count('status as count')
const stats = Object.fromEntries(data.map(item => [item.status, item.count]))

console.log(stats)
// {
//     draft: 24,
//     paid: 38,
//     received: 27,
//     shipped: 30,
//     valid: 25
// }
```

Sumber :

- https://knexjs.org/guide/query-builder.html
- https://stackoverflow.com/questions/67904762/knex-how-to-express-select-genre-count-from-films-group-by-genre