---
title: Cara Substitusi Variabel di Bash
tags: [bash]
date: 2024-02-13 10:00:00 +0700
images:
- /images/posts/variable-substitution-bash/thumbnail.jpg
---

Substitusi variabel adalah cara untuk mereferensikan sebuah variabel untuk digunakan nilainya di operasi / perintah tertentu.

<!--more-->

Di Bash, caranya dengan menambahkan `$` diawal nama variabel. Contoh.

```bash
NAME=abdul
echo $NAME # abdul
```

Lebih dari satu variabel juga bisa digabungkan sekaligus.

```bash
PREFIX=only
SUFFIX=test

echo $PREFIX$SUFFIX # onlytest
```

Substitusi variabel juga bisa dilakukan di dalam string.

```bash
AGE=14
echo My age is $AGE # My age is 14
```

Atau di dalam petik dua `""`.

```bash
LOCATION=Jakarta
echo "I'm in $LOCATION" # I'm in Jakarta
```

Harus petik dua `""`, jika petik satu `''` tidak akan berhasil

```bash
FOOD=rice
echo '$FOOD is nice' # $FOOD is nice
```

Jika variabel akan digabungkan dengan karakter lain tanpa pemisah, maka variabel harus dimasukan ke dalam kurung kurawal `{}`, jika tidak maka substitusi variabel tidak akan berhasil.

```bash
ORGAN=Nose
echo "My${ORGAN}isverybig" # MyNoseisverybig
echo "My$ORGANisverybig" # My
```

## Sumber

- https://tldp.org/LDP/abs/html/varsubn.html
- https://github.com/ibrahimalanshor/learn-bash/tree/master/variable-substitution