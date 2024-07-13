---
title: Cara Menduplikasi Data di Laravel
tags: [laravel]
date: 2024-07-13 14:00:00 +0700
images:
- /images/posts/laravel-duplicate-record/thumbnail.jpg
---

Laravel menyediakan method `replicate` pada eloquent model untuk menduplikasi data pada database.

<!--more-->

Cara menggunakannya cukup mudah, pertama ambil data yang akan diduplikasi, misalnya data `User`.

```php
$user = User::firstWhere('email', 'admin@admin.com');
```

Lalu tinggal panggil method `replicate` dari data yang sudah diambil dan panggil method `save` untuk menyimpannya ke database.

```php
$newUser = $user->replicate();
$newUser->save();
```

Jika data yang diduplikasi ingin diubah atributnya, misa langsung diubah atributnya atau menggunakan method `fill`.

```php
$newUser = $user->replicate();

$newUser->email = 'new-admin@admin.com';
// atau
$newUser->fill([
    'name' => 'New Admin'
]);

$newUser->save();
```

Jika tidak semua atribut dari data yang lama ingin diduplikasi, masukkan atribut-atribut tersebut ke argumen method `replicate`. Contoh disini user yang diduplikasi tidak mengikuti atribut `email_verified_at` dan `password` dari data yang laman.


```php
$newUser = $user->replicate(['email_verified_at', 'password']);

$newUser->save();

dd($user->verified_at, $newUser->verified_at) // true, false
```

Sumber : https://laravel.com/docs/11.x/eloquent#replicating-models