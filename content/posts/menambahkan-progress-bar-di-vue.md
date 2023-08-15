---
title: Menambahkan Progress Bar Di Vue
tags: [vue]
date: 2023-08-15 19:00:00 +0700
---

Progress Bar adalah salah satu komponen yang biasa ada dan cukup penting di aplikasi web.

<!--more-->

Salah satunya fungsinya bisa sebagai penanda loading ketika berpindah dari satu halaman ke halaman lain.

Untuk membuat progress bar di vue, anda bisa menggunakan package [https://github.com/aacassandra/vue3-progressbar](https://github.com/aacassandra/vue3-progressbar). Package tersebut open source, mudah digunakan dan bisa dikustomisasi.

Berikut langkah-langkah penggunaanya.

## Install Package vue3-progressbar

```bash
npm install @aacassandra/vue3-progressbar
```

## Menambahkan Progress Bar Ke Vue

Buat sebuah file `progress-bar.js` di direktori `src/plugins` atau di direktori lain terserah anda.

Tambahkan kode berikut.

```js
import VueProgressBar from '@aacassandra/vue3-progressbar';

export function useProgressBar(app) {
  const options = {
    color: '#4f46e5',
    failedColor: '#dc2626',
    thickness: '3px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300,
    },
    autoRevert: true,
    location: 'top',
    inverse: false,
  };

  app.use(VueProgressBar, options);
}
```

Kode diatas fungsinya untuk menambahkan progress bar ke app vue.

Untuk melakukan kustomisasi pada progress bar, anda bisa langsung ubah di objek `options`, seperti warna, transisi, lokasi, dsb.

Kemudian buka file `main.js` di direktori `src`.

Import fungsi `useProgressBar` dari file `progress-bar.js`, kemudian panggil fungsi tersebut.

```js
import { createApp } from 'vue';
import App from './App.vue';
import { useProgressBar } from './plugins/progress-bar';
const app = createApp(App);

useProgressBar(app);

app.mount('#app');
```

## Menampilkan Progress Bar

Untuk menampilkan progress bar, pertama buat file komponen vue `app-progress-bar.vue` di direktori `src/components/app` atau di direktori lain terserah anda.

Isi komponennya seperti berikut.

```vue
<script setup>
import { getCurrentInstance, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const { $Progress } = getCurrentInstance().appContext.config.globalProperties;
const router = useRouter();

$Progress.start();

router.beforeEach(() => {
  $Progress.start();
});

router.afterEach(() => {
  $Progress.finish();
});

onMounted(() => {
  $Progress.finish();
});
</script>

<template>
  <vue-progress-bar />
</template>
```

Pada kode diatas progress bar akan otomatis berjalan ketika vue-router berpindah route dan selesai ketika sudah sampai di route tujuan.

Setelah itu gunakan, component tersebut di `App.vue` atau tempat lain yang ingin ada progress bar nya.

```vue
<script setup>
import AppProgressBar from 'src/components/app/app-progress-bar.vue';
</script>

<template>
  <div>
    <app-progress-bar />
    <router-view :key="route.path" />
  </div>
</template>
```

## Selanjutnya

Anda bisa melakukan kustomisasi progress bar sesuai keinginan di objek `options` di file `src/plugins/progress-bar.js`.

Untuk dokumentasi lebih lengkapnya bisa dicek di tautan berikut.

- [https://github.com/aacassandra/vue3-progressbar](https://github.com/aacassandra/vue3-progressbar)
- [http://hilongjw.github.io/vue-progressbar/index.html](http://hilongjw.github.io/vue-progressbar/index.html)