---
title: Vue Dynamic Component
tags: [vue]
date: 2023-08-16 19:00:00 +0700
---

Dynamic component pada vue digunakan untuk merender komponen yang dinamis sesuai kondisi tertentu, tanpa perlu melakukan kondisional `v-if v-else` atau yang lainya.

<!--more-->

Untuk membuat dynamic component, gunakan component bawaan vue `component` dengan `is` atribut yang berisi komponent yang akan dirender.

Contoh implementasinya di component `MyTab.vue`.

```vue
<!-- MyTab.vue -->
<script setup>
import { h, ref } from 'vue';

const currentTab = ref('welcome')
const tabs = {
  welcome: h('div', {}, 'Welcome Tab'),
  setting: h('div', {}, 'Setting Tab'),
  account: h('div', {}, 'Account Tab'),
}
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="tab in Object.keys(tabs)"
        :key="tab"
      >
        <a
          href=""
          v-on:click.prevent="currentTab = tab"
        >
          {{ tab }}
        </a>
      </li>
    </ul>
  </nav>
  <component :is="tabs[currentTab]" />
</template>
```

Hasilnya.

![MyTab Component](/images/posts/vue-dynamic-component/my-tab.gif)

Atribut `is` juga dapat menerima element html biasa.

Contoh disini terdapat component `MyHeading.vue` yang merender element `heading` dengan level dinamis berdasarkan atribut `level` pada props.

```vue
<!-- MyHeading.vue -->
<script setup>
defineProps({
  level: Number
})
</script>

<template>
  <component :is="`h${level}`">
    <slot />
  </component>
</template>
```

```vue
<!-- App.vue -->
<script setup>
import MyHeading from '@/components/MyHeading.vue';
</script>

<template>
  <my-heading :level="1">Level 1</my-heading>
  <my-heading :level="2">Level 2</my-heading>
  <my-heading :level="3">Level 3</my-heading>
  <my-heading :level="4">Level 4</my-heading>
  <my-heading :level="5">Level 5</my-heading>
  <my-heading :level="6">Level 6</my-heading>
</template>
```
Hasilnya.

![MyHeading Component](/images/posts/vue-dynamic-component/my-heading.png)