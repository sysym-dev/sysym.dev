---
title: Cara Melihat Ukuran File Menggunakan Node Js
tags: [nodejs]
date: 2024-04-12 18:30:00 +0700
images:
- /images/posts/node-filesize/thumbnail.jpg
---

Untuk melihat ukuran file menggunakan node js, anda bisa menggunakan modul bawaan nodejs yaitu `fs.stat()`.

<!--more-->

`fs.stat()` mengembalikan objek dengan salah satu propertinya adalah `size` yang berisi ukuran file dalam bytes.

```js
const fs = require('fs/promises')

async function main() {
  const file = await fs.stat('image.jpg')

  console.log(file.size)
}

main()
// 154274
```

Anda bisa memanfaatkan package [filesize](https://www.npmjs.com/package/filesize) untuk mengonversi bytes ke format yang lebih mudah dibaca.

```js
const fs = require('fs/promises')
const { filesize } = require('filesize')

async function main() {
  const file = await fs.stat('image.jpg')

  console.log(file.size)
  console.log(filesize(file.size))
}

main()
// 154274
// 154.27 kB
```

## Sumber

- https://nodejs.org/docs/latest/api/fs.html#class-fsstats
- https://www.npmjs.com/package/filesize