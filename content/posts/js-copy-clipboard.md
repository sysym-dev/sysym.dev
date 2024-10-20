---
title: Cara Copy Text Ke Clipboard Di Javascript
tags: [javascript]
date: 2024-10-20 10:45:00 +0700
images:
- /images/posts/copy-clipboard-js/thumbnail.jpg
---

Untuk menyalin teks ke clipboard di javascript, gunakan method `writeText` pada Clipboard API.

<!--more-->

Clipboard API dapat diakses di `navigator.clipboard`.

Berikut contoh menyalin isi textarea ke clipboard menggunakan clipboard API.

```javascript
async function copyToClipboard() {
    const textarea = document.querySelector('textarea')

    await navigator.clipboard.writeText(textarea.value)
}
```

> Cara ini membutuhkan permission `clipboard-write`.