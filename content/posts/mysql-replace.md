---
title: Cara Mengganti Sebagian Teks di Kolom MySQL
tags: [mysql]
date: 2024-10-22 18:40:00 +0700
images:
- /images/posts/mysql-replace/thumbnail.jpg
---

Untuk mengganti sebagian teks di kolom MySQL, gunakan fungsi `REPLACE`. Fungsi ini mengganti semua  teks yang cocok dengan dengan teks baru.

<!--more-->

```sql
REPLACE('kolom yang ingin diganti', 'teks yang ingin diganti', 'teks pengganti')
```

Contoh, terdapat tabel `users` dengan kolom `email` berisi beberapa *row*.

```sql
select email from users;
--- +------------------------------+
--- | email                        |
--- +------------------------------+
--- | john.doe@yahoo.com           |
--- | jane.smith@google.co.id      |
--- | michael.brown@yahoo.com      |
--- | emily.jones@google.co.id     |
--- | david.wilson@yahoo.com       |
--- | sarah.davis@google.co.id     |
--- | daniel.miller@yahoo.com      |
--- | laura.moore@google.co.id     |
--- | chris.taylor@yahoo.com       |
--- | amanda.anderson@google.co.id |
--- +------------------------------+
```

Kemudian, `user` yang domain emailnya `google.co.id` ingin diganti menjadi `google.com`.

```sql
update users
set email = REPLACE(email, 'google.co.id', 'google.com')
where email like "%google.co.id";
```

Hasilnya, semua `user` yang domain emailnya `google.co.id` akan berubah menjadi `google.com`. 

```sql
select email from users;
--- +----------------------------+
--- | email                      |
--- +----------------------------+
--- | john.doe@yahoo.com         |
--- | jane.smith@google.com      |
--- | michael.brown@yahoo.com    |
--- | emily.jones@google.com     |
--- | david.wilson@yahoo.com     |
--- | sarah.davis@google.com     |
--- | daniel.miller@yahoo.com    |
--- | laura.moore@google.com     |
--- | chris.taylor@yahoo.com     |
--- | amanda.anderson@google.com |
--- +----------------------------+
```