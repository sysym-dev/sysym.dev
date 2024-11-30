---
title: Cara Mencari File Berdasarkan Nama di Linux
tags: [bash, linux]
date: 2024-11-30 20:30:00 +0700
images:
- /images/posts/linux-cari-file-nama/thumbnail.jpg
---

Untuk mencari file berdasarkan nama di linux, kita dapat menggunakan perintah `find`, dengan cara:

<!--more-->

1. Jalankan perintah `find`
2. Tambahkan opsi `-type` dengan argumen `f`
3. Tambahkan opsi `-name` diikuti nama filenya. Atau `-iname` jikang ingin mengabaikan huruf besar atau kecil pada nama file.

Contoh mencari file yang namanya "laporan.pdf".

```bash
find -type f -name laporan.pdf
```

Hasilnya.

```bash
Projects/laporan.pdf
Researchs/laporan.pdf
```

Jika nama file tidak diketahui pasti, kita dapat menggunakan expresi *wildcard* (`*`) untuk pencarian.

Contoh mencari file yang namanya mengandung kata "laporan".

```bash
find -type f -name "*laporan*"
```

Hasilnya.

```bash
Projects/laporan.pdf
Projects/laporan-pendahuluan.pdf
Projects/laporan-akhir.pdf
Researchs/laporan.pdf
Researchs/laporan-pendahuluan.pdf
Researchs/laporan-akhir.pdf
```

Jika ingin mengabaikan huruf besar / kecil, ganti opsi `-name` menjadi `-iname`.

```bash
find -type f -iname "*laporan*"
```

Hasilnya.

```bash
Projects/laporan.pdf
Projects/laporan-pendahuluan.pdf
Projects/laporan-akhir.pdf
Projects/LAPORAN-FINAL.pdf
Researchs/laporan.pdf
Researchs/laporan-pendahuluan.pdf
Researchs/laporan-akhir.pdf
```

Jika ingin mencari di direktori tertentu, tambahkan nama direktorinya setelah perintah di sebelum opsi `type`.

```bash
find Projects -type f -iname "*laporan*"
```

Hasilnya.

```bash
Projects/laporan.pdf
Projects/laporan-pendahuluan.pdf
Projects/laporan-akhir.pdf
Projects/LAPORAN-FINAL.pdf
```

Sumber : https://man7.org/linux/man-pages/man1/find.1.html