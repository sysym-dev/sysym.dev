---
title: Cara Menampilkan Preview Image dari Input File dengan Javascript
tags: [javascript]
date: 2024-11-14 20:20:00 +0700
images:
- /images/posts/js-input-file-image-preview/thumbnail.jpg
popular: true
popularOrder: 3
---

Pada artikel ini saya akan membahas tentang cara menampilkan preview gambar dari input file dengan javascript. Berikut caranya:

<!--more-->

Buat sebuah input file dan image.

```html
<input type="file" accept="image/*" />
<img />
```

Tambahkan event listener pada input file ketika file dipilih.

```javascript
document.querySelector('input[type=file]')
    .addEventListener('change', e => {
        
    })
```

Buat url untuk gambar yang dipilih dengan `URL.createObjectURL`. Untuk mengambil gambarnya bisa lewat array pertama pada `e.target.files`.


```javascript
document.querySelector('input[type=file]')
    .addEventListener('change', e => {
        const url = URL.createObjectURL(e.target.files[0]);
    })
```

Gunakan url yang telah dibuat sebagai nilai dari atribut src pada elemen image yang digunakan sebagai preview image.


```javascript
document.querySelector('input[type=file]')
    .addEventListener('change', e => {
        const url = URL.createObjectURL(e.target.files[0]);
    
        document.querySelector('img')
            .setAttribute('src', url)
    })
```

Hapus url gambar yang dipreview dari memori ketika ada gambar baru yang dipilih dengan `URL.revokeObjectURL`.

```javascript
document.querySelector('input[type=file]')
    .addEventListener('change', e => {
        const url = URL.createObjectURL(e.target.files[0]);
        const img = document.querySelector('img')
    
        img.setAttribute('src', url)

        img.onload = () => URL.revokeObjectURL(url)
    })
```

Hasil akhir.

```html
<input type="file" accept="image/*" />
<img />

<script>
document.querySelector('input[type=file]')
    .addEventListener('change', e => {
        const url = URL.createObjectURL(e.target.files[0]);
        const img = document.querySelector('img')
    
        img.setAttribute('src', url)

        img.onload = () => URL.revokeObjectURL(url)
    })
</script>
```

Hasilnya.

![Hasilnya](/images/posts/js-input-file-image-preview/hasil.gif)