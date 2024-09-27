---
title: Cara Trigger Hover Pada Element Secara Manual di Javascript
tags: [javascript]
date: 2024-09-27 10:20:00 +0700
images:
- /images/posts/trigger-hover-element/thumbnail.jpg
---

Ketika elemen di-*hover* / dilewati kursor, ada beberapa *event* yang dapat dipicu, seperti `mouseenter`, `mouseover` dan `mousemove`.

<!--more-->

Untuk memicu *event-event* tersebut secara manual, dapat dilakukan dengan membuat objek `MouseEvent` dengan tipe *event* yang ingin dipicu, kemudian dimasukkan ke *method* `dispatchEvent` pada elemen yang mau dipicu.

Contoh cara memicu *event* `mouseenter`.

```javascript
elem.dispatchEvent(new MouseEvent('mouseenter'))
```

Contoh cara memicu *event* `mouseover`.

```javascript
elem.dispatchEvent(new MouseEvent('mouseover'))
```

Contoh cara memicu *event* `mousemove`.

```javascript
elem.dispatchEvent(new MouseEvent('mousemove'))
```

Perbedaan antara *event* `mouseenter`, `mouseover` dan `mousemove` pada suatu elemen:

- `mouseenter` dipicu ketika kursor pertama kali masuk ke elemen tersebut.
- `mouseover` dipicu ketika kursor masuk ke elemen tersebut beserta *children*-nya.
- `mousemove` dipicu ketika kursor bergerak di dalam elemen tersebut.