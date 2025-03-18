---
title: Perbedaan git switch dan git checkout serta Cara Menggunakannya
tags: [git]
date: 2025-03-18 16:10:00 +0700
images:
- /images/posts/git-switch-vs-checkout/thumbnail.jpg
---

`git switch` dan `git checkout` digunakan untuk berpindah ke branch lain, tetapi ada perbedaan di antara keduanya:

<!--more-->

- `git switch`: digunakan hanya untuk berpindah ke branch lain atau untuk membuat branch baru.
- `git checkout`: selain untuk berpindah ke branch lain, juga bisa untuk berpindah ke tag, commit tertentu dan mengembalikan file ke versi tertentu.

Contoh `git switch`.

```bash
git switch feat/product # pindah ke branch feat/product
git switch -c feat/product # buat dan pindah ke branch feat/product
```

Contoh `git checkout`.

```bash
git checkout feat/product # pindah ke branch feat/product
git checkout -b feat/product # buat dan pindah ke branch feat/product
git checkout v2.2.1 # pindah ke tag v2.2.1
git checkout abc123 # pindah ke commit hash abc123
git checkout example.txt # mengembalikan file example.txt ke versi terakhir commit
```

Catatan:

- `git switch` baru tersedia di versi `2.23.0`.
- Pada versi `2.23.0`, `git checkout` dipecah jadi `git switch` dan `git restore`.

Saya pribadi lebih sering menggunakan `git switch` untuk berpindah branch karena lebih ringkas dan spesifik.

- [Git 2.23.0 release notes](https://github.com/git/git/blob/2d2a71ce85026edcc40f469678a1035df0dfcf57/Documentation/RelNotes/2.23.0.adoc?plain=1#L61)