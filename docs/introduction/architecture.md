---
id: architecture
title: Arsitektur Sistem
sidebar_position: 3
---

# Arsitektur Sistem Kirimy

Kirimy dirancang dengan arsitektur modular berbasis cloud untuk memastikan skalabilitas, kecepatan, dan keamanan.

## Komponen Utama:

- **Frontend Web App:**  
  Dibangun dengan React dan Tailwind CSS, digunakan oleh pengguna untuk login, mengelola session, kontak, pesan, dan fitur lainnya.

- **Backend API Service:**  
  Menggunakan Node.js/NestJS, menyajikan endpoint untuk seluruh fungsionalitas termasuk blasting, session, AI agent, dan laporan.

- **Database:**  
  Data disimpan di PostgreSQL dan dikontrol dengan sistem autentikasi berbasis JWT serta role-based access.

- **AI & Automation:**  
  Kirimy terhubung dengan AI engine eksternal (seperti OpenAI) untuk fitur auto-reply dan template generator.

- **WhatsApp Gateway:**  
  Sistem kirim/terima pesan dari WhatsApp dilakukan melalui sesi (session) QR yang terkoneksi langsung dengan WhatsApp Web melalui library resmi/non-resmi.

- **Storage & Log:**  
  File, log pesan, dan knowledge PDF disimpan menggunakan sistem file lokal atau cloud seperti AWS S3.

> Semua koneksi diamankan melalui HTTPS dan token bearer untuk menjaga kerahasiaan data dan integritas komunikasi.
