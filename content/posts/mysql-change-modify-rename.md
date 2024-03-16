---
title: Perbedaan Klausa MySQL Change Modify dan Rename
tags: [mysql]
date: 2024-03-16 16:00:00 +0700
images:
- /images/posts/mysql-change-modify-rename/thumbnail.jpg
---

`CHANGE`, `MODIFY` dan `RENAME` bisa digunakan untuk mengubah nama atau definisi suatu kolom pada mysql. Namun ada beberapa perbedaan yang perlu diketahui.

<!--more-->

- `CHANGE` dapat digunakan untuk mengubah nama dan definisi suatu kolom.
- `MODIFY` dapat digunakan untuk mengubah definisi suatu kolom tapi tidak bisa mengubah namanya.
- `RENAME` dapat digunakan untuk mengubah nama suatu kolom tapi tidak bisa mengubah definisinya.

## CHANGE

Contoh operasi menggunakan klausa `CHANGE` untuk mengubah nama dan definisi kolom.

```sql
-- mengubah nama kolom dan definisinya
ALTER TABLE users CHANGE name fullname VARCHAR(100);
```

Menggunakan klausa `CHANGE` anda harus menyertakan kolom yang akan diubah diikuti nama kolom yang baru dan definisi kolom yang baru.

Jika nama kolom yang lama tidak mau diubah maka nama kolom yang baru diisi dengan nama kolom yang lama. Contoh.

```sql
-- mengubah definisi kolom
ALTER TABLE users CHANGE name name VARCHAR(100);
```

Jika definisi kolom yang lama tidak mau diubah maka definisi kolom yang baru diisi dengan definisi kolom yang lama. Contoh.

```sql
-- mengubah definisi kolom
ALTER TABLE users CHANGE name fullname VARCHAR(255);
```

## MODIFY

Contoh operasi menggunakan klausa `MODIFY` untuk mengubah definisi kolom.

```sql
-- mengubah definisi kolom
ALTER TABLE users MODIFY name VARCHAR (100);
```

Menggunakan kalusa `MODIFY` anda harus menyertakan nama kolom yang akan diubah diikuti perubahan definisi kolomnya.

## RENAME

Contoh operasi menggunakan klausa `RENAME` untuk mengubah nama kolom.

```sql
-- mengubah nama kolom
ALTER TABLE users RENAME name fullname;
```

Menggunakan kalusa `RENAME` anda harus menyertakan nama kolom yang akan diubah diikuti nama kolom yang baru.

## Kesimpulan

Biasanya, jika hanya ingin mengubah nama kolom saya menggunakan `RENAME`, jika ingin mengubah definisi kolom saya menggunakan `MODIFY` jika ingin mengubah nama dan definisi kolom saya menggunakan `CHANGE`.

Sumber: [https://dev.mysql.com/doc/refman/8.0/en/alter-table.html#alter-table-redefine-column](https://dev.mysql.com/doc/refman/8.0/en/alter-table.html#alter-table-redefine-column)