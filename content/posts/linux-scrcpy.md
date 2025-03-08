---
title: Cara Menampilkan Layar Android ke Linux Menggunakan Scrcpy
tags: [linux]
date: 2025-01-11 19:38:00 +0700
images:
- /images/posts/linux-scrcpy/thumbnail.jpg
popular: true
popularOrder: 5
---

Scrcpy adalah aplikasi yang dapat digunakan untuk menampilkan layar Android ke PC atau Laptop. Untungnya, scrcpy dapat diinstal di Linux.

<!--more-->

Selain menampilkan layar Android, scrcpy juga dapat digunakan untuk mengontrol aktivitias Android langsung dari PC atau Laptop, seperti mengklik, mengetik, dll.

Berikut langkah-langkah menampilkan layar Android ke Linux menggunakan scrcpy:

## 1. Instal Package Yang Dibutuhkan

Pertama install beberapa *package* yang dibutuhkan untuk menjalankan scrcpy.

```bash
sudo apt install ffmpeg libsdl2-2.0-0 adb wget \
    gcc git pkg-config meson ninja-build libsdl2-dev \
    libavcodec-dev libavdevice-dev libavformat-dev libavutil-dev \
    libswresample-dev libusb-1.0-0 libusb-1.0-0-dev
```

## 2. Instal Scrcpy

Selanjutnya, install scrcpy.

Ada dua cara: menggunakan package manager atau script instalasi. Disini saya contohkan menggunakan script instalasi.

Pertama clone repositori github scrcpy.

```bash
git clone https://github.com/Genymobile/scrcpy
```

Masuk ke direktori repository yang diclone.

```bash
cd scrcpy
```

Jalannkan script instalasi.

```bash
./install_release.sh
```

Cek apakah instalasi berhasil dengan menjalankan `scrcpy --version`.

```bash
scrcpy --version
# scrcpy 3.1 <https://github.com/Genymobile/scrcpy>

# Dependencies (compiled / linked):
# - SDL: 2.26.5 / 2.26.5
# - libavcodec: 59.37.100 / 59.37.100
#  - libavformat: 59.27.100 / 59.27.100
#  - libavutil: 57.28.100 / 57.28.100
#  - libavdevice: 59.7.100 / 59.7.100
#  - libusb: - / 1.0.26
```

## 3. Hubungkan Perangkat Android ke PC / Laptop

Selanjutnya, hubungkan perangkat Android ke PC / Laptop dengan kabel USB.

Jika sudah terhubung, buka `Pengaturan > Developer Options`, cari dan aktifkan `USB Debugging`.

![Aktifkan USB Debugging pada Developer Options](/images/posts/linux-scrcpy/developer-options.png)

Jika menu `Developer Options` tidak ditemukan pada pengaturan, coba cara berikut:

1. Buka `Pengaturan > About Phone > Android Version`.
2. Tekan 7x atau lebih pada `Android Version` hingga muncul notifikasi bahwa Developer Options telah diaktifkan
3. Cari menu `Developer Options` dan aktifkan `USB Debugging`.

## 4. Cek Perangkat pada ADB

Pastikan perangkat Android sudah terhubung dengan menjalankan perintah berikut di terminal.

```bash
adb devices
# List of devices attached
# R9CW700L3BR	device
````

Jika perangkat Android tidak muncul, pastikan langkah sebelumnya telah dilakukan dengan benar atau periksa koneksi kabel USB.

## 5. Jalankan Scrcpy

Terakhir, jalankan di `scrcpy` di terminal untuk menampilkan layar Android ke PC / Laptop.

```bash
scrcpy
```

Jika berhasil, maka akan muncul window baru yang menampilkan layar Android pada PC / Laptop.

![Menampilkan Layar Android Di PC / Laptop menggunakan scrcpy](/images/posts/linux-scrcpy/scrcpy.png)

## Kesimpulan

Scrcpy adalah aplikasi yang dapat digunakan untuk menampilkan dan mengontrol layar Android di PC / Laptop. Aplikasi ini dapat dimanfaatkan misalnya untuk presentasi aplikasi mobile, dan lainnya.