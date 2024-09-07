---
title: Melanjutkan Nomor Urut Iterasi di Halaman Selanjutnya Pada Pagination
tags: [vue, javascript]
date: 2023-11-11 10:30:00 +0700
---

*Pagination* adalah cara menampilkan data yang banyak menjadi per halaman. Misal datanya berjumlah 100, dengan pagination data bisa dibagi jadi 10 halaman, setiap halaman menampilkan 10 data.

<!--more-->

Saat menampilkan data dengan iterasi, setiap iterasi dapat ditampilkan nomor urutnya. Cara yang biasanya digunakan adalah dengan `index + 1`. Contoh.

```vue
<tr>
    <th>No</th>
    <th>Nama</th>
</tr>
<tr v-for="(index, product) in products.rows">
    <td>{{ index + 1 }}</td>
    <td>{{ product.name }}</td>
</tr>
```

Ketika berganti halaman akan muncul masalah, no urut akan direset menjadi dari 1, padahal seharusnya no urut dilanjutkan dari halaman sebelumnya.

Untuk mengatasinya, perhitungan no urut perlu diubah menjadi:

```javascript
perPage * (currentPage - 1) + index + 1`
```

- `perPage` adalah jumlah data yang ditampilkan di setiap halaman
- `currentPage` adalah halaman saat ini
- `index` adalah index iterasi

Setelah diimplementasikan pada kode sebelumnya.

```vue
<tr>
    <th>No</th>
    <th>Nama</th>T
</tr>
<tr v-for="(index, product) in products.rows">
    <td>{{ products.meta.perPage * (products.meta.currentPage - 1) + index + 1 }}
    <td>{{ product.name }}
</tr>
```

Hasilnya, nomor urut akan tetap berlanjut di halaman berikutnya.