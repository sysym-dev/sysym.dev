---
title: Cara Menggunakan Arbitrary Group di Tailwind
tags: [tailwind]
date: 2024-12-15 13:00:00 +0700
images:
- /images/posts/tailwind-arbitrary-group/thumbnail.jpg
---

Di tailwind, default selector parent pada group adalah `hover`, `focus`, `active` dsb. Jika ingin menggunakan selector parent yang tidak ada di default maka gunakan arbitrary group.

<!--more-->

Untuk membuat arbitrary group, syntaxnya `group-[selector_parent]`.

Misalnya kita ingin memberi class pada `button` ketika parent-nya memiliki class `is-published`.

```html
<div class="group">
    <button class="hidden group-[.is-published]:block">Cancel</button>
</div>
```

Pada contoh di atas, ketika `div` tidak memiliki class `is-published` maka `button` menjadi `hidden` atau tersembunyi, ketika `div` memiliki class `is-published` maka `button` menjadi `block` atau terlihat.