---
title: Import Alias di Vite
tags: [vite, vue]
date: 2023-08-08 17:00:00 +0700
---

Pernahkah anda menemukan kode import file yang begitu panjang seperti ini?

<!--more-->


```vue
import MyComponent from '../../../../components/my-component.vue'
import { someHelper } from '../../../../helpers/my-helper.js'
import { useSomething } from '../../../../composes/something.js'
```

Tentu akan lebih mudah dibaca jika diubah menjadi seperti ini.

```vue
import MyComponent from '@/components/my-component.vue'
import { someHelper } from '@/helpers/my-helper.js'
import { useSomething } from '@/composes/something.js'
```

Kode diatas adalah contoh import alias, karakter `@` melambangkan direktori `src`, nanti hasilnya jadi `src/components/my-component.vue`, `src/helpers/my-helper.js`, dst.

Dengan menggunakan alias pada import, import file akan lebih mudah, tidak perlu panjang untuk menuju direktori `src`.

Jika anda menggunakan __vite__, konfigurasi import alias dapat dilakukan dengan menambahkan alias di objek `resolve.alias` pada konfigurasi vite di file `vite.config.js`.

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
```

Hasil konfigurasi diatas, karakter `@` di import akan menuju direktori `src`.

Anda dapat menambahkan alias-alias lainya, contoh.

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@helpers': path.resolve('./src/helpers'),
      '@store': path.resolve('./src/store'),
    },
  },
});
```

Contoh penggunaanya.

```vue
import MyComponent from '@/components/my-component.vue'
import { someHelper } from '@helpers/my-helper'
import { useSomeStore } from '@store/some'
```

---

## Bace Lebih Lanjut

Baca dokumentasi tentang import alias lebih lanjut di link bawah ini.

- https://vitejs.dev/config/shared-options.html#resolve-alias