---
title: Cara Menyembunyikan Output Command Bash
tags: [bash]
date: 2024-02-17 08:00:00 +0700
images:
- /images/posts/bash-silent-output/thumbnail.jpg
---

Untuk menyembunyikan output command bash bisa dengan meredirect `stdout` atau `stderr` ke file `/dev/null`.

<!--more-->

Contoh menyembunyikan output command ketika berhasil.

```bash
ls Documents > /dev/null
# atau
ls Documents 1> /dev/null
```

Contoh menyembunyikan output command ketika gagal.

```bash
ls Documents 2> /dev/null
```

Contoh menyembunyikan output command ketika berhasil atau gagal.

```bash
ls Documents > /dev/null 2>&1
# atau
ls Documents &> /dev/null
```

## Penjelasan

Ketika command dijalankan, outputnya akan dikirim ke `stdout` jika berhasil atau ke `stderr` jika gagal.

Jika `stdout` atau `stderr` diredirect ke `/dev/null` maka outputnya tidak tampil karena outputnya dimasukkkan ke file `/dev/null`.

File `/dev/null` adalal file khusus di linux yang setiap data yang ditulis ke file itu akan dihilangkan.

`2>&1` maksudnya `stderr` akan diredirect ke `stdout`. Pada bash, angka `2` adalah *file descriptor* dari `stderr` dan angka `1` adalah *file descriptor* dari `stdout`.

## Sumber

- https://devicetests.com/hide-command-output-bash-scripts
- https://www.baeldung.com/linux/silencing-bash-output