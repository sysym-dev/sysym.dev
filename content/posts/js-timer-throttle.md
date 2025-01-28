---
title: Cara Mengatasi setTimeout dan setInterval Melambat atau Berhenti ketika Tab tidak Aktif
tags: [javascript]
date: 2025-01-28 17:30:00 +0700
images:
- /images/posts/js-timer-throttle/thumbnail.jpg
---

Pernahkan anda mengalami `setTimeout` atau `setInterval` melambat atau bahkan berhenti ketika tab sedang tidak aktif? Hal ini disebabkan oleh optimasi browser pada tab yang tidak aktif.

<!--more-->

Browser secara otomatis akan mengoptimalkan penggunaan dengan memperlambat atau bahkan menjeda proses seperti `setTimeout` dan `setInterval` pada tab yang tidak aktif.

Untuk mengatasinya, anda dapat mencoba dua solusi berikut:

## 1. Menggunakan Library worker-timers

Library ini memanfaatkan `Web Worker` untuk memastikan `setTimeout` dan `setInterval` tetap berjalan meskipun tab tidak aktif.

Untuk menggunakannya, anda bisa langsung install library ini terlebih dahulu.

```bash
npm install worker-timers
```

Kemudian import fungsi-fungsi yang dibutuhkan. Cara menggunakan fungsi-fungsi tersebut sama persis seperti fungsi aslinya.

```javascript
import { clearInterval, setInterval } from 'worker-timers';

let max = 600;

const interval = setInterval(() => {
    console.log(max, new Date());

    max--;

    if (max < 0) {
        clearInterval(interval);
    }
}, 1000);
```

## 2. Menjeda Timer ketika Tab Kehilangan Fokus

Anda juga dapat membuat mekanisme untuk menjeda `setTimeout` dan `setInterval` ketika tab kehilangan fokus lalu melanjutkannya ketika tab mendapatkan fokus kembali. Berikut langkah-langkahnya:

1. Tangkap event `visibilitychange` untuk mendeteksi ketika tab mendapat atau kehilangan fokus
2. Gunakan `document.hidden` untuk memeriksa status tab.
    - Jika `false`, berarti tab kehilangan fokus.
    - Jika `true`, berarti tab mendapatkan fokus.
4. Ketika tab kehilangan fokus, jeda timer dan simpan timestamp-nya.
5. Ketika tab mendapatkan fokus kembali, lanjutkan timer dengan menghitung waktu yang tersisa berdasarkan timestamp terakhir.

Contoh kode:

```javascript
let timerId;
let remainingTime = 10000;
let startTime;

function startTimer() {
    startTime = Date.now();
    timerId = setTimeout(() => {
        console.log('Timer selesai!');
    }, remainingTime);
}

function pauseTimer() {
    clearTimeout(timerId);
    const now = Date.now();
    remainingTime -= now - startTime;
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        pauseTimer();
    } else {
        startTimer();
    }
});

startTimer();
```

---

Kedua solusi di atas dapat anda gunakan untuk mengatasi `setTimeout` dan `setInterval` yang melambat atau berhenti ketika tab tidak aktif. Jika anda ingin solusi yang mudah gunakan library `worker-timers`. Namun, jika anda tidak ingin menggunakan `Web Worker`, gunakan solusi menjeda timer ketika tab kehilangan fokus.

Sumber:

- https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
- https://www.npmjs.com/package/worker-timers
- https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event