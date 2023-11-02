---
title: Tes Koneksi Knex Ke Database
tags: [knex]
date: 2023-11-02 12:00:00 +0700
---

Tes koneksi ke database terkadang perlu dilakukan salah satunya untuk memastikan konfigurasi koneksi database sudah benar.

<!--more-->

Di `knex` salah satu cara untuk mengetes koneksi ke database adalah dengan membuat *dummy query*.

```javascript
db.raw('SELECT 1')
```

Jika gagal berarti mungkin ada masalah pada konfigurasi koneksi database. Jika berhasil kemudian bisa jalankan server atau yang lainnya.

```javascript
const knex = require('knex')

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password'
    }
})

async function connectDb() {
    await db.raw('SELECT 1')

    console.log('database connected')
}

async function start() {
    try {
        await connectDb()

        // start server or something
    } catch (err) {
        console.error(err)

        process.exit(1)
    }
}

start()
```