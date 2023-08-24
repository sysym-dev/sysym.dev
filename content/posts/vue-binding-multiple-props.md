---
title: Binding Multiple Props Menggunakan Objek Pada Component Vue
tags: [vue]
date: 2023-08-24 18:00:00 +0700
---

Sebuah component vue dapat menerima banyak props, setiap props bisa dibinding dengan syntax `:nama-prop`.

<!--more-->

```vue
<my-input
	type="text"
	color="white"
	helper="Your full name"
	:validation="validation"
	:loading="false"
	required
/>
```

Pada component `my-input` di atas, ada 6 props yang dibinding.

Selain dengan cara di atas, binding props juga bisa dilakukan sekaligus menggunakan objek pada `v-bind` tanpa argumen.

```vue
<script setup>
const inputProps = {
	type: "text",
	color: "white",
	helper: "Your full name",
	validation: "validation",
	loading: false,
	required: true
}
</script>

<template>
	<my-input v-bind="inputProps" />
</template>
```

Cara diatas akan berguna jika terdapat beberapa komponen yang sama dan saling share props, sehingga tidak perlu melakukan binding props berulang kali.

```vue
<script setup>
const inputProps = {
	type: "text",
	color: "white",
	helper: "Your full name",
	validation: "validation",
	loading: false,
	required: true
}
</script>

<template>
	<my-input v-bind="inputProps" />
	<my-input placeholder="Notes" v-bind="inputProps" />
	<my-input placeholder="Description" v-bind="inputProps" />
	<my-input placeholder="Address" v-bind="inputProps" />
</template>
```

Objek juga bisa digunakan untuk binding multiple atribut pada element biasa, contoh element `input` dan `textarea` yang saling share atribut.

```vue
<script setup>
const inputProps = {
	required: true,
	disabled: true,
	readonly: true,
	placeholder: "Type Something"
}
</script>

<template>
	<input type="text" v-bind="inputProps" />
	<textarea v-bind="inputProps"></textarea>
</template>
```

Sumber: [https://vuejs.org/guide/components/props.html#prop-passing-details](https://vuejs.org/guide/components/props.html#prop-passing-details)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI5Mzc0ODMsMTc1OTg4MTE2MF19
-->