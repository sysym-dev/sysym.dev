---
title: Instal MySQL Menggunakan APT
tags: [mysql, linux]
date: 2023-08-11 18:00:00 +0700
---

MySQL adalah database relational open source yang sering jadi pilihan database ketika membuat aplikasi.

<!--more-->

Untuk menginstal MySQL pada linux, salah satu caranya bisa menggunakan APT.

Apt adalah paket manajer pada linux debian dan turunannnya.

Langsung saja berikut langkah-langkah install MySQL Menggunakan Apt.

## Menambahkan MySQL Apt Repository

Pertama download file deb `mysql apt config` pada link berikut.

[https://dev.mysql.com/downloads/repo/apt/](https://dev.mysql.com/downloads/repo/apt/)

Buka terminal, masuk ke direktori tempat file `mysql apt config` di download, kemudian instal menggunakan command `dpkg`.

```bash
sudo dpkg -i mysql-apt-config_w.x.y-z_all.deb
```

Jalankan apt update.

```bash
sudo apt update
```

Sekarang di repository apt linux anda sudah ada paket mysql.

## Instal MySQL

Instal MySQL, nama paketnya `mysql-server`.

```bash
sudo apt install mysql-server
```

Cek apakah mysql sudah terinstal.

```bash
mysql --version
# mysql  Ver 8.0.33 for Linux on x86_64 (MySQL Community Server - GPL)
```

## Disable MySQL Pada Saat Boot

Secara default mysql akan dijalankan pada saat boot.

Untuk men-_disable_-nya, bisa dengan perintah berikut.

```bash
sudo systemctl disable mysql
```

Kemudian jika ingin menjalankannya, jalankan perintah berikut.

```bash
sudo systemctl start mysql
```