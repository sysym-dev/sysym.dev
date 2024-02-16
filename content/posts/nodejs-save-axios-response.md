---
title: Cara Menyimpan Response Axios ke File di Node Js
tags: [nodejs, axios]
date: 2024-02-16 19:00:00 +0700
images:
- /images/posts/nodejs-save-axios-response/thumbnail.jpg
---

Ada 2 cara menyimpan response axios ke file di node js, yaitu dengan menggunakan `fs.writeFile` atau `fs.writeFileStream`.

<!--more-->

## Menggunakan WriteFile

Cara ini akan memuat response dari axios ke dalam objek `Buffer`, kemudian `Buffer` akan disimpan ke file menggunakan `fs.writeFile`.

Request axios perlu dikonfigurasi `responseType`-nya menjadi `arraybuffer` agar response axios otomatis dalam bentuk objek `Buffer`.

Contoh.

```javascript
const axios = require('axios')
const fs = require('fs/promises')

async function main() {
  const fileUrl = 'https://picsum.photos/400'
  const fileName = `./downloads/image-${Date.now()}.png`

  const res = await axios({
    url: fileUrl,
    responseType: 'arraybuffer'
  })

  await fs.writeFile(fileName, res.data)

  console.log(`${fileName} saved`)
}

main()
```

## Menggunakan WriteFileStream

Cara kedua yaitu dengan menggunakan stream. Dengan cara ini, response tidak langsung semua kontennya dimuat ke dalam `Buffer`, melainkan di-_chunk_ menjadi beberapa `Buffer` di setiap stream. Kemudian akan disimpan ke file menggunakan `fs.writeFileStream`.

Yang perlu dilakukan pertama adalah membuat objek `WriteStream` menggunakan `fs.writeFileStream`. Kemudian request axios perlu dikonfigurasi `responseType`-nya menjadi `stream`. Kemudian response axios di `pipe` ke `WriteStream` yang telah dibuat.

```javascript
const axios = require('axios')
const fs = require('fs')

async function main() {
  const fileUrl = 'https://picsum.photos/400'
  const fileName = `./downloads/image-${Date.now()}.png`

  const stream = fs.createWriteStream(fileName)

  const res = await axios({
    url: fileUrl,
    responseType: 'stream'
  })

  res.data.pipe(stream)

  stream.on('finish', () => console.log(`${fileName} saved`))
}

main()
```

Cara yang kedua ini cocok untuk menangani file response yang ukurannya besar, sehingga tidak memberatkan memori untuk memuatnya.

## Kesimpulan

Saya biasanya menggunakan `arrayBuffer` dan `fs.writeFile` langsung jika ukuran filenya kecil, jika ukuran filenya besar maka saya menggunakan `stream` dan `fs.writeFileStream`.

Source code bisa dilihat di [https://github.com/ibrahimalanshor/save-file-from-axios-response](https://github.com/ibrahimalanshor/save-file-from-axios-response)

Sumber:

- https://axios-http.com/docs/req_config
- https://nodejs.org/api/fs.html#class-fswritestream
- https://nodejs.org/api/fs.html#filehandlewritefiledata-options