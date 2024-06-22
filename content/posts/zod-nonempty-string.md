---
title: Cara Validasi String Tidak Boleh Kosong di Zod
tags: [zod]
date: 2024-06-22 18:30:00 +0700
images:
- /images/posts/zod-string-required/thumbnail.jpg
---

Secara default semua properti pada zod schema itu required. Required artinya harus ada meskipun nilainya kosong.

<!--more-->

Untuk mengatasinya ada dua validasi method yang harus ditambahkan:

1. `trim` untuk menghapus whitespace
2. `min(1)` untuk mengecek minimal panjang string adalah 1

Contoh.

```js
import { z } from 'zod';

const schema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: 'nama tidak boleh kosong' }),
  description: z.string()
})

schema.parse({ name: '', description: '' }) // throws error
schema.parse({ name: '     ', description: '' }) // throws error
schema.parse({ name: 'Dobleh', description: '' }) // success
```

> Sebelumnya ada method `nonempty` untuk string tapi sudah deprecated.

Sumber:

- https://zod.dev/
- https://github.com/colinhacks/zod/discussions/2847
- https://github.com/colinhacks/zod/issues/63