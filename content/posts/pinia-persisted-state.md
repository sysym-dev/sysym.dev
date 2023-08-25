---
title: Pinia Persisted State
tags: [vue, pinia]
date: 2023-08-26 06:00:00 +0700
---

State pada pinia store secara default akan disimpan di runtime javascript browser, sehingga ketika halaman dimuat ulang, state akan direset ke nilai awal.

<!--more-->

Namun ada beberapa keadaan yang membutuhkan state pada pinia untuk dipermanenkan walaupun halaman dimuat ulang.

Contohnya `AuthStore` yang memiliki state `token` berisi access token yang digunakan untuk merequest data ke server.

State token didapat setelah user melakukan login, namun ketika halaman dimuat ulang otomatis token akan hilang karena state direset ke nilai awal.

Untuk mengatasinya anda bisa menggunakan plugin [Pinia Persisted State](https://github.com/prazdevs/pinia-plugin-persistedstate).

Dengan plugin tersebut, state pada store akan otomatis disimpan di localstorage, sehingga ketika halaman dimuat ulang state akan tetap ada.

Langkah pertama yang harus dilakukan adalah menginstalnya.

```bash
npm i pinia-plugin-persistedstate
```

Setelah itu, impor dan gunakan pada pinia.

```js
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
```

Untuk menggunakannya, pilih store yang akan dipermanenkan statenya, kemudian tambahkan opsi `persist: true` pada pendifinisian store tersebut.

```js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('auth', () => {
    const token = ref(null)
    const isLoggedIn = ref(false)
}, { persist: true })
```

Baca lebih lanjut:

- [https://github.com/prazdevs/pinia-plugin-persistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate)
- [https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html#storage](https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html#storage)