---
title: Cara Mengatasi Error MultipleRecordsFoundException di Laravel
tags: [laravel]
date: 2025-01-18 10:20:00 +0700
images:
- /images/posts/laravel-sole-error/thumbnail.jpg
---

Error `MultipleRecordsFoundException` di laravel biasanya terjadi ketika menggunakan method `sole` pada query builder. Berikut penjelasannya.

<!--more-->

Method `sole` digunakan untuk mengambil data pertama dari hasil query database, jika query menghasilkan lebih dari satu record maka akan memicu error `MultipleRecordsFoundException`. Contoh penggunaanya.

```php
$user = User::where('role', 'admin')->sole();
```

Pada kode di atas, jika di tabel `users` yang rolenya admin ada lebih dari satu maka akan memicu error `MultipleRecordsFoundException`.

Untuk mengatasinya, anda harus memastikan query yang dijalankan menggunakan `sole` hanya mengasilkan satu record.

Misalnya untuk contoh di atas, bisa dengan menambahkan `UNIQUE` constraints pada kolom `role` di tabel `users`, sehingga yang role-nya `admin` hanya ada satu.

Solusi lain, bisa dengan mengganti method `sole` ke `first` jika memang hanya ingin mengambil record yang pertama tanpa peduli query yang dijalankan sebenarnya menghasilkan lebih dari satu record.