---
title: Typeorm Kolom created_at dan updated_at Pada Entity
tags: [typeorm]
date: 2023-09-09 07:00:00 +0700
---

Typeorm memiliki 4 spesial kolom yang bisa digunakan pada entity, di antaranya adalah `CreateDateColumn` dan `UpdateDateColumn`.

<!--more-->

`CreateDateColumn` digunakan untuk membuat kolom yang nilainya adalah waktu kapan sebuah record ditambahkan.

`UpdateDateColumn` digunakan untuk membuat kolom yang nilainya adalah waktu kapan sebuah record terakhir diperbarui.

Contoh.

```ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from  'typeorm'

@Entity()
export  class  User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
```

Misal nama kolom di databasenya ingin diubah menjadi yang lain.

```ts
@CreateDateColumn({ name: 'createdAt' })
created_at: Date;

@UpdateDateColumn({ name: 'updtedAt' })
updated_at: Date;
```