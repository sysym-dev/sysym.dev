---
title: Cara Membuat Logout di Laravel Sanctum
tags: [laravel]
date: 2025-02-11 11:49:00 +0700
images:
- /images/posts/laravel-sanctum-logout/thumbnail.jpg
---

Pada artikel ini, akan dibahas cara membuat logout di laravel sanctum dengan menghapus token sanctum pada user, berikut beberapa caranya.

<!--more-->

## Logout Semua Token User

Untuk menghapus semua token user, gunakan kode berikut.

```php
$user->tokens()->delete();
```

## Logout Token User yang Sedang Digunakan

Untuk menghapus token user yang sedang digunakan dalam request, gunakan kode berikut.

```php
$request->user()->currentAccessToken()->delete();
```

## Logout dari Token User Tertentu

Tentukan terlebih dahulu token user yang ingin logout, lalu hapus token berdasarkan id dari token tersebut:

```php
$user->tokens()->where('id', $tokenId)->delete();
```

---

Sumber: https://laravel.com/docs/11.x/sanctum#revoking-tokens