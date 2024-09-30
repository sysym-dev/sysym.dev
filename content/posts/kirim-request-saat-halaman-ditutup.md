---
title: Cara Kirim Request Ketika Halaman Ditutup Menggunakan Javascript
tags: [javascript]
date: 2024-10-01 06:00:00 +0700
images:
- /images/posts/send-beacon-js/thumbnail.jpg
---

Ketika halaman *web* ditutup, terkadang kita ingin mengirim *request* tertentu ke *server*, misalnya *request* yang mengirim aktifitas pengunjung, durasi waktu berkunjung, dsb. Biasanya digunakan untuk analisis *web*.

<!--more-->

Jika menggunakan `XMLHttpRequest` atau `fetch`, *request* bisa saja tidak sampai ke *server* karena ketika halaman ditutup dan *request* belum sampai maka *request* akan *dikill* oleh browser.

Untuk mengatasinya, kita bisa menggunakan `navigator.sendBeacon` untuk mengirim *request*-nya.

`navigator.sendBeacon` dapat mengirim *request* ke *server* di *background browser* meskipun halamannya sudah ditutup dan dijamin sampai ke *server*.

Contoh

```js
document.addEventListener('visibilitychange', () => {
    navigator.sendBeacon('/leave', data)
})
// atau
window.addEventListener('beforeunload', () => {
    navigator.sendBeacon('/leave', data)
})
// atau
window.addEventListener('unload', () => {
    navigator.sendBeacon('/leave', data)
})
```

> `navigator.sendBeacon` hanya bisa mengirim *request method POST* saja.

Untuk mengirim data dalam bentuk `json`, data perlu dikonversi ke `blob` dulu.

```js
window.addEventListener('beforeunload', () => {
    const data = {
        date: new Date,
        duration: 10301
    }
    const payload = new Blob([JSON.stringify(data)], { type: 'application/json' })

    navigator.sendBeacon('/leave', payload)
})
```

Kekurangan `navigator.sendBeacon`:

- Hanya bisa mengirim `request method POST`.
- Ukuran payload terbatas.
- Tidak dapat di-*handle* *response* dari *request* yang dikirim.

Referensi:

- https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon