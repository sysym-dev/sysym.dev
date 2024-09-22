---
title: Cara Filter Data Berdasarkan Panjang String di Mongodb
tags: [mongodb]
date: 2024-09-22 17:30:00 +0700
images:
- /images/posts/mongodb-strlencp/thumbnail.jpg
---

Di mongodb, untuk memfilter data berdasarkan panjang *string*, anda dapat mengunakan operator `$strLenCP`.

<!--more-->

Operator `$strLenCP` akan mengembalikan *UTF-8 code points* yang dapat digunakan untuk menghitung panjang suatu string.

Contoh data:

```javascript
db.posts.insertMany([
  { title: "Amazing Adventure" },
  { title: "Great Escape" },
  { title: "Incredible Journey" },
  { title: "Fantastic Voyage" },
  { title: "Wonderful Discovery" },
  { title: "Awesome Experience" },
  { title: "Exciting Quest" },
  { title: "Interesting Findings" },
  { title: "Breathtaking Moments" },
  { title: "Spectacular Events" }
]);
```

Misal *collection* `posts` ingin dicari yang panjang judulnya lebih dari 15 karakter.

```javascript
db.posts.find({
  $expr: {
    $gt: [{ $strLenCP: "$title" }, 18]
  }
});

/* Hasilnya
[
  {
    _id: ObjectId('66efeaf5f374a3ca7a5e73a0'),
    title: 'Wonderful Discovery'
  },
  {
    _id: ObjectId('66efeaf5f374a3ca7a5e73a3'),
    title: 'Interesting Findings'
  },
  {
    _id: ObjectId('66efeaf5f374a3ca7a5e73a4'),
    title: 'Breathtaking Moments'
  }
] */
```

Contoh di aggregasi:

```javascript
db.posts.aggregate([
  {
    $match: {
      $expr: {
        $gt: [{ $strLenCP: "$title" }, 18]
      }
    }
  }
]);

/* Hasilnya
[
  {
    _id: ObjectId('66efeaf5f374a3ca7a5e73a0'),
    title: 'Wonderful Discovery'
  },
  {
    _id: ObjectId('66efeaf5f374a3ca7a5e73a3'),
    title: 'Interesting Findings'
  },
  {
    _id: ObjectId('66efeaf5f374a3ca7a5e73a4'),
    title: 'Breathtaking Moments'
  }
] */
```

Referensi:

- https://www.mongodb.com/docs/manual/reference/operator/aggregation/strLenCP/
- https://www.mongodb.com/docs/manual/reference/operator/aggregation/gt/
- https://www.mongodb.com/docs/manual/reference/operator/query/expr/