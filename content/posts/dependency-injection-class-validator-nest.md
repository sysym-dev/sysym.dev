---
title: Class Validator Dependency Injection di Nest Js
tags: [nest]
date: 2023-09-06 03:00:00 +0700
---

Pada saat menggunakan class validator dengan nest, terkadang saya membutuhkan dependency injection dari module / service lain.

<!--more-->

Misalnya saya ingin membuat custom validation constraint untuk mengecek sebuah email apakah sudah ada di database atau belum.

Di class custom validation nantinya akan men-*inject* service pada module `users` untuk melakukan query ke database.

Berikut langkah-langkahnya.

## Menambahkan Service Container Nest Ke Class Validator

Pertama yang harus dilakukan adalah menambahkan service container pada aplikasi nest ke class validator agar class validator dapat melakukan inject dependency.

Buka file `src/main.ts`, kemudian panggil `useContainer` yang disediakan class validator di fungsi `bootstrap`.

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  await app.listen(3000);
}
bootstrap();
```

## Menggunakan Dependency Injection di Class Validator

Misalnya disini saya membuat custom validator constraint menggunakan class yang di *constructor*-nya menginject user service.

```ts
import { Injectable } from "@nestjs/common";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsersService } from "src/modules/feature/users/users.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueEmailConstraint implements ValidatorConstraintInterface {
    constructor(private userService: UsersService) {}

    async validate(email: any): Promise<boolean> {
        return !(await this.userService.exists({ filter: {
            email
        } }))
    }

    defaultMessage(): string {
        return 'Email already exists'
    }
}
```

Kemudian custom validator constraint di atas saya register ke decorator.

```ts
import { ValidationOptions, registerDecorator } from "class-validator";
import { IsUniqueEmailConstraint } from './is-unique-email.constraint'

export function IsUniqueEmail(validationOptions?: ValidationOptions) {
    return function (obj: Object, propertyName: string) {
        registerDecorator({
            target: obj.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsUniqueEmailConstraint
        })
    }
}
```

## Menambahkan Custom Validator Constraint Ke Module Provider

Kemudian custom validator constraint diatas perlu ditambahkan ke module provider agar bisa diinject *dependency*-nya.

```ts
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { IsUniqueEmailConstraint } from './dto/validator/is-unique-email.constraint';

@Module({
  providers: [UserService, IsUniqueEmailConstraint],
  controllers: [UserController]
})
export class UserModule {}
```

## Menggunakan Custom Validator Constraint

Langkah terakhir tinggal menggunakan custom validator constraint decorator pada dto yang membutuhkan.

```ts
import { IsDefined, IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { IsUniqueEmail } from "./validator/unique-email.validator";

export class CreateUserDto {
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @IsUniqueEmail()
    email: string

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    name: string

    @IsDefined()
    @IsString()
    @Length(6, 16)
    password: string
}
```

## Sumber

- [https://github.com/nestjs/nest/issues/528#issuecomment-395338798](https://github.com/nestjs/nest/issues/528#issuecomment-395338798)
- [https://github.com/typestack/class-validator#using-service-container](https://github.com/typestack/class-validator#using-service-container)