---
title: Cara Copy Gambar dari Canvas HTML Ke Clipboard dengan Javascript
tags: [javascript]
date: 2024-11-23 05:10:00 +0700
images:
- /images/posts/js-canvas-copy/thumbnail.jpg
---

Canvas adalah elemen HTML yang dapat digunakan untuk menggambar grafis dengan javascript.

<!--more-->

Hasil grafis canvas dapat dicopy ke clipboard dengan langkah-langkah berikut:

## 1. Siapkan Canvas

Siapkan canvas yang sudah ada grafis di dalamnya. Contoh.

```html
<canvas width="300" height="200" style="border: 1px solid black;"></canvas>

<script>
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);
</script>
```

## 2. Siapkan Button Untuk Memicu Copy Canvas

Siapkan button atau elemen lain untuk memicu copy grafis canvas. Tambahkan juga click event listener pada button tersebut untuk melakukan proses copy grafis.

```html
<canvas width="300" height="200" style="border: 1px solid black;"></canvas>
<button>Copy</button>

<script>
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);

    document.querySelector('button')
        .addEventListener('click', () => {})
</script>
```

## 3. Konversi Canvas ke Blob

Tambahkan proses untuk mengkonversi canvas di dalam event listener button yang sudah dibuat sebelumnya.

Untuk mengonversi canvas ke Blob caranya dengan memanggil method `toBlob` pada elemen canvas dengan argumen callback ketika blob sudah terbuat.

```javascript
document.querySelector('button')
    .addEventListener('click', () => {
        canvas.toBlob(async blob => {})
    })
```

## 4. Buat ClipboardItem Berisi Blob Canvas

Untuk menyalin blob canvas ke clipboard, blob harus diubah menjadi `ClipboardItem`. Caranya buat objek `ClipboardItem` dengan constructor berisi objek dengan satu properti yaitu key tipe blob canvas dan value blobnya.

```javascript
canvas.toBlob(async blob => {
    const data = new ClipboardItem({
        [blob.type]: blob
    })
})
```

## 5. Tulis ClipboardItem ke Clipboard

`ClipboardItem` dari blob canvas yang sudah dibuat lalu dituliskan ke Clipboard dengan `navigator.clipboard.write` sebagai argumen dalam bentuk array.

```javascript
canvas.toBlob(async blob => {
    const data = new ClipboardItem({
        [blob.type]: blob
    })

    await navigator.clipboard.write([data])
})
```

## Hasilnya

```html
<canvas width="300" height="200" style="border: 1px solid black;"></canvas>
<button>Copy</button>

<script>
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);

    document.querySelector('button')
        .addEventListener('click', () => {
            canvas.toBlob(async blob => {
                const data = new ClipboardItem({
                    [blob.type]: blob
                })

                await navigator.clipboard.write([data])
            })
        })
</script>
```