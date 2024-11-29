---
title: Cara Mendapatkan ID Record yang Terakhir Diinsert di MySQL
tags: [mysql]
date: 2024-11-29 16:05:00 +0700
images:
- /images/posts/mysql-last-insert-id/thumbnail.jpg
---

ID record yang terakhir diinsert di MySQL dapat dilihat dengan fungsi `LAST_INSERT_ID`.

<!--more-->

```sql
INSERT INTO users (email, name)
VALUES ('job@email.com', 'job');
--- Query OK, 1 row affected (0.02 sec)

SELECT LAST_INSERT_ID();
--- +------------------+
--- | LAST_INSERT_ID() |
--- +------------------+
--- |                1 |
--- +------------------+
```

Jika values insertnya lebih dari 1 maka id record yang dikembalikan adalah id record values pertama yang diinsert.

```sql
INSERT INTO users (email, name)
VALUES
    ('job@email.com', 'job'),
    ('man@email.com', 'man');
--- Query OK, 2 rows affected (0.01 sec)

SELECT LAST_INSERT_ID();
--- +------------------+
--- | LAST_INSERT_ID() |
--- +------------------+
--- |                2 |
--- +------------------+
```

Sumber: https://dev.mysql.com/doc/refman/8.4/en/information-functions.html#function_last-insert-id