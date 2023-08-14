---
title: Mengatasi Vue Router Tidak Merender Ulang Ketika Parameter Berubah
tags: [vue]
date: 2023-08-14 18:00:00 +0700
---

Tidaklah dirender ulang suatu vue component ketika ada perubahan pada parameter route.

<!--more-->

Misalnya di route `/users/:id`, ketika user berpindah dari `/users/123` ke `/users/124`, keduanya menggunakan component instance yang sama.

Sehingga lifecycle hook dari component tersebut tidak dijalankan ketika ada perubahan pada parameter route.

Ada beberapa cara untuk mengatasi masalah ini.

## Cara 1 : Menambahkan Watch Pada Parameter Route

Cara pertama ini dengan menambahkan watch pada paramter route, yang otomatis dijalankan ketika ada perubahan pada parameter route.

```js
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

watch(route.params.id, () => {
    // do something
})
```

## Cara 2 : Menggunakan beforeRouteUpdate Navigation Guard

Cara kedua ini dengan menggunakan navigation guard `beforeRouteUpdate`, yang otomatis dijalankan ketika ada yang berubah pada route.

```js
import { onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteUpdate((to, from) => {
    // do something
})
```

## Cara 3 : Menambahkan Parameter Route Pada Key Component

Cara ketika ini dengan menambahkan parameter route pada key component yang ingin otomatis dirender ulang ketika parameter route berubah.

```vue
<script setup>
import { useRoute } from 'vue-router'
import { SomeComponent, OtherComponent } from 'src/components'

const route = useRoute()
</script>

<template>
    <div>
        <some-component :key="route.params.id" />
        <other-component />
    </div>
</template>
```

Ketika parameter `id` pada route berubah component `SomeComponent` akan merender ulang, tapi component `OtherComponent` tidak.

Cara ini bagus karena component yang dirender ulang yang memang perlu saja.

## Cara 4 : Menambahkan Key Pada Router View

Cara keempat ini dengan menambahkan path route pada key router view.

Dengan cara ini setiap perubahan pada path route akan merender view.

```vue
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <router-view :key="route.path" />
</template>
```

Cara ini tidak terlalu disarankan karena setiap perubahan pada path route akan merender ulang view, termasuk semua lifecycle dan component di dalam view pun akan dirender ulang, yang mungkin tidak terlalu diperlukan.

## Kesimpulan

Cara diatas bisa anda pilih sesuai kebutuhan dan kenyamanan anda, saya sendiri lebih sering menggunakan Cara 1 atau Cara 3, cara 1 jika saya ingin menjalankan sebuah aksi ketika ada perubahan pada parameter route, cara 3 jika sya ingin merender ulang component jika ada perubahan parameter route.

Sumber:

- [https://router.vuejs.org/guide/essentials/dynamic-matching.html#Reacting-to-Params-Changes](https://router.vuejs.org/guide/essentials/dynamic-matching.html#Reacting-to-Params-Changes)
- [https://router.vuejs.org/guide/advanced/composition-api.html#Accessing-the-Router-and-current-Route-inside-setup](https://router.vuejs.org/guide/advanced/composition-api.html#Accessing-the-Router-and-current-Route-inside-setup)
- [https://blog.boot.dev/javascript/how-to-rerender-a-vue-route-when-path-parameters-change/](https://blog.boot.dev/javascript/how-to-rerender-a-vue-route-when-path-parameters-change/)
- [https://stackoverflow.com/questions/71703650/vuejs-view-is-not-refreshing-when-i-change-the-router-paramid](https://stackoverflow.com/questions/71703650/vuejs-view-is-not-refreshing-when-i-change-the-router-paramid)
- [https://stackoverflow.com/questions/67323027/vue-router-params-not-updating-in-page](https://stackoverflow.com/questions/67323027/vue-router-params-not-updating-in-page)