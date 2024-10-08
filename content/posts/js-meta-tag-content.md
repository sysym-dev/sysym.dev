---
title: Cara Mengambil Nilai Meta Tag Dengan Javascript
tags: [javascript]
date: 2024-10-08 17:30:00 +0700
images:
- /images/posts/js-meta-tag/thumbnail.jpg
---

*Meta Tag* adalah element HTML yang biasanya digunakan untuk memberikan informasi metadata tentang   halaman web.

<!--more-->

Untuk mengambil meta tag tertentu dengan javascript, gunakan `document.querySelector` untuk memilih elemen meta tag, lalu gunakan method `getAttribute` atau langsung ke properti `content` untuk mengambil nilai meta tag.

Contoh mengambil nilai meta tag yang berisi informasi *metadata*.

```javascript
document.querySelector('meta[name="description"]').getAttribute('content')
// atau
document.querySelector('meta[name="description"]').content
```

Contoh mengambil nilai meta tag yang berisi informasi *opengraph*.

```javascript
document.querySelector('meta[property="og:image"]').getAttribute('content')
// atau
document.querySelector('meta[property="og:image"]').content
```

Referensi:

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement/content
- https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute