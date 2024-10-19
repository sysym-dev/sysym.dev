---
title: Cara Menghitung Jumlah File Dalam Sebuah Direktori Di Linux
tags: [bash, linux]
date: 2024-10-19 10:25:00 +0700
images:
- /images/posts/linux-menghitung-jumlah-file-direktori/thumbnail.jpg
---

Cara menghitung jumlah file dalam sebuah direktori di linux bisa dilakukan dengan dua cara, yaitu:

<!--more-->

## 1. Menggunakan Perintah ls dan wc

Misal menghitung jumlah file di dalam direktori `/etc`.

```bash
$ ls /etc | wc -l
281
```

Atau

```bash
$ ls -1 /etc | wc -l
281
```

`ls` digunakan untuk menampilkan isi sebuah direktori, lalu di-`pipe` ke `wc -l` untuk dihitung jumlahnya.

Jika ingin dihitung beserta file yang tersembunyi, tambahkan opsi `-A` pada `ls`.

```bash
$ ls -A1 /etc | wc -l
281
```

## Menggunakan Perintah find dan wc

Jika ingin dihitung jumlah file di dalam direktori sampai ke subdirektorinya, gunakan perintah `find`.

Misalnya menghitung jumlah file di direktori `Downloads` sampai ke subdirektorinya.

```bash
$ find ~/Downloads | wc -l
101
```

Jika ingin menghitung jumlah yang jenisnya file saja, bukan yang direktori, tambahkan opsi `-type f`.

```bash
$ find ~/Downloads -type f | wc -l
99
```

Jika ingin menghitung jumlah yang jenisnya direktori saja, bukan yang file, tambahkan opsi `-type d`.

```bash
$ find ~/Downloads -type d | wc -l
2
```

Jika ingin menghitung yang jumlah file dengan nama tertentu atau ekstensi tertentu, tambahkan opsi `-name` atau `-iname`.

Contoh menghitung jumlah file yang namanya diawali `Otakudesu`.

```bash
$ find ~/Downloads -name "Otakudesu*" | wc -l
83
$ find ~/Downloads -iname "Otakudesu*" | wc -l
83
```

Contoh menghitung jumlah file yang extensinya `.pdf`.

```bash
$ find ~/Downloads -name "*.pdf" | wc -l
4
$ find ~/Downloads -iname "*.pdf" | wc -l
4
```

## Cara Lainnya

Cara lainnya bisa dengan perintah `tree` dsb. Akan dijelaskan lebih lanjut di artikel selanjutnya.