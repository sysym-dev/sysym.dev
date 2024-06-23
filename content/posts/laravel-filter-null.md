---
title: Cara Menghilangkan Item Yang Null Di Laravel Collection
tags: [laravel]
date: 2024-06-23 17:00:00 +0700
images:
- /images/posts/larave-filter-null/thumbnail.jpg
---

Method `filter` pada laravel collection dapat digunakan untuk menghilangkan item yang bernilai null pada laravel collection.

<!--more-->

Jika method `filter` dipanggil tanpa `callback` maka semua item di collection yang nilainya ekuivalen ke `false` (termasuk null) akan dihilangkan.

```php
$ids = collect([1, 2, 3, null, 'bos', 'henhen', null]);

dd($ids->filter()); // [1, 2, 3, 'bos', 'henhen']
```

Sumber : https://laravel.com/docs/11.x/collections#method-filter