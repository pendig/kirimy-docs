---
id: setup-blasting
title: Setup Blasting Pertama
sidebar_position: 3
---

Fitur **Blasting** di Kirimy memungkinkan kamu mengirim pesan WhatsApp secara massal ke banyak kontak sekaligus, seperti promosi, pengumuman, atau notifikasi.

---

## 1. Upload Kontak Penerima

Sebelum mulai blasting, kamu harus menambahkan daftar kontak terlebih dahulu.

1. Masuk ke menu **Blasting > Contacts** atau buka: [https://app.kirimy.id/contacts](https://app.kirimy.id/contacts)
2. Klik tombol **Import Contact**.
3. Isi form:
   - **Contact Category Name** (wajib diisi, digunakan untuk mengelompokkan kontak)
4. Klik **Download Template CSV**.
5. Edit file tersebut dan isi kolom berikut:

   - `name` → Nama penerima (wajib)
   - `wa` → Nomor WhatsApp dalam format internasional (wajib, contoh: 6281234567890)
   - Kolom tambahan (opsional) → Bebas selama huruf kecil semua, tanpa spasi. Contoh:
     - `company`
     - `address`

6. Upload kembali file CSV yang sudah diisi ke form import.
7. Setelah berhasil, kontak akan muncul di daftar.

![Import Kontak](/img/import-contact.png)

---

## 2. Buat Template Pesan

1. Masuk ke menu **Template Blast** atau langsung buka: [https://app.kirimy.id/message-templates/create](https://app.kirimy.id/message-templates/create)
2. Klik tombol **Add New** jika dari halaman daftar template.
3. Isi form:

   - **Template Name** (wajib)
   - **Template Format** (wajib)
   - **Upload Image** (opsional, jika ingin kirim pesan dengan gambar)

4. Untuk kolom **Template Format**, kamu bisa menggunakan teks biasa atau dibantu oleh AI Kirimy.

   - Format mendukung penggunaan **variabel** seperti `{{name}}`, `{{company}}`
   - Bisa menggunakan fungsi `random()` untuk memilih kata/kalimat secara acak

5. Contoh Template Format:

```
🚨 {{ random("Pemberitahuan", "Info Penting", "Pengumuman") }} 🚨

✨ Hai {{ name }}! ✨

Kami ingin menginformasikan bahwa pada tanggal 12 Mei 2025, kita akan merayakan {{ random("Hari Raya Waisak", "Waisak", "Hari yang penuh berkah") }} 🌼

Dan jangan lupa, tanggal 13 Mei 2025 adalah {{ random("Cuti Bersama", "Hari Libur", "Hari Istirahat") }} 🏖️

Semoga kalian semua bisa menikmati momen berharga ini! 🎉

Tetap semangat dan selamat berlibur! 🌈
```

6. Setelah selesai, klik **Simpan Template**.

![Form Template Blast](/img/template-blast.png)

---

## 3. Kirim Blasting

1. Masuk ke menu **Blasting**.
2. Klik **Create Blast**.
3. Pilih:
   - **Session** (akun WhatsApp yang aktif)
   - **Template** yang sudah dibuat
   - **Kategori Kontak** (hasil dari proses upload tadi)
4. Klik **Send**.

<!-- ![Form Blasting](/img/create-blast.png) -->

---

## 4. Cek Laporan Pengiriman

1. Buka menu **Blast Report**.
2. Lihat status pengiriman:
   - Success
   - Failed
   - Pending

<!-- ![Laporan Blast](/img/blast-report.png) -->

---

## Tips Penggunaan

- Gunakan kata-kata yang sopan dan tidak terindikasi spam.
- Hindari mengirim ke nomor acak yang tidak mengenal bisnis kamu.
- Uji coba dulu kirim ke beberapa nomor sebelum mengirim massal.

---

Fitur Blasting sangat cocok untuk mengirim promo, pengingat, atau info penting ke pelanggan secara otomatis dan terukur.
