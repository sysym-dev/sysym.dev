---
title: HTML5 Menambahkan Page Break Elemen Pada Saat Diprint
tags: [html, html5]
date: 2024-02-03 15:00:00 +0700
---

Ketika halaman html akan dicetak, terkadang perlu ditambahkan page break pada beberapa bagian tertentu.

<!--more-->

Untuk melakukannya bisa dengan memodifikasi css pada elemen yang akan ditambahkan page break, yaitu dengan menambahkan properti `break-before` atau `break-after`.

Contoh, ada halaman html seperti berikut.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <section>
    <h1>One</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
  </section>
  <section>
    <h1>Two</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
  </section>
  <section>
    <h1>Three</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
  </section>
</body>

</html>
```

![Contoh HTML](/images/posts/html-5-force-page-break/example-html.png)

Misal ketika halaman dicetak, ingin di setiap `section` akan ada page break nya, caranya dengan menambahkan properti css `break-after` dengan nilai `page` pada elemen `section`.

```css
<style>
  section {
    break-after: page;
  }
</style>
```

Hasilnya ketika dicetak, setiap `section` akan ada page break nya sehingga menghasilkan 3 halaman.

![Print](/images/posts/html-5-force-page-break/print.png)

Bisa saja menggunakan properti `break-before` dengan nilai `page`, hasilnya akan sama seperti contoh sbelumnya.

## Perbedaan break-before dan break-after

Jika nilainya sama-sama `page`, `break-before` akan menambahkan page break sebelum elemen, sedangkan `break-after` akan menambahkan page break setelah elemen.

## page-break-before dan page-break-after

Di beberapa tutorial mungkin anda menemukan cara dengan menambahkan properti `page-break-before` atau `page-break-after`. Dua properti ini sudah deprecated dan digantikan dengan `break-before` dan `breaf-after`.

Submer:

- https://developer.mozilla.org/en-US/docs/Web/CSS/break-before
- https://developer.mozilla.org/en-US/docs/Web/CSS/break-after