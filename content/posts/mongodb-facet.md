---
title: Cara Membuat Pagination Di MongoDB Dengan $facet
tags: [mongodb]
date: 2024-10-17 21:00:00 +0700
images:
- /images/posts/mongodb-facet/thumbnail.jpg
---

`$facet` adalah operator *stage* agregasi pada mongodb yang dapat digunakan untuk mengeksekusi beberapa *pipeline* dalam satu *stage* yang sama dengan data input yang sama.

<!--more-->

Contoh penggunaan `$facet` adalah untuk membuat *pagination*.

Tanpa `$facet`, untuk membuat *pagination* biasanya dilakukan dengan mengeksekusi dua *query*, yaitu `count` untuk mendapatkan total data dan `find` untuk mendapatkan *array* datanya.

Dengan `$facet`, untuk mendapatkan total dan *array* datanya bisa dilakukan dalam satu *query* saja.

Contoh.

```js
const [articles] = await collection.aggregate([
  {
    $facet: {
      meta: [
        { $count: 'total' }
      ],
      data: [
        { $skip: (pageNumber - 1) * pageSize },
        { $limit: pageSize }
      ]
    }
  },
  {
    $project: {
      meta: { $first: "$meta" },
      data: 1
    }
  }
]).toArray()

console.log(articles)
```

Hasilnya

```js
{
  data: [
    {
      _id: new ObjectId('6710f63feca6f52a59c35764'),
      title: 'Cara Validasi Minimal Dan Maksimal Pada Date di Zod'
    },
    {
      _id: new ObjectId('6710f63feca6f52a59c35765'),
      title: 'Cara Mengambil Nilai Meta Tag Dengan Javascript'
    },
    {
      _id: new ObjectId('6710f63feca6f52a59c35766'),
      title: 'Cara Kirim Request Ketika Halaman Ditutup Menggunakan Javascript'
    },
    {
      _id: new ObjectId('6710f63feca6f52a59c35767'),
      title: 'Cara Order By Kolom Pivot di Laravel'
    },
    {
      _id: new ObjectId('6710f63feca6f52a59c35768'),
      title: 'Cara Trigger Hover Pada Element Secara Manual di Javascript'
    }
  ],
  meta: { total: 5 }
}
```

Pada contoh agregasi di atas, *stage* pertama menggunakan operator `$facet` yang terdiri dari dua *pipeline*.

1. *Pipeline* pertama dengan key `meta` digunakan untuk mendapatkan total data dengan menggunakan operator `$count`.
2. *Pipeline* kedua dengan key `data` digunakan untuk mendapatkan *array* data sesuai dengan nomor halaman *pagination*.

Karena setiap *pipeline* `$facet` mengembalikan *array*, maka awalnya *pipeline* key `meta` akan menghasilkan *array* seperti berikut:

```js
{
  data: [...],
  meta: [ { total: 5 } ]
}
```

Agar kembaliannya dalam bentuk objek sehingga lebih mudah dibaca maka pada kode di atas untuk key `meta` diambil nilai pertama *array*-nya saja, dengan menggunakan operator `$first` untuk key `meta` pada `$project` *stage* kedua.

```js
{
  data: [...],
  meta: { total: 5 }
}
```

Referensi:

- https://www.mongodb.com/docs/manual/reference/operator/aggregation/facet/
- https://www.mongodb.com/docs/manual/reference/operator/aggregation/count/
- https://www.mongodb.com/docs/manual/reference/operator/aggregation/project/
- https://www.mongodb.com/docs/manual/reference/operator/aggregation/first/