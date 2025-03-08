---
title: Cara Membuat Tinggi Textarea Otomatis Mengikuti Konten Dengan Javascript
tags: [html, javascript]
date: 2024-08-24 19:30:00 +0700
images:
- /images/posts/textarea-grow-height/thumbnail.jpg
---

Pada beberapa aplikasi seperti aplikasi chatting, tinggi input pesan biasanya mengikuti jumlah baris kontennya. Ini bisa dilakukan dengan textarea dan javascript.

<!--more-->

Langkah-langkah yang perlu dilakukan:

1. Tangkap setiap event `input` pada textarea
2. Reset tinggi textarea dengan mengatur `style.height` textarea menjadi `auto`
3. Set tinggi textarea dengan mengatur `style.height` sesuai dengan `scrollHeight` textarea

`scrollHeight` dapat digunakan untuk mendapatkan tinggi konten textarea seluruhnya.

```html
<textarea placeholder="Content"></textarea>
```

```js
const textarea = document.querySelector('textarea')

textarea.addEventListener('input', () => {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
})
```

Karena tinggi textarea sudah otomatis, maka bisa dinonaktifkan resize dan overflownya menggunakan css.

```css
textarea {
    resize: none;
    overflow: hidden;
}
```

Hasilnya

![Tinggi Textarea Otomatis Mengikuti Konten](/images/posts/textarea-grow-height/textareagrow.gif)