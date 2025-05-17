---
id: schedule-and-interval
title: Jadwal & Interval Pengiriman
sidebar_position: 2
---

# Jadwal & Interval Pengiriman

![Pengaturan Jadwal & Interval](/img/screenshots/schedule-interval-options.png)

Kirimy menyediakan dua metode pengaturan interval antar pesan:

## 1. Interval Acak

- Pilih **Interval Min** dan **Interval Max**
- Pesan akan dikirim dengan jeda acak di antara dua angka tersebut
- Contoh: jika 5–10 detik, maka pengiriman akan bervariasi antara 5–10 detik/pesan

## 2. Trigger Interval (Cron)

Jika **Custom Interval** dicentang, Anda bisa memilih:

- **Ask AI**: biarkan AI menyarankan pola
- **Every Minute**, **Every 5 Minutes**, **Every Hour**, dll.
- **Custom**: masukkan cron expression sendiri

## Enable Schedule

Aktifkan **Enable Schedule** jika ingin blasting dimulai otomatis di waktu tertentu.

> 🕒 Pengaturan interval sangat penting untuk menghindari deteksi spam oleh WhatsApp.
