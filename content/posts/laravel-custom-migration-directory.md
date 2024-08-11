---
title: Cara Menjalakan Migrasi Database Dengan Direktori Custom di Laravel
tags: [laravel]
date: 2024-08-11 14:00:00 +0700
images:
- /images/posts/laravel-custom-migration-path/thumbnail.jpg
---

Di Laravel, direktori default yang akan dibaca ketika menjalankan migrasi database adalah `database/migrations`. Anda juga bisa menambahkan direktori lain, misalnya `database/migrations/1.0.0`, `database/migrations/2.0.0`, dst.

<!--more-->

Caranya, tambahkan opsi `--path` dengan nilai direktori mana saja yang akan dibaca pada saat menjalankan `php artisan migrate`.

```bash
php artisan migrate:fresh --path=database/migrations/1.0.0 --path=database/migrations/2.0.0 
``` 

Cara lainnya, anda bisa mendefinisikan direktori mana saja yang akan dibaca saat menjalankan migrasi database di method `loadMigrationsFrom` pada file `AppServiceProvider.php`.

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->loadMigrationsFrom([
            database_path('migrations/1.0.0'),
            database_path('migrations/2.0.0')
        ]);
    }
}
```

> Gunakan fungsi helper `database_path` untuk mendapatkan path dari direktori `database`.

Dengan begini, ketika `php artisan migrate` database dijalankan, direktori yang akan dibaca adalah `database/migrations`, `database/migrations/1.0.0`, dan `database/migrations/2.0.0`.

Sumber:

- [Database: Migrations - Laravel 11.x](https://laravel.com/docs/11.x/migrations)
- [Illuminate\Support\ServiceProvider | Laravel API](https://laravel.com/api/11.x/Illuminate/Support/ServiceProvider.html#method_loadMigrationsFrom)