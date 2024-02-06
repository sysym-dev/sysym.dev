---
title: Cara Upload File Multipart Menggunakan cURL
tags: [curl]
date: 2024-02-06 06:00:00 +0700
images:
- /images/posts/curl-upload-file/thumbnail.jpg
---

Cara upload file multipart menggunakan cURL bisa dengan menambahkan opsi `-F` pada command `cURL`.

<!--more-->

File yang akan di-upload diberi prefix `@` sebelum nama file-nya.

Syntax-nya:

```bash
curl -F namafield=@namafile url
```

Contoh.

```bash
curl -F photo=@myphoto.png http://localhost:3000/upload
```

Jika ingin mengupload file lebih dari satu, bisa ditambahkan opsi `-F` lagi.


```bash
curl -F photo=@myphoto.png \
    -F photo=@default.png \
    http://localhost:3000/upload
```

Jika file ingin diupload dengan nama yang berbeda, bisa ditambahkan dengan menambahkan `;filename=` setelah filenya.

```bash
curl -F "photo=@myphoto.png;filename=dawod.png" \
    http://localhost:3000/upload
```

> Pastikan untuk menambahkan petik jika nama filenya terdapat karakter `,` atau `;`.

Jika ingin menambahkan field lainnya yang bukan file, bisa ditambahkan opsi `-F` lagi tanpa menambahkan karakter `@`.

```bash
curl -F photo=@myphoto.png \
    -F name=samuel \
    http://localhost:3000/upload
```

Sumber:

- https://curl.se/docs/manpage.html#-F