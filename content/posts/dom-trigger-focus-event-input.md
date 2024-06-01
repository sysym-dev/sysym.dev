---
title: 3 Cara Manual Trigger Event Focus Pada Element Input Di Javascript
tags: [javascript]
date: 2024-06-01 17:00:00 +0700
images:
- /images/posts/manual-trigger-focus-input/thumbnail.jpg
---

Event focus pada input akan otomatis tertrigger ketika input difokuskan.

<!--more-->

Untuk mentrigger event focus pada input secara manual, ada 3 cara yang bisa dilakukan, berikut di antaranya:

## Menggunakan method .focus()

Method `.focus` pada element input bisa digunakan untuk mentrigger focus event dan memfokuskan element input tersebut.

Contoh.

```js
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('input').focus() // focused
})

document.querySelector('input').addEventListener('focus', () => {
  console.log('focused')
})  
```

## Melakukan Dispatch FocusEvent

`FocusEvent` adalah class yang akan mentrigger `focus` event pada element yang didispatch.

Cara men-dispatch-nya adalah dengan memanggil method `dispatchEvent` pada element input dengan argumen objek berupa `FocusEvent`.

Contoh.

```js
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('input').dispatchEvent(new FocusEvent('focus')) // focused
})

document.querySelector('input').addEventListener('focus', () => {
  console.log('focused')
})
```

> Cara ini hanya akan mentrigger event `focus` saja, tapi inputnya tidak difokuskan.

## Melakukan Dispatch Event Dengan Tipe focus

Cara ini sama dengan cara kedua dengan menggunakan method `dispatchEvent` pada elemnt input, tapi argumen yang dikirim adalah objek `Event` dengan tipe `focus`.

Contoh.

```js
document.querySelector('button').addEventListener('click', () => {
  document.querySelector('input').dispatchEvent(new Event('focus', {
    bubbles: true,
    cancelable: true
  })) // focused
})

document.querySelector('input').addEventListener('focus', () => {
  console.log('focused')
})
```

> Sama seperti cara kdua, cara ini hanya akan mentrigger event `focus` saja, tapi inputnya tidak difokuskan.

## Sumber

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
- https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent
- https://developer.mozilla.org/en-US/docs/Web/API/Event/Event