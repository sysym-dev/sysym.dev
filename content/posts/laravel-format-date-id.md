---
title: Cara Format Tanggal ke Bahasa Indonesia di Laravel
tags: [laravel]
date: 2024-12-04 18:30:00 +0700
images:
- /images/posts/laravel-format-date-id/thumbnail.jpg
---

Kali ini saya akan membahas cara format tanggal ke Bahasa Indonesia di Laravel.

<!--more-->

Pertama pastikan konfigurasi locale carbon sudah `id`. Caranya cek file `config/app.php`, cari key `locale` pastikan valuenya adalah `id`.

```php
<?
return [
    'locale' => 'en'
];
```

Lalu ketika ingin menampilkan tanggal gunakan method `translatedFormat` agar formatnya sesuai locale yang dikonfigurasi, karena jika menggunakan `format` tanggal akan mengikuti format bawaan php date.

```php
Carbon::parse('2024-03-10')->translatedFormat('d F Y');
// "10 Maret 2024"

Carbon::parse('2024-03-10')->format('d F Y');
// "10 March 2024"
```

Untuk method lainnya tidak ada perubahan, misalnya method `diffForHumans` akan otomatis mengikuti konfigurasi locale.

```php
Carbon::parse('2024-03-10')->diffForHumans('2024-05-13');
// "2 bulan sebelumnya"
```