---
title: Cara Membandingkan Dua Array Apakah Sama di Javascript
tags: [javascript]
date: 2025-02-05 19:27:00 +0700
images:
- /images/posts/js-compare-array/thumbnail.jpg
---

Pada artikel kali ini akan dibahas cara membandingkan dua array apakah sama di javascript.

<!--more-->

Cara yang akan dibahas adalah cara manual. Jika ingin cepat, gunakan library seperti [lodash](https://lodash.com/docs/2.4.2#isEqual) atau [underscore js](https://underscorejs.org/docs/modules/isEqual.html).

Langsung saja, berikut langkah-langkahnya.

Pertama, buat fungsi untuk membandingkan dua array. Fungsi ini menerima dua parameter berupa array.

```javascript
function isEqual(a, b) {}
```

Pengecekan pertama untuk menentukan apakah kedua array sama adalah dengan membandingkan ukurannya. Jika berbeda berarti kedua array tersebut tidak sama. Gunakan `length` untuk mendapatkan ukuran array.

```javascript
function isEqual(a, b) {
    return a.length === b.length
}

console.log(isEqual([1, 2, 3], [1, 2, 3, 4])) // false
console.log(isEqual([1, 2, 3], [1, 2, 3])) // true
console.log(isEqual([1, 2, 3], [4, 4, 3])) // true
```

Pengecekan berikutnya adalah membandingkan setiap elemen pada indeks yang sama di kedua array. Caranya dengan menggunakan method `every` pada array pertama, setiap elemen pada array pertama dibandingkan dengan elemen pada array kedua sesuai indeksnya.

```javascript
function isEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    
    return a.every((item, index) => item === b[index])
}

console.log(isEqual([1, 2, 3], [1, 2, 3, 4])) // false
console.log(isEqual([1, 2, 3], [4, 4, 3])) // false
console.log(isEqual([1, 2, 3], [1, 3, 2])) // false
console.log(isEqual([1, 2, 3], [1, 2, 3])) // true
```

Pada fungsi di atas, jika kedua array memiliki elemen yang sama tetapi urutannya berbeda, maka hasilnya akan `false`. Jika ingin mengabaikan urutannya, urutkan array terlebih dahulu sebelum melakukan perbandingan. Untuk mengurutkan gunakan method `sort` pada kedua array.

```javascript
function isEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    
    const bSorted = [...b].sort((item, next) => item - next)
    
    return [...a]
        .sort((item, next) => item - next)
        .every((item, index) => item === bSorted[index])
}

console.log(isEqual([1, 2, 3], [1, 2, 3, 4])) // false
console.log(isEqual([1, 2, 3], [4, 4, 3])) // false
console.log(isEqual([1, 2, 3], [1, 3, 2])) // true
console.log(isEqual([1, 2, 3], [1, 2, 3])) // true
console.log(isEqual(['a', 'b', 'c'], ['a', 'b', 'c'])) // true
console.log(isEqual(['a', 'b', 'c'], ['a', 'c', 'b'])) // false
```

Pada fungsi di atas hanya berfungsi untuk array dengan elemen berupa `Number`. Jika ingin dibuat agar dapat menerima `String` maka  pindahkan sort ke parameter, sehingga fungsi sortnya menyesuaikan ketika fungsi dipanggil.

```javascript
function isEqual(a, b, sortFn) {
    if (a.length !== b.length) {
        return false;
    }
    
    const bSorted = [...b].sort(sortFn)
    
    return [...a].sort(sortFn)
        .every((item, index) => item === bSorted[index])
}

function sortNumber(a, b) {
    return a - b
}

function sortString(a, b) {
    return a.localeCompare(b)
}

console.log(isEqual([1, 2, 3], [1, 2, 3, 4], sortNumber)) // false
console.log(isEqual([1, 2, 3], [4, 4, 3], sortNumber)) // false
console.log(isEqual([1, 2, 3], [1, 3, 2], sortNumber)) // true
console.log(isEqual([1, 2, 3], [1, 2, 3], sortNumber)) // true
console.log(isEqual(['a', 'b', 'c'], ['a', 'b', 'c'], sortString)) // true
console.log(isEqual(['a', 'b', 'c'], ['a', 'c', 'b'], sortString)) // true
```

---

Cara yang telah dibahas hanya dapat berfungsi untuk array dengan elemen bertipe data primitive seperti `Number`, `String`, dan `Boolean`. Untuk array berisi `Object`, array nested, dan yang lainnya, perlu langkah-langkah lebih lanjut.