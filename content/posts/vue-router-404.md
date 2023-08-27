---
title: Membuat Halaman 404 Not Found Pada Vue Router
tags: [vue]
date: 2023-08-27 08:50:00 +0700
---

Halaman 404 Not Found adalah halaman yang ditampilkan ketika halaman yang sebenarnya diakses tidak ada.

<!--more-->

Di vue-router, halaman 404 dapat dibuat dengan membuat route khusus yang menangkap url / route yang tidak ada di daftar route.

Berikut langkah-langkahnya.

## Membuat Route 404 Not Found

Buka daftar routes pada vue router, tambahkan route dengan path `/:pathMatch(.*)*`, berikan nama `not-found`, dan tambahkan component yang akan dirender.

```js
const routes = [
  // route untuk 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('src/pages/not-found.vue')
  },
  // route lainnya  
]
```

## Membuat Component 404 Not Found

Buat file component vue untuk halaman yang akan dirender ketika route 404 ditampilkan, di `src/pages/not-found.vue`.

```vue
<template>
    <div>
        <h1>404 Not Found<h1>
    </div>
</template>
```

Sekarang coba akses halaman yang tidak ada di daftar routes, seharusnya route `not-found` akan tampil.

## Navigasi Ke Route 404 Not Found

Anda juga bisa langsung melakukan navigasi ke route `not-found` dengan `router.push`.

```js
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

if (itemNotFound) {
    // redirect ke not-found
    router.push({ name: 'not-found' })
}
</script>
```

## Sumber

- [https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route](https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route)