---
title: Cara Mengurutkan NULL di Atas atau di Bawah di Order By MySQL
tags: [mysql]
date: 2024-12-10 15:40:00 +0700
images:
- /images/posts/mysql-order-by-null/thumbnail.jpg
---

Ketika *order by* diterapkan pada kolom yang *nullable*, maka nilai yang *null* akan tampil di paling atas jika *ascending* dan di paling bawah jika *descending*.

<!--more-->

Jika *null* ingin dipaksa berada di paling atas atau bawah, maka tambahkan kolom yang null tersebut di order by tapi ditambah operasi `is null`. Jika ingin di paling atas maka *direction*-nya *descending*, jika ingin di paling bawah maka *direction*-nya *ascending*.

Misalnya di sini ada tabel `users` dengan kolom `number` bertipe integer dan *nullable*. Lalu saya ingin menampilkan `number` dan `name` pada `users` diurutkan berdasarkan number paling kecil, tapi yang *null* diurutkan di paling bawah.

```sql
select number, name from users
order by number is null asc, number asc;
```

Hasilnya.

```
+--------+---------+
| number | name    |
+--------+---------+
|      1 | Jane    |
|      2 | Michael |
|      3 | James   |
|      4 | Sarah   |
|      5 | Laura   |
|      6 | Robert  |
|      7 | Maria   |
|   NULL | John    |
|   NULL | Emily   |
|   NULL | David   |
+--------+---------+
```

Jika ingin diurutkan berdasarkan number paling kecil tapi yang null diurutkan di paling atas, ganti `number is null desc` menjadi `number is null asc`.

```sql
select number, name from users
order by number is null desc, number asc;
```

Hasilnya.

```
+--------+---------+
| number | name    |
+--------+---------+
|   NULL | John    |
|   NULL | Emily   |
|   NULL | David   |
|      1 | Jane    |
|      2 | Michael |
|      3 | James   |
|      4 | Sarah   |
|      5 | Laura   |
|      6 | Robert  |
|      7 | Maria   |
+--------+---------+
```