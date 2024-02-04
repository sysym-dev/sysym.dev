---
title: Menambahkan Progress Bar di Laravel Database Seeder
tags: [laravel]
date: 2024-02-04 15:00:00 +0700
images:
- /images/posts/laravel-seeder-progress-bar/thumbnail.jpg
---

Laravel menyediakan fitur progress bar yang dapat menampilkan progres dari apa yang sedang dilakukan dalam bentuk bar.

<!--more-->

Biasanya progress bar dilakukan di artisan command.

Di database seeder juga bisa ditambahkan progress bar melalui `$this->command->getOutput()`. Progress bar tersebut bisa dimanipulasi dengan 3 method:

- `progressStart` untuk membuat dan memulai progress bar
- `progressAdvance` untuk menambahkan bar pada progres
- `progressFinish` untuk mengakhiri progres 

Contoh, berikut seeder laravel yang akan membuat 100 user dari factory. Akan ada progress bar yang akan bertambah setiap 1 user disimpan.

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Symfony\Component\Console\Output\ConsoleOutput;
use Symfony\Component\Console\Helper\ProgressBar;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $amount = 100;

        $this->command->getOutput()->progressStart($amount);

        User::factory($amount)->make()->each(function ($user) {
            $this->command->getOutput()->progressAdvance();

            $user->save();

            sleep(1);
        });

        $this->command->getOutput()->progressFinish();
    }
}
```

Di `progressStart`, bisa dimasukkan angka untuk mengatur maksimal dari progress bar.

Di `progressAdvance`, bisa dimasukkan angka untuk berapa bar yang akan ditambahkan, default 1.

## Sumber

- https://gist.github.com/brifiction/38eeac1be6107844fa9c98627a2ebcbb