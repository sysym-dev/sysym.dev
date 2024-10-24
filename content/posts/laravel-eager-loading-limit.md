---
title: Cara Menambahkan Limit di Eager Loading Laravel
tags: [laravel]
date: 2024-10-24 19:50:00 +0700
images:
- /images/posts/laravel-eager-loading-limit/thumbnail.jpg
---

Limit di eager loading berguna untuk membatasi jumlah rows dari relasi yang diload pada suatu model.

<!--more-->

Untuk menambahkan limit pada eager loading, tambahkan constraint pada relasi yang ingin dilimit lalu panggil method `limit` di dalam constraint tersebut.

Misalnya ada model `User` yang memiliki banyak `Post`, lalu ingin diambil suatu `User` beserta `Post`-nya sebanyak 5 post saja.

```php
use App\Models\User;

$user = User::with([
    'posts' => function ($query) {
        $query->limit(5);
    }
])->find(1);
```

Fitur ini baru ada di laravel 11, untuk laravel 10 ke bawah, gunakan package https://github.com/staudenmeir/eloquent-eager-limit.