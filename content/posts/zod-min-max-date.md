---
title: Cara Validasi Minimal Dan Maksimal Pada Date di Zod
tags: [zod]
date: 2024-10-09 21:00:00 +0700
images:
- /images/posts/zod-min-max-date/thumbnail.jpg
---

Untuk memvalidasi minimal dan maksimal pada date di zod, gunakan method `min` dan `max`.

<!--more-->

- `min` untuk menentukan minimal tanggal
- `max` untuk menentukan maksimal tanggal

Contoh validasi tanggal minimal 1 Januari 2000 maksimal 31 Desember 2005:

```js
import { z } from "zod";

const date = z
  .date()
  .min(new Date('2000-01-01'))
  .max(new Date('2005-12-31'))

console.log( date.safeParse(new Date('1999-12-31')) )
// { success: false, error: [Getter] }
console.log( date.safeParse(new Date('2006-01-01')) )
// { success: false, error: [Getter] }
console.log( date.safeParse(new Date('2003-10-10')) )
// { success: true, data: 2003-10-10T00:00:00.000Z }
```

Bisa juga date time, contoh validasi tanggal minimal 1 Januari 2000 jam 10 maksimal 31 Desember 2005 jam 10:

```js
import { z } from "zod";

const date = z
  .date()
  .min(new Date('2000-01-01T10:00:00Z'))
  .max(new Date('2005-12-31T10:00:00Z'))

console.log( date.safeParse(new Date('2000-01-01T09:00:00Z')) )
// { success: false, error: [Getter] }
console.log( date.safeParse(new Date('2005-12-31T11:00:00Z')) )
// { success: false, error: [Getter] }
console.log( date.safeParse(new Date('2003-10-10T10:00:00Z')) )
// { success: true, data: 2003-10-10T10:00:00.000Z }
```

Jika data yang ingin divalidasi tidak dalam bentuk objek `Date`, bisa tambahkan `coerce` sebelum `date()` untuk secara otomatis data diubah ke objek `Date`.

```js
import { z } from "zod";

const date = z
  .coerce
  .date()
  .min(new Date('2000-01-01'))
  .max(new Date('2005-12-31'))

console.log( date.safeParse('1999-12-31') )
// { success: false, error: [Getter] }
console.log( date.safeParse('2006-01-01') )
// { success: false, error: [Getter] }
console.log( date.safeParse('2003-10-10') )
// { success: true, data: 2003-10-10T00:00:00.000Z }
```

Referensi:

- https://zod.dev/?id=dates-1