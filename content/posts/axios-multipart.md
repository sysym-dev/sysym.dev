---
title: Cara Kirim Data Multipart Di Axios
tags: [axios, javascript]
date: 2024-09-09 17:30:00 +0700
images:
- /images/posts/axios-multipart/thumbnail.jpg
---

Ada 3 cara untuk mengirim data multipart di axios.

<!--more-->

Cara pertama dengan menggunakan method `postForm` / `patchForm` / `deleteForm`. Data yang dikirim menggunakan method ini akan otomatis diubah menjadi `FormData` dan dikirim sebagai multipart.

```javascript
// post method multipart
axios.postForm('/uploads', {
    name: name.value,
    file: inputFile.value.files[0]
})

// patch method multipart
axios.patchForm('/uploads/1', {
    name: name.value,
    file: inputFile.value.files[0]
})

// delete method multipart
axios.deleteForm('/uploads/1', {
    file: inputFile.value.files[0]
})
```

Cara kedua dengan menambahkan header `Content-Type` dengan nilai `multipart/form-data`, axios akan secara otomatis mengirimkan data dalam bentuk FormData.

```javascript
axios.post('/uploads',
    {
        name: name.value,
        file: inputFile.value.files[0]
    },
    {
        headers: { "Content-Type": "multipart/form-data" }
    }
)
```

Cara terakhir dengan membuat objek `FormData` lalu data yang dikirim masing-masingnya di-append ke objek tersebut.

```javascript
const formData = new FormData

formData.append('name', name.value)
formData.append('file', inputFile.value.files[0])

axios.post('/uploads', formData)
```

## Sumber

https://axios-http.com/docs/multipart