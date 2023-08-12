---
title: MySQL Membuat User dan Memberi Hak Akses
tags: [mysql]
date: 2023-08-12 10:00:00 +0700
---

MySQL server memiliki manamejen user dan hak aksesnya (_privileges_) agar dapat mengakses dan mengelola database.

<!--more-->

Setiap user minimal memiliki nama, password, host.

Setiap user juga dapat memiliki hak akses untuk membatasi user dalam mengakses dan mengelola database.

Langsung saja berikut langkah-langkah membuat user dan hak aksesnya.

## Masuk Ke MySQL Server

Untuk membuat user pada mysql server anda perlu masuk ke server mysql terlebih dahulu dengan user yang sudah ada dengan hak akses `CREATE USER`.

```bash
mysql -uadmin -padmin
```

Jika belum ada user, biasanya ada user default `root` dengan password string kosong atau yang diatur pada saat instalasi mysql.

```bash
mysql -uroot -p
```

Jika anda menggunakan linux dan punya akses ke super user, anda bisa masuk tanpa user dengan `sudo`

```bash
sudo mysql
```

## Membuat User

Membuat user bisa dilakukan dengan statement `CREATE USER`, diikuti informasi user dan passwordnya.

Minimal informasi user adalah `nama` dan `host`.

Berikut contoh statement minimal untuk membuat user.

```bash
CREATE USER 'ibrahim'@'localhost' IDENTIFIED BY 'securepassword';
```

Anda bisa mengganti `localhost` menjadi host yang diinginkan.

## Memberi Hak Akses Kepada User

Memberi hak akses kepada user bisa dilakukan dengan statement `GRANT`, diikuti nama hak aksesnya, lalu nama database dan tabelnya, lalu user yang akan diberi hak akses.

Contoh minimal memberi hak akses kepada user.

```bash
GRANT ALL ON *.* TO 'ibrahim'@'localhost';
```

Contoh diatas saya memberi semua hak akses pada semua db dan tabel di dalamnya kepada user `ibrahim` di host `localhost`.

Hak akses `ALL` bisa diganti ke hak akses lain yang lebih spesifik, seprti `SELECT`, `DELETE`, `UPDATE`, dsb. Contoh.

```bash
GRANT SELECT ON my_db.some_table TO 'ibrahim'@'localhost';
```

`ON` clause pada statement `GRANT` berfungsi untuk menentukan database dan tabel pada hak akses tersebut, tanda `*` artinya hak akses berlaku pada semua database atau semua tabel.

## Masuk Ke User

User yang sudah dibuat bisa langsung dicoba untuk mengakses server database.

```bash
mysql -uibrahim -psecurepassword
```

## Menampilkan Daftar User

Semua user mysql disimpan di database `mysql` tabel `user`.

Untuk menampilkannya tingga di `SELECT` saja.

```sql
SELECT User, Host FROM mysql.user;
-- +------------------+-----------+
-- | User             | Host      |
-- +------------------+-----------+
-- | ibrahim          | localhost |
-- | mysql.infoschema | localhost |
-- | mysql.session    | localhost |
-- | mysql.sys        | localhost |
-- | root             | localhost |
-- +------------------+-----------+
-- 5 rows in set (0.00 sec)
```

## Lebih Lanjut

Untuk membuat user dengan informasi yang lebih lengkap seperti ada informasi kapan password expire, tls, password plugin, bisa dilihat di [https://dev.mysql.com/doc/refman/5.7/en/create-user.html](https://dev.mysql.com/doc/refman/5.7/en/create-user.html).

Untuk informasi pemberian hak akses kepada user yang lebih lengkap bisa dilihat di [https://dev.mysql.com/doc/refman/5.7/en/grant.html](https://dev.mysql.com/doc/refman/5.7/en/grant.html).