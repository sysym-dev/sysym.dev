---
title: Laravel 10 Join Dengan Beberapa Kondisi
tags: [laravel]
date: 2023-10-30 18:30:00 +0700
---

Laravel 10 query builder menyediakan method untuk melakukan join.

<!--more-->

```php
User::join('posts', 'users.id', '=', 'posts.user_id')
    ->get();
```

Join dengan beberapa kondisi bisa dilakukan menggunakan closure pada argument kedua method `join`.

```php
use Illuminate\Database\Query\JoinClause;

User::join('posts', function (JoinClause $join) {
    $join->on('users.id', '=', 'posts.user_id');
    $join->on('users.country', '=', 'posts.country');
})->get();
```

Join dengan perbandingan kolom dan nilai, nilai perlu dimasukkan ke `DB::raw` atau menggunakan `where` pada `join`.

```php
use Illuminate\Database\Query\JoinClause;
use DB;

User::join('posts', function (JoinClause $join) {
    $join->on('users.id', '=', 'posts.user_id');
    $join->on('posts.country', '=', DB::raw('ID'));
    $join->where('posts.status', '=', 'draft');
})->get();
```

Sumber:

- [https://laravel.com/docs/10.x/queries#advanced-join-clauses](https://laravel.com/docs/10.x/queries#advanced-join-clauses)