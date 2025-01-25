---
title: Cara Menggunakan Setter Pada Computed di Vue
tags: [vue]
date: 2025-01-25 16:15:00 +0700
images:
- /images/posts/vue-computed-setter/thumbnail.jpg
---

Secara default computed di Vue hanya untuk `getter` saja, jika coba diubah nilai computed maka akan muncul warning. Namun, sebenarnya computed dapat menerima `setter` untuk menangani ketika nilai computed coba diubah. 

<!--more-->

Contohnya, misalnya terdapat computed `fullName`. Getter-nya mengembalikan string dari gabungan dari ref `firstName` dan ref `lastName`. Setter-nya akan mensplit `fullName` berdasarkan spasi, hasil split pertama dijadikan nilai baru untuk `firstName` dan hasil split kedua dijadikan nilai baru untuk `lastName`.

```vue
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('Franck')
const lastName = ref('Ribéry')

const fullName = computed({
  get() {
    if (!lastName.value) {
      return firstName.value
    }
    
    return `${firstName.value} ${lastName.value}`
  },
  set(newValue) {
    const [newFirstName = '', newLastName = ''] = newValue.split(' ')

    firstName.value = newFirstName
    lastName.value = newLastName
  }
})
</script>

<template>
  <input type="text" v-model="fullName" />

  <p>First Name = {{ firstName }}</p>
  <p>Last Name = {{ lastName }}</p>
</template>
```

Hasil pada contoh di atas, ketika `fullName` diubah maka `firstName` dan `lastName` juga akan berubah sesuai logika yang diatur pada computed setter. Berikut adalah contoh hasilnya.

![Hasil Kode](/images/posts/vue-computed-setter/hasil.gif)