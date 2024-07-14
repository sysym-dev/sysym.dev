---
title: Cara Cek Konfirmasi Password Menggunakan Zod
tags: [zod]
date: 2024-07-14 18:00:00 +0700
images:
- /images/posts/zod-password-confirmation/thumbnail.jpg
---

Pada form yang terdapat input password biasanya disertakan juga konfirmasi password yang harus sama dengan password untuk memastikan kesalahan saat memasukkan password.

<!--more-->

Untuk mengecek konfrimasi password menggunakan zod, anda bisa menggunakan method `refine`.

```js
import { z } from "zod"

const registerSchema = z
  .object({
    password: z.string().min(4),
    password_confirmation: z.string().min(4)
  })
  .refine(data => data.password === data.password_confirmation, {
    message: 'Password dont match',
    path: ['password_confirmation']
  })

registerSchema.safeParse({
  password: 'password',
  password_confirmation: 'doengg'
}) // success: false, error [ { ... } ]
registerSchema.safeParse({
  password: 'password',
  password_confirmation: 'password'
}) // success: true, data { ... }
```

Method `refine` menerima parameter pertama berupa fungsi yang mengembalikan boolean yang menandakan validasi berhasil atau tidak.

Fungsi untuk dikirim ke `refine` akan dipanggil dengan argumen pertama berisi objek dari input yang sedang divalidasi.

Jadi untuk mengecek konfirmasi password tambahkan method `refine` dengan mengirimkan fungsi yang mengecek apakah properti `password` sama dengan dengan `password_confirmation`.

Sumber : https://github.com/colinhacks/zod?tab=readme-ov-file#refine