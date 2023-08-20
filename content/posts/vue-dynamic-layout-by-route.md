---
title: Vue Dynamic Layout By Route
tags: [vue]
date: 2023-08-20 09:00:00 +0700
---

Dalam sebuah aplikasi web bisa terdapat beberapa halaman dengan layout yang berbeda.

<!--more-->

Misalnya pada halaman login, register dan forgot password memakai layout yang didalamnya tidak ada navbar, sidebar, dll.

Sedangkan di halaman dashboard dan app memakai layout dengan navbar, sidebar, dll.

Salah satu cara yang biasa saya lakukan adalah menggunakan `dynamic-layout`.

Pada dynamic layout, setiap route akan mendefinisikan layout apa yang akan digunakannya di `meta`.

Kemudian pada router view, pada saat menampilkan route yang aktif, component pada route dirender di dalam layout sesuai meta pada route.

Untuk menampilkan layout yang dinamis berdasarkan meta route, pada vue bisa menggunakan [Dynamic Route](/vue-dynamic-component/).

Component layout yang akan digunakan pada route harus dijadikan global component terlebih dahulu, agar lebih mudah dalam merender layout.

Langsung saja berikut langkah-langkahnya.

## Buat Component Layout

Buat direktori `src/components/layouts` jika belum ada.

```bash
mkdir src/components/layouts
```

Di dalamnya buat beberapa component layout, misal disini saya buat layout auth dan layout app.

```bash
touch src/components/layouts/layout-{app,auth}.vue
```

Edit file `layout-app.vue` dan `layout-auth.vue`, disetiap layout berikan `<slot />` sebagai tempat merender konten dari component route.

```vue
<script>
// layout-app.vue

export default {
  name: 'LayoutApp'
};
</script>

<template>
    <div>
        <h1>Layout App</h1>
        <slot />
    </div>
</template>
```

```vue
<script>
// layout-auth.vue

export default {
  name: 'LayoutAuth'
};
</script>

<template>
    <div>
        <h1>Layout Auth</h1>
        <slot />
    </div>
</template>
```

Buat file `index.js` di `src/components/layouts`, file ini digunakan sebagai entrypoint untuk mengambil semua layout.

```js
export { default as LayoutApp } from './layout-app.vue';
export { default as LayoutAuth } from './layout-auth.vue';
```

## Menggunakan Layout di App

Buat direktori `src/plugins` jika belum ada.

```bash
mkdir src/plugins
```

Buat file `layout.js` di direktori tersebut.

```bash
touch src/plugins/layout.js
```

Isi file `layout.js` seprti berikut.

```js
import * as layouts from 'src/components/layouts';

export function useLayout(app) {
  for (const layout in layouts) {
    app.component(layouts[layout].name, layouts[layout]);
  }
}
```

> Disini saya menggunakan import alias, penjelasannya bisa dilihat di [Import Alias Di Vite](http://localhost:1313/import-alias-di-vite/)

File `layout.js` akan mengambil semua layout yang ada, kemudian menginstalnya di app.

Buka file `main.js`, import dan panggil fungsi `useLayout` yang sudah dibuat sebelumnya.

```js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useLayout } from './plugins/layout';

const app = createApp(App);

useLayout(app);

app.mount('#app');
```

## Menggunakan Layout di Route

Buka file tempat disimpannya daftar route dari vue-router, misal disini di `src/route/routes.js`.

Di setiap route-nya tampahkan objek meta yang terdapat property layout dengan nama layout yang akan digunakan.

Pastikan nama route sesuai dengan yang sudah ada di direktori `src/components/layouts`.

```js
export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('src/pages/auth/auth-login-page.vue'),
    meta: {
      layout: 'LayoutAuth',
    },
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('src/pages/app/app-dashboard-page.vue'),
    meta: {
      layout: 'LayoutApp'
    },
  },
];
```

## Menampilkan Layout Dinamis Berdasarkan Route

Tahap terakhir buka file `App.vue` atau tempat file yang merender komponent `router-view`.

Masukkan `router-view` di dalam element `component` yang dinamis berdasarkan layout dari meta route.

```vue
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <component :is="route.meta.layout">
    <router-view />
  </component>
</template>
```

## Selanjutnya

Selanjutnya anda bisa menambahkan yang lainya misal title yang dinamis pada layout, dsb.

- [Vue Dynamic Component](/vue-dynamic-component/)
- [Import Alias Di Vite](/import-alias-di-vite/)