---
title: Cara Validasi Nomor Telepon di Zod
tags: [zod]
date: 2025-02-23 18:00:00 +0700
images:
- /images/posts/zod-phone/thumbnail.jpg
---

Untuk memvalidasi nomor telepon di zod, gunakan regex untuk mengecek no telepon apakah valid atau tidak. Berikut tiga regex yang umum digunakan:

<!--more-->

1. `^\+[1-9]\d{1,14}$`: Harus diawali `+`, diikuti angka 1-9, diikuti 1-14 digit angka. 
2. `^\+?[1-9]\d{1,14}$`: Awalan `+` opsional, selebihnya sama seperti no 1.
3. `^08\d{8,13}$`: Harus diawali `08`, diikuti 8-13 digit angka.

Gunakan salah satu regex di atas, lalu masukkan ke method `regex` pada zod string.

```js
import { z } from "zod";

const schema1 = z.string().regex(/^\+[1-9]\d{1,14}$/, 'No telp tidak valid')
const schema2 = z.string().regex(/^\+?[1-9]\d{1,14}$/, 'No telp tidak valid')
const schema3 = z.string().regex(/^08\d{8,13}$/, 'No telp tidak valid')

console.log(schema1.safeParse('6281234567890')) // tidak valid
console.log(schema1.safeParse('+0123456789')) // tidak valid
console.log(schema1.safeParse('+1234567890123456')) // tidak valid
console.log(schema1.safeParse('+6281234567890')) // valid
console.log(schema1.safeParse('+15551234567')) // valid

console.log(schema2.safeParse('0123456789')) // tidak valid
console.log(schema2.safeParse('+0123456789')) // tidak valid
console.log(schema2.safeParse('+6281234567890')) // valid
console.log(schema2.safeParse('6281234567890')) // valid

console.log(schema3.safeParse('+081234567890')) // tidak valid
console.log(schema3.safeParse('091234567890')) // tidak valid
console.log(schema3.safeParse('081234567890')) // valid
console.log(schema3.safeParse('089876543210')) // valid
```

Referensi:

- https://www.twilio.com/docs/glossary/what-e164#regex-matching-for-e164
- https://zod.dev/?id=strings