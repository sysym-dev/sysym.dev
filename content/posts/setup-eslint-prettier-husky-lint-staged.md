---
title: Setup Eslint Prettier Husky dan Lint Staged
tags: [linter, javascript]
date: 2023-08-07 07:00:00 +0700
draft: true
---

Ketika memulai sebuah proyek aplikasi javascript, saya biasa mengawalinya dengan setup eslint prettier husky dan lint staged.

<!--more-->

Tool-tool tersebut berfungsi agar kode yang saya buat menjadi lebih rapi dan konsisten. Selain itu juga bisa untuk menemukan masalah pada kode secara otomatis.

Langsung saja berikut langkah-langkahnya.

## Setup Eslint

Eslint adalah tool yang membantu menganalisis dan memperbaiki kode javascript.

Pertama install dulu package-nya.

```bash
npm install eslint --save-dev
```

Kemudian jalankan perintah berikut untuk konfiguarsi eslint, ikuti arahannya sesuai dengan jenis proyek yang akan digunakan.

```bash
npm init @eslint/config
```

## Setup Prettier

Prettier adalah tool untuk memformat kode javascript agar lebih rapi dan konsisten.

```bash
npm install --save-dev --save-exact prettier
```

Kemudian buat sebuah file `.prettierrc.json` untuk menyimpan konfigurasi prettier.

```bash
echo '{\n\t"singleQuote": true\n}' > .prettierrc.json
```

## Setup Husky dan Lint Staged

Husky adalah tool untuk mengatur skrip yang akan dijalankan pada Git Hooks.

Lint Staged adalah tool untuk mengatur task yang akan dijalankan pada file yang berada pada fase staged git.

Pastikan proyek anda sudah ada git repository, jika belum inisialisasikan dulu.

```bash
git init
```

Kemudian jalankan perintah berikut untuk menginstal lint staged pada proyek aplikasi.

```bash
npx mrm@2 lint-staged
```