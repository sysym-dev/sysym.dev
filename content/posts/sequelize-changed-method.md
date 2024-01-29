---
title: Cara Cek Apakah Ada Perubahan Nilai Pada Atribut Instance Model Sequelize
tags: [sequelize]
date: 2024-01-29 19:00:00 +0700
---

Untuk mengecek apakah ada perubahan nilai pada atribut instance model sequelize, gunakan method `changed` yang diberi argumen nama atribut yang akan dicek.

<!--more-->

```javascript
const user = await User.findByPk(123)

console.log(user.changed('email')) // false

user.email = 'jin@gmail.com'

console.log(user.changed('email')) // true

await user.save()

console.log(user.changed('email')) // false
```

Pada kode diatas, pertama user diambil yang id nya 123, kemudian dicek apakah emailnya sudah terubah, karena belum ada maka hasilnya `false`.

Kemudian email user diubah, ketika dicek menggunakan method `changed`, hasilnya `true`.

Kemudian user di save dengan email yang sudah diubah, karena perubahannya sudah disimpan, maka ketika dicek menggunakan method `changed` hasilnya `false`.