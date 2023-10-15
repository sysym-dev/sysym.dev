---
title: Melihat Query SQL Yang Dieksekusi Laravel
tags: [laravel]
date: 2023-10-15 13:00:00 +0700
---

Melihat query database yang dieksekusi dapat membantu banyak hal, contohnya membantu debugging.

<!--more-->

Ada beberapa tool yang bisa digunakan untuk melihat query yang dieksekusi laravel, seperti [telescope](https://laravel.com/docs/10.x/telescope) atau [debugbar](https://github.com/barryvdh/laravel-debugbar).

Bisa juga dengan manual tanpa menggunakan tool, ada beberapa cara yang bisa dicoba, berikut penjelasannya.

## toSql dan toRawSql

`toSql` adalah method pada query builder yang digunakan untuk melihat query sql yang akan dieksekusi.

Contoh pada eloquent.

```php
dd(Product::skip(10)->take(10)->latest()->toSql());
// "select * from `products` order by `created_at` desc limit 10 offset 10"
```

Contoh pada query builder.

```php
dd(DB::table('products')->skip(10)->take(10)->latest()->toSql());
// "select * from `products` order by `created_at` desc limit 10 offset 10"
```

Jika ditambahkan binding value seperti menambahkan method `where` pada query, binding valuenya tidak akan tampil.

```php
dd(Product::skip(10)->take(10)->latest()->whereId(10)->toSql());
// "select * from `products` where `id` = ? order by `created_at` desc limit 10 offset 10"
```

Jika tetap ingin ditampilkan binding valuenya, gunakan method `toRawSql`.

```php
dd(Product::skip(10)->take(10)->latest()->whereId(10)->toRawSql());
// "select * from `products` where `id` = 10 order by `created_at` desc limit 10 offset 10"
```

Jika meload relasi, query untuk meload relasi tidak akan tampil karena `toSql` dan `toRawSql` hanya menampilkan query utama pada tabel.

```php
dd(Product::with('productPrices')->skip(10)->take(10)->latest()->toSql());
// "select * from `products` order by `created_at` desc limit 10 offset 10"
// query untuk meload `productPrices` tidak tampil
```

Untuk menampilkannya bisa menggunakan [DB::getQueryLog](#DB::getQueryLog)

## dd dan ddRawSql

Pada contoh sebelumnya query yang akan dieksekusi di-dump menggunakan `dd`, sedangkan pada query builder sendiri sudah ada method untuk menge-dump query yang akan dieksekusi, yaitu `dd` dan `ddRawSql`.

`queryBuilder->dd()` secara otomatis memanggil `toSql`. `queryBuilder->toRawSql()` secara otomatis memanggil `toRawSql`.

Contoh.

```php
Product::skip(10)->take(10)->latest()->whereId(10)->dd();
// "select * from `products` where `id` = ? order by `created_at` desc limit 10 offset 10" 
array:1 [
  0 => 10
]
```

```php
Product::skip(10)->take(10)->latest()->whereId(10)->ddRawSql();
// "select * from `products` where `id` = 10 order by `created_at` desc limit 10 offset 10"
```

> `dd` juga menampilkan semua binding value pada query

## DB::getQueryLog

`getQueryLog` adalah method yang mengembalikan array dari semua query yang telah dieksekusi.

Untuk menggunakannya, pastikan untuk mengaktifkan query logging melalui `enableQueryLog`.

```php
DB::enableQueryLog();

$supplier = Supplier::latest()->first();
Product::with('productPrices')->whereSupplierId($supplier->id)->latest()->get();

dd(DB::getQueryLog());

// array:3 [
//     0 => array:3 [
//         "query" => "select * from `suppliers` order by `created_at` desc limit 1"
//         "bindings" => []
//         "time" => 19.32
//     ]
//     1 => array:3 [
//         "query" => "select * from `products` where `supplier_id` = ? order by `created_at` desc"
//         "bindings" => array:1 [
//         0 => 1
//         ]
//         "time" => 4.86
//     ]
//     2 => array:3 [
//         "query" => "select * from `product_prices` where `product_prices`.`product_id` in (1, 2)"
//         "bindings" => []
//         "time" => 3.57
//     ]
// ]
```

Hasil yang ditampilkan cukup lengkap, query yang dijalankan, binding valuenya, dan lama eksekusi.

## DB::listen

`DB::listen` dapat digunakan untuk menangkap setiap query yang telah dieksekusi.

`DB::listen` biasa ditambahkan di `boot` `AppServiceProvider` di file `App\Services\AppServiceProvider.php`.

```php
<?php
 
namespace App\Providers;
 
use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
 
class AppServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        DB::listen(function (QueryExecuted $query) {
            dd($query->sql, $query->bindings, $query->time)
        });
    }
}
```

Informasi tentang query yang didapatkan sama seperti di `DB::getQueryLogs`, kode sqlnya, binding valuenya, dan lama eksekusinya.

## Kesimpulan

Ada beberapa cara manual yang dapat digunakan untuk melihat query yang akan diekseusi maupun yang sudah dieksekusi.

`toSql`, `toRawSql`, `dd`, dan `ddRawSql` digunakan untuk melihat query yang akan dieksekusi.

`DB::queryLogs` dan `DB::listen` digunakan untuk melihat query yang telah dieksekusi.

## Sumber

- [https://laravel.com/docs/10.x/database](https://laravel.com/docs/10.x/database)
- [https://stackoverflow.com/questions/41140975/laravel-eloquent-display-query-log](https://stackoverflow.com/questions/41140975/laravel-eloquent-display-query-log)