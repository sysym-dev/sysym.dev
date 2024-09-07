---
title: Cara Menggunakan Order By Dengan Nilai Custom Di Mysql
tags: [mysql]
date: 2024-09-07 22:50:00 +0700
images:
- /images/posts/mysql-order-by-custom/thumbnail.jpg
---

Untuk mengurutkan order by dengan nilai custom di mysql, gunakan fungsi `FIELD` yang berisi nilai custom-nya, atau menggunakan statement `CASE`.

<!--more-->

Contoh data.

```sql
select * from orders;

+----+------+---------+
| id | code | status  |
+----+------+---------+
|  1 | 001  | packed  |
|  2 | 002  | shipped |
|  3 | 003  | draft   |
|  4 | 004  | draft   |
|  5 | 005  | paid    |
|  6 | 006  | paid    |
|  7 | 006  | shipped |
+----+------+---------+
```

Contoh kasusnya data diatas ingin diurutkan berdasarkan yang statusnya paid dulu lalu yang draft dst.

Cara yang pertama bisa dilakukan dengan `ORDER BY` ditambah fungsi `FIELD`.

```sql
order by field(nama_kolom, status_1, status_2, dst)
```

Contohnya.

```sql
select * from orders
order BY FIELD(status, 'paid', 'draft', 'shipped', 'packed');

+----+------+---------+
| id | code | status  |
+----+------+---------+
|  5 | 005  | paid    |
|  6 | 006  | paid    |
|  3 | 003  | draft   |
|  4 | 004  | draft   |
|  2 | 002  | shipped |
|  7 | 006  | shipped |
|  1 | 001  | packed  |
+----+------+---------+
```

Cara kedua bisa menggunakan statement `CASE`.

```sql
order by case status
    when 'status_1' then nomor_urutan
    when 'status_2' then nomor_urutan
    else default_nomor_urutan
end
```

Contohnya.

```sql
select * from orders
order by case status
    when 'paid' then 1
    when 'draft' then 2
    when 'shipped' then 3
    when 'packed' then 4
    else 5
end;

+----+------+---------+
| id | code | status  |
+----+------+---------+
|  5 | 005  | paid    |
|  6 | 006  | paid    |
|  3 | 003  | draft   |
|  4 | 004  | draft   |
|  2 | 002  | shipped |
|  7 | 006  | shipped |
|  1 | 001  | packed  |
+----+------+---------+
```

## Referensi

- https://dev.mysql.com/doc/refman/8.4/en/string-functions.html#function_field
- https://dev.mysql.com/doc/refman/8.4/en/case.html