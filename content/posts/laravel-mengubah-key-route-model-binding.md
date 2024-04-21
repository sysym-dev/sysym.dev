---
title: Cara Mengubah Key Untuk Route Model Binding Laravel
tags: [laravel]
date: 2024-04-21 14:30:00 +0700
images:
- /images/posts/laravel-mengubah-key-route-model-binding/thumbnail.jpg
---

Secara default key yang digunakan untuk route model binding laravel adalah `id`. Untuk menggunakan key lainnya, ada beberapa cara yang bisa dilakukan:

<!--more-->

## Cara 1 : Mendefinisikan Key di Route

Cara pertama adalah dengan mendefinisikan key langsung di parameter route dengan sintaks `model:nama-key`. Contoh.

```php
Route::get('/users/{user:email}', [UserController::class, 'show']);
```

Route diatas akan menggunakan kolom `email` sebagai key route model binding.

## Cara 2 : Override Method getRouteKeyName di Model

Cara kedua adalah dengan meng-override method `getRouteKeyName` di model. Method ini mengembalikan key model yang digunakan sebagai route model binding. Contoh.

```php
/**
 * Get the route key for the model.
 */
public function getRouteKeyName(): string
{
    return 'email';
}
```

Cara ini akan meng-override setiap key route model binding pada model tersebut. Misal kode diatas ada pada model `User` maka setiap route model bindng `User` akan menggunakan `email` sebagai key-nya.

## Cara 3 : Explicit Binding

Cara ketiga adalah dengan menggunakan explicit binding. Dengan explicit binding route parameter dapat didefinisikan bagaimana query untuk binding ke modelnya. Explicit binding ditambahkan di `AppServiceProvider`.

Contoh

```php
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Route::bind('user', function (string $value) {
        return User::where('email', $value)->firstOrFail();
    });
}
```

Contoh diatas, setiap parameter `user` akan di binding ke model `User` dengan kolom email sebagai key-nya.

## Cara 4 : Override Method resolveRouteBinding di Model

Cara keempat adalah dengan meng-override method `resolveRouteBinding` di model. Method ini menerima nilai key binding dari parameter url route dan mengembalikan query untuk binding ke model.

```php
/**
 * Retrieve the model for a bound value.
 *
 * @param  mixed  $value
 * @param  string|null  $field
 * @return \Illuminate\Database\Eloquent\Model|null
 */
public function resolveRouteBinding($value, $field = null)
{
    return $this->where('email', $value)->firstOrFail();
}
```

## Kesimpulan

Jika ingin mengganti key saja dan pada satu route saja maka gunakan cara pertama, jika ingin mengganti key saja dan semua route maka gunakan cara kedua. Jika ingin mengubah query untuk binding ke modelnya bisa menggunakan cara 3 dan 4.

Sumber:

- https://laravel.com/docs/11.x/routing#route-model-binding
- https://medium.com/@sunnymalik353/implicit-explicit-route-model-binding-laravel-962784e19b00