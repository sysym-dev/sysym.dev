---
title: Cara Menambahkan Query String pada Pagination Laravel
tags: [laravel]
date: 2025-01-21 20:27:00 +0700
images:
- /images/posts/laravel-pagination-query-string/thumbnail.jpg
---

Jika Anda menggunakan paginate pada Laravel bersamaan dengan query string, ketika berpindah ke halaman lain maka query string akan hilang.

<!--more-->

Untuk tetap menyertakan query string pada pagination Laravel, ada 2 cara yang dapat dilakukan, yaitu:

## 1. Menambahkan Method withQueryString

Dengan menambahkan method `withQueryString` pada pagination, maka semua query string akan secara otomatis disertakan dalam URL yang dihasilkan oleh pagination.

Contoh.

```php
$users = User::paginate(5)->withQueryString();
```

Misalnya, terdapat query string `status=active` dan `sort=name`, Maka URL yang dihasilkan pagination akan menjadi seperti berikut:

```bash
?status=active&sort=name&page=1
?status=active&sort=name&page=2
?status=active&sort=name&page=3
# dst
```

## 2. Menambahkan Method appends

Dengan menambahkan method `appends` pada pagination, Anda bisa menentukan query string apa saja yang akan disertakan dalam URL yang dihasilkan oleh pagination.

Contoh.

```php
$users = User::paginate(5)->appends([
    'sort' => $request->input('sort')
]);
```

Misalnya terdapat query string `status=active` dan `sort=name`. Maka URL yang dihasilkan pagination hanya akan menyertakan query string `sort` saja, query string `status=active` akan hilang ketika berpindah halaman. Hasilnya akan menjadi seperti berikut:

```bash
?sort=name&page=1
?sort=name&page=2
?sort=name&page=3
# dst
```

---

Untuk informasi lebih lengkap, Anda dapat membaca langsung di dokumentasi Laravel: https://laravel.com/docs/11.x/pagination