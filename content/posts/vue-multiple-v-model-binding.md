---
title: Vue Multiple v-model Binding dengan v-model Argument
tags: [vue]
date: 2023-08-23 19:00:00 +0700
---

Suatu komponen vue dapat melakukan binding `v-model` lebih dari satu, dengan memanfaatkan __argument__ pada `v-model`.

<!--more-->

Misalnya sebuah component `FullnameInput` yang didalamnya terdapat input `firstName` dan `lastName`.

Component `FullnameInput` dapat melakukan binding pada dua `v-model`, `firstName` dan `lastName`, menggunakan `v-model` argument.

Syntax dari `v-model` argument adalah `v-model:nama-argument`.

```vue
<script setup>
import { ref } from 'vue'
import FullnameInput from './fullname-input.vue'

const firstName = ref(null)
const lastName = ref(null)
</script>

<template>
    <fullname-input
        v-model:firstname="firstName"
        v-model:lastname="firstName"
    />
</template>
```

Agar dua `v-model` pada component `FullnameInput` perlu dilakukan dua hal:

1. Mendefinisikan Props untuk `firstname` dan `lastname`
2. Emit ke event `update:firstname` dan `update:lastname` ketika ada perubahan.

```vue
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    firstname: String,
    lastname: String
})
const emit = defineEmits(['update:firstname', 'update:lastname'])

const firstnameValue = computed({
    get() {
        return props.firstname
    },
    set(value) {
        emit('update:firstname', value)
    }
})
const lastnameValue = computed({
    get() {
        return props.lastname
    },
    set(value) {
        emit('update:lastname', value)
    }
})
</script>

<template>
    <div>
        <input type="text" v-model="firstnameValue" />
        <input type="text" v-model="lastnameValue" />
    </div>
</template>
```

Sumber : [https://vuejs.org/guide/components/v-model.html#v-model-arguments](https://vuejs.org/guide/components/v-model.html#v-model-arguments)