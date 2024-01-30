---
title: Sequelize Find Or Create
tags: [sequelize]
date: 2024-01-30 18:00:00 +0700
---

Method `findOrCreate` pada Sequelize digunakan untuk mencari data yang sesuai dengan query, jika tidak ditemukan maka akan dibuat data baru sesuai query.

<!--more-->

Method ini fungsinya sama seperti `firstOrCreate` di eloquent laravel.

```javascript
const user = await User.findOrCreate({
    where: {
        email: 'admin@admin.com'
    },
    defaults: {
        name: 'Admin',
        role: 'Admin'
    }
})
```

Opsi `where` digunakan untuk mencari datanya, jika tidak ditemukan maka akan dibuat data baru dengan nilai dari opsi `defaults` yang digabung dengan yang di opsi `where`.

Jadi pada kode diatas, jika user dengan email `admin@admin.com` tidak ditemukan, maka akan dibuat user dengan email tersebut beserta nama dan role yang di opsi `defaults`.