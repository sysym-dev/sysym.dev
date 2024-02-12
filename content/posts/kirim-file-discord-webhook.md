---
title: Cara Mengirimkan File Menggunakan Discord Webhook
tags: [discord]
date: 2024-02-12 19:30:00 +0700
images:
- /images/posts/discord-webhook-send-file/thumbnail.jpg
---

Mengirim file menggunakan discord webhook bisa dilakukan seperti mengupload file pada umumnya, yaitu dengan menambahkan header `Content-Type: multipart/form-data`.

<!--more-->

File yang akan dikirim dimasukan ke parameter `file[n]`. `n` berupa angka sebagai index file nya. Beberapa file dapat diupload sekaligus.

Contoh menggunakan `cURL`

```bash
DISCORD_URL=https://discordapp.com/api/webhooks/xxx/xxx

curl -F files1=@gambar1.png \
    -F files2=@gambar2.png \
    $DISCORD_URL
```

Jika ingin menambahkan parameter lain seperti `username`, `content`, dsb. Bisa ditambahkan di parameter `payload_json`.

```bash
DISCORD_URL=https://discordapp.com/api/webhooks/xxx/xxx

curl -F files1=@gambar1.png \
    -F files2=@gambar2.png \
    -F 'payload_json={"username": "abdul", "content": "halo"}' \
    $DISCORD_URL
```

Gambar yang diupload juga bisa dijadikan sebagai `embed` dari pesan yang dikirim dengan menambahkan parameter `embeds` yang isinya gambar yang akan diembed dengan syntax `attachment://filename.png`.

```bash
DISCORD_URL=https://discordapp.com/api/webhooks/xxx/xxx

curl -F files1=@gambar1.png \
    -F files2=@gambar2.png \
    -F 'payload_json={"username": "abdul", "content": "halo", "embeds": [{"image": {"url": "attachment://gambar1.png"}}]}' \
    $DISCORD_URL
```

## Sumber

- https://discord.com/developers/docs/reference#uploading-files
- https://birdie0.github.io/discord-webhooks-guide/tools/curl.html