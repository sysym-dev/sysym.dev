---
title: Membuat Direktori di Linux Secara Rekursif
tags: [linux]
date: 2023-10-31 18:00:00 +0700
---

Membuat direktori di linux bisa dilakukan dengan perintah `mkdir`.

<!--more-->

```bash
mkdir project
```

Jika ingin membuat direktori secara rekursif beserta *children*-nya secara bersamaan dalam satu perintah, tambahkan opsi `-p` / `--parents` pada perintah `mkdir`.

```bash
mkdir -p project/web/src
# atau
mkdir --parents project/web/src
```

Pada perintah diatas `mkdir` akan membuat direktori `project`, di dalamnya ada direktori `web`, di dalamnya lagi ada `src`.