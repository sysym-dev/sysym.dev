---
title: Cara Mendownload String Sebagai File di Javascript
tags: [javascript]
date: 2024-11-04 16:45:00 +0700
images:
- /images/posts/download-string-file-js/thumbnail.jpg
---

Mendownload string sebagai file di javascript berguna ketika ingin membuat fitur yang memungkinkan untuk membuat dan mendownload file dinamis dari sebuah string.

<!--more-->

Contohnya pada web https://sysym.dev/1001-tools/toml-to-json terdapat fitur untuk mengkonversi toml ke json, hasil konversinya berupa string json yang bisa didownload dalam bentuk file json.

Berikut langkah-langkah untuk mendownload string sebagai file di javascript:

## 1. Siapkan Data

Siapakan data string yang ingin didownload. Misalnya json.

```javascript
const json = JSON.stringify([
  { id: 1, name: "Rizky Saputra", email: "rizky.saputra@example.com" },
  { id: 2, name: "Dewi Lestari", email: "dewi.lestari@example.com" },
  { id: 3, name: "Agus Pratama", email: "agus.pratama@example.com" },
  { id: 4, name: "Linda Wijaya", email: "linda.wijaya@example.com" },
  { id: 5, name: "Siti Aisyah", email: "siti.aisyah@example.com" },
  { id: 6, name: "Budi Santoso", email: "budi.santoso@example.com" },
  { id: 7, name: "Ahmad Fauzi", email: "ahmad.fauzi@example.com" },
  { id: 8, name: "Fitri Nuraini", email: "fitri.nuraini@example.com" },
  { id: 9, name: "Andi Wijaya", email: "andi.wijaya@example.com" },
  { id: 10, name: "Rina Marlina", email: "rina.marlina@example.com" }
], null, 2)
```

## 2. Buat objek File

Buat objek `File` untuk data string yang sudah disiapkan menggunakan `File` constructor.

```javascript
const file = new File([json], 'users.json', {
    type: 'application/json',
});
```

- Parameter pertama diisi dengan array berisi string yang akan di download
- Parameter kedua diisi dengan nama filenya
- Parameter ketika disi objek dengan proerti `type` untuk tipe filenya

## 3. Buat URL Download

Agar file dapat didownload browser, buat url download dari file menggunakan `URL.createObjectURL`.

```javascript
const url = URL.createObjectURL(file);
```

Kemudian buat link dan klik link tersebut untuk mentrigger download file di browser.

```javascript
const a = document.createElement('a');

a.setAttribute('href', url);
a.setAttribute('download', file.name);

a.click();
```

## 4. Hapus URL objek File

URl dari objek file yang sudah didownload sebaiknya dihapus untuk menghemat memori dengan `URL.revokeObjectURL`.

```javascript
URL.revokeObjectURL(url);
```

---

Berikut contoh implementasi hasil akhirnya.

```javascript
document.querySelector('#download')
    .addEventListener('click', downloadJson)

function downloadJson() {
    const json = JSON.stringify([
      { id: 1, name: "Rizky Saputra", email: "rizky.saputra@example.com" },
      { id: 2, name: "Dewi Lestari", email: "dewi.lestari@example.com" },
      { id: 3, name: "Agus Pratama", email: "agus.pratama@example.com" },
      { id: 4, name: "Linda Wijaya", email: "linda.wijaya@example.com" },
      { id: 5, name: "Siti Aisyah", email: "siti.aisyah@example.com" },
      { id: 6, name: "Budi Santoso", email: "budi.santoso@example.com" },
      { id: 7, name: "Ahmad Fauzi", email: "ahmad.fauzi@example.com" },
      { id: 8, name: "Fitri Nuraini", email: "fitri.nuraini@example.com" },
      { id: 9, name: "Andi Wijaya", email: "andi.wijaya@example.com" },
      { id: 10, name: "Rina Marlina", email: "rina.marlina@example.com" }
    ], null, 2)
    
    const file = new File([json], 'users.json', {
        type: 'application/json',
    });
    
    const url = URL.createObjectURL(file);
    
    const a = document.createElement('a');

    a.setAttribute('href', url);
    a.setAttribute('download', file.name);

    a.click();
    
    URL.revokeObjectURL(url);
}
```

## Sumber

- https://github.com/sysym-dev/1001-tools/blob/1fa984e9649793eebdd772adcbccdca2b7229add/src/tools/toml-to-json/index.vue#L45-L59