---
title: Proteksi Route / Halaman Vue Dari User Yang Belum Login
tags: [vue]
date: 2023-08-28 19:00:00 +0700
---

Suatu halaman web bisa saja membutuhkan proteksi akses yang hanya bisa diakses oleh user sudah login saja.

<!--more-->

Di vue, halaman dirender / ditampilkan oleh route.

Di vue, untuk memproteksi route dari user yang belum login, saya biasanya menggunakan *navigation guard*.

Navigation guard adalah kode yang akan dijalankan pada keadaan tertentu, salah satunya setiap user akan mengakses route.

Berikut langkah-langkahnya.

## Menambahkan Meta Require Auth Pada Route

Buka file tempat menyimpan daftar route.

Pada route yang ingin diberi proteksi, tambahkan property `requireAuth` pada objek meta.

```js
export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/pages/app/app-home-page.vue'),
    meta: {
      requireAuth: true,
    },
  },
];
```

> Pastikan anda sudah membuat route untuk login yang juga digunakan sebagai redirect ketika user yang belum login mengakses route yang diproteksi

## Membuat Auth Guard

Buat sebuah file dengan nama `auth.guard.js`, isi dengan kode berikut.

```js
export function useAuthGuard(router) {
  router.beforeEach((to) => {
	const isLoggedIn = false // kondisi user apakah sudah login bisa dari store dll

    if (
      !isLoggedIn &&
      to.matched.some((route) => route.meta.requireAuth)
    ) {
      return { name: 'login' };
    }
  });
}
```

Pada kode diatas, navigation guard `beforeEach` akan mengecek apakah route yang akan diakses user diproteksi atau tidak dan akan mengecek apakah user sudah login atau belum.

Variabel `isLoggedIn` bisa diganti dari store, localStorage, dsb sesuai tempat anda menyimpan kondisi login user.

## Menggunakan Auth Guard

Buka file tempat vue-router dibuat.

Impor dan panggil auth guard yang sudah dibuat sebelumnya.

```js
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { useAuthGuard } from './guards/auth.guard';

const router = createRouter({
  routes,
  history: createWebHistory(),
});

useAuthGuard(router);

export { router };
```

Sekarang coba akses route `/` dengan kondisi belum login, seharusnya router akan melakukan redirect ke route `/login`.

## Sumber

[https://router.vuejs.org/guide/advanced/navigation-guards.html#Global-Before-Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html#Global-Before-Guards)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMTEwMDg2NTgsMTQ1NTQ1NzI1NCw3Mz
A5OTgxMTZdfQ==
-->