---
title: v-model Pada Vue Component
tags: [vue]
date: 2023-08-22 18:00:00 +0700
---

Pada saat sebuah element biasa, misal `input`, diberi directive `v-model`, maka yang terjadi compiler akan mengubah `v-model` menjadi sebuah atribut `value` dan handler untuk event `input`. 

<!--more-->

- Atribut `value` berisi data pada `v-model`
- Hander untuk event `input` yang mengubah nilai pada `v-model` dengan nilai baru dari event input.

```vue
<input v-model="email" />
<!-- yang terjadi -->
<input :value="email" @input="email = $event.target.value" />
```

Namun ketika directive `v-model` diberikan pada component, maka yang terjadi compiler akan mengubah `v-model` mejadi atribut `modelValue` dan handler untuk event `update:modelValue`.

```vue
<my-input v-model="email" />
<!-- yang terjadi -->
<my-input
  :modelValue="email"
  @update:modelValue="newValue => email = newValue"
/>
```

Agar `v-model` pada component dapat bekerja dengan semestinya, pada component berlu dilakukan 2 hal ini:

- Mendefinisikan props `modelValue`
- Melakukan emit event `update:modelValue` dengan mengirimkan nilai baru untuk mengubah nilai pada `v-model`

Contoh.

```vue
<!-- MyInput.vue -->
<script setup>
defineProps({ modelValue: String })
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

Atau bisa menggunakan `computed` untuk lebih fleksibel.

```vue
<!-- MyInput.vue -->
<script setup>
import { computed } from 'vue';

const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: function () {
    return props.modelValue
  },
  set: function (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input type="text" v-model="value">
</template>
```

Sekarang component tersebut bisa digunakan dengan `v-model` directive, seharusnya `v-model` dapat bekerja dengan semestinya.

```vue
<script setup>
import { ref } from 'vue';
import MyComponent from '@/components/MyComponent.vue';

const email = ref(null)
</script>

<template>
  <my-component v-model="email" />
  <p>Email : {{ email }}</p>
</template>
```

Sumber : [https://vuejs.org/guide/components/v-model.html](https://vuejs.org/guide/components/v-model.html)