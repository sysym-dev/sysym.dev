---
title: Cara Menampilkan dan Mengurutkan Git Branch Berdasarkan Tanggal Commit Terbaru
tags: [git]
date: 2025-03-25 13:57:00 +0700
images:
- /images/posts/git-branc-sort-date/thumbnail.jpg
---

Untuk menampilkan dan mengurutkan git branch berdasarkan tanggal commit terbaru, tambahkan opsi `--sort=-committerdate` pada perintah `git branch`.

<!--more-->

```bash
git branch --sort=-committerdate

#   feat/export-sales
# * development
#   feat/export-purchases
#   feat/export-purchase
#   feat/print-sale
```

Agar tanggal commit terbaru terlihat, format output dengan menambahkan opsi `--format`.

```bash
git branch --sort=-committerdate --format="%(committerdate:iso8601) %(refname:short)"

# 2025-03-17 16:14:54 +0700 feat/export-sales
# 2025-03-17 14:59:41 +0700 development
# 2025-03-17 14:58:59 +0700 feat/export-purchases
# 2025-03-16 16:32:46 +0700 feat/export-purchase
# 2025-02-24 12:28:59 +0700 feat/print-sale
```

- `committerdate:iso8601` untuk menampilkan tanggal commit terbaru pada branch dengan format ISO 8601.
- `refname:short` untuk menampilkan nama branch.

Jika ingin mengurutkan berdasarkan commit paling lama terlebih dahulu, gunakan `committerdate` tanpa tanda `-`.

```bash
git branch --sort=committerdate --format="%(committerdate:iso8601) %(refname:short)"

# 2025-01-21 07:09:43 +0700 main
# 2025-01-21 15:36:23 +0700 feat/master-product
# 2025-01-22 16:20:53 +0700 feat/master-create-product
# 2025-01-23 13:26:31 +0700 feat/fetch-product
# 2025-01-24 11:08:07 +0700 feat/filter-product
```