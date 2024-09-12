---
title: Cara Melakukan Database Transaction Di Nodejs Mysql2
tags: [nodejs]
date: 2024-09-12 17:30:00 +0700
images:
- /images/posts/mysql2-transaction/thumbnail.jpg
---

Transaksi adalah cara untuk melakukan beberapa operasi database dalam satu rangkaian yang semua perubahan pada rangkaian tersebut bisa disimpan atau dibatalkan.

<!--more-->

*mysql2* merupakan salah satu library client mysql di nodejs.

Di *mysql2*, transaksi dapat dilakukan dengan 3 method:

1. `beginTransaction` untuk memulai transaksi.
2. `commit` untuk melakukan menyimpan perubahan.
3. `rollback` untuk membatalkan perubahan.

Contoh.

```js
try {
    await db.beginTransaction()

    const payload = {
        userId: 1,
        amount: 50000
    }

    await db.query(
        'insert into transactions (user_id, amount) values (?, ?)',
        [payload.userId, payload.amount]
    )
    await db.query(
        'update users set balance = balance + ? where id = ?',
        [payload.amount, payload.userId]
    )

    await db.commit()
} catch (err) {
    await db.rollback()

    throw err
}
```

Dengan menggunakan transaksi, jika terjadi *error* di rangkaian operasi maka semua perubahannya akan dibatalkan (*rollback*), jika tidak terjadi error maka semua perubahannya akan disimpan (*commit*). 