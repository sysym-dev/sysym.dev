---
title: "MySQL : Mengabaikan Error Pada Saat Insert Data ke Database"
tags: [mysql]
date: 2023-11-12 11:00:00 +0700
---

*Error* bisa saja terjadi saat *insert* data ke *database*, seperti *error* duplikasi, *error* tidak boleh *null*, *error* *key* tidak valid, dsb.

<!--more-->

Jika muncul *error* pada saat *insert*, maka *insert* akan dibatalkan. Jika data yang di-*insert* lebih dari satu, maka semuanya akan dibatalkan.

Misal pada tabel `users` kolom `email` unik, maka insert dibawah akan muncul *error* pada `VALUES` baris ke-tiga karena *email*-nya duplikat sehingga semua data tidak akan masuk ke *database*.

```sql
INSERT INTO `users`
    (`email`, `name`)
VALUES
    ('ada@gmail.com', 'Ada'),
    ('shev@gmail.com', 'Shev'),
    ('ada@gmail.com', 'Roh'),
    ('jin@gmail.com', 'Jin'),
    ('gamm@gmail.com', 'Gamm');
```

```sql
ERROR 1062 (23000): Duplicate entry 'ada@gmail.com' for key 'email'
```

Ada beberapa cara untuk mengatasi masalah ini, salah satunya adalah dengan mengabaikan *error*-nya.

Dengan diabaikannya *error*, *error* akan diubah menjadi *warning*, jika data yang di-*insert* lebih dari satu maka data yang *error* akan dilewati, yang tidak *error* akan tetap disimpan.

Untuk mengabaikannya caranya hanya dengan menambahkan *modifier* `IGNORE` setelah `INSERT` *statement*.

```sql
INSERT IGNORE INTO `users`
    (`email`, `name`)
VALUES
    ('ada@gmail.com', 'Ada'),
    ('shev@gmail.com', 'Shev'),
    ('ada@gmail.com', 'Roh'),
    ('jin@gmail.com', 'Jin'),
    ('gamm@gmail.com', 'Gamm');
```

```sql
Query OK, 4 rows affected, 1 warning (0.002 sec)
Records: 5  Duplicates: 1  Warnings: 1
```

Hasilnya, dari 5 data yang akan dimasukkan hanya 4 yang tersimpan, 1 *error* duplikat akan diubah jadi *warning* dan tidak tersimpan.

Daftar *error* yang dapat diabaikan:

- `ER_BAD_NULL_ERROR`
- `ER_DUP_ENTRY`
- `ER_DUP_ENTRY_WITH_KEY_NAME`
- `ER_DUP_KEY`
- `ER_NO_PARTITION_FOR_GIVEN_VALUE`
- `ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT`
- `ER_NO_REFERENCED_ROW_2`
- `ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET`
- `ER_ROW_IS_REFERENCED_2`
- `ER_SUBQUERY_NO_1_ROW`
- `ER_VIEW_CHECK_FAILED`

## Sumber

[https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#ignore-effect-on-execution](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#ignore-effect-on-execution)