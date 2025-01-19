---
title: Cara Mengubah Nama File yang Disimpan pada File Upload Laravel
tags: [laravel]
date: 2025-01-19 13:45:00 +0700
images:
- /images/posts/laravel-upload-custom-name/thumbnail.jpg
---

Untuk mengubah nama file yang disimpan pada file upload laravel, anda bisa menggunakan method `storeAs`.

<!--more-->

Method `storeAs` menerima parameter pertama sebagai nama direktori tempat file akan disimpan dan parameter kedua sebagai nama file yang akan disimpan.

Contoh penggunaanya.

```php
$request->validate([
    'image' => ['required', 'file', 'image', 'mimes:jpeg,png,jpg']
]);

$file = $request->file('image');
$userId = $request->user()->id;
$extension = $file->extension();

$uploadedImage = $file->storeAs('images', $userId . '-image.' . $extension);
```

Pada contoh di atas, file upload akan disimpan secara dinamis berdasarkan id user. 

Ada beberapa method yang mungkin dibutuhkan ketika ingin mengubah nama file:

1. `getClientOriginalName()` untuk mendapatkan nama lengkap file yang diupload
2. `getClientOriginalExtension()` untuk mendapatkan ekstensi file yang diupload.
3. `hashName()` untuk mendapatkan nama unik random untuk file yang diupload, sudah lengkap dengan ekstensinya.
4. `extension()` untuk mendapatkan ekstensi file yang diupload, lebih aman karena diambil dari MIME type file.