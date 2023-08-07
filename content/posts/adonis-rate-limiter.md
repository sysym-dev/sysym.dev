---
title: Adonis Js Rate Limiting Menggunakan Redis
tags: [adonis]
date: 2023-08-07 11:31:00 +0700
---

Rate limiting adalah pembatasan jumlah akses suatu endpoint di aplikasi dalam periode tertentu.

<!--more-->

Rate limiting berfungsi agar user tidak melakukan request pada endpoint secara sembarangan.

Di adonis, ada official package `@adonisjs/limiter` yang menyediakan fitur untuk rate limiting pada aplikasi adonis.

Untuk menyimpan data limiter nya, bisa menggunakan redis `@adonisjs/redis`.

Langsung saja berikut langkah-langkahnya.

## Install Limiter

Install dan konfigurasi package `@adonisjs/limiter` di aplikasi adonis.

```bash
npm i @adonisjs/limiter
node ace configure @adonisjs/limiter
```

Buka file `start/kernel.ts`, tambahkan middleware throttle.

```ts
Server.middleware.registerNamed({
  throttle: () => import('@adonisjs/limiter/build/throttle'),
})
```

## Install Redis

Install dan konfigurasi package `@adonisjs/redis` di aplikasi adonis.

```bash
npm i @adonisjs/redis
node ace configure @adonisjs/redis
```

Buka file `env.ts`, tambahkan rules berikut.

```ts
export default Env.rules({
  REDIS_CONNECTION: Env.schema.enum(['local'] as const),
  REDIS_HOST: Env.schema.string({ format: 'host' }),
  REDIS_PORT: Env.schema.number(),
  REDIS_PASSWORD: Env.schema.string.optional(),
})
```

Buka file .env, atur konfigurasi redis anda.

```env
REDIS_CONNECTION=local
REDIS_HOST=redis-xxx.cloud.redislabs.com
REDIS_PORT=6379
REDIS_PASSWORD=xxxx
```

## Membuat Limiter

Setelah semua package terinstall, sekarang saya akan membuat limiter untuk menthrottle endpoint __forgot password__, agar hanya bisa diakses 1 kali setiap 1 jam.

Semua limiter didefinisikan di file `start/limiter.ts`.

Untuk membuat limiter panggil method `define` di objek `Limiter`, tambahkan __nama limiter__ pada argumen pertama, kemudian atur __periode limiter__ lewat callback pada argumen kedua.

```ts
import { Limiter } from '@adonisjs/limiter/build/services'

export const { httpLimiters } = Limiter
  .define('forgot-password', () => {
    return Limiter.allowRequests(1).every('1 hour')
  })
```

## Menggunakan Limiter

Untuk menggunakan limiter, tambahkan middleware `throttle:nama-limiter` pada endpoint route yang ingin dithrottle.

Daftar route di file `start/routes.ts`.

```ts
Route
  .post('/forgot-password', 'PasswordController.forgot')
  .middleware('throttle:forgot-password')
```

## Mencoba Limiter

Setelah limiter digunakan, saatnya mencoba dengan mengakses endpoint yang di throttle.

```bash
curl -I -XPOST http://localhost:3333/forgot-password

# HTTP/1.1 200 OK
# content-length: 45
# content-type: application/json; charset=utf-8
# Date: Sun, 06 Aug 2023 05:21:29 GMT
# Connection: keep-alive
# Keep-Alive: timeout=5
```

Akses pertama berhasil, kemudian coba akses lagi.

```bash
curl -I -XPOST http://localhost:3333/forgot-password

# HTTP/1.1 429 Too Many Requests
# x-ratelimit-limit: 1
# retry-after: 3040
# content-length: 83
# content-type: application/json; charset=utf-8
# Date: Sun, 06 Aug 2023 05:18:48 GMT
# Connection: keep-alive
# Keep-Alive: timeout=5
```

Maka akan error __429 Too Many Requests__.

---

## Selanjutnya

Anda bisa menggunakan rate limiting pada kasus lainnya seperti pada resend email verification, login, register, dll.

Untuk lebih lengkap silakan baca di dokumentasinya langsung [https://docs.adonisjs.com/guides/rate-limiting](https://docs.adonisjs.com/guides/rate-limiting)