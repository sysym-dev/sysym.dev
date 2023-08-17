---
title: Vue Infinite Scroll
tags: [vue]
date: 2023-08-17 10:00:00 +0700
---

Infinite Scroll adalah cara menampilkan konten secara terus menerus ketika user melakukan scroll.

<!--more-->

Contoh dari penerapan infinite scroll adalah pada aplikasi sosial media, ketika user melakukan scroll ke bawah, konten akan ditampilakan secara terus menerus.

Untuk menerapkan infinite scroll di vue anda bisa memanfaakan event `scroll` pada element yang menampilkan konten.

```vue
<div v-on:scroll="handleScroll">
    <!-- content -->
</div>
```

Kemudian tangkap event `scroll`, cek apakah scroll tersebut mencapai batas paling bawah konten.

- Gunakan `scrollTop` untuk mendapatkan posisi scroll hoizontal dari elemen
- Gunakan `scrollHeight` - `clientHeight` untuk mendapatkan tinggi elemen

Bandingkan nilai `scrollTop` dan `scrollHeight` - `clientHeight`, jika lebih besar maka scroll mencapai batas paling bawah konten.

```js
async function handleScroll(e) {
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {
        // handle infinite scroll
    }
}
```
Berikut implementasi lengkapnya.

```vue
<script setup>
import { ref } from 'vue'
import { getPosts } from './post.api.js'

const posts = ref([])
const postsSize = ref(10)

async function loadPosts() {
    posts.value = await getPosts({
        size: postsSize.value
    })
}

async function handleScrollPosts(e) {
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {
        postsSize.value += 10

        await loadPosts()
    }
}

loadPosts()
</script>

<template>
    <div v-on:scroll="handleScrollPosts">
        <div v-for="post in posts" :key="post.id">
            <h1>{{ post.name }}</h1>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>
```