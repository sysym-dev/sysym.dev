---
title: Cara Order By Kolom Pivot di Laravel
tags: [laravel]
date: 2024-09-28 22:30:00 +0700
images:
- /images/posts/larave-order-by-pivot/thumbnail.jpg
---

Di laravel, untuk mengurutkan data berdasarkan kolom pada tabel *pivot*, bisa menggunakan method `orderByPivot`.

<!--more-->

```php
$group = Group::find(1);

$group
  ->users()
  ->orderByPivot('created_at', 'asc')
  ->get();
```

Misalnya ada tabel `users` dan `groups`, `users` berelasi *many to many* dengan `groups` melalui tabel *pivot* `group_user`.

```sql
select id, name from users;
+----+------+
| id | name |
+----+------+
|  1 | Jhon |
|  2 | Rudi |
|  3 | Doni |
|  4 | Anna |
+----+------+

select id, name from groups;
+----+-----------+
| id | name      |
+----+-----------+
|  1 | Developer |
+----+-----------+

select * from group_user;
+----------+---------+---------------------+
| group_id | user_id | created_at          |
+----------+---------+---------------------+
|        1 |       4 | 2024-09-28 15:12:11 |
|        1 |       3 | 2024-09-28 15:12:11 |
|        1 |       1 | 2024-09-24 15:12:11 |
|        1 |       2 | 2024-09-27 15:12:11 |
+----------+---------+---------------------+
```

Pada tabel `group_user` terdapat kolom `created_at` yang menandai kapan suatu *user* masuk ke *group*.

Lalu ingin ditampilkan semua data *users* pada *group* tertentu diurutkan berdasarkan tanggal masuk *user* pada *group* tersebut melalui kolom `created_at` pada `group_user`.

Caranya adalah dengan menggunakan method `orderByPivot` diikuti dengan kolom pada pivot tabel yang ingin diurutkan.

```php
$group = Group::find(1);

$group
  ->users()
  ->orderByPivot('created_at', 'asc')
  ->get();
```

Hasilnya.

```javascript
[
  {
    id: 1,
    name: "Jhon",
    pivot: {
      group_id: 1,
      user_id: 1,
      created_at: "2024-09-24 15:12:11",
    },
  },
  {
    id: 2,
    name: "Rudi",
    pivot: {
      group_id: 1,
      user_id: 2,
      created_at: "2024-09-27 15:12:11",
    },
  },
  {
    id: 3,
    name: "Doni",
    pivot: {
      group_id: 1,
      user_id: 3,
      created_at: "2024-09-28 15:12:11",
    },
  },
  {
    id: 4,
    name: "Anna",
    pivot: {
      group_id: 1,
      user_id: 4,
      created_at: "2024-09-28 15:12:11",
    },
  },
],
```