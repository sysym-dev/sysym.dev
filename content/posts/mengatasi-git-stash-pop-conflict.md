---
title: Cara Mengatasi Conflict Ketika Git Stash Pop
tags: [git]
date: 2024-10-18 18:40:00 +0700
images:
- /images/posts/git-stash-pop-abort/thumbnail.jpg
---

`git stash pop` adalah perintah git untuk mengaplikasikan perubahan pada stash terbaru dan menghapus stash tersebut dari daftar stash.

<!--more-->

Perintah ini bisa saja memunculkan `conflict`. Contoh:

```bash
$ git stash pop
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
On branch fix
Unmerged paths:
  (use "git restore --staged <file>..." to unstage)
  (use "git add <file>..." to mark resolution)
	both modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
The stash entry is kept in case you need it again.
```

Untuk mengatasinya jalankan perintah `git reset --merge`. Perintah ini akan membatalakan aplikasi stash sebelumnya dan mengembalikan stash tersebut ke daftar stash.

```bash
$ git reset --merge
```

Dengan begini, conflict berhasil diatasi.

```bash
$ git status
On branch fix
nothing to commit, working tree clean
```

> Perintah `git reset --merge` juga akan menghapus perubahan yang ada di fase `staged`.

Sumber : https://stackoverflow.com/questions/8515729/how-to-abort-a-stash-pop