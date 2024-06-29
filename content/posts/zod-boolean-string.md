---
title: Cara Validasi Boolean Dalam Bentuk String di Zod
tags: [zod]
date: 2024-06-29 22:00:00 +0700
images:
- /images/posts/zod-boolean-string/thumbnail.jpg
---

Boolean dalam bentuk string yang dimaksud adalah data string yang bentuknya boolean tapi tipenya string seperti "true" atau "false" yang biasanya didapatkan di request query.

<!--more-->

Jika datanya seperti itu, maka validasi zod menggunakan `coerce.boolean` akan menghasilkan `true` pada nilai "false". Contoh.

> coerce disini sebagai contoh agar nilai "true" dan "false" tidak error

```js
import { z } from "zod"

const bool = z
  .coerce
  .boolean()

bool.parse(true) // true
bool.parse('true') // true 
bool.parse(false) // false
bool.parse('false') // true
```

Salah satu cara untuk mengatasinya adalah dengan menghilangkan `coerce` dan menambahkan method `literal` dengan nilai string `true` dan `false`.

Kemudian data yang tervalidasi ditransfrom jika nilainya boolean true atau string "true" maka nilainya `true`.

```js
import { z } from "zod"

const bool = z
  .union([
    z.boolean(),
    z.literal('true'),
    z.literal('false')
  ])
  .transform(value => value === true || value === 'true')
```

> union digunakan untuk membuat validasi or untuk setiap method di dalamnya

Dengan seperti ini hanya ada 4 jenis value yang dapat diterima yaitu true, false, `true`, dan `false`.

Jika true atau `true` maka nilainya akan true, jika false atau `false` maka nilainya akan false.

```js
bool.parse(true) // true
bool.parse('true') // true 
bool.parse(false) // false
bool.parse('false') // false
```

Sumber:

- https://github.com/colinhacks/zod/issues/1630
- https://www.raulmelo.me/en/snippets/convert-booleanish-string-to-boolean-zod