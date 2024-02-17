---
title: Cara Kirim Argumen Ke NPM Run Script
tags: [nodejs]
date: 2024-02-18 04:00:00 +0700
images:
- /images/posts/passing-arguments-npm-run-script/thumbnail.jpg
---

Untuk mengirim argumen ke *npm run script* bisa dengan menambahkan `--` setelah nama skripnya, diikuti argumen yang akan dikirim.

<!--more-->

Contoh.

```bash
npm run test -- --name=myname --email=myemail@gmail.com
```

File `package.json`.

```json
{
    "scripts": {
        "test": "node index.js"
    }
}
```

Pada saat argumen di-*parsing* di file `index.js`.

```js
console.log(process.argv.slice(2))
// [ '--name=myname', '--email=myemail@gmail.com' ]
```