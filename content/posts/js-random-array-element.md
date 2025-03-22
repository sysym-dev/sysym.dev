---
title: Cara Mengambil Random Element dari Array di JavaScript
tags: [javascript]
date: 2025-03-22 17:46:00 +0700
images:
- /images/posts/js-random-array-element/thumbnail.jpg
---

Untuk mengambil random element dari array di JavaScript, gunakan cara berikut:

<!--more-->

```javascript
function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

randomElement([2, 41, 31, 33, 13, 45]) // contoh: 41
randomElement(['dao', 'seh', 'opt', 'gadd', 'ref']) // contoh: opt
```

Penjelasan:

1. `arr.length` mengambil panjang array.
2. `Math.random()` menghasilkan angka desimal random antara 0 s.d 1.
3. `Math.random() * arr.length` mengalikan hasil angka desimal random dengan ukuran array, untuk menghasilkan angka desimal random antara 0 s.d panjang array.
4. `Math.floor(Math.random() * arr.length)` membulatkan hasil angka random karena index array hanya ada bilangan bulat.
5. `arr[Math.floor(Math.random() * arr.length)]` mengambil element berdasarkan index dari angka random yang dihasilkan.