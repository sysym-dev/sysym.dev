---
title: MySql Trigger Ketika Ada Kolom Yang Diperbarui
tags: [mysql]
date: 2023-08-10 18:00:00 +0700
---

Trigger adalah objek berisi statement SQL yang otomatis dijalankan pada event terentu yang terjadi pada suatu tabel.

<!--more-->

Salah satu event yang bisa menjalankan trigger adalah `UPDATE`, yakni event yang terjadi ketika ada perubahan data pada row tabel.

Trigger `UPDATE` tidak bisa didefinisikan berdasarkan perubahan pada kolom tabel tertentu, trigger `UPDATE` hanya bisa didefinisikan berdasarkan perubahan pada tabelnya saja.

Cara untuk menangkap perubahan nilai suatu kolom, kita bisa menambahkan kondisional yang mengecek apakah suatu kolom diperbarui atau tidak, pada trigger `UPDATE` suatu tabel.

Implementasinya, buat trigger `UPDATE` pada tabel, kemudian di dalam trigernya tambahkan `IF` yang membandingkan nilai kolom yang lama dengan nilai kolom yang baru, jika tidak sama artinya terjadi perubahan pada kolom tersebut.

Contoh implementasi trigger-nya.

```sql
DELIMITER $$
CREATE TRIGGER orders_updated
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN
    IF !(NEW.is_valid_for_payment <=> OLD.is_valid_for_payment) THEN
        CALL do_something(orders) -- statement untuk menghandle trigger
    END IF;
END $$
DELIMITER ;
```

Pada contoh diatas saya ingin menangkap setiap perubahan pada kolom `is_valid_for_payment` pada tabel `orders`.

Ketika ada perubahan pada kolom `is_valid_for_payment` trigger akan memanggil procedure `do_something`.

## Referensi

- https://stackoverflow.com/questions/19152974/fire-a-trigger-after-the-update-of-specific-columns-in-mysql