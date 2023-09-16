---
title: "Komunikasi Antar Komponen Vue dengan Mitt"
date: 2023-09-16 18:10:00 +0700
tags: [vue]
---

Dalam sebuah aplikasi vue, sering dibutuhkan komunikasi antara beberapa component.

<!--more-->

Untuk berkomunikasi antar component, bisa saja menggunakan component event listener.

Tapi pada beberapa kasus component event listener susah digunakan, misal pada nested komponen.

Untuk mengatasinya, anda dapat menggunakan library [mitt](https://github.com/developit/mitt).

## Install

```bash
npm install --save mitt
```

## Tambahkan Mitt Ke Main Vue

```js
import { createApp } from 'vue';
import App from './App.vue';
// Import Mitt
import mitt from 'mitt';

const app = createApp(App);
// Inisialisasi mitt
const emitter = mitt();

// Provide mitt agar dapat digunakan di componen di bawahnya
app.provide('emitter', emitter);
app.mount('#app');
```

## Kirim Pesan ke Komponen Lain

```html
<!-- src/Form.vue -->
<template>
  <!-- template -->
</template>

<script setup>
// Inject Emitter
import { inject } from 'vue'
const emitter = inject('emitter')

// Kirim Pesan
emitter.emit('alert', { msg: 'hello' })
</script>
```

## Terima Pesan di Komponen Lain

```html
<!-- src/Table.vue -->
<template>
  <!-- template -->
</template>

<script setup>
// Inject Emitter
import { inject } from 'vue'
const emitter = inject('emitter')

// Terima Pesan
emitter.on('alert', (e) => {
  console.log(e.msg)
})
</script>
```