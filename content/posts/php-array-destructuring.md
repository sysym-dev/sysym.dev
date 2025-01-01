---
title: Cara Menggunakan Array Destructuring di PHP
tags: [php]
date: 2025-01-01 15:00:00 +0700
images:
- /images/posts/php-array-destructuring/thumbnail.jpg
---

Array Destructuring adalah cara untuk mengekstrak nilai dari elemen array ke beberapa variabel sekaligus.

<!--more-->

Contoh.

```php
$name = ['Anton', 'Wibowo'];

[$first_name, $last_name] = $name;

var_dump($first_name, $last_name);

// string(5) Anton
// string(6) Wibowo
```

Pada contoh di atas, destructuring dilakukan pada array `$name` untuk mengekstrak elemen pertama (`Anton`) ke variabel `$first_name` dan element kedua (`Wibowo`) ke variabel `$last_name`.

Jika total elemen array ada 3, lalu elemen kedua ingin diskip, maka cukup biarkan posisi kedua kosong dengan tanda koma tanpa variabel, Contoh.

```php
$name = ['Anton', 'sifo', 'Wibowo'];

[$first_name, , $last_name] = $name;

var_dump($first_name, $last_name);

// string(5) Anton
// string(6) Wibowo
```

Untuk array asosiatif, caranya sebutkan key yang ingin diekstrak lalu tambahkan `=>` diikuti nama variabelnya.

```php
$name = [
    'a' => 'Anton', 
    'b' => 'sifo',
    'c' => 'Wibowo'
];

['a' => $first_name, 'c' => $last_name] = $name;

var_dump($first_name, $last_name);

// string(5) Anton
// string(6) Wibowo
```