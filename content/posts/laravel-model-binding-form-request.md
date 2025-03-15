---
title: Cara Mengakses Model Binding di Laravel Form Request
tags: [laravel]
date: 2025-03-15 23:01:00 +0700
images:
- /images/posts/laravel-model-binding-form-request/thumbnail.jpg
---

Model Binding adalah cara otomatis untuk mendapatkan instance model berdasarkan parameter route. Instance model tersebut dapat langsung digunakan di controller.

<!--more-->

Untuk menggunakannya di Form Request, cukup gunakan `$this->{parameter-model-binding}`.

Contoh:

```php
<?php

// routes/api.php
Route::patch('/orders/{order}', [OrderController::class, 'update']);

// app/Http/Requests/Order/UpdateOrderRequest.php
class UpdateOrderRequest extends FormRequest {
    public function authorize() {
        // akses model binding
        return $this->order->user_id === $this->user()->id;
    }
}
```

Cara lain, gunakan method `route` dengan nama parameter model binding pada route. Method ini akan mengembalikan instance model tersebut.

Contoh:

```php
<?php

// routes/api.php
Route::patch('/orders/{order}', [OrderController::class, 'update']);

// app/Http/Requests/Order/UpdateOrderRequest.php
class UpdateOrderRequest extends FormRequest {
    public function authorize() {
        // akses model binding
        return $this->route('order')->user_id === $this->user()->id;
    }
}
```