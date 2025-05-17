---
id: import-contact
title: Impor Kontak
sidebar_position: 2
---

# Impor Kontak

![Impor Kontak](/img/screenshots/import-contact-modal.png)

Untuk menambahkan kontak ke Kirimy, Anda perlu mengunggah file `.csv` dengan format yang telah ditentukan.

## Langkah Impor:

1. Klik tombol **Import Contacts** di halaman Contacts.
2. Isi **Contact Category Name**, misalnya: "Customer Baru".
3. Unggah file `.csv` yang berisi daftar kontak.
4. Klik **Start Importing Contacts** untuk memulai proses.

## Format CSV yang Didukung

File `.csv` harus memiliki **header** dengan kolom berikut:

| Kolom     | Wajib? | Deskripsi                                                              |
| --------- | ------ | ---------------------------------------------------------------------- |
| `wa`      | ✅     | Nomor WhatsApp, gunakan format internasional (contoh: `6281234567890`) |
| `name`    | ✅     | Nama kontak                                                            |
| `company` | ❌     | (Opsional) Nama perusahaan                                             |
| `address` | ❌     | (Opsional) Alamat                                                      |

Anda dapat menambahkan kolom lain untuk digunakan sebagai variabel di template pesan.

## Contoh Template CSV

Unduh contoh file CSV: [contact-upload-template.csv](https://app.kirimy.id/contact-upload-template.csv)

> ⚠️ Pastikan nomor WhatsApp diawali dengan kode negara (tanpa tanda + atau spasi).
