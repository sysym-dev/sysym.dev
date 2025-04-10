---
title: Cara Mengatasi Error BusyBox (initramfs) Saat Booting Linux
tags: [linux]
date: 2025-04-10 13:23:00 +0700
images:
- /images/posts/mengatasi-initramfs/thumbnail.jpg
---

Jika setelah reboot Linux, sistem tidak bisa masuk secara normal dan menampilkan seperti berikut:

<!--more-->

```bash
BusyBox v1.30.1 (Debian 1:1.30.1-6) built-in shell (ash)
Enter 'help' for a list of built-in commands.

(initramfs)
```

Artinya, ada partisi pada Linux yang *corrupted*. Solusinya, jalankan perintah `exit` untuk mengetahui partisi mana yang *corrupted*.

```bash
(initramfs) exit
/dev/sda1 contains a file system with errors, check forced.
Inode 5234182 extent tree (at level 1) could be narrower, IGNORED.
/dev/sda1: Inode 5234289 extent tree (at level 1) could be narrower, IGNORED.
/dev/sda1: Inode 5234394 extent tree (at level 1) could be narrower, IGNORED.
/dev/sda1: Inode 5234511 extent tree (at level 1) could be narrower, IGNORED.
/dev/sda1: Inodes that were part of a corrupted orphan linked list found.

/dev/sda1: UNEXPECTED INCONSISTENCY; RUN fsck MANUALLY.
        (i.e., without -a or -p options)
fsck exited with status code 4.
The root filesystem on /dev/sda1 requires a manual fsck.

BusyBox v1.30.1 (Debian 1:1.30.1-6) built-in shell (ash)
Enter 'help' for a list of built-in commands.

(initramfs)
```

Dari output di atas, dapat dilihat bahwa partisi yang *corrupted* adalah `/dev/sda1`. Jalankan perintah `fsck /dev/sda1 -y` untuk memperbaikinya secara otomatis.

```bash
(initramfs) fsck /dev/sda1 -y
/dev/sda1: ***** FILE SYSTEM WAS MODIFIED *****
/dev/sda1: 612842/30212096 files (1.7% non-contiguous), 18509374/120843264 blocks
```

Setelah proses selesai, reboot Linux dengan perintah `exit`.

```bash
exit
```

Jika masih belum berhasil, coba periksa kembali apakah ada partisi lain yang *corrupted*, atau coba boot menggunakan live USB lalu jalankan kembali perintah `fsck`.