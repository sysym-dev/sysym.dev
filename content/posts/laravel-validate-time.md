---
title: Cara Validasi Jam Di Request Laravel
tags: [laravel]
date: 2024-12-07 09:30:00 +0700
images:
- /images/posts/laravel-validate-time/thumbnail.jpg
---

Untuk memvalidasi jam di request laravel, gunakan rule `date_format` dengan nilai `H:i`. Contoh.

<!--more-->

```php
public function store(Request $request) {
    $request->validate([
        'start_time' => ['required', 'date_format:H:i']
    ]);
}
```

Contoh error ketika `start_time` nya nilainya bukan jam.

```bash
curl -X POST http://localhost:8000/api/test \
        -H "Content-Type: application/json" \
        -H "Accept: application/json" \
        -d '{"start_time":"2024-10-10 21:30"}'
```

```json
{
    "message": "The start time field must match the format H:i.",
    "errors": {
        "start_time": ["The start time field must match the format H:i."]
    }
}
```

Bisa juga ditambahkan rule validasi lain untuk date, misal rule `after` untuk memastikan nilai jamnya melebihi jam tertentu.

```php
public function store(Request $request) {
    $request->validate([
        'start_time' => ['required', 'date_format:H:i'],
        'end_time' => ['required', 'date_format:H:i', 'after:start_time']
    ]);
}
```

Contoh error ketika `end_time` nya kurang dari `start_time`.

```bash
curl -X POST http://localhost:8000/api/test \
        -H "Content-Type: application/json" \
        -H "Accept: application/json" \
        -d '{"start_time":"21:30", "end_time":"21:00"}'
```

```json
{
    "message": "The end time field must be a date after start time.",
    "errors": {
        "end_time":["The end time field must be a date after start time."]
    }
}
```