---
title: Cara Melakukan Increment Pada Saat Upsert di MySQL
tags: [mysql]
date: 2024-09-08 18:00:00 +0700
images:
- /images/posts/mysql-upsert-increment/thumbnail.jpg
---

Upsert adalah cara untuk melakukan insert data ke database tapi jika datanya sudah ada maka dilakukan operasi update.

<!--more-->

Upsert biasanya dilakukan dengan memperbarui nilai kolom-kolom tertentu dengan nilai yang baru ketika data yang akan ditambahkan sudah ada di database. [Baca selengkapnya di sini](/cara-melakukan-upsert-di-mysql/).

Selain itu, pada upsert juga bisa dilakukan increment pada nilai kolom tertentu. Caranya tinggal dituliskan nilai baru kolom tersebut dengan nilai kolom + jumlah incrementnya.

```sql
insert into nama_tabel
    (kolom1, kolom2, dst)
values
    (nilai1, nilai2, dst),
    (nilai1, nilai2, dst)
on duplicate key update
    kolom_yg_diincrement = kolom_yg_diincrement + jumlah_increment;
```

Contoh, disini ada tabel `pages` kolomnya id, url, dan views.

```sql
select * from pages;

+----+------------------------------------+-------+
| id | url                                | views |
+----+------------------------------------+-------+
|  1 | http://localhost:3000              |    12 |
|  7 | http://localhost:3000/about.html   |     1 |
|  8 | http://localhost:3000/contact.html |     1 |
+----+------------------------------------+-------+
```

Kolom `url` unique, jadi bisa dilakukan upsert, ketika tambah data page baru dengan url yang sudah ada maka diincrement nilai viewsnya.

```sql
insert into pages
    (url, views)
values
    ('http://localhost:3000/faq.html', 1),
    ('http://localhost:3000', 1),
    ('http://localhost:3000/about.html', 1),
    ('http://localhost:3000/blog.html', 1)
on duplicate key update
    views = views + 1;
```

Hasilnya.

```sql
select * from pages;

+----+------------------------------------+-------+
| id | url                                | views |
+----+------------------------------------+-------+
|  1 | http://localhost:3000              |    13 |
|  7 | http://localhost:3000/about.html   |     2 |
|  8 | http://localhost:3000/contact.html |     1 |
|  9 | http://localhost:3000/faq.html     |     1 |
| 10 | http://localhost:3000/blog.html    |     1 |
+----+------------------------------------+-------+
```

Url yang sudah ada akan diincrement viewsnya + 1, jika belum ada maka diinsert seperti biasa.

## Sumber

- https://stackoverflow.com/questions/6802239/how-to-increment-a-field-in-mysql-using-on-duplicate-key-update-when-inserting