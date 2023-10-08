---
title: Cara Modifikasi NULL Kolom Yang Sudah Ada Pada MySQL atau Dengan Laravel
tags: [vue]
date: 2023-10-08 18:00:00 +0700
---

`NULL` adalah batasan (*constraint*) pada sebuah kolom yang menentukan apakah kolom tersebut dapat menyimpan nilai `null` atau tidak.

<!--more-->

Kolom yang dapat menyimpan nilai `null` disebut `nullable`.

Kolom yang sudah ada pada tabel bisa dimodifikasi constraint `NULL` nya dengan klausa `MODIFY` pada `ALTER TABLE` statement sql, atau bisa diubah di migration laravel.

## Alter Table Modify

Misal ada tabel `user` dengan kolom `name` yang `nullable`.

```sql
DESC users;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int(11)      | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255) | YES  |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
```

Saya ingin menghubah kolom `name` menjadi tidak `nullable`, berikut perintah menghubahnya di sql.

```sql
ALTER TABLE users MODIFY name VARCHAR(255) NOT NULL;
```

Hasilnya.

```sql
DESC users;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int(11)      | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255) | NO   |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
```

## Laravel Migration

Misal kolom `name` diatas ingin dibalikkan lagi menjadi `nullable`.

Untuk mengubah `NULL` kolom menggunakan laravel migration, pertama buat migration nya dulu.

```bash
php artisan make:migration add_nullable_to_name_on_users --table=users
```

Buka file migration nya, pada method `up` tambahkan kolom `name`, panggil method `nullable` dan `change`.

```php
Schema::table('users', function (Blueprint $table) {
    $table->string('name')->nullable()->change();
});
```

Jalankan migration nya.

```bash
php artisan migrate
```

Cek di database, seharusnya kolom `name` menjadi `nullable`.

```sql
DESC users;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int(11)      | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255) | YES  |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
```