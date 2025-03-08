---
title: Cara Memuat Data Besar dari Database di Laravel Menggunakan chunkById
tags: [laravel]
date: 2024-12-18 15:15:00 +0700
images:
- /images/posts/laravel-chunk-by-id/thumbnail.jpg
---

`chunkById` di laravel adalah metode yang dapat digunakan untuk memuat data berukuran besar dari database secara efisien.

<!--more-->

Dengan `chunkById` data tidak langsung semua diambil sekaligus, melainkan dibagi menjadi berapa bagian yang disebut dengan `chunk`. Misalnya data diambil per 1000. Cara ini membantu menghemat query database dan memori PHP.

Untuk menggunakan `chunkById`, buat query seperti biasa, lalu panggil method `chunkById`. Parameter pertama diisi jumlah data per chunk dan parameter kedua diisi callback untuk memproses data pada setiap chunk.

Contoh.

```php
use Illuminate\Support\Facades\DB;

DB::table('users')
    ->where('status', 'active')
    ->chunkById(1000, function ($users) {
        $users->each(function ($user) {
            // proses setiap $user
        })
    });
```

Jika query memiliki kondisi `where` lebih dari satu, wherenya harus dikelompokan. Contoh.

```php
use Illuminate\Support\Facades\DB;

DB::table('users')
    ->where(function($query) {
        $query->where('status', 'active')
            ->where('type', 'member');
    })
    ->chunkById(1000, function ($users) {
        $users->each(function ($user) {
            // proses setiap $user
        });
    });
```

## Perbedaan Dengan Chunk

- `chunk`: data dibagi menggunakan `limit` dan `offset`
- `chunkById`: data dibagi menggunakan nilai `id`.

`chunkById` umumnya lebih cepat karena tidak menggunakan `offset`.

Contoh perbandingan query yang dihasilkan oleh `chunk` dan `chunkById`.

```sql
-- chunk
select * from users limit 1000 offset 0;
select * from users limit 1000 offset 1000;
select * from users limit 1000 offset 2000;

-- chunkById
select * from users order by id asc limit 1000;
select * from users where id > 1000 order by id asc limit 1000;
select * from users where id > 2000 order by id asc limit 1000;
```