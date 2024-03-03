---
title: Cara Hapus Git Tag
tags: [git]
date: 2024-03-03 15:30:00 +0700
images:
- /images/posts/hapus-git-tag/thumbnail.jpg
---

Ada beberapa cara yang dapat dilakukan untuk menghapus git tag.

<!--more-->

Untuk menghapus git tag di lokal, gunakan perintah `git tag -d <nama-tag>`.

```bash
git tag -d v1.0
# Deleted tag 'v1.0' (was 10da9d8)
```

Untuk menghapus semua git tag di lokal, gunakan perintah `git tag -d $(git tag -l)`.

```bash
git tag -d $(git tag -l)
# Deleted tag 'v1.0' (was 10da9d8)
# Deleted tag 'v2.0' (was 10da9d8)
# Deleted tag 'v3.0' (was 10da9d8)
```

Untuk menghapus git tag di remote, gunakan perintah `git push --delete origin <nama-tag>`.

```bash
git push --delete origin v1.0
# To github.com:example/example.git
# - [deleted]         v1.0
```

Untuk menghapus semua git tag di remote, gunakan perintah `git push --delete origin $(git tag -l)`.

```bash
git push --delete origin $(git tag -l)
# To github.com:example/example.git
# - [deleted]         v1.0
# - [deleted]         v2.0
# - [deleted]         v3.0
```

Jika error seperti ini:

```bash
fatal: --delete doesn't make sense without any refs
```

Maka solusinya bisa jalankan `git fetch` dulu sebelum menjalankan `git push --delete origin $(git tag -l)`.

```bash
git fetch
git push --delete origin $(git tag -l)
```