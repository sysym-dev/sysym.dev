---
title: Cara Melakukan MySQL Upsert
tags: [javascript]
date: 2024-07-22 21:00:00 +0700
images:
- /images/posts/mysql-upsert/thumbnail.jpg
---

Upsert adalah cara untuk melakukan insert data ke database tapi jika datanya sudah ada maka dilakukan operasi update.

<!--more-->

Upsert di MySQL bisa dilakukan dengan menambahkan `ON DUPLICATE KEY UPDATE` pada operasi `INSERT`, yang artinya jika ada key primary atau key unique yang duplikat maka dilakukan operasi `UPDATE`.

Jadi untuk bisa melakukan upsert, tabel harus memiliki setidaknya primary atau unique key. Contoh berikut ada tabel `users` dengan kolom `email` unique.

```sql
desc users;
```

```bash
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int(11)      | NO   | PRI | NULL    | auto_increment |
| email | varchar(255) | NO   | UNI | NULL    |                |
| name  | varchar(255) | NO   |     | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
```

Misalkan tabel kosong isinya, kemudian saya insert 2 data maka keduanya akan berhasil dimasukkan.

```sql
insert into users
    (email, name)
values
    ('ibrahim@gmail.com', 'Ibrahim'),
    ('heidi@gmail.com', 'Heidi');

-- Query OK, 2 rows affected (0.001 sec)
-- Records: 2  Duplicates: 0  Warnings: 0
```

Lalu saya insert lagi dengan data yang sama tapi ditambah nama untuk email `heidi@gmail.com` diganti jadi `Heidi SQL`.

```sql
insert into users
    (email, name)
values
    ('ibrahim@gmail.com', 'Ibrahim'),
    ('heidi@gmail.com', 'Heidi SQL');

-- ERROR 1062 (23000): Duplicate entry 'ibrahim@gmail.com' for key 'email'
```

Maka akan terjadi error, karena kolom email unique dan email `ibrahim@gmail.com` sudah ada. Saat inilah dibutuhkan operasi upsert.

```sql
insert into users
    (email, name)
values
    ('ibrahim@gmail.com', 'Ibrahim'),
    ('heidi@gmail.com', 'Heidi SQL')
ON DUPLICATE KEY UPDATE
    name = VALUES(name);

-- Query OK, 2 rows affected (0.002 sec)
-- Records: 2  Duplicates: 1  Warnings: 0
```

Insert berhasil dijalankan, jika dicek di tabel data masih dua dan untuk email `heidi@gmail.com` namanya berubah menjadi `Heidi SQL` karena berhasil terupdate.

```sql
select * from users;
```

```bash
+----+-------------------+-----------+
| id | email             | name      |
+----+-------------------+-----------+
| 17 | ibrahim@gmail.com | Ibrahim   |
| 18 | heidi@gmail.com   | Heidi SQL |
+----+-------------------+-----------+
```

Ketika upsert jika data sudah ada maka perlu diatur apa saja yang diupdate, mengaturnya setelah statement `ON DUPLICATE KEY UPDATE` untuk mendapatkan nilai dari yang diinsert bisa dengan fungsi `VALUE(nama_kolom)`.

Contoh `VALUE(name)`, artinya jika data sudah ada maka update nama data tersebut dengan nama yang akan diinsert.

Contoh berikut upsert yang melakukan insert sekaligus update.

```sql
insert into users
    (email, name)
values
    ('ibrahim@gmail.com', 'Ibrahim Bogor'),
    ('brave@gmail.com', 'Brave Browser')
ON DUPLICATE KEY UPDATE
    name = VALUES(name);

-- Query OK, 3 rows affected (0.001 sec)
-- Records: 2  Duplicates: 1  Warnings: 0
```

Hasilnya

```sql
select * from users;
```

```bash
+----+-------------------+---------------+
| id | email             | name          |
+----+-------------------+---------------+
| 17 | ibrahim@gmail.com | Ibrahim Bogor |
| 18 | heidi@gmail.com   | Heidi SQL     |
| 23 | brave@gmail.com   | Brave Browser |
+----+-------------------+---------------+
```

Data dengan email `ibrahim@gmail.com` namanya jadi `Ibrahim Bogor`, dan ada data baru untuk email `brave@gmail.com`.

## Sumber dan Referensi

- https://dev.mysql.com/doc/refman/8.4/en/insert-on-duplicate.html
- https://blog.devart.com/mysql-upsert.html
- https://www.basedash.com/blog/a-guide-to-upsert-in-mysql