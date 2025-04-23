---
title: 2 Cara Menampilkan Daftar Procedure dan Function di Database MySQL
tags: [mysql]
date: 2025-04-23 14:34:00 +0700
images:
- /images/posts/mysql-list-procedure/thumbnail.jpg
---

Ada 2 cara untuk menampilkan daftar procedure dan function di database MySQL.

<!--more-->

## 1. Menggunakan SHOW PROCEDURE STATUS dan SHOW FUNCTION STATUS

Untuk menampilkan daftar procedure di database, gunakan statement `SHOW PROCEDURE STATUS`.

```sql
SHOW PROCEDURE STATUS;

+---------------+----------------------------------------------+-----------+---------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
| Db            | Name                                         | Type      | Definer | Modified            | Created             | Security_type | Comment | character_set_client | collation_connection | Database Collation |
+---------------+----------------------------------------------+-----------+---------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
| erp           | decrement_warehouse_stock_ordered_by_product | PROCEDURE | root@%  | 2025-04-15 08:36:07 | 2025-04-15 08:36:07 | DEFINER       |         | utf8mb4              | utf8mb4_unicode_ci   | armscii8_bin       |
| erp_dev       | decrement_warehouse_stock_ordered_by_product | PROCEDURE | root@%  | 2024-12-09 04:15:57 | 2024-12-09 04:15:57 | DEFINER       |         | utf8mb4              | utf8mb4_unicode_ci   | utf8mb4_0900_ai_ci |
| erp_dev       | sp_verify_payment_order_activation_member    | PROCEDURE | root@%  | 2024-11-14 03:54:16 | 2024-11-14 03:54:16 | DEFINER       |         | utf8mb4              | utf8mb4_unicode_ci   | utf8mb4_0900_ai_ci |
+---------------+----------------------------------------------+-----------+---------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
```

Untuk memfilter db tertentu saja tambahkan `WHERE` pada kolom db.

```sql
SHOW PROCEDURE status WHERE db = 'erp_dev';

+-----------+----------------------------------------------+-----------+---------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
| Db        | Name                                         | Type      | Definer | Modified            | Created             | Security_type | Comment | character_set_client | collation_connection | Database Collation |
+-----------+----------------------------------------------+-----------+---------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
| erp_dev   | decrement_warehouse_stock_ordered_by_product | PROCEDURE | root@%  | 2024-12-09 04:15:57 | 2024-12-09 04:15:57 | DEFINER       |         | utf8mb4              | utf8mb4_unicode_ci   | utf8mb4_0900_ai_ci |
| erp_dev   | sp_verify_payment_order_activation_member    | PROCEDURE | root@%  | 2024-11-14 03:54:16 | 2024-11-14 03:54:16 | DEFINER       |         | utf8mb4              | utf8mb4_unicode_ci   | utf8mb4_0900_ai_ci |
+-----------+----------------------------------------------+-----------+---------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
```

Untuk menampilkan daftar function di database, gunakan statement `SHOW FUNCTION STATUS`, cara penggunaanya sama persis dengan `SHOW PROCEDURE STATUS`.

## 2. Menggunakan Tabel information_schema.routines

Untuk menampilkan daftar procedure dan function di database anda juga dapat mengakses langsung ke tabel `information_schema.routines`. Tabel ini menyimpan informasi daftar procedure dan function.

```sql
SELECT
    routine_name, routine_schema, routine_type
FROM information_schema.routines
WHERE routine_schema IN ('erp', 'erp_dev');
    
+----------------------------------------------+----------------+--------------+
| ROUTINE_NAME                                 | ROUTINE_SCHEMA | ROUTINE_TYPE |
+----------------------------------------------+----------------+--------------+
| sp_verify_payment_order_activation_member    | erp_dev        | PROCEDURE    |
| decrement_warehouse_stock_ordered_by_product | erp_dev        | PROCEDURE    |
| decrement_warehouse_stock_ordered_by_product | erp            | PROCEDURE    |
+----------------------------------------------+----------------+--------------+
```

Penjelasan kolom:

- `routine_name` : nama function / procedure
- `routine_schema` : nama database
- `routine_type` : tipenya function / procedure

Untuk referensi kolom-kolomnya ada apa aja bisa dilihat di https://dev.mysql.com/doc/refman/8.4/en/information-schema-routines-table.html

---

Baca selengkapnya di:

- https://dev.mysql.com/doc/refman/8.4/en/show-procedure-status.html
- https://dev.mysql.com/doc/refman/8.4/en/show-function-status.html
- https://dev.mysql.com/doc/refman/8.4/en/information-schema-routines-table.html