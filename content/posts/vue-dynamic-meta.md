---
title: Cara Membuat Document Title dan Meta Dinamis Di Vue
tags: [vue]
date: 2024-11-18 15:10:00 +0700
images:
- /images/posts/vue-dynamic-meta/thumbnail.jpg
---

Untuk membuat document title dan meta dinamis di vue, kita bisa memanfaatkan `route meta` untuk mendefinisikan title dan meta untuk setiap halaman. Ketika berpindah halaman, document title dan meta akan diperbarui sesuai dengan nilai yang ada di properti `meta`-nya.

<!--more-->

Langkah pertama buka file tempat daftar routes, lalu di setiap routes tambahkan properti meta berupa objek yang berisi `title`, `description`, dll.

```javascript
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('~/pages/Home.vue'),
        meta: {
            title: 'Beranda',
            description: 'Halaman beranda situs'
        }
    },
    {
        path: '/posts',
        name: 'posts',
        component: () => import('~/pages/Post.vue'),
        meta: {
            title: 'Daftar Postingan',
            description: 'Halaman semua postingan'
        }
    },
    {
        path: '/tags',
        name: 'tags',
        component: () => import('~/pages/Tag.vue'),
        meta: {
            title: 'Daftar Tag',
            description: 'Halaman semua tags'
        }
    }
]
```

Kemudian pada root component tambahkan navigation guards pada router yang fungsinya untuk memerbarui document title dan meta ketika berpindah halaman sesuai meta di route. Misal root component di sini adalah `App.vue`.

```vue
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// navigation guards
router.beforeEach(to => {
    document.title = to.meta.title
    
    if (!document.querySelector('meta[name=description]')) {
        const meta = document.createElement('meta')
        
        meta.setAttribute('name', 'description')
        meta.setAttribute('content', to.meta.description)
        
        document.head.appendChild(meta)
    } else {
        document
            .querySelector('meta[name=description]')
            .setAttribute('content', to.meta.description)
    }
})
</script>

<template>
    <router-view />
</template>
```

Kita juga bisa menambahkan nilai default ketika ada properti yang belum didefinisikan di meta route.

```javascript
router.beforeEach(to => {
    document.title = to.meta.title || 'Default Title'
    
    if (!document.querySelector('meta[name=description]')) {
        const meta = document.createElement('meta')
        
        meta.setAttribute('name', 'description')
        meta.setAttribute('content', to.meta.description || 'Default Description')
        
        document.head.appendChild(meta)
    } else {
        document
            .querySelector('meta[name=description]')
            .setAttribute('content', to.meta.description || 'Default Description')
    }
})
```

Jika ingin menambahkan properti lain misalnya opengraph, keywords, dsb bisa ditambahkan di meta pada setiap routenya lalu diset ke document pada navigation guards.

```javascript
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('~/pages/Home.vue'),
        meta: {
            title: 'Beranda',
            description: 'Halaman beranda situs',
            keywords: 'home,tools,landing'
        }
    },
]
```