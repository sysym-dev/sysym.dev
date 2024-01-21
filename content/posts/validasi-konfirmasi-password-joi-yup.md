---
title: Cara Validasi Konfirmasi Password Menggunakan Joi dan Yup
tags: [javascript, joi, yup]
date: 2024-01-21 10:00:00 +0700
summary: Ref yang ada di child component yang menggunakan `<script setup>` atau *composition api* harus di-*expose* dulu menggunakan `defineExpose` agar bisa diakses dari luar component.
---

Input password biasanya bersamaan dengan konfirmasi password. Konfirmasi password artinya nilainya harus sama dengan password.

<!--more-->

Berikut cara membuat validasinya menggunakan joi dan yup.

## Validasi Konfirmasi Password Menggunakan Joi

Di joi, ada method `valid` untuk membatasi nilai apa saja yang diperbolehkan, kemudian `ref` digunakan untuk mendapatkan nilai dari suatu key.

Jadi, untuk memvalidasi konfirmasi password harus sama dengan password, bisa menggunakan `valid(ref('password'))`.

```javascript
const joi = require('joi')

const schema = joi.object({
    password: joi.string().required().min(8),
    password_confirmation: joi.string().required().min(8).valid(joi.ref('password'))
})
```

## Validasi Konfirmasi Password Menggunakan Yup

Di yup, caranya sama seperti di joi, hanya diubah method `valid` diganti `.oneOf` dan isinya array. 

```javascript
const yup = require('yup')

const schema = yup.object({
    password: yup.string().required().min(8),
    password_confirmation: yup.string().required().min(8).oneOf([yup.ref('password')])
})
```