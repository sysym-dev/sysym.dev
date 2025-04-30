---
title: Cara Membuat Modal di Vue
tags: [vue]
date: 2025-04-30 19:15:00 +0700
images:
- /images/posts/cara-membuat-modal-vue/thumbnail.png
---

Modal adalah komponen yang digunakan untuk menampilkan informasi dalam bentuk overlay, dan hanya akan muncul ketika pengguna melakukan aksi tertentu, seperti menekan tombol.

<!--more-->

Pada artikel kali ini, kita akan mempelajari cara membuat modal di Vue, berikut langkah-langkahnya.

## 1. Membuat Komponen Modal

Pertama, buat komponen baru untuk Modal. Misalnya di path `/components/BaseModal.vue`. Di dalamnya tambahkan satu elemen `div` untuk struktur dasar modal.

```vue
<script setup>
</script>

<template>
    <div></div>
</template>
```

Selanjutnya, tambahkan binding model untuk mengontrol visibilitas modal menggunakan `defineModel`. Binding ini akan menjadi kondisi `if` pada elemen `div`.

```vue
<script setup>
const visible = defineModel(false)
</script>

<template>
    <div v-if="visible"></div>
</template>
```

Kemudian tambahkan `slot` di dalam `div` agar konten modal dapat disesuaikan sesuai kebutuhan penggunaan.

```vue
<script setup>
const visible = defineModel(false)
</script>

<template>
    <div v-if="visible">
        <slot />
    </div>
</template>
```

## 2. Menggunakan Modal

Setelah komponen modal selesai dibuat, kita akan menggunakannya di halaman atau component lain, misalnya di `App.vue`.

Langkah pertama adalah mengimpor komponen modalnya.

```vue
<script setup>
import BaseModal from './components/BaseModal.vue'
</script>
```

Kemudian, buat state baru menggunakan `ref` untuk mengontrol visibilitas modal.

```vue
<script setup>
import BaseModal from './components/BaseModal.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>
```

Setelah itu, gunakan komponen modal dan hubungkan dengan state `visible` menggunakan `v-model`.

```vue
<script setup>
import BaseModal from './components/BaseModal.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <base-modal v-model="visible"></base-modal>
</template>
```

Kemudian, tambahkan informasi yang ditampilkan di dalam komponen modal.

```vue
<script setup>
import BaseModal from './components/BaseModal.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <base-modal v-model="visible">
        <h1>Modal Luar Biasa</h1>
        <p>Ini modal yang luar biasa</p>
    </base-modal>
</template>
```

Terakhir, tambahkan tombol untuk menampilkan modal saat diklik.

```vue
<script setup>
import BaseModal from './components/BaseModal.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
    <button @click="visible = true">Lihat Modal</button>
    <base-modal v-model="visible">
        <h1>Modal Luar Biasa</h1>
        <p>Ini modal yang luar biasa</p>
    </base-modal>
</template>
```

Hasil modal:

![Hasil Modal](/images/posts/cara-membuat-modal-vue/modal.gif)

## 3. Styling Modal

Agar tampilan modal seperti overlay, kita perlu memberikan style pada modal. Contohnya di sini menggunakan tailwind.

Pertama, buka komponen modal dan tambahkan class berikut pada `div` utama:

1. `fixed, inset-0` agar modal menutupi seluruh layar.
2. `bg-black/50` untuk membuat background berwarna hitam transparan.
3. `flex items-center justify-center` untuk memposisikan konten modal berada di tengah layar.

```vue
<script setup>
const visible = defineModel(false)
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <slot />
    </div>
</template>
```

Di dalam `div` modal, tambahkan `div` lagi untuk membungkus konten dan tambahkan class berikut:

1. `relative bg-white p-6 rounded-lg` agar tampilannya seperti card.
2. `max-w-xl w-full mx-auto` untuk mengatur lebar konten modal.

```vue
<script setup>
const visible = defineModel(false)
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="relative bg-white p-6 rounded-lg max-w-xl mx-auto">
            <slot />
        </div>
    </div>
</template>
```

Hasil modal:

![Hasil Modal](/images/posts/cara-membuat-modal-vue/modal-style.gif)

## 4. Menutup Modal

Sekarang kita tambahkan cara untuk menutup modal. Tambahkan tombol di bawah slot yang ketika diklik mengubah nilai `visible` menjadi `false` sehingga modal menjadi tertutup.

```vue
<script setup>
const visible = defineModel(false)
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="relative bg-white p-6 rounded-lg max-w-xl w-full mx-auto">
            <slot />
            
            <button @click="visible = false">Tutup</button>
        </div>
    </div>
</template>
```

Berikan style pada tombol tutup modal agar lebih menarik.

```vue
<script setup>
const visible = defineModel(false)
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="relative bg-white p-6 rounded-lg max-w-xl w-full mx-auto">
            <slot />
            
            <button class="py-2.5 px-4 mt-4 rounded-md border border-gray-300 rounded-md" @click="visible = false">Tutup</button>
        </div>
    </div>
</template>
```

Agar modal juga bisa ditutup ketika area luar konten diklik, kita bisa menambahkan library `click-outside-vue3`.

```bash
npm install --save click-outside-vue3
# atau
yarn add click-outside-vue3
```

Kemudian, import directive `vClickOutside` lalu gunakan pada div yang membungkus konten modal dan hubungkan dengan fungsi `onClose` untuk menutup modal. 

```vue
<script setup>
import { directive as vClickOutside } from "click-outside-vue3"
const visible = defineModel(false)

const onClose = () => visible.value = false
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="relative bg-white p-6 rounded-lg max-w-xl mx-auto" v-click-outside="onClose">
            <slot />
            
            <button class="py-2.5 px-4 mt-4 rounded-md border border-gray-300 rounded-md" @click="visible = false">Tutup</button>
        </div>
    </div>
</template>
```

## 5. Hasil Akhir

Modal sudah selesai dibuat dan dapat langsung digunakan, berikut kode lengkap komponen modal:

```vue
<script setup>
import { directive as vClickOutside } from "click-outside-vue3"
const visible = defineModel(false)

const onClose = () => visible.value = false
</script>

<template>
    <div v-if="visible" class="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div class="relative bg-white p-6 rounded-lg max-w-xl w-full mx-auto" v-click-outside="onClose">
            <slot />
            
            <button class="py-2.5 px-4 mt-4 rounded-md border border-gray-300 rounded-md" @click="visible = false">Tutup</button>
        </div>
    </div>
</template>
```

Contoh tampilan hasil akhir modal:

Hasil modal:

![Hasil Modal](/images/posts/cara-membuat-modal-vue/modal-akhir.gif)