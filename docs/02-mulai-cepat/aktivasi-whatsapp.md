---
id: aktivasi-whatsapp
title: Aktivasi WhatsApp
sidebar_position: 2
---

Sebelum menggunakan fitur utama Kirimy, kamu perlu menghubungkan akun WhatsApp kamu melalui proses aktivasi session.

---

## 1. Membuat Session Baru

1. Login ke dashboard Kirimy: [https://app.kirimy.id](https://app.kirimy.id)
2. Akses menu **Session** atau langsung buka: [https://app.kirimy.id/sessions](https://app.kirimy.id/sessions)
3. Klik tombol **Create Session**.
4. Akan muncul modal seperti ini:

![Form Create Session](/img/create-session.png)

5. Isi data berikut:
   - **Session Name** (wajib diisi)
   - **Webhook URL** (opsional, untuk menerima data dari WhatsApp ke sistem kamu)
6. Klik **Save Session**.

---

## 2. Menghubungkan WhatsApp

Setelah session berhasil dibuat, kamu akan melihat data baru di tabel session.

1. Di kolom **Status**, klik icon **QR Code** pada baris session yang baru dibuat:

![Tabel Session & QR Code](/img/qr-icon-session.png)

2. Kirimy akan menampilkan kode QR.
3. Buka aplikasi WhatsApp di HP kamu.
4. Arahkan ke:
   - **Menu > Perangkat Tertaut > Tautkan Perangkat**
5. Scan QR code yang muncul di Kirimy.

---

## 3. Verifikasi Koneksi

- Setelah scan berhasil, tunggu beberapa detik.
- Refresh halaman **Sessions** untuk melihat status session berubah menjadi **Connected** atau aktif.
- Jika sudah terhubung, akun WhatsApp kamu siap digunakan untuk Blasting, Auto Reply, dan AI Agent.

---

## Troubleshooting

- QR Code tidak muncul: coba refresh halaman atau clear cache browser.
- Gagal koneksi: pastikan koneksi internet di perangkat kamu stabil.
- Scan gagal: coba logout dari semua perangkat tertaut di WhatsApp dan ulangi proses.

---

> Setiap akun Kirimy bisa memiliki lebih dari satu session tergantung paket yang digunakan.
