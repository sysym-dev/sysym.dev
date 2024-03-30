---
title: Cara Cek Content Type Request Di Express
tags: [express]
date: 2024-03-30 14:00:00 +0700
images:
- /images/posts/express-check-req-content-type/thumbnail.jpg
---

Untuk mengecek *header* *Content-Type* apakah sesuai pada request express, gunakan method `is` pada request objek diikuti *Content-Type* yang akan dicek.

<!--more-->

```js
app.post('/', (req, res) => {
    return res.send(req.is('application/json'))
})
```

Hasilnya.

```bash
curl -X POST http://localhost:3000 \
	-H "Content-Type: application/json" \
	-d '{}'

# application/json
```

Jika content type tidak sesuai maka `req.is` akan mengembalikan `false`.

```bash
curl -X POST http://localhost:3000 \
	-H "Content-Type: text/html" \
	-d '{}'

# false
```

Jika *body* tidak dikirimkan pada request maka akan mengembalikan `null` meskipun *content type*-nya sesuai.

```bash
curl -X POST http://localhost:3000 \
	-H "Content-Type: application/json"

# null
```

Express menggunakan package [https://github.com/jshttp/type-is](https://github.com/jshttp/type-is), untuk dokumentasi lebih lengkap bisa dilihat disana.

## Sumber

- https://expressjs.com/en/5x/api.html#req.is
- https://github.com/jshttp/type-is