---
title: Node Js Console Log Deep Object
tags: [nodejs]
date: 2024-03-24 19:00:00 +0700
images:
- /images/posts/node-console-log-deep-object/thumbnail.jpg
---

Ketika sebuah nested objek ditampilkan ke console node js dengan `console.log`, objek tidak ditampilkan secara penuh sampai ke nested objeknya. Contoh.

<!--more-->

```js
const users = [
  {
    id: 1,
    name: 'Ghe',
    address: [
      {
        province: {
          id: 1,
          name: 'Fikj'
        },
        city: {
          id: 1,
          name: 'Gamd'
        }
      }
    ],
    office: {
      id: 1,
      name: 'Das',
      category: {
        id: 1,
        name: 'Molk'
      }
    }
  }
]

console.log(users)
```

Hasil di console objek di array `address` dan `office.category` tidak ditampilkan melainkan diganti dengan `[Object]`.

```bash
# node log.js
[
  {
    id: 1,
    name: 'Ghe',
    address: [ [Object] ],
    office: { id: 1, name: 'Das', category: [Object] }
  }
]
```

Ada 3 cara yang bisa dilakukan untuk menampilkan objek secara penuh pada console.

## console.dir

Menggunakan `console.dir` nested objek dapat ditampilkan ke console secara penuh dengan mengatur `depth` pada parameter kedua menjadi `null`.

```js
console.dir(users, { depth: null })
```

> Selain `depth` ada properti lain seperti `showHidden` untuk menentukan apakah properti objek yang hidden ditampilkan atau tidak dan `color` untuk memberi warna. 

Hasilnya.

```bash
# node log.js
[
  {
    id: 1,
    name: 'Ghe',
    address: [
      {
        province: { id: 1, name: 'Fikj' },
        city: { id: 1, name: 'Gamd' }
      }
    ],
    office: { id: 1, name: 'Das', category: { id: 1, name: 'Molk' } }
  }
]
```

## util.inspect

Menggunakan `util.inspect` nested objek dapat ditampilkan ke console secara penuh dengan mengatur `depth` pada parameter ketiga menjadi `null`.

`util` adalah modul bawaan node.

`util` perlu diimport dulu dan untuk menampilkannya tetap dimasukkan ke `console.log`.

```js
const util = require('util')

console.log(util.inspect(users, false, null, true))
```

> Parameter kedua digunakan untuk menentukan apakah properti yang hidden ditampilkan atau tidak, parameter keempat untuk memberi warna. 

Hasilnya.

```bash
[
  {
    id: 1,
    name: 'Ghe',
    address: [
      {
        province: { id: 1, name: 'Fikj' },
        city: { id: 1, name: 'Gamd' }
      }
    ],
    office: { id: 1, name: 'Das', category: { id: 1, name: 'Molk' } }
  }
]
```

## JSON.stringify

Cara lainnya adalah dengan mengubah objek ke JSON string, kemudian ditampilkan dengan `console.log`.

```js
console.log(JSON.stringify(users, null, 2))
```

> Parameter ketiga digunakan untuk mengatur spasi indentasi pada JSON

Hasilnya.

```bash
[
  {
    "id": 1,
    "name": "Ghe",
    "address": [
      {
        "province": {
          "id": 1,
          "name": "Fikj"
        },
        "city": {
          "id": 1,
          "name": "Gamd"
        }
      }
    ],
    "office": {
      "id": 1,
      "name": "Das",
      "category": {
        "id": 1,
        "name": "Molk"
      }
    }
  }
]
```

## Sumber

- https://nodejs.org/api/util.html#utilinspectobject-options
- https://nodejs.org/api/console.html#consoledirobj-options