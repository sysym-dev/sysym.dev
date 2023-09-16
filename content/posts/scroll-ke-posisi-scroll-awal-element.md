---
title: Scroll Element Ke Posisi Paling Atas
tags: [javascript]
date: 2023-09-13 20:00:00 +0700
---

Element yang bisa discroll dapat dimodifikasi posisi scrollnya dengan beberapa cara.

<!--more-->

Menggunakan properti `scrollTop` atau method `scroll` / `scrollTo`.

Pada beberapa kasus, saya ingin mengatur posisi scroll suatu element ke posisi paling atas secara programatis, misalnya pada suatu list yang bisa di scroll, kemudian ada tombol yang ketika diklik akan meng-scroll list ke posisi paling atas.

Berikut penjelasan beberapa caranya.

## Menggunakan Properti scrollTop

Properti `scrollTop` pada suatu element dapat digunakan untuk mendapatkan atau mengatur posisi scroll vertikal element tersebut.

Untuk mengatur posisi scroll element ke posisi paling atas, tinggal atur nilai properti `scrollTop` element tersebut menjadi 0.

```js
const list = document.querySelector('#list') // scrollable element

list.scrollTop = 0
```

## Menggunakan Method scroll / scrollTo

Method `scroll` dan `scrollTo` memiliki fungsi yang sama, yaitu untuk mengatur scroll element ke koordinat tertentu.

Kelebihan cara ini adalah adanya opsi smooth yang bisa ditambahkan pada saat scroll.

Untuk mengatur posisi scroll element ke posisi paling atas, tinggal panggil method `scroll` / `scrollTo` dengan nilai koordinat 0.

Contoh penggunaan yang pertama untuk scroll ke posisi paling atas.

```js
const list = document.querySelector('#list') // scrollable element

list.scroll(0, 0)
```

> parameter pertama digunakan untuk posisi scroll horizontal dan yang kedua untuk posisi scroll vertikal

Contoh penggunaan yang kedua untuk scroll ke posisi paling atas dengan smooth.

```js
const list = document.querySelector('#list') // scrollable element

list.scroll({
    top: 0,
    behaviour: 'smooth'
})
```

## Sumber

- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop
- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
- https://stackoverflow.com/questions/10744299/scroll-back-to-the-top-of-scrollable-div