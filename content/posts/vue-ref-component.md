---
title: Cara Mengakses Ref Yang Ada di Child Component Vue 3 Composition API
tags: [vue]
date: 2024-01-01 08:50:00 +0700
summary: Ref yang ada di child component yang menggunakan `<script setup>` atau *composition api* harus di-*expose* dulu menggunakan `defineExpose` agar bisa diakses dari luar component.
---

> An exception here is that components using `<script setup>` are private by default: a parent component referencing a child component using `<script setup>` won't be able to access anything unless the child component chooses to expose a public interface using the defineExpose macro:
[https://vuejs.org/guide/essentials/template-refs#ref-on-component](https://vuejs.org/guide/essentials/template-refs#ref-on-component)
 
Artinya, ref yang ada di child component yang menggunakan `<script setup>` atau *composition api* harus di-*expose* dulu menggunakan `defineExpose` agar bisa diakses dari luar component.

`defineExpose` adalah *compiler macro* pada vue untuk meng-*expose* properti pada componetn `<script setup>` atau composition api.

Misal terdapat component `FormControl.vue`.

```vue
<script setup>
import { ref } from 'vue';

const input = ref(null)
</script>

<template>
  <input ref="input" type="text" />
</template>
```

Jika saya ingin membuat ref `input` dapat diakses dari luar component `FormControl`. Maka ref `input` harus dimasukkan ke `defineExpose`.

```vue
<script setup>
import { ref } from 'vue';

const input = ref(null)

defineExpose({ input })
</script>

<template>
  <input ref="input" type="text" />
</template>
```

Dengan ini, ref `input` sekarang sudah bisa diakses dari luar component, contoh di `App.vue`.

```vue
<script setup>
import { ref, onMounted } from 'vue';
import FormControl from './FormControl.vue';

const formControl = ref()

onMounted(() => formControl.value.input.focus())
</script>

<template>
  <FormControl ref="formControl" />
</template>
```

## Sumber

- [https://vuejs.org/api/sfc-script-setup.html#defineexpose](https://vuejs.org/api/sfc-script-setup.html#defineexpose)
- [https://vuejs.org/guide/essentials/template-refs#ref-on-component](https://vuejs.org/guide/essentials/template-refs#ref-on-component)