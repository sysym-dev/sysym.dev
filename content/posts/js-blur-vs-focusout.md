---
title: Perbedaan Event Blur dan Focus Out di Javascript
tags: [javascript]
date: 2025-01-23 14:50:00 +0700
images:
- /images/posts/js-blur-vs-focusout/thumbnail.jpg
---

Event `blur` dan `focusout` dapat digunakan untuk menangkap event ketika suatu elemen kehilangan fokus. Namun, keduannya memiliki perbedaan yang perlu diketahui agar dapat digunakan dengan tepat.

<!--more-->

Perbedaan utamanya yaitu:

- `focusout` akan melakukan *bubbling*, artinya saat event ini terjadi, event yang sama akan diteruskan ke elemen parent-nya
- `blur` tidak melakukan *bubbling*, sehingga event hanya terjadi pada element yang kehilangan fokus saja, tidak diteruskan ke elemen parent-nya.

## Contoh

```html
<div>
  <input>
</div>

<script>
const div = document.querySelector('div')
const input = document.querySelector('input')

input.addEventListener('blur', () => console.log('blurrr'))
input.addEventListener('focusout', () => console.log('focusout'))

div.addEventListener('blur', () => console.log('blurrr'))
div.addEventListener('focusout', () => console.log('focusout'))
</script>
```

Jika kode di atas dijalankan, lalu fokus pada `input` coba dihilangkan, maka hasilnya akan seperti berikut ini:

- `focusout` akan dipicu 2 kali, dari `div` dan `input`.
- `blur` hanya dipicu satu kali saja dari `input`.

Contoh hasilnya.

![Hasil Kode](/images/posts/js-blur-vs-focusout/hasil-kode.gif)

## Mencegah Bubbling pada focusout

Jika menggunakan `focusout`, proses *bubbling  event* dapat dihentikan dengan memanggil method `stopPropagation` pada object event.

```javascript
input.addEventListener('focusout', e => {
    console.log('focusout')
    
    e.stopPropagation()
})
```