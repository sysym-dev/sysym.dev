---
title: Koneksi Database Dinamis di Laravel 
tags: [laravel]
date: 2024-08-02 22:00:00 +0700
images:
- /images/posts/laravel-db-dinamis/thumbnail.jpg
---

Dalam satu aplikasi laravel bisa saja terdapat lebih dari satu koneksi database, yang tiap-tiap database-nya digunakan pada kondisi tertentu.

<!--more-->

Misalnya setiap user memiliki koneksi database yang berbeda, user satu menggunakan database di server A, user yang lainnya menggunakan database di server B.

Untuk secara dinamis menggunakan koneksi database di laravel, anda bisa menggunakan method statis `setDefaultConnection` pada class `DB`.

```php
DB::setDefaultConnection('nama-koneksi-db');
```

Implementasinya bisa di middleware, contoh middleware `DynamicDbFromUser` berikut.

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class DynamicDbFromUser
{
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            $user = $request->user();

            DB::setDefaultConnection($user->db_key);
        }

        return $next($request);
    }
}
```

Lalu tinggal digunakan di routes sebagai middleware.

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\DynamicDbFromUser;
use App\Http\Controllers\Api\V1\AuthController;

Route::get('/v1/me', [AuthController::class, 'me'])
    ->middleware('auth:sanctum', DynamicDbFromUser::class);
```

Dengan begitu db koneksi yang digunakan pada setiap query database akan dinamis berdasarkan nilai kolom `db_key` pada user.

Pastikan juga nilai `db_key` yang ditulis pada user harus tersedia di `config/database.php` key `connections`.

```php
<?php

return [
    'connections' => [
        'mysql_default' => [
            'driver' => 'mysql',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', '')
            // dll
        ],
        'mysql_1' => [
            'driver' => 'mysql',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', '')
            // dll
        ],
        'mysql_2' => [
            'driver' => 'mysql',
            'url' => env('DB_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'laravel'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', '')
            // dll
        ],
    ]
];
```