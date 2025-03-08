---
title: Cara Membuat Relasi First of Many di Laravel
tags: [laravel]
date: 2025-03-08 16:24:00 +0700
images:
- /images/posts/laravel-first-of-many/thumbnail.jpg
---

Relasi first of many dapat digunakan untuk mengambil record pertama dari relasi has many. Di laravel 8.x kita dapat menambahkan relasi ini dengan 3 cara, yaitu:

<!--more-->

1. `latestOfMany`, mengambil record pertama dari has many berdasarkan id terbaru
2. `oldestOfMany`, mengambil record pertama dari has many berdasarkan id terlama
3. `ofMany`, mengambil record pertama dari has many dengan kondisi custom

Method di atas ditambahkan setelah `hasOne` dari model yang ingin ditambahkan relasinya.

Contoh `latestOfMany` untuk mengambil order terbaru dari user.

```php   
public function orders(): HasMany
{
    return $this->hasMany(Order::class);
}

public function latestOrder(): HasOne
{
    return $this->hasOne(Order::class)->latestOfMany();
}
```

Contoh `oldestOfMany` untuk mengambil order terlama dari user.

```php   
public function orders(): HasMany
{
    return $this->hasMany(Order::class);
}

public function oldestOrder(): HasOne
{
    return $this->hasOne(Order::class)->oldestOfMany();
}
```

Contoh `ofMany` untuk mengambil order dengan total harga tertinggi dari user.

Argumen pertama dari `ofMany` diisi nama kolomnya (price), argumen kedua diisi fungsi untuk mengurutkan kolomnya (max, terbesar).

```php   
public function orders(): HasMany
{
    return $this->hasMany(Order::class);
}

public function largestOrder(): HasOne
{
    return $this->hasOne(Order::class)->ofMany('price', 'max');
}
```

`ofMany` dapat digunakan untuk mengurutkan beberapa kolom sekaligus, caranya dengan menggunakan array (price tertinggi dan id terbaru).

```php   
public function orders(): HasMany
{
    return $this->hasMany(Order::class);
}

public function largestOrder(): HasOne
{
    return $this->hasOne(Order::class)->ofMany([
        'price' => 'max',
        'id' => 'max'
    ]);
}
```

`ofMany` juga dapat ditambahkan query tambahan (price tertinggi, id terbaru, dan yang sudah valid).

```php   
public function orders(): HasMany
{
    return $this->hasMany(Order::class);
}

public function largestOrder(): HasOne
{
    return $this->hasOne(Order::class)->ofMany([
        'price' => 'max',
        'id' => 'max'
    ], function ($query) {
        $query->whereNotNull('valid_at');
    });
}
```

Di laravel 10.x syntax`HasOne` dapat diganti dengan memanggil relasi has many-nya kemudian ditambahkan method `one`. Contoh.

```php   
public function orders(): HasMany
{
    return $this->hasMany(Order::class);
}

public function largestOrder(): HasOne
{
    return $this->orders()->one()->ofMany('price', 'max');
}
```

---

Baca lebih lengkap di https://laravel.com/docs/12.x/eloquent-relationships