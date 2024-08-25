---
title: Cara Submit Form Ketika Tekan Enter Pada Textarea
tags: [html, javascript]
date: 2024-08-25 18:00:00 +0700
images:
- /images/posts/textarea-enter/thumbnail.jpg
---

Pada elemen input, menekan enter akan mentrigger submit form. Tapi pada textarea, menekan enter hanya akan membuat baris baru.

<!--more-->

Jika ingin mentrigger submit form ketika menekan enter pada textarea, maka perlu ditambahkan javascript untuk menanganinya. Berikut langkah-langkahnya:

1. Tangkap event ketika ada input pada textarea
2. Cek apakah key yang diinput adalah `Enter` dan tidak dibarengi `Shift`
3. Stop input untuk membuat baris baru dan submit form

```html
<form>
    <textarea placeholder="Isi Konten"></textarea>
</form>
```

```js
const form = document.querySelector('form')
const textarea = form.querySelector('textarea')

form.addEventListener('submit', e => {
    e.preventDefault()

    console.log('form submit')
})

textarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        
        form.requestSubmit()
    }
})
```

- `keydown` event digunakan untuk menangkap ketika ada input pada textarea
- `e.key` untuk mendapatkan key dari tombol yang diinputkan (apakah `Enter`)
- `e.shiftKey` untuk mengecek apakah input dibarengi dengan menekan `Shift`
- `e.preventDefault()` untuk menghentikan input dari membuat baris baru
- `form.requestSubmit()` untuk mensubmit form

Hasilnya.

![Textarea Enter Submit](/images/posts/textarea-enter/textarea-enter.gif)