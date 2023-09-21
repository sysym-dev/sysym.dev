---
title: 3 Cara Cek Apakah Properti Ada Pada Objek Javascript
tags: [js]
date: 2023-09-21 17:31:00 +0700
---

Keberadaan sebuah properti pada objek javascript dapat dicek dengan 3 cara.

<!--more-->

- `Object.hasOwn`
- `Object.prototype.hasOwnProperty`
- `in` operator

## Object.hasOwn

`hasOwn` adalah method static pada `Object` yang menerima argumen sebuah objek dan sebuah nama properti, dan mengembalikan `true` jika nama properti ada pada objek.

```js
const user = {
    name: 'Robot',
    age: 123
}

console.log( Object.hasOwn(user, 'name') ) // true
console.log( Object.hasOwn(user, 'age') ) // true
console.log( Object.hasOwn(user, 'email') ) // false
console.log( Object.hasOwn(user, 'toString') ) // false
```

`hasOwn` hanya akan mengembalikan `true` pada properti dia sendiri yang bukan inherit, artinya `hasOwn` tidak melakukan cek properti pada `prototype chain`.

Contoh

```js
const user = {
    name: 'Robot',
    age: 132
}

const me = Object.create(user)
me.email = 'robot@gmail.com'

console.log( me.name ) // Robot
console.log( me.email ) // robot@gmail.com
console.log( Object.hasOwn(me, 'email') ) // true
console.log( Object.hasOwn(me, 'password') ) // false
```

Walau ketika diakses property `name` pada me ada hasilnya, namun ketika dicek menggunakan `Object.hasOwn` akan mengembalikan `false`, karena property `name` ada pada prototype chain object `user` bukan property objeknya `me` langsung.

Jadi pastikan ketika menggunakan `Object.hasOwn` anda bermaksud untuk mengecek property langsung objek itu sendiri.

## Object.prototype.hasOwnProperty

`hasOwnProperty` adalah method pada objek yang fungsinya sama dengan `Object.hasOwn` diatas, hanya beda penggunaanya saja.

```js
const user = {
    name: 'Robot',
    age: 123
}

console.log( user.hasOwnProperty('name') ) // true
console.log( user.hasOwnProperty('age') ) // true
console.log( user.hasOwnProperty('email') ) // false
console.log( user.hasOwnProperty('toString') ) // false

const me = Object.create(user)
me.email = 'robot@gmail.com'

console.log( me.name ) // Robot
console.log( me.email ) // robot@gmail.com
console.log( Object.hasOwn(me, 'email') ) // true
console.log( Object.hasOwn(me, 'password') ) // false
```

Namun `Object.hasOwn` direncanakan akan menjadi pengganti `Object.prototype.hasOwnProperty`, karena ada beberapa masalah yang mungkin terjadi pada penggunaan `Object.prototype.hasOwnProperty`, seperti:

1. Jika object dibuat menggunakan `Object.create(null)` maka `hasOwnProperty` tidak bisa bisa digunakan pada objek tersebut
2. Ada kemungkinan method `hasOwnProperty` diovveride.

## in operator

`in` adalah operator yang mengembalikan `true` jika property yang dicek ada pada objek atau prototype chain objek.

Jadi selain mengecek property pada objeknya sendiri, `in` juga mengecek apakah property ada di dalam prototype chain nya.

Contoh.

```js
const user = {
    name: 'Robot',
    age: 123
}
const me = Object.create(user)
me.email = 'robot@gmail.com'

console.log( 'name' in me ) // true
console.log( 'age' in me ) // true
console.log( 'email' in me ) // true
console.log( 'toString' in me ) // true
console.log( 'hasOwnProperty' in me ) // true
console.log( 'password' in me ) // false
console.log( 'length' in me ) // false
```

## Sumber

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in