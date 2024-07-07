---
title: Cara Menduplikasi Data di MySQL
tags: [mysql]
date: 2024-07-07 16:00:00 +0700
images:
- /images/posts/mysql-duplicate-rows/thumbnail.jpg
---

Untuk menduplikasi data tertentu di mysql, bisa dengan menggabungkan klausa `INSERT` dan `SELECT`.

<!--more-->

Data yang akan diduplikasi diambil menggunakan `SELECT` dari tabel itu sendiri dengan kolom-kolom yang diambil sesuai dengan kolom yang akan ditambahkan.

Contoh.

```sql
INSERT INTO `products` (`name`)
SELECT `name` FROM `products`;
```

Jika data tertentu saja yang ingin diduplikasi, bisa ditambahkan klausa `WHERE`.

```sql
INSERT INTO `products` (`name`)
SELECT
    `name`
FROM `products`
WHERE `type` = 'reguler';
```

Jika data yang diduplikasi ingin diubah nilai kolom-kolomnya, bisa diatur di klausa `SELECT`-nya.

```sql
INSERT INTO `products` (`name`, `type`)
SELECT
    CONCAT(`name`, ' FREE'),
    'free'
FROM `products`
WHERE `type` = 'reguler';
```

Sumber: https://dba.stackexchange.com/questions/142414/easiest-way-to-duplicate-rows