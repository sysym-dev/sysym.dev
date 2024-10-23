---
title: Cara Memunculkan Dialog Konfirmasi Sebelum Menutup Halaman di JavaScript
tags: [javascript]
date: 2024-10-23 10:00:00 +0700
images:
- /images/posts/js-dialog-onbeforeunload/thumbnail.jpg
---

Memunculkan dialog konfirmasi sebelum menutup halaman berguna untuk memastikan apakah pengguna benar-benar ingin meninggalkan atau mereload halaman.

<!--more-->

Caranya, tangkap event `beforeunload`, lalu trigger dialog konfirmasi agar muncul dengan beberapa cara berikut:

## 1. Panggil Method `preventDefault()`

Cara pertama yaitu dengan memanggil method `preventDefault()` pada object event.

```javascript
window.addEventListener('beforeunload', e => e.preventDefault())
```

## 2. Set Properti `returnValue`

Cara kedua yaitu dengan mengeset properti `returnValue` pada object event dengan nilai apa saja yang bernilai true.

```javascript
window.addEventListener('beforeunload', e => e.returnValue = true)
```

## 3. Return Dengan Nilai Yang Bernilai True.

Cara ini hanya bisa dilakukan dengan `onbeforeunload`, tidak dengan `addEventListener`.

```javascript
window.onbeforeunload = () => true
```

---

Contoh implementasinya, misal pada halaman terdapat input, jika input terisi maka ketika halaman akan ditutup muncul konfirmasi dialog, tapi jika input kosong maka ketika halaman akan ditutup konfirmasi dialog tidak perlu muncul.

```javascript
const input = document.querySelector('input')

const handleBeforeUnload = e => e.preventDefault()

input.addEventListener('input', e => {
    if (e.target.value === '') {
        window.removeEventListener('beforeunload', handleBeforeUnload)
    } else {
        window.addEventListener('beforeunload', handleBeforeUnload)
    }
})
```

Sumber: https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event