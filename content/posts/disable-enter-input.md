---
title: Cara Menonaktifkan Enter Untuk Submit pada Input
tags: [html]
date: 2025-03-04 19:38:00 +0700
images:
- /images/posts/disable-enter-input/thumbnail.jpg
---

Secara default, menekan `Enter` pada `<input>` dalam sebuah form akan menyebabkan form tersubmit. Untuk mencegahnya, ikuti langkah-langkah berikut:

<!--more-->

Tambahkan event listener `keydown` pada input untuk menangkap setiap tombol yang ditekan pada input.

```html
<form>
    <input type="email" name="email" />
</form>

<script>
    document.querySelector('[name=email]')
        .addEventListener('keydown', e => {})
</script>
```

Kemudian, cek properti `key` pada objek event, jika nilainya `Enter` maka panggil method `preventDefault` pada objek event untuk mencegah form tersubmit.

```html
<form>
    <input type="email" name="email" />
</form>

<script>
    document.querySelector('[name=email]')
        .addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault()
            }
        })
</script>
```