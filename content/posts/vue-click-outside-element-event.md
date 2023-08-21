---
title: Vue Click Outside Element Event
tags: [vue]
date: 2023-08-21 19:00:00 +0700
---

Click outside event adalah event pada suatu element yang ter-trigger ketika area diluar element tersebut diclick.

<!--more-->

Event ini biasa digunakan pada modal, dropdown, dan dll. Misal pada modal, ketika area diluar box modal diclick, click outside event akan ter-trigger, kemudian event tersebut dihandle dengan menutup/menyembunyikan modal.

Pada vue, anda dapat menggunakan package [click-outside-vue3](https://www.npmjs.com/package/click-outside-vue3) untuk menghandle click outside event pada suatu element.

```bash
npm install --save click-outside-vue3
# atau
yarn add click-outside-vue3
```

Untuk menggunakanya, import package tersebut pada component yang akan digunakan.

Kemudian tambahkan direktif `v-click-outside` pada element yang ingin di handle click outside event-nya, masukkan juga fungsi handler event-nya.

Contoh pada component `MyDropdown.vue`.

```html
<!-- MyDropdown.vue -->
<script setup>
import { ref } from 'vue';
import { directive as vClickOutside } from "click-outside-vue3"

const visible = ref(false)

function handleClickOutside() {
  visible.value = false
}
</script>

<template>
  <div
    v-click-outside="handleClickOutside"
  >
    <button
      @click="visible = !visible"
    >
      toggle
    </button>
    <div
      v-if="visible"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </div>
</template>
```

Atau install directive `v-click-outside` secara global di `main.js`.

```js
// main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vClickOutside from "click-outside-vue3"

const app = createApp(App)

app.use(vClickOutside)
app.mount('#app')
```

Untuk menggunakanya sama seperti kode sebelumnya, dengan menambahkan `v-click-outside` directive pada element.

```html
<!-- MyDropdown.vue -->
<script setup>
import { ref } from 'vue';

const visible = ref(false)

function handleClickOutside() {
  visible.value = false
}
</script>

<template>
  <div
    v-click-outside="handleClickOutside"
  >
    <button
      @click="visible = !visible"
    >
      toggle
    </button>
    <div
      v-if="visible"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  </div>
</template>
```